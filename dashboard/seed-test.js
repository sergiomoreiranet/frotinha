const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding OPM...')
    const opm = await prisma.opm.upsert({
        where: { codigo: 'TEST-OPM-01' },
        update: {},
        create: {
            codigo: 'TEST-OPM-01',
            nome: 'OPM DE TESTE',
            municipio: 'SAO PAULO',
            macroComando: 'CPA M1'
        }
    })

    console.log('Seeding QffMeta...')
    await prisma.qffMeta.upsert({
        where: {
            opmCodigo_grupo_programa: {
                opmCodigo: opm.codigo,
                grupo: 'A',
                programa: 'RÁDIO PATRULHAMENTO'
            }
        },
        update: {},
        create: {
            opmCodigo: opm.codigo,
            grupo: 'A',
            programa: 'RÁDIO PATRULHAMENTO',
            quantidadeFixada: 5
        }
    })

    console.log('Seeding Veiculos...')

    // Clear existing test vehicles if any
    await prisma.veiculo.deleteMany({ where: { opmCodigo: opm.codigo } })
    await prisma.veiculoAjuste.deleteMany({ where: { opmCodigo: opm.codigo } })

    const veiculoData = {
        patrimonio: 'PAT-0001',
        placa: 'ABC-1234',
        marcaModelo: 'VW/GOL',
        ano: 2020,
        grupo: 'A',
        programa: 'RÁDIO PATRULHAMENTO',
        prefixo: 'M-12345',
        situacao: 'OPERACAO',
        opmCodigo: opm.codigo
    }

    await prisma.veiculo.create({ data: veiculoData })
    await prisma.veiculoAjuste.create({ data: veiculoData })

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
