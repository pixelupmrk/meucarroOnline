'use client'
import React, { useState } from 'react';
import { Power, MessageSquare, ShieldCheck, RefreshCw } from 'lucide-react';

export default function DashboardMaster() {
  const [botActive, setBotActive] = useState(true);

  return (
    <div className="h-screen bg-[#020617] text-white flex flex-col">
      {/* Barra Superior Compacta */}
      <header className="h-16 border-b border-white/10 flex items-center px-6 justify-between bg-black/40">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-cyan-400" size={24} />
          <h1 className="text-sm font-black uppercase italic tracking-widest">Master <span className="text-cyan-400">Control</span></h1>
        </div>

        <div className="flex items-center gap-6">
          {/* Botão Ligar/Desligar Boot */}
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold uppercase ${botActive ? 'text-green-500' : 'text-red-500'}`}>
              Bot {botActive ? 'Ligado' : 'Desligado'}
            </span>
            <button 
              onClick={() => setBotActive(!botActive)}
              className={`p-2 rounded-full border transition-all ${botActive ? 'bg-green-500/20 border-green-500/50 text-green-500' : 'bg-red-500/20 border-red-500/50 text-red-500'}`}
            >
              <Power size={16} />
            </button>
          </div>
          <button className="text-white/40 hover:text-white"><RefreshCw size={18}/></button>
        </div>
      </header>

      {/* Área Central: WhatsApp Bot */}
      <div className="flex-1 p-4 bg-black/20">
        <div className="w-full h-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
          {!botActive && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <p className="text-red-500 font-bold uppercase tracking-widest">Sistema de Atendimento Pausado</p>
            </div>
          )}
          <iframe 
            src="https://superapp-whatsapp-bot.onrender.com/" 
            className="w-full h-full border-none"
            title="WhatsApp Bot Control"
          />
        </div>
      </div>
    </div>
  );
}
