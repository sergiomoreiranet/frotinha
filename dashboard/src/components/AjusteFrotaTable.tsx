"use client"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"

type AjusteFrotaTableProps = {
    opms: any[];
    metas: any[];
    veiculos: any[]; // Original veiculos (fallback)
    veiculosAjustados: any[]; // Adjusted veiculos
    macroComandos: string[];
}

export function AjusteFrotaTable({ opms, metas, veiculos, veiculosAjustados, macroComandos }: AjusteFrotaTableProps) {
    const router = useRouter();

    // 1. Estado do filtro (Inicia com o primeiro comando disponível ou vazio)
    const [selectedComando, setSelectedComando] = useState<string>(macroComandos[0] || "")

    // 2. Filtrar dados baseado no Macro Comando selecionado
    const { filteredOpms, colunasArr, relatorio, allVeiculos } = useMemo(() => {
        // OPMs filtradas
        const fOpms = opms.filter(opm => opm.macroComando === selectedComando)
        const fOpmIds = new Set(fOpms.map(o => o.codigo))

        // Construir Estrutura: opmCodigo -> grupo -> programa -> { fixo, existente }
        const rel: Record<string, Record<string, Record<string, { fixo: number, existente: number }>>> = {}
        const colSet = new Set<string>()

        // Popular com Metas (apenas das OPMs filtradas)
        metas.forEach(m => {
            if (!fOpmIds.has(m.opmCodigo)) return;

            if (!rel[m.opmCodigo]) rel[m.opmCodigo] = {}
            if (!rel[m.opmCodigo][m.grupo]) rel[m.opmCodigo][m.grupo] = {}

            rel[m.opmCodigo][m.grupo][m.programa] = {
                fixo: m.quantidadeFixada,
                existente: 0
            }
            colSet.add(`${m.grupo}|${m.programa}`)
        })

        // Unificar veículos: Usar a lista 'veiculosAjustados' sempre que possível, 
        // mas complementar com os 'veiculos' originais caso haja algum que não foi copiado.
        // Cruzamento por PATRIMÔNIO (único campo com constraint @unique nas duas tabelas)
        // Não usar placa - ela pode ser reutilizada em veículos diferentes!
        const mapAjustados = new Map<string, any>();
        veiculos.forEach(v => mapAjustados.set(v.patrimonio, v)); // Popula com originais
        veiculosAjustados.forEach(v => mapAjustados.set(v.patrimonio, v)); // Sobrescreve com ajustados

        const allVeiculosData = Array.from(mapAjustados.values());

        // Popular com Veiculos Existentes (apenas das OPMs filtradas)
        allVeiculosData.forEach(v => {
            if (!v.opmCodigo || !fOpmIds.has(v.opmCodigo)) return;

            // Se o veículo for removido da contagem (exemplo: transferido para opm inexistente ou removido, ajustamos o filtro)
            const g = v.grupo || "Sem Grupo"
            const p = v.programa || "Sem Programa"

            if (!rel[v.opmCodigo]) rel[v.opmCodigo] = {}
            if (!rel[v.opmCodigo][g]) rel[v.opmCodigo][g] = {}

            if (!rel[v.opmCodigo][g][p]) {
                rel[v.opmCodigo][g][p] = { fixo: 0, existente: 0 }
                // Only add column if we want existing columns to spawn automatically.
                colSet.add(`${g}|${p}`)
            }

            rel[v.opmCodigo][g][p].existente += 1;
        })

        const cArr = Array.from(colSet).sort()

        return { filteredOpms: fOpms, colunasArr: cArr, relatorio: rel, allVeiculos: allVeiculosData }
    }, [selectedComando, opms, metas, veiculos, veiculosAjustados])

    // 3. Estado do Modal de Detalhes de Veículos
    const [selectedCell, setSelectedCell] = useState<{ opm: any, grupo: string, programa: string, fixo: number, existente: number } | null>(null)

    const modalVeiculos = useMemo(() => {
        if (!selectedCell) return [];
        return allVeiculos.filter((v: any) =>
            v.opmCodigo === selectedCell.opm.codigo &&
            (v.grupo || "Sem Grupo") === selectedCell.grupo &&
            (v.programa || "Sem Programa") === selectedCell.programa
        ) || [];
    }, [selectedCell, allVeiculos])

    // 4. Estado do Modal de Relatório de Alterações
    const [showReportModal, setShowReportModal] = useState(false);
    // Estado do filtro de data/hora do relatório (o usuário seleciona a partir de quando ver mudanças)
    const [filtroData, setFiltroData] = useState<string>("");

    // Filtrar os veículos que sofreram alterações
    const changedVehicles = useMemo(() => {
        if (!veiculosAjustados || !veiculos) return [];

        const filtroDataObj = filtroData ? new Date(filtroData) : null;
        const changes = [];

        for (const ajustado of veiculosAjustados) {
            // Se um filtro de data foi definido, só incluir ajustes feitos APÓS essa data
            if (filtroDataObj && ajustado.alteradoEm) {
                const alteradoEmDate = new Date(ajustado.alteradoEm);
                if (alteradoEmDate < filtroDataObj) continue;
            }
            // Usar SOMENTE patrimônio como chave de cruzamento.
            // Placa pode ser reutilizada em veículos diferentes, causando cruzamentos falsos!
            const original = veiculos.find(v => v.patrimonio && v.patrimonio === ajustado.patrimonio);
            if (!original) continue;

            // Normalizar null/""/undefined para evitar falsos positivos
            const norm = (v: any) => (v ?? "").toString().trim();

            const hasChanges =
                norm(original.grupo) !== norm(ajustado.grupo) ||
                norm(original.programa) !== norm(ajustado.programa) ||
                norm(original.opmCodigo) !== norm(ajustado.opmCodigo) ||
                norm(original.prefixo) !== norm(ajustado.prefixo) ||
                norm(original.situacao) !== norm(ajustado.situacao);

            if (hasChanges) {
                // Exibir nome + código para evitar confusão quando dois batalhões têm o mesmo nome
                const origOpm = opms.find(o => o.codigo === original.opmCodigo);
                const ajustOpm = opms.find(o => o.codigo === ajustado.opmCodigo);

                const opmLabel = (opm: any, codigo: string) =>
                    opm ? `${opm.nome} (${codigo})` : codigo;

                changes.push({
                    original: {
                        ...original,
                        opmNome: opmLabel(origOpm, original.opmCodigo),
                    },
                    ajustado: {
                        ...ajustado,
                        opmNome: opmLabel(ajustOpm, ajustado.opmCodigo),
                    }
                });
            }
        }
        return changes;
    }, [veiculos, veiculosAjustados, opms, filtroData]);

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Ajuste de Frota OPMs</h1>
                    <p className="text-slate-500 mt-1">Ambiente de conferência, validação e configuração das viaturas locais.</p>
                </div>
                <div className="flex gap-4 items-center">
                    {/* Botão de Relatório */}
                    <button
                        onClick={() => setShowReportModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mt-5 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Ver Relatório de Ajustes
                        {changedVehicles.length > 0 && (
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">{changedVehicles.length}</span>
                        )}
                    </button>

                    {/* Filtro de Comando */}
                    <div className="flex flex-col">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">QFF / Comando</label>
                        <select
                            value={selectedComando}
                            onChange={(e) => setSelectedComando(e.target.value)}
                            className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 shadow-sm font-medium cursor-pointer"
                        >
                            {macroComandos.map(cmd => (
                                <option key={cmd} value={cmd}>{cmd}</option>
                            ))}
                        </select>
                    </div>

                    {/* Legenda de cores */}
                    <div className="flex h-fit bg-white px-4 py-2 mt-5 rounded-lg border items-center gap-4 shadow-sm text-sm font-medium">
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-800"></span> Preto: Ideal</div>
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500"></span> Vermelho: Déficit</div>
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Verde: Excedente</div>
                    </div>
                </div>
            </header>


            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 relative overflow-auto max-h-[calc(100vh-200px)]">
                <table className="w-full text-sm text-left whitespace-nowrap border-collapse min-w-max">
                    <thead className="bg-slate-200 border-b border-slate-300 text-slate-500 font-medium uppercase text-xs sticky top-0 z-40 shadow-sm">
                        <tr>
                            <th className="px-6 py-4 sticky left-0 top-0 z-50 bg-slate-200 border-r border-b border-slate-300 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-slate-200 before:-z-10">
                                OPM (Organização)
                            </th>
                            {colunasArr.map(col => {
                                const [g, p] = col.split('|')
                                return (
                                    <th key={col} className="px-6 py-4 border-r border-b border-slate-300 text-center bg-slate-200 relative z-40">
                                        <div className="font-bold text-slate-700">{g}</div>
                                        <div className="text-[10px] mt-1 text-slate-500 font-semibold">{p}</div>
                                        <div className="text-[10px] mt-2 bg-slate-100 text-slate-500 border border-slate-300 px-2 py-0.5 rounded-full inline-block font-bold">Fixo / Exist.</div>
                                    </th>
                                )
                            })}
                            {colunasArr.length === 0 && (
                                <th className="px-6 py-4 border-b border-slate-300">-</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {filteredOpms.map((opm, index) => (
                            <tr key={opm.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100 transition-colors group`}>
                                <td className={`px-6 py-4 sticky left-0 z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} group-hover:bg-slate-100 border-r border-slate-200 font-medium text-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] flex flex-col justify-center h-full transition-colors`}>
                                    <span className="uppercase text-sm font-bold tracking-tight text-slate-800">{opm.nome}</span>
                                    {opm.nome !== opm.municipio && (
                                        <span className="text-[11px] text-slate-400 font-medium uppercase mt-0.5">{opm.municipio || "SEM MUNICÍPIO"}</span>
                                    )}
                                </td>

                                {colunasArr.map(col => {
                                    const [g, p] = col.split('|')
                                    const data = relatorio[opm.codigo]?.[g]?.[p]

                                    if (!data) {
                                        return <td key={col} className="px-6 py-4 border-r border-slate-200 text-center text-slate-300">-</td>
                                    }

                                    const f = data.fixo
                                    const e = data.existente

                                    let colorClass = "text-slate-800 font-bold" // Preto
                                    if (e < f) colorClass = "text-red-600 font-bold" // Vermelho (déficit)
                                    if (e > f) colorClass = "text-emerald-600 font-bold" // Verde (excedente)

                                    return (
                                        <td key={col} className="px-6 py-4 border-r border-slate-200 text-center align-middle transition-colors">
                                            <div className={`text-base tracking-tight ${colorClass}`}>
                                                <span className="text-slate-400 font-normal text-sm">{f}</span>
                                                <span className="mx-1 text-slate-300">/</span>
                                                <span
                                                    className="cursor-pointer hover:underline decoration-2 underline-offset-4"
                                                    onClick={() => setSelectedCell({ opm, grupo: g, programa: p, fixo: f, existente: e })}
                                                >
                                                    {e}
                                                </span>
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}

                        {filteredOpms.length === 0 && (
                            <tr>
                                <td colSpan={colunasArr.length + 1} className="py-20 text-center text-slate-500 bg-white">
                                    Nenhuma OPM encontrada neste comando ou o QFF não possui dados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal de Detalhes de Veículos */}
            {selectedCell && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Header do Modal */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">
                                    Viatura(s) - {selectedCell.opm.nome}
                                </h3>
                                <div className="text-sm text-slate-500 font-medium mt-1">
                                    <span className="text-slate-700 bg-slate-200 px-2 py-0.5 rounded-md mr-2 font-bold tracking-tight">Grupo {selectedCell.grupo}</span>
                                    <span className="font-semibold text-slate-600">{selectedCell.programa}</span> &bull; MUN: {selectedCell.opm.municipio || "N/A"}
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCell(null)}
                                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors focus:outline-none"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Corpo do Modal - Tabela de Veículos */}
                        <div className="overflow-auto p-6 bg-slate-50/30 flex-1">
                            {modalVeiculos.length === 0 ? (
                                <div className="text-center py-10 text-slate-500 bg-white rounded-xl border border-dashed border-slate-200">
                                    <p>Nenhum veículo encontrado no sistema para este cruzamento.</p>
                                </div>
                            ) : (
                                <table className="w-full text-sm text-left border-collapse bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                    <thead className="bg-slate-100/80 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
                                        <tr>
                                            <th className="px-4 py-3">Prefixo</th>
                                            <th className="px-4 py-3">Placa</th>
                                            <th className="px-4 py-3">Marca/Modelo</th>
                                            <th className="px-4 py-3 text-center">Ano</th>
                                            <th className="px-4 py-3">Patrimônio</th>
                                            <th className="px-4 py-3 text-center">Situação</th>
                                            <th className="px-4 py-3 text-center">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {modalVeiculos.map(v => (
                                            <EditableVehicleRow
                                                key={v.id}
                                                veiculo={v} // Since modalVeiculos relies on allVeiculos which has adjustments mapped.
                                                opms={opms}
                                                onSave={async (updatedData) => {
                                                    try {
                                                        const res = await fetch("/api/veiculos-ajustes", {
                                                            method: "PUT",
                                                            headers: { "Content-Type": "application/json" },
                                                            body: JSON.stringify({ id: v.id, ...updatedData })
                                                        });
                                                        if (!res.ok) throw new Error("Erro ao salvar");
                                                        // Refreshing the page to reflect changes
                                                        router.refresh();
                                                    } catch (error) {
                                                        console.error(error);
                                                        alert("Falha ao salvar o veículo.");
                                                    }
                                                }}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        {/* Rodapé do Modal */}
                        <div className="px-6 py-4 bg-white border-t border-slate-200 flex justify-between items-center rounded-b-2xl">
                            <div className="text-sm font-medium text-slate-500 flex-1">
                                Meta (Fixo): <span className="text-slate-800 font-bold ml-1">{selectedCell.fixo}</span>
                            </div>

                            <div className="flex-1 flex justify-center">
                                {(() => {
                                    const diff = selectedCell.existente - selectedCell.fixo;
                                    if (diff < 0) {
                                        return <span className="px-3 py-1 bg-red-50 text-red-700 font-bold text-sm rounded-full border border-red-200 shadow-sm animate-in fade-in">Déficit: {diff}</span>
                                    } else if (diff > 0) {
                                        return <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-full border border-emerald-200 shadow-sm animate-in fade-in">Excedente: +{diff}</span>
                                    } else {
                                        return <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold text-sm rounded-full border border-slate-200 shadow-sm animate-in fade-in">Ideal: 0</span>
                                    }
                                })()}
                            </div>

                            <div className="text-sm font-medium text-slate-500 flex-1 text-right">
                                Contagem (Existente): <span className={`${selectedCell.existente < selectedCell.fixo ? 'text-red-600' : selectedCell.existente > selectedCell.fixo ? 'text-emerald-600' : 'text-slate-800'} font-bold ml-1 text-base`}>{selectedCell.existente}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Relatório de Ajustes */}
            {showReportModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 print:max-w-none print:h-auto print:shadow-none print:w-full print:absolute print:inset-0 print:bg-white">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 print:hidden flex-wrap gap-3">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    Relatório de Alterações da Frota
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">Comparativo de veículos com dados originais e dados ajustados manualmente.</p>
                            </div>

                            {/* Filtro de data/hora */}
                            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 shadow-sm">
                                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <div>
                                    <label className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">Ver ajustes a partir de:</label>
                                    <input
                                        type="datetime-local"
                                        value={filtroData}
                                        onChange={e => setFiltroData(e.target.value)}
                                        className="text-sm text-slate-800 font-medium border-0 bg-transparent focus:outline-none focus:ring-0 cursor-pointer"
                                    />
                                </div>
                                {filtroData && (
                                    <button
                                        onClick={() => setFiltroData("")}
                                        title="Limpar filtro"
                                        className="text-amber-500 hover:text-amber-800 ml-2 font-bold text-xs bg-amber-100 hover:bg-amber-200 px-2 py-1 rounded transition-colors"
                                    >
                                        ✕ Limpar
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => window.print()}
                                    className="text-slate-600 font-semibold bg-white border border-slate-300 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors focus:outline-none shadow-sm flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                    Imprimir
                                </button>
                                <button
                                    onClick={() => setShowReportModal(false)}
                                    className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors focus:outline-none"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Corpo do Modal / Relatório para Impressão */}
                        <div className="overflow-auto p-6 flex-1 bg-slate-50 print:bg-white print:p-0">
                            {/* Cabecalho de Impressão */}
                            <div className="hidden print:block text-center mb-8 border-b-2 border-slate-800 pb-4">
                                <h1 className="text-2xl font-bold text-black uppercase">Polícia Militar do Estado de São Paulo</h1>
                                <h2 className="text-xl font-semibold text-gray-800 mt-2">Relatório de Ajustes do Quadro de Frota Fixada (QFF)</h2>
                                <p className="text-sm text-gray-600 mt-1">Ambiente de Conferência de Viaturas Locais</p>
                                <div className="text-xs text-gray-500 mt-4 text-right">Impresso em: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}</div>
                            </div>

                            {changedVehicles.length === 0 ? (
                                <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
                                    <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="mt-4 text-lg font-medium text-slate-800">Nenhuma alteração detectada</h3>
                                    <p className="mt-2 text-sm text-slate-500">A tabela de ajustes e a tabela original estão idênticas no momento.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden print:border-none print:shadow-none">
                                        <table className="min-w-full divide-y divide-slate-200">
                                            <thead className="bg-slate-800 text-white">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase">Placa / Patrimônio</th>
                                                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase bg-slate-700/50">Dado</th>
                                                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase border-l border-slate-600 bg-slate-700/50">Original (Sistema)</th>
                                                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase border-l border-slate-600">Alterado (Ajuste)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-slate-200">
                                                {changedVehicles.map((item, idx) => {
                                                    const orig = item.original;
                                                    const adj = item.ajustado;

                                                    // Verificar cada campo
                                                    const changes = [
                                                        { label: "OPM", o: orig.opmNome, a: adj.opmNome, changed: orig.opmCodigo !== adj.opmCodigo },
                                                        { label: "Grupo", o: orig.grupo, a: adj.grupo, changed: orig.grupo !== adj.grupo },
                                                        { label: "Programa", o: orig.programa, a: adj.programa, changed: orig.programa !== adj.programa },
                                                        { label: "Prefixo", o: orig.prefixo || "N/A", a: adj.prefixo || "N/A", changed: orig.prefixo !== adj.prefixo },
                                                        { label: "Situação", o: orig.situacao, a: adj.situacao, changed: orig.situacao !== adj.situacao },
                                                    ].filter(c => c.changed);

                                                    return changes.map((change, cIdx) => (
                                                        <tr key={`${orig.id}-${change.label}`} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100`}>
                                                            {cIdx === 0 && (
                                                                <td rowSpan={changes.length} className="px-4 py-3 whitespace-nowrap text-sm bg-white border-r border-slate-200 print:border-black font-medium text-slate-900 align-top shadow-[inset_-2px_0_4px_-2px_rgba(0,0,0,0.05)]">
                                                                    <div className="font-bold">{orig.placa}</div>
                                                                    <div className="text-slate-500 text-xs mt-1">Patr: {orig.patrimonio}</div>
                                                                    <div className="text-slate-400 text-[10px] mt-0.5">{orig.marcaModelo}</div>
                                                                </td>
                                                            )}
                                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-slate-600 bg-slate-50/50">
                                                                {change.label}
                                                            </td>
                                                            <td className="px-4 py-2 whitespace-normal text-sm text-slate-500 border-l border-slate-200">
                                                                <span className="line-through decoration-red-300 opacity-80">{change.o}</span>
                                                            </td>
                                                            <td className="px-4 py-2 whitespace-normal text-sm font-bold text-emerald-700 border-l border-slate-200 bg-emerald-50/30">
                                                                {change.a}
                                                            </td>
                                                        </tr>
                                                    ));
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-blue-50 text-blue-800 rounded-xl text-sm border border-blue-100 print:hidden">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                        <p>
                                            Este relatório mostra apenas os veículos cujos dados (OPM, Grupo, Programa, Prefixo ou Situação) foram alterados na tabela de ajustes comparados ao banco de dados original.
                                        </p>
                                    </div>

                                    {/* Assinaturas (Apenas Impressão) */}
                                    <div className="hidden print:flex justify-around items-end pt-24 mt-10 border-t-2 border-slate-800">
                                        <div className="text-center">
                                            <div className="border-t border-black w-64 pt-2 font-bold text-sm">Oficial Responsável pela OPM</div>
                                            <div className="text-xs text-gray-500">Assinatura</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="border-t border-black w-64 pt-2 font-bold text-sm">Chefe Seção de Frota / QFF</div>
                                            <div className="text-xs text-gray-500">Assinatura</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

/**
 * Mapeamento de Grupo → Programas disponíveis.
 * Fonte: banco de dados QffMeta (grupo × programa).
 * Se um grupo não estiver aqui, o campo Programa ficará como texto livre.
 */
const PROGRAMAS_POR_GRUPO: Record<string, string[]> = {
    "1": ["APOIO OPERAC", "FUNCIONAL", "HISTÓRICA", "RESERVA"],
    "2": ["BCM"],
    "3": ["HISTÓRICA", "T MISTO", "T PESSOAL"],
    "4": ["TRAILER"],
    "5": ["T ENFERMO"],
    "6": ["T CARGA SECA"],
    "7": ["HISTÓRICA", "MICROONIBUS", "ONIBUS"],
    "8": ["SIPOM"],
    "10": ["HISTÓRICA"],
    "11": ["HISTÓRICA", "RPM", "ROCAM"],
    "13": ["CAM TANQUE", "GUINCHO", "T CARGA SECA"],
    "14": ["HISTÓRICA", "MOTO ESCOLTA"],
    "15": ["FUNCIONAL", "RESERVA", "SIPOM", "T PESSOAL", "VEIC ESPECIAL", "VEÍCULOS ESPECIAIS - NAPS", "VIATURA DO NAPS"],
    "17": ["ESCOLTA"],
    "18": ["CAM TANQUE"],
    "19": ["ESCOLTA", "ESTAFETA", "HISTÓRICA", "RESERVA"],
    "20": ["FT"],
    "21": ["RP"],
    "22": ["HISTÓRICA", "T MISTO", "T PESSOAL"],
    "25": ["MOTO SIPOM", "VELADO"],
    "26": ["APOIO OPERAC"],
    "27": ["RESERVA"],
    "Gp7": ["MICROONIBUS"],
    "Gp19": ["ESTAFETA"],
};

function EditableVehicleRow({ veiculo, opms, onSave }: { veiculo: any, opms: any[], onSave: (data: any) => void }) {
    const [isEditing, setIsEditing] = useState(false);

    // Separar 'DESCARGA - 001/10/2026' em situacao e numero
    const initialSituacao = veiculo.situacao || "";
    const isDescarga = initialSituacao.toUpperCase().startsWith("DESCARGA");
    const initialDescargaParts = isDescarga ? initialSituacao.split(" - ") : [];

    const [formData, setFormData] = useState({
        prefixo: veiculo.prefixo || "",
        situacao: isDescarga ? "DESCARGA" : initialSituacao,
        numeroDescarga: initialDescargaParts[1] || "",
        grupo: veiculo.grupo || "",
        programa: veiculo.programa || "",
        opmCodigo: veiculo.opmCodigo || "",
    });

    const handleSave = () => {
        // Se a situação for DESCARGA, juntar o numero da descarga.
        const finalSituacao = formData.situacao === "DESCARGA" && formData.numeroDescarga.trim() !== ""
            ? `DESCARGA - ${formData.numeroDescarga.trim()}`
            : formData.situacao;

        onSave({
            ...formData,
            situacao: finalSituacao
        });
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <tr className="hover:bg-slate-50/80 transition-colors bg-blue-50/30">
                <td className="px-4 py-3">
                    <input
                        type="text"
                        value={formData.prefixo}
                        onChange={e => setFormData({ ...formData, prefixo: e.target.value })}
                        className="w-20 px-2 py-1 text-xs border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white"
                        placeholder="Prefixo"
                    />
                </td>
                <td className="px-4 py-3 text-slate-800 font-bold tracking-wide">{veiculo.placa}</td>
                <td className="px-4 py-3 text-slate-600 font-medium text-xs">{veiculo.marcaModelo}</td>
                <td className="px-4 py-3 text-slate-600 text-center">{veiculo.ano}</td>
                <td className="px-4 py-3 text-slate-600 font-medium">{veiculo.patrimonio}</td>
                <td className="px-4 py-3">
                    <div className="flex flex-col gap-1.5 w-full">
                        <select
                            value={formData.situacao}
                            onChange={e => setFormData({ ...formData, situacao: e.target.value })}
                            className="w-full min-w-[120px] px-2 py-1 text-xs font-semibold border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                            <option value="OPERACAO">OPERACAO</option>
                            <option value="RESERVA">RESERVA</option>
                            <option value="MANUTENCAO">MANUTENCAO</option>
                            <option value="SINISTRO">SINISTRO</option>
                            <option value="DESCARGA">DESCARGA</option>
                            {!["OPERACAO", "RESERVA", "MANUTENCAO", "SINISTRO", "DESCARGA"].includes(formData.situacao) && (
                                <option value={formData.situacao}>{formData.situacao}</option>
                            )}
                        </select>
                        {formData.situacao === "DESCARGA" && (
                            <input
                                type="text"
                                value={formData.numeroDescarga}
                                onChange={e => setFormData({ ...formData, numeroDescarga: e.target.value })}
                                className="w-full px-2 py-1 text-xs border border-blue-300 bg-blue-50/50 rounded focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nº Descarga (ex: 001/10/2026)"
                            />
                        )}
                    </div>
                </td>
                <td className="px-4 py-3 text-center">
                    <div className="flex flex-col gap-1 mb-1">
                        {/* Grupo — select com opções conhecidas */}
                        <select
                            value={formData.grupo}
                            onChange={e => {
                                const novoGrupo = e.target.value;
                                const programasDisponiveis = PROGRAMAS_POR_GRUPO[novoGrupo];
                                setFormData({
                                    ...formData,
                                    grupo: novoGrupo,
                                    // Reseta programa se o grupo mudou e tem lista específica
                                    programa: programasDisponiveis ? programasDisponiveis[0] : formData.programa
                                });
                            }}
                            className="w-24 px-2 py-1 text-xs border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white font-semibold"
                        >
                            {/* Listar todos os grupos conhecidos + o grupo atual caso não esteja na lista */}
                            {Object.keys(PROGRAMAS_POR_GRUPO).map(g => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                            {!PROGRAMAS_POR_GRUPO[formData.grupo] && formData.grupo && (
                                <option value={formData.grupo}>{formData.grupo}</option>
                            )}
                        </select>

                        {/* Programa — select dinâmico ou input livre */}
                        {PROGRAMAS_POR_GRUPO[formData.grupo] ? (
                            <select
                                value={formData.programa}
                                onChange={e => setFormData({ ...formData, programa: e.target.value })}
                                className="w-24 px-2 py-1 text-xs border border-blue-300 bg-blue-50/40 rounded focus:ring-blue-500 focus:border-blue-500 font-semibold"
                            >
                                {PROGRAMAS_POR_GRUPO[formData.grupo].map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                                {/* Manter o valor atual se ele não estiver na lista */}
                                {!PROGRAMAS_POR_GRUPO[formData.grupo].includes(formData.programa) && formData.programa && (
                                    <option value={formData.programa}>{formData.programa}</option>
                                )}
                            </select>
                        ) : (
                            <input
                                type="text"
                                value={formData.programa}
                                onChange={e => setFormData({ ...formData, programa: e.target.value })}
                                className="w-24 px-2 py-1 text-xs border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white"
                                placeholder="Programa"
                            />
                        )}
                    </div>
                </td>
                <td className="px-4 py-3">
                    <select
                        value={formData.opmCodigo}
                        onChange={e => setFormData({ ...formData, opmCodigo: e.target.value })}
                        className="w-48 px-2 py-1 text-[11px] font-medium border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                        {opms.map(o => (
                            <option key={o.codigo} value={o.codigo}>{o.nome} ({o.codigo})</option>
                        ))}
                    </select>
                </td>
                <td className="px-4 py-3 text-center flex gap-2 justify-center">
                    <button onClick={handleSave} className="text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-500 font-bold text-xs bg-emerald-100 px-3 py-1.5 rounded transition-all shadow-sm">Salvar</button>
                    <button onClick={() => setIsEditing(false)} className="text-slate-600 hover:text-slate-900 font-bold text-xs border border-slate-300 bg-slate-50 hover:bg-slate-200 px-3 py-1.5 rounded transition-all shadow-sm">Canc.</button>
                </td>
            </tr>
        );
    }

    return (
        <tr className="hover:bg-slate-50/80 transition-colors">
            <td className="px-4 py-3 font-bold text-slate-700">{veiculo.prefixo || "-"}</td>
            <td className="px-4 py-3 text-slate-600 font-medium">{veiculo.placa}</td>
            <td className="px-4 py-3 text-slate-500">{veiculo.marcaModelo}</td>
            <td className="px-4 py-3 text-slate-500 text-center">{veiculo.ano}</td>
            <td className="px-4 py-3 text-slate-500 selection:bg-blue-100">{veiculo.patrimonio}</td>
            <td className="px-4 py-3 text-center">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight ${veiculo.situacao.toUpperCase() === 'OPERACAO'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : veiculo.situacao.toUpperCase() === 'RESERVA'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                    {veiculo.situacao || 'Desconhecida'}
                </span>
            </td>
            <td className="px-4 py-3 text-center">
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-xs bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded transition-colors"
                >
                    Editar
                </button>
            </td>
        </tr>
    );
}
