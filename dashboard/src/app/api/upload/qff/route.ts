import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files") as File[];

        if (!files || files.length === 0) {
            return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
        }

        let metasAddedCount = 0;
        let opmsAffected = new Set<string>();

        // Vamos rodar uma grande transação no banco de dados
        await prisma.$transaction(async (tx) => {

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                // Parse XLSX
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                // Extrai o nome limpo do comando a partir do arquivo (ex: qff_cpi_3.xlsx -> CPI 3)
                const fileName = file.name || "";
                const macroComando = fileName
                    .replace(/qff_/i, "")   // remove "qff_"
                    .replace(/\.xlsx/i, "") // remove ".xlsx"
                    .replace(/\.xls/i, "")  // remove ".xls"
                    .replace(/_/g, " ")     // troca "_" por espaço (ex: cpi_3 -> cpi 3)
                    .toUpperCase();         // CPI 3

                // Converte para JSON bidimensional (array de arrays) para pegar colunas por index
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

                if (rows.length < 3) continue; // Pula planilhas inválidas ou vazias

                // Linha 1 = Grupos (0-indexed = índice 0)
                // Linha 2 = Programas (índice 1)
                const grupoRow = rows[0];
                const pgmRow = rows[1];

                // Preencher células mescladas onde o Grupo fica vazio nas próximas colunas
                let currentGroup = "";
                for (let c = 6; c <= 47; c++) {
                    const cellValue = String(grupoRow[c] || "").trim();
                    if (cellValue) {
                        currentGroup = cellValue;
                    } else if (currentGroup) {
                        grupoRow[c] = currentGroup;
                    }
                }

                // Começa da linha 3 (índice 2) onde começam as OPMs
                let currentMunicipio = "";
                let currentOpmName = "";

                for (let i = 2; i < rows.length; i++) {
                    const row = rows[i];

                    // Memória vertical para Células Mescladas do Excel (onde apenas a primeira linha tem o valor)
                    if (row[0] && String(row[0]).trim()) currentMunicipio = String(row[0]).trim();
                    if (row[2] && String(row[2]).trim()) currentOpmName = String(row[2]).trim();

                    const codigoOpm = String(row[5] || "").trim(); // Coluna F = índice 5

                    if (!codigoOpm || codigoOpm.toLowerCase() === "total" || codigoOpm === "undefined") continue;

                    const nomeOpm = currentOpmName;
                    const municipio = currentMunicipio;

                    const updateData: any = { macroComando };
                    if (nomeOpm) updateData.nome = nomeOpm;
                    if (municipio) updateData.municipio = municipio;

                    // Upsert na OPM preservando dados anteriores em caso de campos vazios
                    await tx.opm.upsert({
                        where: { codigo: codigoOpm },
                        update: updateData,
                        create: {
                            codigo: codigoOpm,
                            nome: nomeOpm || municipio || macroComando || "Desconhecido",
                            municipio,
                            macroComando
                        },
                    });
                    opmsAffected.add(codigoOpm);

                    // Colunas de G (índice 6) a AV (índice 47)
                    for (let col = 6; col <= 47; col++) {
                        const qtd = row[col];

                        // Se a célula estiver vazia ou for zero, ignoramos para não sujar o banco
                        if (qtd === undefined || qtd === null || qtd === "") continue;

                        const quantidadeFixada = parseInt(String(qtd), 10);
                        if (isNaN(quantidadeFixada) || quantidadeFixada <= 0) continue;

                        let grupo = String(grupoRow[col] || "").trim() || "Sem Grupo";
                        let programa = String(pgmRow[col] || "").trim() || "Sem Programa";

                        // Normalização de Programas Divergentes (QFF vs Frota)
                        const pgmMap: Record<string, string> = {
                            "TRANSPORTE PESSOAL": "T PESSOAL",
                            "RURAL": "PATR RURAL",
                            "TRANSPORTE FUNCIONAL": "FUNCIONAL",
                            "TRANSPORTE MISTO": "T MISTO",
                            "MOTO ESTAFETA": "ESTAFETA",
                            "TRANSPORTE DE ENFERMOS": "T ENFERMO",
                            "TRANSPORTE CARGA SECA": "T CARGA SECA",
                            "TRANSPORTE COL MICRO": "MICROONIBUS",
                            "TRANSPORTE COLETIVO": "ONIBUS",
                            "CAMINHÃO TANQUE": "CAM TANQUE",
                            "APOIO OPERACIONAL": "APOIO OPERAC",
                            "COP": "COORD OP",
                            "COM": "COMUNITARIO",
                            "CDIST": "COM DIST",
                            "RP Rv Est": "RP",
                            "APOIO B OP": "APOIO OPERAC",
                            "VEÍCULOS ESPECIAIS": "VEIC ESPECIAL",
                            "RESERVA": "ROCAM"
                        };

                        if (pgmMap[programa.toUpperCase()]) {
                            programa = pgmMap[programa.toUpperCase()];
                        }

                        // Normaliza o Grupo removendo o prefixo 'Gp ' para bater com a Frota que só tem números
                        grupo = grupo.replace(/^Gp\s+/i, "").trim();

                        if (grupo.toLowerCase().includes("total") || programa.toLowerCase().includes("total")) continue;

                        // Upsert da Meta (QffMeta)
                        await tx.qffMeta.upsert({
                            where: {
                                opmCodigo_grupo_programa: {
                                    opmCodigo: codigoOpm,
                                    grupo,
                                    programa
                                }
                            },
                            update: { quantidadeFixada },
                            create: {
                                opmCodigo: codigoOpm,
                                grupo,
                                programa,
                                quantidadeFixada
                            }
                        });
                        metasAddedCount++;
                    }
                }
            } // Fim do loop de arquivos
        }, { timeout: 120000 }); // timeout aumentado muito para suportar 28 planilhas de uma vez

        return NextResponse.json({
            success: true,
            metasCount: metasAddedCount,
            opmsCount: opmsAffected.size
        });

    } catch (error: any) {
        console.error("Erro no Upload QFF:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
