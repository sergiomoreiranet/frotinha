import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const opmCodigo = '011B'; // Example

    const veiculos = await prisma.veiculo.count();
    const veiculosAjuste = await prisma.veiculoAjuste.count();

    console.log(`veiculo count: ${veiculos}`);
    console.log(`veiculoAjuste count: ${veiculosAjuste}`);

}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
