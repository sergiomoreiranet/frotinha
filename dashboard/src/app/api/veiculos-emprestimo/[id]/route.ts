import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        
        // Extrair todos os campos possíveis do body
        const { 
            ativo, 
            statusUso, 
            observacoes,
            placa,
            patrimonio,
            prefixo,
            marcaModelo,
            ano,
            cor,
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
            ultimaRevisao,
            localizacao
        } = body;

        const updateData: any = {};
        if (ativo !== undefined) updateData.ativo = ativo;
        if (statusUso !== undefined) updateData.statusUso = statusUso;
        if (observacoes !== undefined) updateData.observacoes = observacoes;
        if (placa !== undefined) updateData.placa = placa;
        if (patrimonio !== undefined) updateData.patrimonio = patrimonio;
        if (prefixo !== undefined) updateData.prefixo = prefixo;
        if (marcaModelo !== undefined) updateData.marcaModelo = marcaModelo;
        if (ano !== undefined) updateData.ano = ano;
        if (cor !== undefined) updateData.cor = cor;
        if (detentorAtual !== undefined) updateData.detentorAtual = detentorAtual;
        if (unidade !== undefined) updateData.unidade = unidade;
        
        // New specific fields
        if (motivo !== undefined) updateData.motivo = motivo;
        if (informacaoAdicional !== undefined) updateData.informacaoAdicional = informacaoAdicional;
        if (tipoTracao !== undefined) updateData.tipoTracao = tipoTracao;
        if (cambio !== undefined) updateData.cambio = cambio;
        if (licenciamento !== undefined) updateData.licenciamento = licenciamento;
        if (apresentacao !== undefined) updateData.apresentacao = apresentacao;
        if (estribo !== undefined) updateData.estribo = estribo;
        if (radio !== undefined) updateData.radio = radio;
        if (grafismo !== undefined) updateData.grafismo = grafismo;
        if (monocela !== undefined) updateData.monocela = monocela;
        if (ultimaRevisao !== undefined) {
            if (!ultimaRevisao || ultimaRevisao === '') {
                updateData.ultimaRevisao = null;
            } else {
                const date = new Date(ultimaRevisao);
                updateData.ultimaRevisao = isNaN(date.getTime()) ? null : date;
            }
        }
        if (localizacao !== undefined) updateData.localizacao = localizacao;

        const veiculoAtualizado = await prisma.veiculoEmprestimo.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(veiculoAtualizado);
    } catch (error) {
        console.error('SERVER_ERROR [PATCH /api/veiculos-emprestimo/[id]]:', error);
        return NextResponse.json({ error: 'Erro ao atualizar veículo.' }, { status: 500 });
    }
}

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const veiculo = await prisma.veiculoEmprestimo.findUnique({
            where: { id }
        });

        if (!veiculo) {
            return NextResponse.json({ error: 'Veículo não encontrado.' }, { status: 404 });
        }

        return NextResponse.json(veiculo);
    } catch (error) {
        console.error('Erro ao buscar veículo de empréstimo:', error);
        return NextResponse.json({ error: 'Erro ao buscar veículo.' }, { status: 500 });
    }
}
