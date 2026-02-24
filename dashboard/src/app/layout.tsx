import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Controle de Frota',
  description: 'Sistema de gestão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-50 min-h-screen font-sans`}>
        <div className="flex bg-slate-100 min-h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 w-full bg-slate-50 overflow-y-auto">
            <main className="mx-auto w-full p-6 lg:p-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
