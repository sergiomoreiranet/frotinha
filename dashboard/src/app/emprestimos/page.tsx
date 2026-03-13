"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Car, User, Calendar, Clock, RotateCcw } from "lucide-react"

type Veiculo = {
    id: string
    placa: string
    patrimonio: string | null
    prefixo: string | null
    marcaModelo: string | null
    ano: string | null
    cor: string | null
    pertence: string | null
    observacoes: string | null
    detentorAtual: string | null
    unidade: string | null
    statusUso: string
    ativo: boolean
}

type Emprestimo = {
    id: string
    veiculoId: string
    dataRetirada: string
    quemRetirou: string
    kmRetirada: number | null
    dataDevolucao: string | null
    quemEntregou: string | null
    kmDevolucao: number | null
    observacao: string | null
    veiculo: Veiculo
}

export default function EmprestimosPage() {
    const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('todos')

    // Estatísticas da Frota
    const [frotaStats, setFrotaStats] = useState({ disponivel: 0, emUso: 0, manutencao: 0, desabilitadas: 0, total: 0 })

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isReturnModalOpen, setIsReturnModalOpen] = useState(false)
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [selectedEmprestimo, setSelectedEmprestimo] = useState<Emprestimo | null>(null)
    const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null)

    // Forms states
    const [formRetirada, setFormRetirada] = useState({ veiculoId: '', quemRetirou: '', kmRetirada: '', observacao: '' })
    const [formDevolucao, setFormDevolucao] = useState({ quemEntregou: '', kmDevolucao: '', observacao: '' })
    const [veiculosDisponiveis, setVeiculosDisponiveis] = useState<Veiculo[]>([])
    const [veiculosLoading, setVeiculosLoading] = useState(false)

    useEffect(() => {
        fetchEmprestimos()
    }, [])

    const fetchEmprestimos = async () => {
        try {
            setLoading(true)
            const [empRes, statsRes] = await Promise.all([
                fetch('/api/emprestimos'),
                fetch('/api/veiculos-emprestimo') // Otimização futura: endpoint específico para contagem
            ])
            
            const empData = await empRes.json()
            const veiculosData = await statsRes.json()
            
            setEmprestimos(empData)

            // Calcular estatísticas a partir da frota ativa
            const ativos = veiculosData.filter((v: any) => v.ativo)
            const inativos = veiculosData.filter((v: any) => !v.ativo)
            
            setFrotaStats({
                disponivel: ativos.filter((v: any) => v.statusUso === 'DISPONIVEL').length,
                emUso: ativos.filter((v: any) => v.statusUso === 'EM_USO').length,
                manutencao: ativos.filter((v: any) => v.statusUso === 'MANUTENCAO').length,
                desabilitadas: inativos.length,
                total: ativos.length
            })

        } catch (error) {
            console.error("Erro ao buscar dados:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchVeiculosDisponiveis = async () => {
        try {
            setVeiculosLoading(true)
            const res = await fetch('/api/veiculos-emprestimo?status=disponivel')
            const data = await res.json()
            setVeiculosDisponiveis(data)
        } catch (error) {
            console.error("Erro ao buscar veículos:", error)
        } finally {
            setVeiculosLoading(false)
        }
    }

    const handleOpenDetailsModal = (veiculo: Veiculo) => {
        setSelectedVeiculo(veiculo)
        setIsDetailsModalOpen(true)
    }

    const handleOpenAddModal = () => {
        setFormRetirada({ veiculoId: '', quemRetirou: '', kmRetirada: '', observacao: '' })
        fetchVeiculosDisponiveis()
        setIsAddModalOpen(true)
    }

    const handleOpenReturnModal = (emprestimo: Emprestimo) => {
        setSelectedEmprestimo(emprestimo)
        setFormDevolucao({
            quemEntregou: '',
            kmDevolucao: '',
            observacao: emprestimo.observacao || ''
        })
        setIsReturnModalOpen(true)
    }

    const handleSubmitRetirada = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/emprestimos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    veiculoId: formRetirada.veiculoId,
                    quemRetirou: formRetirada.quemRetirou,
                    kmRetirada: formRetirada.kmRetirada,
                    observacao: formRetirada.observacao
                })
            })

            if (res.ok) {
                setIsAddModalOpen(false)
                fetchEmprestimos()
            } else {
                const data = await res.json()
                alert(data.error || 'Erro ao registrar retirada.')
            }
        } catch (error) {
            console.error('Erro ao enviar retirada:', error)
        }
    }

    const handleSubmitDevolucao = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedEmprestimo) return

        try {
            const res = await fetch(`/api/emprestimos/${selectedEmprestimo.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quemEntregou: formDevolucao.quemEntregou,
                    kmDevolucao: formDevolucao.kmDevolucao,
                    observacao: formDevolucao.observacao
                })
            })

            if (res.ok) {
                setIsReturnModalOpen(false)
                fetchEmprestimos()
            } else {
                const data = await res.json()
                alert(data.error || 'Erro ao registrar devolução.')
            }
        } catch (error) {
            console.error('Erro ao enviar devolução:', error)
        }
    }

    const filteredEmprestimos = emprestimos.filter(emp => {
        const searchLower = searchTerm.toLowerCase()
        const matchesSearch =
            emp.veiculo.placa.toLowerCase().includes(searchLower) ||
            (emp.veiculo.prefixo && emp.veiculo.prefixo.toLowerCase().includes(searchLower)) ||
            emp.quemRetirou.toLowerCase().includes(searchLower)

        if (statusFilter === 'em_uso') return matchesSearch && !emp.dataDevolucao
        if (statusFilter === 'devolvido') return matchesSearch && !!emp.dataDevolucao
        return matchesSearch
    })

    // Format date helper
    const formatDate = (dateString: string) => {
        if (!dateString) return '-'
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date)
    }

    return (
        <div className="flex-1 overflow-auto bg-slate-50 min-h-screen">
            <div className="p-8 max-w-7xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                            <Car className="w-6 h-6 text-blue-600" />
                            Controle de Empréstimos
                        </h1>
                        <p className="text-slate-500 mt-1">
                            Gerencie as retiradas e devoluções de viaturas
                        </p>
                    </div>
                    <button
                        onClick={handleOpenAddModal}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Nova Retirada
                    </button>
                </div>

                {/* Cards de Estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-slate-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Habilitadas</p>
                            <h3 className="text-2xl font-bold text-slate-900">{frotaStats.total}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-emerald-100 flex items-center gap-4">
                        <div className="bg-emerald-50 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-emerald-600/80">Disponíveis</p>
                            <h3 className="text-2xl font-bold text-emerald-700">{frotaStats.disponivel}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-amber-100 flex items-center gap-4">
                        <div className="bg-amber-50 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-amber-600/80">Em Uso</p>
                            <h3 className="text-2xl font-bold text-amber-700">{frotaStats.emUso}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-rose-100 flex items-center gap-4">
                        <div className="bg-rose-50 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-rose-600/80">Em Manutenção</p>
                            <h3 className="text-2xl font-bold text-rose-700">{frotaStats.manutencao}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-slate-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400">Desabilitadas</p>
                            <h3 className="text-2xl font-bold text-slate-600">{frotaStats.desabilitadas}</h3>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Buscar por placa, prefixo ou nome..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-700"
                        >
                            <option value="todos">Todos os Status</option>
                            <option value="em_uso">Em Uso</option>
                            <option value="devolvido">Devolvidos</option>
                        </select>
                    </div>
                </div>

                {/* Table/List */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Viatura</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Retirada</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Devolução</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600">Status</th>
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                                            <div className="flex justify-center items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                                Carregando empréstimos...
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredEmprestimos.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                                            Nenhum registro encontrado.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredEmprestimos.map((emp) => (
                                        <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span
                                                        className="font-semibold text-blue-600 cursor-pointer hover:underline"
                                                        onClick={() => handleOpenDetailsModal(emp.veiculo)}
                                                    >
                                                        {emp.veiculo.placa}
                                                    </span>
                                                    <span className="text-sm text-slate-500">
                                                        {emp.veiculo.prefixo ? `Prefixo: ${emp.veiculo.prefixo} • ` : ''}
                                                        {emp.veiculo.marcaModelo}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                                                        <User className="w-4 h-4 text-slate-400" />
                                                        {emp.quemRetirou}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {formatDate(emp.dataRetirada)}
                                                    </div>
                                                    {emp.kmRetirada && <div className="text-xs text-slate-400 mt-0.5">Km: {emp.kmRetirada}</div>}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {emp.dataDevolucao ? (
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                                                            <User className="w-4 h-4 text-slate-400" />
                                                            {emp.quemEntregou}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {formatDate(emp.dataDevolucao)}
                                                        </div>
                                                        {emp.kmDevolucao && <div className="text-xs text-slate-400 mt-0.5">Km: {emp.kmDevolucao}</div>}
                                                    </div>
                                                ) : (
                                                    <span className="text-sm text-slate-400 italic">Aguardando devolução</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${emp.dataDevolucao
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {emp.dataDevolucao ? 'Devolvido' : 'Em Uso'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {!emp.dataDevolucao && (
                                                    <button
                                                        onClick={() => handleOpenReturnModal(emp)}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                                                    >
                                                        <RotateCcw className="w-4 h-4" />
                                                        Devolver
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal Nova Retirada */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h3 className="text-lg font-bold text-slate-900">Registrar Retirada</h3>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="text-slate-400 hover:text-slate-600 rounded-lg p-1"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleSubmitRetirada} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Viatura (Patrimônio)</label>
                                    <select
                                        required
                                        value={formRetirada.veiculoId}
                                        onChange={(e) => setFormRetirada({ ...formRetirada, veiculoId: e.target.value })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex items-center bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-11"
                                    >
                                        <option value="">Selecione uma viatura</option>
                                        {veiculosLoading ? (
                                            <option disabled>Carregando veículos...</option>
                                        ) : (
                                            veiculosDisponiveis.map(v => (
                                                <option key={v.id} value={v.id}>
                                                    {v.placa} {v.prefixo ? `- ${v.prefixo}` : ''} ({v.marcaModelo || 'Sem modelo'})
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome de quem Retirou</label>
                                    <input
                                        type="text"
                                        required
                                        value={formRetirada.quemRetirou}
                                        onChange={(e) => setFormRetirada({ ...formRetirada, quemRetirou: e.target.value })}
                                        placeholder="Ex: Cb Lins"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex items-center h-11 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Km na Retirada</label>
                                    <input
                                        type="number"
                                        value={formRetirada.kmRetirada}
                                        onChange={(e) => setFormRetirada({ ...formRetirada, kmRetirada: e.target.value })}
                                        placeholder="Ex: 15200"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex items-center h-11 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Observação (Opcional)</label>
                                    <textarea
                                        value={formRetirada.observacao}
                                        onChange={(e) => setFormRetirada({ ...formRetirada, observacao: e.target.value })}
                                        placeholder="Adicione notas sobre a condição do veículo antes da retirada..."
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-24 resize-none"
                                    />
                                </div>
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
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Salvar Retirada
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modal Devolução */}
                {isReturnModalOpen && selectedEmprestimo && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-emerald-50 text-emerald-900">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <RotateCcw className="w-5 h-5" />
                                    Registrar Devolução
                                </h3>
                                <button
                                    onClick={() => setIsReturnModalOpen(false)}
                                    className="text-emerald-700 hover:text-emerald-900 rounded-lg p-1"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleSubmitDevolucao} className="p-6 space-y-4">
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
                                    <p className="text-sm text-slate-600 mb-1">Devolvendo Viatura:</p>
                                    <p className="font-semibold text-slate-900">
                                        {selectedEmprestimo.veiculo.placa} {selectedEmprestimo.veiculo.prefixo ? `- ${selectedEmprestimo.veiculo.prefixo}` : ''}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Retirado em {formatDate(selectedEmprestimo.dataRetirada)} por <span className="font-medium text-slate-700">{selectedEmprestimo.quemRetirou}</span>
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome de quem Entregou</label>
                                    <input
                                        type="text"
                                        required
                                        value={formDevolucao.quemEntregou}
                                        onChange={(e) => setFormDevolucao({ ...formDevolucao, quemEntregou: e.target.value })}
                                        placeholder="Ex: Cb Lins"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex items-center h-11 focus:ring-2 focus:emerald-500 focus:border-transparent outline-none"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Pode ser a mesma pessoa ou outra diferente de quem retirou.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Km na Devolução</label>
                                    <input
                                        type="number"
                                        value={formDevolucao.kmDevolucao}
                                        onChange={(e) => setFormDevolucao({ ...formDevolucao, kmDevolucao: e.target.value })}
                                        placeholder="Ex: 15250"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex items-center h-11 focus:ring-2 focus:emerald-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Observações Pós-Uso (Opcional)</label>
                                    <textarea
                                        value={formDevolucao.observacao}
                                        onChange={(e) => setFormDevolucao({ ...formDevolucao, observacao: e.target.value })}
                                        placeholder="Relatar avarias, quilometragem, necessidade de lavagem, etc..."
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 flex focus:ring-2 focus:emerald-500 focus:border-transparent outline-none h-24 resize-none"
                                    />
                                </div>
                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsReturnModalOpen(false)}
                                        className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Confirmar Devolução
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modal Detalhes Viatura */}
                {isDetailsModalOpen && selectedVeiculo && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-blue-50">
                                <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                                    <Car className="w-5 h-5" />
                                    Detalhes da Viatura - {selectedVeiculo.placa}
                                </h3>
                                <button
                                    onClick={() => setIsDetailsModalOpen(false)}
                                    className="text-blue-700 hover:text-blue-900 rounded-lg p-1"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-slate-500">Prefixo</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.prefixo || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Marca / Modelo</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.marcaModelo}</p>
                                    </div>
                                    <div className="col-span-2 border-t border-slate-100 mt-2 pt-4">
                                        <h4 className="font-semibold text-slate-900 mb-2">Informações da Planilha (SAF 2025)</h4>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Ano</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.ano || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Pertence</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.pertence || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Cor</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.cor || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Detentor Atual</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.detentorAtual || '-'}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm text-slate-500">Unidade</p>
                                        <p className="font-medium text-slate-900">{selectedVeiculo.unidade || '-'}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm text-slate-500">Observações Gerais</p>
                                        <div className="mt-1 p-3 bg-slate-50 rounded-lg text-sm text-slate-700 max-h-32 overflow-y-auto whitespace-pre-wrap border border-slate-100 italic">
                                            {selectedVeiculo.observacoes || 'Nenhuma observação registrada.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-end">
                                    <button
                                        onClick={() => setIsDetailsModalOpen(false)}
                                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
