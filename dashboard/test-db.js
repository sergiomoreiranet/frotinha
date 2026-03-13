const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const data = await prisma.veiculoSnapshot.groupBy({
        by: ['mesReferencia'],
        _count: { patrimonio: true }
    });
    console.log("Snapshots no banco:", data);
}

main().catch(console.error).finally(() => prisma.$disconnect());
