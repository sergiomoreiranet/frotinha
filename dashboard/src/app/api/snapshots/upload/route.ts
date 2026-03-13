import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const mesReferencia = formData.get("mesReferencia") as string;

        if (!file || !mesReferencia) {
            return NextResponse.json({ error: "Arquivo ou mês de referência ausentes" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Removendo "header: 1" para fazer parse como Array de Objetos em vez de Array[][]
        const rawObjRows = XLSX.utils.sheet_to_json(sheet) as any[];

        if (rawObjRows.length < 2) {
            return NextResponse.json({ error: "Planilha vazia" }, { status: 400 });
        }

        const veiculosToCreate: any[] = [];
        const opmsToUpsert = new Map<string, any>();

        for (let i = 0; i < rawObjRows.length; i++) {
            const row = rawObjRows[i];

            // Os nomes das colunas acabam virando "__EMPTY_X" porque a primeira linha da planilha tem campos em branco.
            // Pelo teste que rodamos, os índices mapeados são esses:
            // __EMPTY_5: Placa , __EMPTY_14: Model , __EMPTY_12: Ano , __EMPTY_20: Patrimônio
            // __EMPTY_22: Grp , __EMPTY_24: Conv , __EMPTY_27: Prefixo , __EMPTY_29: Cod OPM
            // __EMPTY_31: OPM , __EMPTY_34: Município

            // Mas para garantir compatibilidade com as duas planilhas, vamos buscar dinamicamente 
            // no objeto caso a ordem varie ou usar a referência estática encontrada:

            const placa = String(row['__EMPTY_5'] || "").trim();
            const patrimonio = String(row['__EMPTY_20'] || "").trim();
            const marcaModelo = String(row['__EMPTY_14'] || "").trim();
            const anoStr = String(row['__EMPTY_12'] || "");
            const ano = (anoStr !== "undefined" && anoStr !== "") ? parseInt(anoStr, 10) : null;

            const grupo = String(row['__EMPTY_22'] || "").trim();
            const programa = String(row['__EMPTY_24'] || "").trim();
            const prefixo = String(row['__EMPTY_27'] || "").trim();

            // A situação de 'DESCARGA' / 'RESERVA' não tem header explícito, mas geralmente é a última coluna com string (ex: __EMPTY_42 ou adjacentes)
            // Analisando, a coluna descritiva de situação costuma ficar no final, podemos procurar nos values do objeto.
            const situacaoValue = Object.values(row).find((v: any) =>
                typeof v === 'string' && (v.toUpperCase() === 'DESCARGA' || v.toUpperCase() === 'RESERVA')
            ) as string | undefined;

            const situacao = situacaoValue || "";

            if (!patrimonio || patrimonio === "undefined" || patrimonio === "-") continue;

            const codigoOpm = String(row['__EMPTY_29'] || "").trim();
            let nomeOpm = String(row['__EMPTY_31'] || "").trim();
            const municipioOp = String(row['__EMPTY_34'] || "").trim();

            if (!codigoOpm || codigoOpm === "undefined" || codigoOpm === "-") continue;

            if (!nomeOpm || nomeOpm === "-") {
                nomeOpm = "OPM DESCONHECIDA";
            }

            if (!opmsToUpsert.has(codigoOpm)) {
                opmsToUpsert.set(codigoOpm, {
                    where: { codigo: codigoOpm },
                    create: { codigo: codigoOpm, nome: nomeOpm, municipio: municipioOp !== "-" ? municipioOp : null },
                    update: { nome: nomeOpm, municipio: municipioOp !== "-" ? municipioOp : null }
                });
            }

            veiculosToCreate.push({
                mesReferencia,
                patrimonio,
                placa: placa !== "undefined" && placa !== "-" ? placa : null,
                marcaModelo: marcaModelo !== "undefined" && marcaModelo !== "-" ? marcaModelo : null,
                ano: isNaN(ano as number) ? null : ano,
                grupo: grupo !== "undefined" && grupo !== "-" ? grupo : null,
                programa: programa !== "undefined" && programa !== "-" ? programa : null,
                prefixo: prefixo !== "undefined" && prefixo !== "-" ? prefixo : null,
                situacao: situacao !== "undefined" && situacao !== "-" ? situacao : null,
                opmCodigo: codigoOpm
            });
        }

        // Deleta snapshots antigos deste mês para evitar duplicação ou conflitos se subir de novo
        await (prisma as any).veiculoSnapshot.deleteMany({
            where: { mesReferencia }
        });

        // Upsert OPMs
        for (const opm of Array.from(opmsToUpsert.values())) {
            await prisma.opm.upsert(opm);
        }

        const CHUNK_SIZE = 5000;
        for (let i = 0; i < veiculosToCreate.length; i += CHUNK_SIZE) {
            const chunk = veiculosToCreate.slice(i, i + CHUNK_SIZE);
            await (prisma as any).veiculoSnapshot.createMany({ data: chunk, skipDuplicates: true });
        }

        return NextResponse.json({
            success: true,
            veiculosCount: veiculosToCreate.length
        });

    } catch (error: any) {
        console.error("Erro no Upload do Snapshot:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
