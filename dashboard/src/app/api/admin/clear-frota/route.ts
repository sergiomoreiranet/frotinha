import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE() {
    try {
        const result = await prisma.veiculo.deleteMany({});
        return NextResponse.json({ message: "Toda a frota (existente) foi apagada com sucesso.", count: result.count });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Erro ao apagar Frota." }, { status: 500 });
    }
}
