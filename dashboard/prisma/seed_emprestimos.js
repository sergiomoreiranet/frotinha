const { PrismaClient } = require('@prisma/client');
const xlsx = require('xlsx');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const filePath = path.join(__dirname, '..', '..', 'data', 'MAPA FORÇA - SAF 2025 BACKUP MARÇO.xlsx');
  const workbook = xlsx.readFile(filePath);

  console.log('--- Iniciando Seed de VeiculoEmprestimo ---');

  // 1. Processar aba "CONTROLE VTR 2026"
  console.log('Processando aba "CONTROLE VTR 2026"...');
  const sheetVtr = workbook.Sheets['CONTROLE VTR 2026'];
  const dataVtr = xlsx.utils.sheet_to_json(sheetVtr, { header: 1 });

  // Pular cabeçalho (Linha 1)
  for (let i = 1; i < dataVtr.length; i++) {
    const row = dataVtr[i];
    const placa = row[9] ? String(row[9]).trim().toUpperCase() : null;
    
    if (placa && placa !== 'PLACA' && placa !== '-------') {
      const prefixo = row[27] ? String(row[27]).trim() : null;
      const marcaModelo = row[6] ? String(row[6]).trim() : null;
      const ano = row[10] ? String(row[10]).trim() : null;
      const cor = row[7] ? String(row[7]).trim() : null;
      const pertence = row[2] ? String(row[2]).trim() : null;
      const observacoes = row[33] ? String(row[33]).trim() : null;

      await prisma.veiculoEmprestimo.upsert({
        where: { placa },
        update: {
          prefixo,
          marcaModelo,
          ano,
          cor,
          pertence,
          observacoes: observacoes || undefined,
        },
        create: {
          placa,
          prefixo,
          marcaModelo,
          ano,
          cor,
          pertence,
          observacoes,
          statusUso: 'DISPONIVEL',
          ativo: true,
        },
      });
    }
  }

  // 2. Processar aba "Trailblazers e Corollas 2026"
  console.log('Processando aba "Trailblazers e Corollas 2026"...');
  const sheetTrail = workbook.Sheets['Trailblazers e Corollas 2026'];
  const dataTrail = xlsx.utils.sheet_to_json(sheetTrail, { header: 1 });

  for (let i = 1; i < dataTrail.length; i++) {
    const row = dataTrail[i];
    const detentorAtual = row[1] ? String(row[1]).trim() : null;
    const unidade = row[2] ? String(row[2]).trim() : null;
    const obsTrail = row[5] ? String(row[5]).trim() : null;

    // Essa aba pode ter várias placas separadas por "/"
    const placasRaw = [];
    if (row[3]) placasRaw.push(String(row[3]));
    if (row[4]) placasRaw.push(String(row[4]));

    const placas = placasRaw.flatMap(p => p.split('/').map(s => s.trim().toUpperCase())).filter(p => p && p.length >= 7 && p !== '-------');

    for (const placa of placas) {
      // Tentar atualizar se já existe, ou criar básico se não existe (embora a maioria deva estar na primeira aba)
      const existing = await prisma.veiculoEmprestimo.findUnique({ where: { placa } });

      if (existing) {
        await prisma.veiculoEmprestimo.update({
          where: { placa },
          data: {
            detentorAtual,
            unidade,
            observacoes: existing.observacoes ? `${existing.observacoes} | Detalhes Trail: ${obsTrail || ''}` : obsTrail,
          },
        });
      } else {
        await prisma.veiculoEmprestimo.create({
          data: {
            placa,
            detentorAtual,
            unidade,
            observacoes: obsTrail,
            statusUso: 'DISPONIVEL',
            ativo: true,
          },
        });
      }
    }
  }

  console.log('--- Seed de VeiculoEmprestimo concluído com sucesso ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
