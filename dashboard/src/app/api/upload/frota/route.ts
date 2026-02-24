import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Parse XLSX
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Converte para JSON bidimensional
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

        if (rows.length < 2) {
            return NextResponse.json({ error: "Planilha vazia" }, { status: 400 });
        }

        let veiculosAdded = 0;
        const opmsAfetadas = new Set<string>();

        await prisma.$transaction(async (tx) => {
            // Deletar os veiculos antigos para colocar a nova "foto" atualizada da frota
            // ATENÇÃO: Isso reseta a tabela de Veículos
            await tx.veiculo.deleteMany({});

            // Itera a partir da linha 2 (índice 1) ignorando o cabeçalho
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];

                // Garantir que a linha tenha algo válido (ex: placa)
                const placa = String(row[1] || "").trim(); // Coluna B
                if (!placa) continue;

                const patrimonio = String(row[0] || "").trim(); // Coluna A
                const marcaModelo = String(row[2] || "").trim(); // Coluna C
                const ano = parseInt(String(row[3] || "0"), 10); // Coluna D

                const grupo = String(row[5] || "").trim(); // Coluna F
                const programa = String(row[6] || "").trim(); // Coluna G
                const prefixo = String(row[7] || "").trim(); // Coluna H

                const situacao = String(row[25] || "").trim(); // Coluna Z (SITUAÇÃO)

                // Usuário pediu para ignorar viaturas em descarga
                if (situacao.toUpperCase() === "DESCARGA") continue;

                const codigoOpm = String(row[12] || "").trim(); // Coluna M = índice 12
                const grdCmd = String(row[13] || "").trim(); // Coluna N = índice 13 (Grandes Comandos)
                let nomeOpm = String(row[14] || "").trim(); // Coluna O = índice 14
                const municipioOp = String(row[22] || "").trim(); // Coluna W = índice 22

                if (!codigoOpm || codigoOpm === "undefined") continue;

                opmsAfetadas.add(codigoOpm); // Using opmsAfetadas as declared

                if (!nomeOpm) {
                    nomeOpm = grdCmd || "OPM DESCONHECIDA";
                }

                const updateData: any = {};
                if (municipioOp) updateData.municipio = municipioOp;
                if (nomeOpm && nomeOpm !== "OPM DESCONHECIDA") updateData.nome = nomeOpm;

                // Upsert minimalista da OPM (Frota pode não ter todas, mas criamos se não houver)
                await tx.opm.upsert({
                    where: { codigo: codigoOpm },
                    update: updateData,
                    create: { codigo: codigoOpm, nome: nomeOpm || "Desconhecido", municipio: municipioOp }
                });

                await tx.veiculo.create({
                    data: {
                        patrimonio,
                        placa,
                        marcaModelo,
                        ano,
                        grupo,
                        programa,
                        prefixo,
                        situacao,
                        opmCodigo: codigoOpm
                    }
                });

                veiculosAdded++;
            }
        }, { timeout: 60000 }); // timeout alto para grande volume de veículos

        return NextResponse.json({
            success: true,
            veiculosCount: veiculosAdded,
            opmsCount: opmsAfetadas.size
        });

    } catch (error: any) {
        console.error("Erro no Upload Frota:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
