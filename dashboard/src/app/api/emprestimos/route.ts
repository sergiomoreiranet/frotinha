import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const patrimonio = searchParams.get('patrimonio');
        const status = searchParams.get('status');

        let whereClause: any = {};

        if (patrimonio) {
            whereClause.veiculo = {
                placa: patrimonio
            };
        }

        if (status === 'em_uso') {
            whereClause.dataDevolucao = null;
        } else if (status === 'devolvido') {
            whereClause.dataDevolucao = { not: null };
        }

        const emprestimos = await prisma.emprestimo.findMany({
            where: whereClause,
            include: {
                veiculo: true,
            },
            orderBy: {
                dataRetirada: 'desc',
            },
        });

        return NextResponse.json(emprestimos);
    } catch (error) {
        console.error('Erro ao buscar empréstimos:', error);
        return NextResponse.json({ error: 'Erro ao buscar empréstimos' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { veiculoId, dataRetirada, quemRetirou, kmRetirada, observacao } = body;

        // Validate required fields
        if (!veiculoId || !quemRetirou) {
            return NextResponse.json({ error: 'ID do veículo e nome de quem retirou são obrigatórios.' }, { status: 400 });
        }

        // Check if the vehicle is currently loaned out (dataDevolucao is null)
        const existingLoan = await prisma.emprestimo.findFirst({
            where: {
                veiculoId,
                dataDevolucao: null,
            },
        });

        if (existingLoan) {
            return NextResponse.json({ error: 'Este veículo já está emprestado e não foi devolvido.' }, { status: 400 });
        }

        // Parse the date if provided, otherwise Prisma will use default(now())
        const retiradaDate = dataRetirada ? new Date(dataRetirada) : new Date();

        const novoEmprestimo = await prisma.emprestimo.create({
            data: {
                veiculoId,
                dataRetirada: retiradaDate,
                quemRetirou,
                kmRetirada: kmRetirada ? parseInt(kmRetirada, 10) : null,
                observacao,
            },
            include: {
                veiculo: true
            }
        });

        // Atualizar o status do veículo para EM_USO
        await prisma.veiculoEmprestimo.update({
            where: { id: veiculoId },
            data: { statusUso: 'EM_USO' }
        });

        return NextResponse.json(novoEmprestimo, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar empréstimo:', error);
        return NextResponse.json({ error: 'Erro ao criar o empréstimo.' }, { status: 500 });
    }
}
