import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        const { dataDevolucao, quemEntregou, kmDevolucao, observacao } = body;

        // Validate required fields for update
        if (!quemEntregou) {
            return NextResponse.json({ error: 'Nome de quem entregou é obrigatório.' }, { status: 400 });
        }

        const devolucaoDate = dataDevolucao ? new Date(dataDevolucao) : new Date();

        const emprestimoAtualizado = await prisma.emprestimo.update({
            where: {
                id: id,
            },
            data: {
                dataDevolucao: devolucaoDate,
                quemEntregou,
                kmDevolucao: kmDevolucao ? parseInt(kmDevolucao, 10) : null,
                observacao,
            },
            include: {
                veiculo: true,
            }
        });

        // Atualizar o status do veículo para DISPONIVEL
        if (emprestimoAtualizado.veiculoId) {
            await prisma.veiculoEmprestimo.update({
                where: { id: emprestimoAtualizado.veiculoId },
                data: { statusUso: 'DISPONIVEL' }
            });
        }

        return NextResponse.json(emprestimoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar empréstimo:', error);
        return NextResponse.json({ error: 'Erro ao atualizar o empréstimo.' }, { status: 500 });
    }
}
