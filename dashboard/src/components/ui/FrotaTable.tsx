"use client"

import { useState } from "react"
import { X, Search } from "lucide-react"

type Veiculo = {
    id: string;
    placa: string;
    marcaModelo: string;
    ano: number;
    prefixo: string | null;
    situacao: string | null;
}

type FrotaTableProps = {
    colunasArr: string[];
    opms: any[];
    relatorio: Record<string, Record<string, Record<string, {fixo: number, existente: number, veiculos: Veiculo[]}>>>;
}

export function FrotaTable({ colunasArr, opms, relatorio }: FrotaTableProps) {
    const [modalData, setModalData] = useState<{
        opmNome: string;
        grupo: string;
        programa: string;
        veiculos: Veiculo[];
    } | null>(null)

    const [searchTerm, setSearchTerm] = useState("")

    const filteredOpms = opms.filter(o => o.nome.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[70vh]">
            <div className="p-4 border-b border-slate-200 flex items-center bg-slate-50/50">
                <div className="relative w-72">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Buscar OPM..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
                    />
                </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full text-sm text-left whitespace-nowrap border-collapse">
                    <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs sticky top-0 z-20 shadow-sm">
                        <tr>
                            <th className="px-6 py-4 sticky left-0 z-30 bg-slate-50 border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] w-80">
                                OPM (Organização)
                            </th>
                            {colunasArr.map(col => {
                                const [g, p] = col.split('|')
                                return (
                                    <th key={col} className="px-6 py-4 border-r border-slate-200 text-center min-w-[120px]">
                                        <div className="font-bold text-slate-700 truncate max-w-[150px]" title={g}>{g}</div>
                                        <div className="text-[10px] mt-1 text-slate-400 font-semibold truncate max-w-[150px]" title={p}>{p}</div>
                                        <div className="text-[10px] mt-2 bg-slate-200 px-2 py-0.5 rounded-full inline-block">Fixo / Exist.</div>
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredOpms.map((opm) => (
                            <tr key={opm.id} className="hover:bg-blue-50/30 transition-colors">
                                <td className="px-6 py-4 sticky left-0 z-10 bg-white border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] group-hover:bg-blue-50/50">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-700">{opm.nome}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">{opm.municipio || "Sem município"}</span>
                                    </div>
                                </td>
                                
                                {colunasArr.map(col => {
                                    const [g, p] = col.split('|')
                                    const data = relatorio[opm.codigo]?.[g]?.[p]
                                    
                                    if(!data) {
                                        return <td key={col} className="px-6 py-4 border-r border-slate-100 text-center text-slate-300 bg-slate-50/30">-</td>
                                    }

                                    const f = data.fixo
                                    const e = data.existente
                                    const vtrs = data.veiculos || []
                                    
                                    // Regra de cores Exigida
                                    let colorClass = "text-slate-800" // Preto (ideal)
                                    let bgClass = ""
                                    if (e < f) {
                                        colorClass = "text-red-600" // Vermelho
                                        bgClass = "bg-red-50/50"
                                    }
                                    if (e > f) {
                                        colorClass = "text-emerald-600" // Verde
                                        bgClass = "bg-emerald-50/50"
                                    }

                                    return (
                                        <td key={col} className={`px-6 py-4 border-r border-slate-100 text-center align-middle ${bgClass} transition-colors`}>
                                            <div className="text-base tracking-tight flex items-center justify-center font-bold">
                                                <span className="text-slate-400 font-normal text-sm w-6 text-right">{f}</span>
                                                <span className="mx-1.5 text-slate-300 font-normal text-sm">/</span>
                                                <button 
                                                    onClick={() => setModalData({
                                                        opmNome: opm.nome,
                                                        grupo: g,
                                                        programa: p,
                                                        veiculos: vtrs
                                                    })}
                                                    className={`w-6 text-left cursor-pointer hover:opacity-70 transition-opacity ${colorClass} ${e > 0 ? 'underline decoration-2 underline-offset-4' : ''}`}
                                                    disabled={e === 0}
                                                >
                                                    {e}
                                                </button>
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL POPUP - Detalhes das Viaturas */}
            {modalData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                        
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    Viaturas Existentes: <span className="text-blue-600">{modalData.opmNome}</span>
                                </h3>
                                <div className="text-sm text-slate-500 mt-1 flex gap-2 items-center">
                                    <span className="font-medium bg-white px-2 py-0.5 rounded border shadow-sm">{modalData.grupo}</span>
                                    <span>&rarr;</span>
                                    <span className="font-medium bg-white px-2 py-0.5 rounded border shadow-sm truncate max-w-xs">{modalData.programa}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => setModalData(null)}
                                className="p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-6 flex-1">
                            {modalData.veiculos.length === 0 ? (
                                <div className="text-center py-10 text-slate-500 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">?</div>
                                    <p>Nenhum veículo encontrado para este cruzamento.</p>
                                </div>
                            ) : (
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-100 text-slate-600 font-semibold rounded-lg">
                                        <tr>
                                            <th className="px-4 py-3 rounded-tl-lg">Prefixo</th>
                                            <th className="px-4 py-3">Placa</th>
                                            <th className="px-4 py-3">Marca / Modelo</th>
                                            <th className="px-4 py-3 text-center">Ano</th>
                                            <th className="px-4 py-3 rounded-tr-lg">Situação</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {modalData.veiculos.map((v, i) => (
                                            <tr key={v.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3 font-medium text-slate-900">{v.prefixo || "-"}</td>
                                                <td className="px-4 py-3 font-mono text-slate-600">{v.placa}</td>
                                                <td className="px-4 py-3 text-slate-600">{v.marcaModelo}</td>
                                                <td className="px-4 py-3 text-center">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                        v.ano >= 2020 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                                                    }`}>
                                                        {v.ano}
                                                    </span>
                                                </td>
                                                <td className={`px-4 py-3 text-xs font-semibold ${
                                                    v.situacao?.toLowerCase().includes('operacao') ? 'text-emerald-600' : 'text-amber-600'
                                                }`}>
                                                    {v.situacao || "Desconhecido"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
