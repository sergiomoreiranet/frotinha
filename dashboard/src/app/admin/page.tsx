"use client"
import { useState } from "react"
import { Upload, FileDown, CheckCircle2, AlertCircle, Loader2, Play, Car } from "lucide-react"

export default function AdminPage() {
    const [qffFiles, setQffFiles] = useState<File[]>([])
    const [frotaFile, setFrotaFile] = useState<File | null>(null)

    const [qffStatus, setQffStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [frotaStatus, setFrotaStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const [message, setMessage] = useState("")

    const handleQffUpload = async () => {
        if (!qffFiles || qffFiles.length === 0) return
        setQffStatus("loading")
        setMessage("")
        const formData = new FormData()
        qffFiles.forEach(file => formData.append("files", file))

        try {
            const res = await fetch("/api/upload/qff", { method: "POST", body: formData })
            const data = await res.json()
            if (res.ok) {
                setQffStatus("success")
                setMessage(`QFF processado (${qffFiles.length} arquivos). OPMs afetadas: ${data.opmsCount}`)
                setQffFiles([]) // limpar após envio
            } else throw new Error(data.error)
        } catch (e: any) {
            setQffStatus("error")
            setMessage(e.message || "Erro desconhecido no QFF")
        }
    }

    const handleFrotaUpload = async () => {
        if (!frotaFile) return
        setFrotaStatus("loading")
        setMessage("")
        const formData = new FormData()
        formData.append("file", frotaFile)

        try {
            const res = await fetch("/api/upload/frota", { method: "POST", body: formData })
            const data = await res.json()
            if (res.ok) {
                setFrotaStatus("success")
                setMessage(`Frota processada! Veículos Inseridos: ${data.veiculosCount}`)
                setFrotaFile(null)
            } else throw new Error(data.error)
        } catch (e: any) {
            setFrotaStatus("error")
            setMessage(e.message || "Erro desconhecido na Frota")
        }
    }

    return (
        <div className="space-y-8 max-w-5xl">
            <header>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Administração & Sincronização</h1>
                <p className="text-slate-500 mt-2">Atualize aqui a base de dados subindo as planilhas oficiais de controle.</p>
            </header>

            {message && (
                <div className={`p-4 rounded-xl border flex gap-3 items-center ${qffStatus === 'error' || frotaStatus === 'error' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                    {(qffStatus === 'error' || frotaStatus === 'error') ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    <span className="font-medium text-sm">{message}</span>
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {/* Card QFF */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                            <FileDown className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Planilha de Metas (QFF)</h3>
                            <p className="text-xs text-slate-500">Múltiplos arquivos suportados</p>
                        </div>
                    </div>
                    <div className="flex-1 my-4 border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors relative cursor-pointer">
                        <input type="file" multiple accept=".xlsx, .xls" onChange={e => setQffFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                        <Upload className="w-8 h-8 text-slate-400 mb-3" />
                        <span className="text-sm font-medium text-slate-700">
                            {qffFiles.length > 0 ? `${qffFiles.length} arquivo(s) selecionado(s)` : "Clique para selecionar ou arraste os arquivos"}
                        </span>
                    </div>
                    <button
                        disabled={qffFiles.length === 0 || qffStatus === 'loading'}
                        onClick={handleQffUpload}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2"
                    >
                        {qffStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-4 h-4" />}
                        Sincronizar QFF
                    </button>
                </div>

                {/* Card Frota Atual */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                            <Car className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Planilha da Frota Existente</h3>
                            <p className="text-xs text-slate-500">Ex: FROTA 02JAN26.xls</p>
                        </div>
                    </div>
                    <div className="flex-1 my-4 border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors relative cursor-pointer">
                        <input type="file" accept=".xlsx, .xls" onChange={e => setFrotaFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                        <Upload className="w-8 h-8 text-slate-400 mb-3" />
                        <span className="text-sm font-medium text-slate-700">
                            {frotaFile ? frotaFile.name : "Clique para selecionar ou arraste o arquivo"}
                        </span>
                        {frotaFile && <span className="text-xs text-slate-500 mt-1">{(frotaFile.size / 1024 / 1024).toFixed(2)} MB</span>}
                    </div>
                    <button
                        disabled={!frotaFile || frotaStatus === 'loading'}
                        onClick={handleFrotaUpload}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2"
                    >
                        {frotaStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-4 h-4" />}
                        Sincronizar Veículos Atuais
                    </button>
                </div>
            </div>
        </div>
    )
}
