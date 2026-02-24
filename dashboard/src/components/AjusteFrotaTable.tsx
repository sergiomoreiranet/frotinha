"use client"
import { useState, useMemo } from "react"

type AjusteFrotaTableProps = {
    opms: any[];
    metas: any[];
    veiculos: any[];
    macroComandos: string[];
}

export function AjusteFrotaTable({ opms, metas, veiculos, macroComandos }: AjusteFrotaTableProps) {
    // 1. Estado do filtro (Inicia com o primeiro comando disponível ou vazio)
    const [selectedComando, setSelectedComando] = useState<string>(macroComandos[0] || "")

    // 2. Filtrar dados baseado no Macro Comando selecionado
    const { filteredOpms, colunasArr, relatorio } = useMemo(() => {
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

        // Popular com Veiculos Existentes (apenas das OPMs filtradas)
        veiculos.forEach(v => {
            if (!v.opmCodigo || !fOpmIds.has(v.opmCodigo)) return;

            const g = v.grupo || "Sem Grupo"
            const p = v.programa || "Sem Programa"

            if (!rel[v.opmCodigo]) rel[v.opmCodigo] = {}
            if (!rel[v.opmCodigo][g]) rel[v.opmCodigo][g] = {}

            if (!rel[v.opmCodigo][g][p]) {
                rel[v.opmCodigo][g][p] = { fixo: 0, existente: 0 }
                colSet.add(`${g}|${p}`)
            }

            rel[v.opmCodigo][g][p].existente += 1;
        })

        const cArr = Array.from(colSet).sort()

        return { filteredOpms: fOpms, colunasArr: cArr, relatorio: rel }
    }, [selectedComando, opms, metas, veiculos])

    // 3. Estado do Modal de Detalhes de Veículos
    const [selectedCell, setSelectedCell] = useState<{ opm: any, grupo: string, programa: string, fixo: number, existente: number } | null>(null)

    const modalVeiculos = useMemo(() => {
        if (!selectedCell) return [];
        return veiculos.filter(v =>
            v.opmCodigo === selectedCell.opm.codigo &&
            (v.grupo || "Sem Grupo") === selectedCell.grupo &&
            (v.programa || "Sem Programa") === selectedCell.programa
        );
    }, [selectedCell, veiculos])

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Ajuste de Frota OPMs</h1>
                    <p className="text-slate-500 mt-1">Ambiente de conferência, validação e configuração das viaturas locais.</p>
                </div>
                <div className="flex gap-4 items-center">
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
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {modalVeiculos.map(v => (
                                            <tr key={v.id} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="px-4 py-3 font-bold text-slate-700">{v.prefixo || "-"}</td>
                                                <td className="px-4 py-3 text-slate-600 font-medium">{v.placa}</td>
                                                <td className="px-4 py-3 text-slate-500">{v.marcaModelo}</td>
                                                <td className="px-4 py-3 text-slate-500 text-center">{v.ano}</td>
                                                <td className="px-4 py-3 text-slate-500 selection:bg-blue-100">{v.patrimonio}</td>
                                                <td className="px-4 py-3 text-center">
                                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight ${v.situacao.toUpperCase() === 'OPERACAO'
                                                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                            : v.situacao.toUpperCase() === 'RESERVA'
                                                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                                                        }`}>
                                                        {v.situacao || 'Desconhecida'}
                                                    </span>
                                                </td>
                                            </tr>
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
        </div>
    )
}
