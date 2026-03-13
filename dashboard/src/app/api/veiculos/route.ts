import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const veiculos = await prisma.veiculo.findMany({
            orderBy: {
                placa: 'asc',
            },
        });

        return NextResponse.json(veiculos);
    } catch (error) {
        console.error('Erro ao buscar veículos:', error);
        return NextResponse.json({ error: 'Erro ao buscar veículos' }, { status: 500 });
    }
}
