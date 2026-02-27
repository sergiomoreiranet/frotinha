import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { id, grupo, programa, opmCodigo, prefixo, situacao } = body;

        if (!id) {
            return NextResponse.json({ error: "ID do veículo é obrigatório" }, { status: 400 });
        }

        const updatedVeiculo = await prisma.veiculoAjuste.update({
            where: { id },
            data: {
                grupo,
                programa,
                opmCodigo,
                prefixo,
                situacao,
                alteradoEm: new Date()
            }
        });

        return NextResponse.json({ success: true, veiculo: updatedVeiculo });
    } catch (error: any) {
        console.error("Erro ao atualizar veículo (Ajuste):", error);
        return NextResponse.json({ error: error.message || "Erro interno" }, { status: 500 });
    }
}
