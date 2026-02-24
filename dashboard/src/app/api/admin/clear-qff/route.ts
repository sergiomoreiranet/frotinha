import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE() {
    try {
        const result = await prisma.qffMeta.deleteMany({});
        return NextResponse.json({ message: "Todas as metas QFF foram apagadas com sucesso.", count: result.count });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Erro ao apagar QFF." }, { status: 500 });
    }
}
