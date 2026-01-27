'use client'
import React from 'react';
import { LayoutDashboard, MessageSquare, Users, Settings, TrendingUp, ShieldCheck } from 'lucide-react';

export default function DashboardMaster() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      
      {/* SIDEBAR LATERAL NAVEGAÇÃO */}
      <aside className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-10 bg-[#000428] shadow-2xl">
        <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/50">
           <ShieldCheck size={28} className="text-cyan-400" />
        </div>
        <nav className="flex flex-col gap-8">
          <LayoutDashboard className="text-cyan-400 cursor-pointer hover:scale-110 transition-all" size={24} />
          <Users className="text-white/20 hover:text-cyan-400 cursor-pointer transition-all" size={24} />
          <MessageSquare className="text-white/20 hover:text-cyan-400 cursor-pointer transition-all" size={24} />
          <Settings className="text-white/20 hover:text-cyan-400 cursor-pointer transition-all" size={24} />
        </nav>
      </aside>

      {/* ÁREA PRINCIPAL DE CONTEÚDO */}
      <main className="flex-1 flex flex-col">
        
        {/* HEADER SUPERIOR */}
        <header className="h-20 border-b border-white/10 flex items-center px-8 justify-between bg-black/20 backdrop-blur-md">
          <div>
            <h1 className="text-xl font-black italic uppercase tracking-widest text-white">Painel <span className="text-cyan-400">Master</span></h1>
            <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">Gestão de Tráfego & Leads</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-green-500 font-bold uppercase">Chatbot Online</span>
             </div>
          </div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden">
          
          {/* COLUNA ESQUERDA: O CHATBOT (OCUPA 3 COLUNAS) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-xs font-bold uppercase text-white/40 tracking-widest">WhatsApp Business Control</h3>
            </div>
            <div className="flex-1 glass-card overflow-hidden border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* O SEU CHATBOT INTEGRADO AQUI */}
              <iframe 
                src="https://superapp-whatsapp-bot.onrender.com/" 
                className="w-full h-full border-none"
                title="SuperApp Chatbot"
              />
            </div>
          </div>

          {/* COLUNA DIREITA: MÉTRICAS E STATUS */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase text-white/40 tracking-widest px-2">Métricas de Tráfego</h3>
            
            <div className="glass-card p-6 border-l-4 border-l-cyan-500 bg-gradient-to-r from-cyan-500/5 to-transparent">
              <div className="flex justify-between items-start">
                <p className="text-[10px] text-white/40 uppercase font-black">Lojistas Ativos</p>
                <Users size={16} className="text-cyan-500" />
              </div>
              <h3 className="text-4xl font-black mt-2">08</h3>
              <p className="text-[9px] text-green-400 mt-2 font-bold">+2 este mês</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-500/5 to-transparent">
              <div className="flex justify-between items-start">
                <p className="text-[10px] text-white/40 uppercase font-black">Leads Gerados</p>
                <TrendingUp size={16} className="text-purple-500" />
              </div>
              <h3 className="text-4xl font-black mt-2">1.240</h3>
              <p className="text-[9px] text-purple-400 mt-2 font-bold">Taxa de conversão 12%</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-green-500 bg-gradient-to-r from-green-500/5 to-transparent">
              <p className="text-[10px] text-white/40 uppercase font-black">Status do Servidor</p>
              <h3 className="text-xl font-black mt-2 text-green-400">100% OPERACIONAL</h3>
              <p className="text-[9px] text-white/20 mt-2">Latência: 45ms</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
