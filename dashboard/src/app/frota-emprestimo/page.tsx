"use client"

import { useState, useEffect } from "react"
import { Search, Car, Settings2, ShieldCheck, ShieldAlert, BadgeCheck, AlertCircle, Plus, LayoutGrid, List } from "lucide-react"

type VeiculoEmprestimo = {
    id: string
    placa: string
    patrimonio: string | null
    prefixo: string | null
    marcaModelo: string | null
    ano: string | null
    cor: string | null
    pertence: string | null
    detentorAtual: string | null
    unidade: string | null
    statusUso: string
    ativo: boolean
    observacoes: string | null
    motivo: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: string | null
    localizacao: string | null
}

export default function FrotaEmprestimoPage() {
    const [veiculos, setVeiculos] = useState<VeiculoEmprestimo[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('TODOS')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
    
    // Nova Viatura Modal
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [veiculosGerais, setVeiculosGerais] = useState<any[]>([])
    const [selectedVeiculoBase, setSelectedVeiculoBase] = useState('')
    const [addLoading, setAddLoading] = useState(false)

    // Edição Modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [veiculoEditando, setVeiculoEditando] = useState<VeiculoEmprestimo | null>(null)
    const [editForm, setEditForm] = useState({ 
        placa: '',
        patrimonio: '',
        prefixo: '',
        marcaModelo: '',
        ano: '',
        cor: '',
        detentorAtual: '', 
        unidade: '', 
        observacoes: '',
        motivo: '',
        informacaoAdicional: '',
        tipoTracao: '',
        cambio: '',
        licenciamento: '',
        apresentacao: '',
        estribo: '',
        radio: '',
        grafismo: '',
        monocela: '',
        ultimaRevisao: '',
        localizacao: '',
        ativo: true
    })
    const [editLoading, setEditLoading] = useState(false)

    // Paginação
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    useEffect(() => {
        fetchVeiculos()
    }, [])

    const fetchVeiculos = async () => {
        try {
            setLoading(true)
            const res = await fetch('/api/veiculos-emprestimo')
            const data = await res.json()
            setVeiculos(data)
        } catch (error) {
            console.error("Erro ao buscar frota de empréstimo:", error)
        } finally {
            setLoading(false)
        }
    }

    const toggleAtivo = async (id: string, currentAtivo: boolean) => {
        try {
            // Note: I'll need a PUT endpoint for individual vehicle updates later
            // For now let's assume /api/veiculos-emprestimo/[id]
            const res = await fetch(`/api/veiculos-emprestimo/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ativo: !currentAtivo })
            })
            if (res.ok) fetchVeiculos()
        } catch (error) {
            console.error("Erro ao alternar status ativo:", error)
        }
    }

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/veiculos-emprestimo/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ statusUso: newStatus })
            })
            if (res.ok) fetchVeiculos()
        } catch (error) {
            console.error("Erro ao atualizar status de uso:", error)
        }
    }

    const fetchFrotaGeral = async () => {
        try {
            const res = await fetch('/api/veiculos')
            const data = await res.json()
            setVeiculosGerais(data)
        } catch (error) {
            console.error("Erro ao buscar frota geral:", error)
        }
    }

    const handleAddVeiculo = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedVeiculoBase) return

        const vBase = veiculosGerais.find(v => v.id === selectedVeiculoBase)
        if (!vBase) return

        try {
            setAddLoading(true)
            const res = await fetch('/api/veiculos-emprestimo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    placa: vBase.placa,
                    patrimonio: vBase.patrimonio,
                    prefixo: vBase.prefixo,
                    marcaModelo: vBase.marcaModelo,
                    ano: String(vBase.ano),
                    cor: vBase.cor || 'Branca',
                    pertence: vBase.opmCodigo, // Usando opmCodigo como pertence base
                    observacoes: 'Importado da frota geral'
                })
            })

            if (res.ok) {
                setIsAddModalOpen(false)
                setSelectedVeiculoBase('')
                fetchVeiculos()
            } else {
                const err = await res.json()
                alert(err.error || 'Erro ao adicionar viatura')
            }
        } catch (error) {
            console.error("Erro ao adicionar:", error)
        } finally {
            setAddLoading(false)
        }
    }

    const openEditModal = (veiculo: VeiculoEmprestimo) => {
        setVeiculoEditando(veiculo)
        setEditForm({
            placa: veiculo.placa || '',
            patrimonio: veiculo.patrimonio || '',
            prefixo: veiculo.prefixo || '',
            marcaModelo: veiculo.marcaModelo || '',
            ano: veiculo.ano || '',
            cor: veiculo.cor || '',
            detentorAtual: veiculo.detentorAtual || '',
            unidade: veiculo.unidade || '',
            observacoes: veiculo.observacoes || '',
            motivo: veiculo.motivo || '',
            informacaoAdicional: veiculo.informacaoAdicional || '',
            tipoTracao: veiculo.tipoTracao || '',
            cambio: veiculo.cambio || '',
            licenciamento: veiculo.licenciamento || '',
            apresentacao: veiculo.apresentacao || '',
            estribo: veiculo.estribo || '',
            radio: veiculo.radio || '',
            grafismo: veiculo.grafismo || '',
            monocela: veiculo.monocela || '',
            ultimaRevisao: veiculo.ultimaRevisao ? new Date(veiculo.ultimaRevisao).toISOString().split('T')[0] : '', // Format date for input type="date"
            localizacao: veiculo.localizacao || '',
            ativo: veiculo.ativo
        })
        setIsEditModalOpen(true)
    }

    const handleEditVeiculo = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!veiculoEditando) return

        try {
            setEditLoading(true)
            const res = await fetch(`/api/veiculos-emprestimo/${veiculoEditando.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm)
            })

            if (res.ok) {
                setIsEditModalOpen(false)
                setVeiculoEditando(null)
                fetchVeiculos()
            } else {
                const err = await res.json()
                alert(err.error || 'Erro ao atualizar viatura')
            }
        } catch (error) {
            console.error("Erro ao atualizar:", error)
        } finally {
            setEditLoading(false)
        }
    }

    const filteredVeiculos = veiculos.filter(v => {
        const matchSearch = v.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (v.prefixo && v.prefixo.toLowerCase().includes(searchTerm.toLowerCase()))
        
        const matchStatus = statusFilter === 'TODOS' || v.statusUso === statusFilter

        return matchSearch && matchStatus
    })

    // Lógica de Paginação
    const totalPages = Math.ceil(filteredVeiculos.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedVeiculos = filteredVeiculos.slice(startIndex, startIndex + itemsPerPage)

    // Redefinir a página para 1 quando a busca ou filtro mudar
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, statusFilter])

    return (
        <div className="flex-1 overflow-auto bg-slate-50 min-h-screen">
            <div className="p-8 max-w-7xl mx-auto space-y-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                            <Settings2 className="w-6 h-6 text-indigo-600" />
                            Gerenciamento de Frota (Empréstimos)
                        </h1>
                        <p className="text-slate-500 mt-1">
                            Habilite viaturas e controle a disponibilidade para o sistema de plantão
                        </p>
                    </div>
                    <div className="flex gap-2">
                         <div className="flex bg-slate-100 p-1 rounded-lg">
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                        </div>
                        <button 
                            onClick={() => {
                                fetchFrotaGeral()
                                setIsAddModalOpen(true)
                            }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            Nova Viatura
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Buscar por placa ou prefixo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                        />
                    </div>
                    <div className="sm:w-48">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700"
                        >
                            <option value="TODOS">Todos os Status</option>
                            <option value="DISPONIVEL">Disponível</option>
                            <option value="EM_USO">Em Uso</option>
                            <option value="MANUTENCAO">Manutenção</option>
                        </select>
                    </div>
                </div>

                {/* Main Content */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p>Carregando frota...</p>
                    </div>
                ) : filteredVeiculos.length === 0 ? (
                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-20 text-center">
                        <Car className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">Nenhuma viatura encontrada.</p>
                    </div>
                ) : viewMode === 'list' ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Viatura</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Origem/Detentor</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600 text-center">Controle</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600 text-center">Status de Uso</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {paginatedVeiculos.map(v => (
                                    <tr key={v.id} className={`hover:bg-slate-50/50 transition-colors ${!v.ativo ? 'opacity-60 grayscale' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{v.placa}</span>
                                                <span className="text-sm text-slate-500">
                                                    {v.prefixo || v.patrimonio || '-'} • {v.marcaModelo || 'Sem modelo'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-700">{v.detentorAtual || v.pertence || '-'}</span>
                                                <span className="text-xs text-slate-500">{v.unidade || '-'}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button 
                                                onClick={() => toggleAtivo(v.id, v.ativo)}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                                                    v.ativo 
                                                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                                                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                                                }`}
                                            >
                                                {v.ativo ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                                                {v.ativo ? 'HABILITADA' : 'DESATIVADA'}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 flex justify-center">
                                            <select 
                                                value={v.statusUso}
                                                onChange={(e) => updateStatus(v.id, e.target.value)}
                                                className={`text-xs font-bold py-1 px-2 rounded-lg border-0 outline-none cursor-pointer ${
                                                    v.statusUso === 'DISPONIVEL' ? 'bg-blue-100 text-blue-700' :
                                                    v.statusUso === 'EM_USO' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-rose-100 text-rose-700'
                                                }`}
                                            >
                                                <option value="DISPONIVEL">DISPONÍVEL</option>
                                                <option value="EM_USO">EM USO</option>
                                                <option value="MANUTENCAO">MANUTENÇÃO</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => openEditModal(v)}
                                                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium underline"
                                            >
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedVeiculos.map(v => (
                            <div key={v.id} className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md flex flex-col ${!v.ativo ? 'opacity-60 grayscale' : ''}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-indigo-50 p-2.5 rounded-xl">
                                        <Car className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <button 
                                        onClick={() => toggleAtivo(v.id, v.ativo)}
                                        className={`p-1.5 rounded-lg transition-colors ${v.ativo ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 bg-slate-100'}`}
                                    >
                                        {v.ativo ? <BadgeCheck className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                                    </button>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{v.placa}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-4">{v.prefixo || 'Sem prefixo'}</p>
                                
                                <div className="space-y-3 pt-4 border-t border-slate-50 flex-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Status</span>
                                        <select 
                                            value={v.statusUso}
                                            onChange={(e) => updateStatus(v.id, e.target.value)}
                                            className="font-bold outline-none cursor-pointer bg-transparent"
                                        >
                                            <option value="DISPONIVEL">Disponível</option>
                                            <option value="EM_USO">Em Uso</option>
                                            <option value="MANUTENCAO">Manutenção</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Detentor</span>
                                        <span className="text-slate-900 font-medium truncate ml-4" title={v.detentorAtual || ''}>
                                            {v.detentorAtual || '-'}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => openEditModal(v)}
                                    className="w-full mt-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-lg transition-colors text-sm"
                                >
                                    Editar Informações
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Controles de Paginação */}
                {!loading && filteredVeiculos.length > 0 && (
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 mt-4">
                        <span className="text-sm text-slate-500">
                            Mostrando <span className="font-semibold text-slate-900">{startIndex + 1}</span> até <span className="font-semibold text-slate-900">{Math.min(startIndex + itemsPerPage, filteredVeiculos.length)}</span> de <span className="font-semibold text-slate-900">{filteredVeiculos.length}</span> viaturas
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Anterior
                            </button>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Próxima
                            </button>
                        </div>
                    </div>
                )}

                {/* Modal Nova Viatura */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="text-lg font-bold text-slate-900">Habilitar Nova Viatura</h3>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="text-slate-400 hover:text-slate-600 rounded-lg p-1"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleAddVeiculo} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Selecionar da Frota Geral</label>
                                    <select
                                        required
                                        value={selectedVeiculoBase}
                                        onChange={(e) => setSelectedVeiculoBase(e.target.value)}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none h-11"
                                    >
                                        <option value="">Selecione uma viatura...</option>
                                        {veiculosGerais
                                            .filter(vg => !veiculos.some(ve => ve.placa === vg.placa)) // Filtra as que já estão na frota de empréstimo
                                            .map(v => (
                                                <option key={v.id} value={v.id}>
                                                    {v.placa} - {v.prefixo || 'S/P'} ({v.marcaModelo})
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <p className="text-xs text-slate-500 mt-2 italic">
                                        * Apenas viaturas que ainda não estão no controle de empréstimos são exibidas.
                                    </p>
                                </div>
                                
                                {selectedVeiculoBase && (
                                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                        <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Dados do Veículo</p>
                                        {(() => {
                                            const v = veiculosGerais.find(x => x.id === selectedVeiculoBase)
                                            return (
                                                <div className="text-sm space-y-1">
                                                    <p><strong>Placa:</strong> {v.placa}</p>
                                                    <p><strong>Prefixo:</strong> {v.prefixo || '-'}</p>
                                                    <p><strong>Patrimônio:</strong> {v.patrimonio || '-'}</p>
                                                    <p><strong>Modelo:</strong> {v.marcaModelo}</p>
                                                </div>
                                            )
                                        })()}
                                    </div>
                                )}

                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsAddModalOpen(false)}
                                        className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={addLoading || !selectedVeiculoBase}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                                    >
                                        {addLoading ? 'Adicionando...' : 'Habilitar Viatura'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modal Edição Viatura */}
                {isEditModalOpen && veiculoEditando && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="text-lg font-bold text-slate-900">Editar Viatura ({veiculoEditando.placa})</h3>
                                <button
                                    onClick={() => {
                                        setIsEditModalOpen(false)
                                        setVeiculoEditando(null)
                                    }}
                                    className="text-slate-400 hover:text-slate-600 rounded-lg p-1"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleEditVeiculo} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Placa *</label>
                                        <input
                                            required
                                            type="text"
                                            value={editForm.placa}
                                            onChange={(e) => setEditForm({ ...editForm, placa: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Ex: ABC1D23"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Patrimônio</label>
                                        <input
                                            type="text"
                                            value={editForm.patrimonio}
                                            onChange={(e) => setEditForm({ ...editForm, patrimonio: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Opcional"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Prefixo</label>
                                        <input
                                            type="text"
                                            value={editForm.prefixo}
                                            onChange={(e) => setEditForm({ ...editForm, prefixo: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Ex: M-01234"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Modelo</label>
                                        <input
                                            type="text"
                                            value={editForm.marcaModelo}
                                            onChange={(e) => setEditForm({ ...editForm, marcaModelo: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Ex: GM/SPIN"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Ano</label>
                                        <input
                                            type="text"
                                            value={editForm.ano}
                                            onChange={(e) => setEditForm({ ...editForm, ano: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Ex: 2023"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Cor</label>
                                        <input
                                            type="text"
                                            value={editForm.cor}
                                            onChange={(e) => setEditForm({ ...editForm, cor: e.target.value })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            placeholder="Ex: Branca"
                                        />
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 pt-4 mt-2">
                                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">Dados de Lotação</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Detentor Atual</label>
                                            <input
                                                type="text"
                                                value={editForm.detentorAtual}
                                                onChange={(e) => setEditForm({ ...editForm, detentorAtual: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                                placeholder="Ex: Reserva do Comando"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Unidade</label>
                                            <input
                                                type="text"
                                                value={editForm.unidade}
                                                onChange={(e) => setEditForm({ ...editForm, unidade: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                                placeholder="Ex: 1º BPM/M"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 pt-4 mt-2">
                                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">Informações Adicionais (Controle VTR)</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Motivo</label>
                                            <input
                                                type="text"
                                                value={editForm.motivo}
                                                onChange={(e) => setEditForm({ ...editForm, motivo: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Tração</label>
                                            <input
                                                type="text"
                                                value={editForm.tipoTracao}
                                                onChange={(e) => setEditForm({ ...editForm, tipoTracao: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Câmbio</label>
                                            <input
                                                type="text"
                                                value={editForm.cambio}
                                                onChange={(e) => setEditForm({ ...editForm, cambio: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Licenciamento</label>
                                            <input
                                                type="text"
                                                value={editForm.licenciamento}
                                                onChange={(e) => setEditForm({ ...editForm, licenciamento: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Apresentação</label>
                                            <input
                                                type="text"
                                                value={editForm.apresentacao}
                                                onChange={(e) => setEditForm({ ...editForm, apresentacao: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Localização</label>
                                            <input
                                                type="text"
                                                value={editForm.localizacao}
                                                onChange={(e) => setEditForm({ ...editForm, localizacao: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Estribo</label>
                                            <input
                                                type="text"
                                                value={editForm.estribo}
                                                onChange={(e) => setEditForm({ ...editForm, estribo: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Rádio</label>
                                            <input
                                                type="text"
                                                value={editForm.radio}
                                                onChange={(e) => setEditForm({ ...editForm, radio: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Grafismo</label>
                                            <input
                                                type="text"
                                                value={editForm.grafismo}
                                                onChange={(e) => setEditForm({ ...editForm, grafismo: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Monocela</label>
                                            <input
                                                type="text"
                                                value={editForm.monocela}
                                                onChange={(e) => setEditForm({ ...editForm, monocela: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Última Revisão</label>
                                            <input
                                                type="date"
                                                value={editForm.ultimaRevisao}
                                                onChange={(e) => setEditForm({ ...editForm, ultimaRevisao: e.target.value })}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Observações / Informação Adicional</label>
                                    <textarea
                                        value={editForm.informacaoAdicional}
                                        onChange={(e) => setEditForm({ ...editForm, informacaoAdicional: e.target.value })}
                                        rows={2}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none mb-2"
                                        placeholder="Informação Adicional (Controle VTR)"
                                    />
                                    <textarea
                                        value={editForm.observacoes}
                                        onChange={(e) => setEditForm({ ...editForm, observacoes: e.target.value })}
                                        rows={3}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                                        placeholder="Observações Gerais..."
                                    />
                                </div>
                                
                                <div className="border border-slate-200 bg-slate-50 p-4 rounded-xl flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-sm">Status da Viatura</h4>
                                        <p className="text-xs text-slate-500">Define se a viatura aparecerá na lista para ser emprestada.</p>
                                    </div>
                                    <select
                                        value={editForm.ativo ? "true" : "false"}
                                        onChange={(e) => setEditForm({ ...editForm, ativo: e.target.value === "true" })}
                                        className={`text-sm font-bold py-2 px-3 rounded-lg border-0 outline-none cursor-pointer ${
                                            editForm.ativo 
                                            ? 'bg-emerald-100 text-emerald-700' 
                                            : 'bg-slate-200 text-slate-600'
                                        }`}
                                    >
                                        <option value="true">HABILITADA (Ativa)</option>
                                        <option value="false">DESATIVADA (Inativa)</option>
                                    </select>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEditModalOpen(false)
                                            setVeiculoEditando(null)
                                        }}
                                        className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={editLoading}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                                    >
                                        {editLoading ? 'Salvando...' : 'Salvar Alterações'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
