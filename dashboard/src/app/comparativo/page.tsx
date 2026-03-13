"use client";

import { useState, useEffect } from "react";
import { Upload, ArrowRightLeft, FileSpreadsheet, Loader2, Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function ComparativoPage() {
    // Estados do Upload
    const [file, setFile] = useState<File | null>(null);
    const [mesUpload, setMesUpload] = useState<string>("");
    const [uploading, setUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });

    // Estados da Comparação
    const [mesesDisponiveis, setMesesDisponiveis] = useState<{ mes: string, total: number }[]>([]);
    const [mesA, setMesA] = useState<string>(""); // Mês anterior
    const [mesB, setMesB] = useState<string>(""); // Mês atual
    const [comparando, setComparando] = useState(false);
    const [resultado, setResultado] = useState<any[] | null>(null);

    const carregarMeses = async () => {
        try {
            const res = await fetch("/api/snapshots/list");
            const data = await res.json();
            if (data.success) {
                setMesesDisponiveis(data.dados);
            }
        } catch (error) {
            console.error("Erro ao carregar meses", error);
        }
    };

    useEffect(() => {
        carregarMeses();
    }, []);


    const handleUpload = async () => {
        if (!file || !mesUpload) {
            setUploadStatus({ type: "error", message: "Selecione a planilha e digite o Mês/Ano (Ex: 2025-10)." });
            return;
        }

        setUploading(true);
        setUploadStatus({ type: null, message: "" });

        const formData = new FormData();
        formData.append("file", file);
        formData.append("mesReferencia", mesUpload);

        try {
            const response = await fetch("/api/snapshots/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Erro no upload");

            setUploadStatus({ type: "success", message: `Sucesso! ${data.veiculosCount} veículos inseridos para o mês ${mesUpload}.` });
            setFile(null);
            setMesUpload("");
            carregarMeses(); // Atualiza dropdowns

        } catch (err: any) {
            setUploadStatus({ type: "error", message: err.message });
        } finally {
            setUploading(false);
        }
    };

    const handleCompare = async () => {
        if (!mesA || !mesB) {
            alert("Selecione os dois meses para comparar.");
            return;
        }

        setComparando(true);
        try {
            const res = await fetch(`/api/snapshots/compare?mesAnterior=${mesA}&mesAtual=${mesB}`);
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Erro ao comparar");

            setResultado(data.dados);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setComparando(false);
        }
    };

    const exportarExcel = () => {
        if (!resultado || resultado.length === 0) return;

        const dataToExport = resultado.map(item => ({
            "Patrimônio": item.patrimonio,
            "Placa": item.placa || "-",
            "Marca/Modelo": item.marcaModelo || "-",
            "Ano": item.ano || "-",
            "Grupo": item.grupo || "-",
            "Programa": item.programa || "-",
            "OPM Código": item.opmCodigo,
            "OPM Nome": item.opm?.nome || "-",
            "Situação": item.situacao || "-"
        }));

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(dataToExport);
        XLSX.utils.book_append_sheet(wb, ws, "Excluídos");
        XLSX.writeFile(wb, `Excluidos_${mesA}_para_${mesB}.xlsx`);
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Comparativo Mensal de Frota</h1>
                <p className="text-gray-500 mt-2">Faça o upload de planilhas de meses variados e em seguida compare o que foi alterado/excluído.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UPLOAD SECTION */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                            <Upload className="w-5 h-5 text-blue-500" />
                            1. Upload do Mês
                        </h2>

                        <div className="mt-4 space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mês de Referência (Ex: 2025-10)</label>
                                <input
                                    type="month"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={mesUpload}
                                    onChange={e => setMesUpload(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Planilha Excel (.xls, .xlsx)</label>
                                <div className="border border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition relative group cursor-pointer">
                                    <input
                                        type="file"
                                        accept=".xls, .xlsx"
                                        onChange={e => setFile(e.target.files?.[0] || null)}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    />
                                    <FileSpreadsheet className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                                    <p className="text-sm font-medium text-gray-600">
                                        {file ? file.name : "Clique para selecionar o arquivo"}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={handleUpload}
                                disabled={uploading}
                                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50 flex justify-center items-center gap-2"
                            >
                                {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                {uploading ? "Salvando..." : "Salvar no Banco"}
                            </button>

                            {uploadStatus.message && (
                                <div className={`p-3 rounded-lg text-sm mt-2 ${uploadStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {uploadStatus.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* COMPARE SECTION */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                            <ArrowRightLeft className="w-5 h-5 text-indigo-500" />
                            2. Comparar Meses
                        </h2>

                        <div className="mt-4 space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mês Anterior</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                        value={mesA} onChange={e => setMesA(e.target.value)}
                                    >
                                        <option value="">Selecione...</option>
                                        {mesesDisponiveis.map(m => (
                                            <option key={m.mes} value={m.mes}>{m.mes} ({m.total} veíc.)</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mês Atual</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                        value={mesB} onChange={e => setMesB(e.target.value)}
                                    >
                                        <option value="">Selecione...</option>
                                        {mesesDisponiveis.map(m => (
                                            <option key={m.mes} value={m.mes}>{m.mes} ({m.total} veíc.)</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleCompare}
                                disabled={comparando || !mesA || !mesB}
                                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50 flex justify-center items-center gap-2"
                            >
                                {comparando ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRightLeft className="w-5 h-5" />}
                                {comparando ? "Analisando..." : "Comparar (Achar Excluídos)"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RESULTS SECTION */}
            {resultado && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">-{resultado.length}</span>
                            Veículos presentes em {mesA} e ausentes em {mesB} (Excluídos/Descarga)
                        </h3>
                        <button
                            onClick={exportarExcel}
                            className="text-sm flex items-center gap-1.5 bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1.5 rounded-lg font-medium transition"
                        >
                            <Download className="w-4 h-4" />
                            Exportar Excel
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left whitespace-nowrap">
                            <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Patrimônio</th>
                                    <th className="px-6 py-4 font-semibold">Placa</th>
                                    <th className="px-6 py-4 font-semibold">Marca/Modelo</th>
                                    <th className="px-6 py-4 font-semibold">OPM</th>
                                    <th className="px-6 py-4 font-semibold">Situação (em {mesA})</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {resultado.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                            Nenhuma diferença encontrada entre os meses selecionados.
                                        </td>
                                    </tr>
                                ) : (
                                    resultado.map((v, i) => (
                                        <tr key={i} className="hover:bg-red-50/30 transition-colors">
                                            <td className="px-6 py-3 font-medium text-gray-900">{v.patrimonio}</td>
                                            <td className="px-6 py-3 text-gray-600">{v.placa || "-"}</td>
                                            <td className="px-6 py-3 text-gray-600">{v.marcaModelo || "-"}</td>
                                            <td className="px-6 py-3 text-gray-600">{v.opmCodigo} - {v.opm?.nome || ""}</td>
                                            <td className="px-6 py-3 text-gray-600">
                                                {v.situacao ? (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                                        {v.situacao}
                                                    </span>
                                                ) : "-"}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
