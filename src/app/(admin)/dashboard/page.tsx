'use client'
import React from 'react';
import { LayoutDashboard, Users, TrendingUp, Zap } from 'lucide-react';

export default function AdminMaster() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      <header className="glass-card p-8 border-b border-cyan-500/30 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black neon-text uppercase italic tracking-tighter">Central Master</h1>
          <p className="text-cyan-200/50">Gerenciamento de Lojas & Tráfego Pago</p>
        </div>
        <div className="bg-cyan-500/20 p-4 rounded-2xl border border-cyan-500/50">
          <p className="text-[10px] font-bold uppercase">Status do Chatbot</p>
          <p className="text-green-400 font-black">ATIVO & MONITORANDO</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Lojas Vinculadas', val: '12', icon: Users, color: 'text-blue-400' },
          { label: 'Carros em Anúncio', val: '84', icon: Zap, color: 'text-yellow-400' },
          { label: 'Leads (Conversas)', val: '312', icon: TrendingUp, color: 'text-cyan-400' },
        ].map((card, i) => (
          <div key={i} className="glass-card p-6 border border-white/10 hover:border-cyan-500/50 transition-all group">
            <card.icon className={`mb-4 ${card.color} group-hover:scale-110 transition-transform`} size={32} />
            <p className="text-white/40 text-sm font-bold uppercase">{card.label}</p>
            <p className="text-4xl font-black mt-2">{card.val}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
