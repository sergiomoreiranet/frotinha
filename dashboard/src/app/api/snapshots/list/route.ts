import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const snapshots = await (prisma as any).veiculoSnapshot.groupBy({
            by: ['mesReferencia'],
            _count: {
                patrimonio: true
            },
            orderBy: {
                mesReferencia: 'desc'
            }
        });

        const result = snapshots.map((s: any) => ({
            mes: s.mesReferencia,
            total: s._count.patrimonio
        }));

        return NextResponse.json({
            success: true,
            dados: result
        });

    } catch (error: any) {
        console.error("Erro ao listar Snapshots:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
