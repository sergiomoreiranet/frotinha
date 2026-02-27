import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE() {
    try {
        const resultOriginal = await prisma.veiculo.deleteMany({});
        const resultAjuste = await prisma.veiculoAjuste.deleteMany({});

        return NextResponse.json({
            message: "Toda a frota (existente e ajustada) foi apagada com sucesso.",
            countOriginal: resultOriginal.count,
            countAjustado: resultAjuste.count
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Erro ao apagar Frota." }, { status: 500 });
    }
}
