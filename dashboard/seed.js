const XLSX = require('xlsx');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando carga de dados massiva...");

    /* 1. Limpar banco */
    await prisma.qffMeta.deleteMany({});
    await prisma.veiculo.deleteMany({});
    await prisma.opm.deleteMany({});
    console.log("Banco limpo.");

    /* 2. Carga QFF (Múltiplos Arquivos) */
    const dataDir = 'C:\\Project\\frotinha\\data';
    const files = fs.readdirSync(dataDir);
    const qffFiles = files.filter(f => f.startsWith('qff_') && f.endsWith('.xlsx'));

    let metasCount = 0;

    for (const file of qffFiles) {
        console.log(`Processando planilha: ${file}...`);

        const macroComando = file
            .replace(/qff_/i, "")
            .replace(/\.xlsx/i, "")
            .replace(/_/g, " ")
            .toUpperCase();

        const qffBuf = fs.readFileSync(`${dataDir}\\${file}`);
        const qffWb = XLSX.read(qffBuf, { type: 'buffer' });
        const qffSheet = qffWb.Sheets[qffWb.SheetNames[0]];
        const qffRows = XLSX.utils.sheet_to_json(qffSheet, { header: 1 });

        if (qffRows.length < 3) continue;

        const grupoRow = qffRows[0];
        const pgmRow = qffRows[1];

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

        // Começa na linha 3 (index 2)
        for (let i = 2; i < qffRows.length; i++) {
            const row = qffRows[i];
            if (!row) continue;

            const codigoOpm = String(row[5] || "").trim(); // F
            if (!codigoOpm || codigoOpm.toLowerCase() === "total" || codigoOpm === "undefined") continue;

            const nomeOpm = String(row[2] || "").trim(); // C
            const municipio = String(row[0] || "").trim(); // A

            await prisma.opm.upsert({
                where: { codigo: codigoOpm },
                update: { nome: nomeOpm, municipio, macroComando },
                create: { codigo: codigoOpm, nome: nomeOpm, municipio, macroComando }
            });

            // Colunas G (6) a AV (47)
            for (let col = 6; col <= 47; col++) {
                const qtd = row[col];
                if (qtd === undefined || qtd === null || qtd === "") continue;

                const quantidadeFixada = parseInt(String(qtd), 10);
                if (isNaN(quantidadeFixada) || quantidadeFixada <= 0) continue;

                let grupo = String(grupoRow[col] || "").trim();
                let programa = String(pgmRow[col] || "").trim();
                if (!grupo) grupo = "Sem Grupo";
                if (!programa) programa = "Sem Programa";

                // Normalização de Programas Divergentes (QFF vs Frota)
                const pgmMap = {
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
                    "VEÍCULOS ESPECIAIS": "VEIC ESPECIAL"
                };
                if (pgmMap[programa.toUpperCase()]) {
                    programa = pgmMap[programa.toUpperCase()];
                }

                // Normaliza o Grupo removendo o prefixo 'Gp ' para bater com a Frota que só tem números
                grupo = grupo.replace(/^Gp\s+/i, "").trim();

                if (grupo.toLowerCase().includes("total") || programa.toLowerCase().includes("total")) continue;

                await prisma.qffMeta.upsert({
                    where: { opmCodigo_grupo_programa: { opmCodigo: codigoOpm, grupo, programa } },
                    update: { quantidadeFixada },
                    create: { opmCodigo: codigoOpm, grupo, programa, quantidadeFixada }
                });
                metasCount++;
            }
        }
    }
    console.log(`QFF Finalizado. Total de Arquivos: ${qffFiles.length}. Metas importadas: ${metasCount}`);

    /* 3. Carga FROTA */
    const frotaBuf = fs.readFileSync('C:\\Project\\frotinha\\data\\FROTA 02JAN26.xls');
    const frotaWb = XLSX.read(frotaBuf, { type: 'buffer' });
    const frotaSheet = frotaWb.Sheets[frotaWb.SheetNames[0]];
    const frotaRows = XLSX.utils.sheet_to_json(frotaSheet, { header: 1 });

    let veiculosCount = 0;
    for (let i = 1; i < frotaRows.length; i++) {
        const row = frotaRows[i];
        if (!row) continue;

        const placa = String(row[1] || "").trim();
        if (!placa || placa === "undefined") continue;

        const patrimonio = String(row[0] || "").trim();
        const marcaModelo = String(row[2] || "").trim();
        const anoStr = String(row[3] || "0");
        const ano = parseInt(anoStr, 10);

        const grupo = String(row[5] || "").trim(); // F
        const programa = String(row[6] || "").trim(); // G
        const prefixo = String(row[7] || "").trim(); // H

        const situacao = String(row[25] || "").trim();

        // Usuário pediu para ignorar viaturas em descarga
        if (situacao.toUpperCase() === "DESCARGA") continue;

        const codigoOpm = String(row[12] || "").trim(); // M
        let nomeOpm = String(row[14] || "").trim(); // Coluna O (OPM - Nome do Batalhão)
        const grdCmd = String(row[13] || "").trim(); // Coluna N (Grandes Comandos)
        const municipioOp = String(row[22] || "").trim(); // W (Município)

        if (!codigoOpm || codigoOpm === "undefined") continue;

        // Se a Frota não especificou o Nome do Batalhão nesta linha, usar o Grande Comando como fallback (ex: CPI-2)
        // para não sobrar apenas o nome da cidade.
        if (!nomeOpm) {
            nomeOpm = grdCmd || "OPM DESCONHECIDA";
        }

        // Atualizar município se estiver vindo da planilha
        // Não apagar o nome se ele já existe na QFF e aqui vier vazio (usamos nomeOpm que fizemos fallback)
        const updateData = {};
        if (municipioOp) updateData.municipio = municipioOp;
        if (nomeOpm && nomeOpm !== "OPM DESCONHECIDA") updateData.nome = nomeOpm;

        await prisma.opm.upsert({
            where: { codigo: codigoOpm },
            update: updateData,
            create: { codigo: codigoOpm, nome: nomeOpm, municipio: municipioOp }
        });

        try {
            await prisma.veiculo.create({
                data: {
                    patrimonio: patrimonio || `SEM_PAT_${veiculosCount}`,
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
            veiculosCount++;
        } catch (e) {
            // ignorar duplicação de patrimonio se houver
        }
    }
    console.log(`FROTA Finalizado. Veículos importados: ${veiculosCount}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
