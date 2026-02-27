import prisma from "@/lib/prisma"
import { AjusteFrotaTable } from "@/components/AjusteFrotaTable"

export const dynamic = "force-dynamic";

export default async function OpmsPage() {

  // Buscar todas OPMs
  const opms = await prisma.opm.findMany({
    orderBy: { nome: 'asc' }
  })

  // Buscar Metas
  const metas = await prisma.qffMeta.findMany()

  // Buscar Veículos Originais e os Ajustados
  const veiculos = await prisma.veiculo.findMany()
  const veiculosAjustados = await prisma.veiculoAjuste.findMany()

  // Lista única de nomes dos 28 Arquivos QFFs (Macro Comandos) para popular o Dropdown
  const macroComandosRaw = await prisma.opm.findMany({
    select: { macroComando: true },
    distinct: ['macroComando']
  })

  const macroComandos = macroComandosRaw
    .map(m => m.macroComando)
    .filter((m): m is string => Boolean(m))
    .sort()

  return (
    <div className="w-full">
      <AjusteFrotaTable
        opms={opms}
        metas={metas}
        veiculos={veiculos}
        veiculosAjustados={veiculosAjustados}
        macroComandos={macroComandos}
      />
    </div>
  )
}
