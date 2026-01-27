'use client'
import React from 'react';
import { LayoutDashboard, Users, Car, TrendingUp, ChevronRight } from 'lucide-react';

export default function DashboardMaster() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* Sidebar Fina */}
      <aside className="w-16 border-r border-white/10 flex flex-col items-center py-8 gap-8 bg-black">
        <LayoutDashboard className="text-cyan-400" />
        <Users className="text-white/20" />
        <Car className="text-white/20" />
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black italic uppercase italic">Dashboard <span className="text-cyan-400">Master</span></h1>
            <p className="text-xs text-white/30">Controle de Clientes e Inventário Geral</p>
          </div>
        </header>

        {/* METRICAS QUADRADAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Lojistas Totais</p>
            <div className="flex justify-between items-end">
              <h3 className="text-4xl font-black italic">12</h3>
              <Users className="text-cyan-500 mb-1" size={20} />
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Carros Cadastrados</p>
            <div className="flex justify-between items-end">
              <h3 className="text-4xl font-black italic">84</h3>
              <Car className="text-purple-500 mb-1" size={20} />
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Acessos Hoje</p>
            <div className="flex justify-between items-end">
              <h3 className="text-4xl font-black italic">320</h3>
              <TrendingUp className="text-green-500 mb-1" size={20} />
            </div>
          </div>
        </div>

        {/* LISTA DE CLIENTES (Lojistas) */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/10 bg-white/5 font-bold uppercase text-[10px] tracking-widest text-white/60">
            Lojistas Recentes
          </div>
          <div className="divide-y divide-white/5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold">L{i}</div>
                  <div>
                    <h4 className="text-sm font-bold italic">Lojista Exemplo {i}</h4>
                    <p className="text-[10px] text-white/20">loja{i}@email.com</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-white/20" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
