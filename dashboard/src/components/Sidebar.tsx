"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Database, Car, LogOut } from "lucide-react"

export function Sidebar() {
    const pathname = usePathname()

    const links = [
        { name: "Painel de Frota", href: "/", icon: BarChart3 },
        { name: "Ajuste de Frota OPMs", href: "/opms", icon: Car },
        { name: "Administração", href: "/admin", icon: Database },
    ]

    return (
        <div className="w-64 bg-slate-900 text-white flex flex-col min-h-screen transition-all">
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Car className="w-5 h-5" />
                    </div>
                    <span>Frota<span className="text-blue-500">Analytics</span></span>
                </div>
            </div>

            <div className="flex-1 py-6 px-3">
                <div className="mb-4 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Menu Principal
                </div>
                <nav className="space-y-1">
                    {links.map((link) => {
                        const Icon = link.icon
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                    : "text-slate-400 hover:text-slate-50 hover:bg-slate-800"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 rounded-lg hover:text-red-400 hover:bg-slate-800 transition-colors w-full">
                    <LogOut className="w-5 h-5" />
                    Sair do Sistema
                </button>
            </div>
        </div>
    )
}
