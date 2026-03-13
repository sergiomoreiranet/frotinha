import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const mesAnterior = searchParams.get("mesAnterior");
        const mesAtual = searchParams.get("mesAtual");

        if (!mesAnterior || !mesAtual) {
            return NextResponse.json({ error: "Parâmetros mesAnterior e mesAtual são obrigatórios" }, { status: 400 });
        }

        // Buscar todos os veículos do mês anterior
        const veiculosAnteriores: any[] = await (prisma as any).veiculoSnapshot.findMany({
            where: { mesReferencia: mesAnterior },
            include: { opm: true }
        });

        // Buscar todos os veículos do mês atual
        const veiculosAtuais: any[] = await (prisma as any).veiculoSnapshot.findMany({
            where: { mesReferencia: mesAtual },
            select: { patrimonio: true }
        });

        // Criar um Set com os patrimônios do mês atual para busca O(1)
        const patrimoniosAtuaisSet = new Set(veiculosAtuais.map(v => v.patrimonio));

        // Encontrar quais veículos existiam no mês anterior, mas NÃO existem no mês atual (excluídos/descarga)
        const veiculosExcluidos = veiculosAnteriores.filter(
            veiculo => !patrimoniosAtuaisSet.has(veiculo.patrimonio)
        );

        return NextResponse.json({
            success: true,
            totalExcluidos: veiculosExcluidos.length,
            dados: veiculosExcluidos
        });

    } catch (error: any) {
        console.error("Erro na Comparação de Snapshots:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
