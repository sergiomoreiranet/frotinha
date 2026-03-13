import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status'); // 'disponivel', 'em_uso', 'ativo'
        const placa = searchParams.get('placa');

        let whereClause: any = {};

        if (status === 'disponivel') {
            whereClause.statusUso = 'DISPONIVEL';
            whereClause.ativo = true;
        } else if (status === 'em_uso') {
            whereClause.statusUso = 'EM_USO';
        } else if (status === 'ativo') {
            whereClause.ativo = true;
        }

        if (placa) {
            whereClause.placa = { contains: placa };
        }

        const veiculos = await prisma.veiculoEmprestimo.findMany({
            where: whereClause,
            orderBy: {
                placa: 'asc'
            }
        });

        return NextResponse.json(veiculos);
    } catch (error) {
        console.error('Erro ao buscar veículos de empréstimo:', error);
        return NextResponse.json({ error: 'Erro ao buscar veículos' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { 
            placa, patrimonio, prefixo, marcaModelo, ano, cor, pertence, observacoes, detentorAtual, unidade,
            motivo, informacaoAdicional, tipoTracao, cambio, licenciamento, apresentacao, estribo, radio, grafismo, monocela, ultimaRevisao, localizacao
        } = body;

        if (!placa) {
            return NextResponse.json({ error: 'Placa é obrigatória' }, { status: 400 });
        }

        const novoVeiculo = await prisma.veiculoEmprestimo.create({
            data: {
                placa,
                patrimonio,
                prefixo,
                marcaModelo,
                ano,
                cor,
                pertence,
                observacoes,
                detentorAtual,
                unidade,
                motivo,
                informacaoAdicional,
                tipoTracao,
                cambio,
                licenciamento,
                apresentacao,
                estribo,
                radio,
                grafismo,
                monocela,
                ultimaRevisao: ultimaRevisao ? new Date(ultimaRevisao) : undefined,
                localizacao,
                statusUso: 'DISPONIVEL',
                ativo: true
            }
        });

        return NextResponse.json(novoVeiculo, { status: 201 });
    } catch (error) {
        console.error('Erro ao cadastrar veículo de empréstimo:', error);
        return NextResponse.json({ error: 'Erro ao cadastrar veículo' }, { status: 500 });
    }
}
