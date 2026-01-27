'use client'
import React from 'react';
import { ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-end pr-10 md:pr-24">
      {/* Container Principal à Direita */}
      <div className="w-full max-w-[320px] flex flex-col gap-6">
        
        <div className="text-right">
          <h1 className="text-2xl font-bold italic uppercase tracking-tighter text-white">
            MEU CARRO <span className="text-cyan-400">ONLINE</span>
          </h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Painel de Controle</p>
        </div>

        {/* Botões empilhados */}
        <div className="space-y-4">
          {/* BOTÃO MASTER */}
          <div 
            onClick={() => window.location.href='/dashboard'}
            className="group bg-zinc-900/50 border border-white/10 p-5 rounded-2xl cursor-pointer hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all flex items-center shadow-2xl"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 mr-4 group-hover:bg-cyan-500/20">
              <ShieldCheck size={28} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase italic text-white">Painel Master</h2>
              <p className="text-[9px] text-white/40 uppercase">Administração</p>
            </div>
            <ArrowRight size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
          </div>

          {/* BOTÃO LOJISTA */}
          <div 
            onClick={() => window.location.href='/login'}
            className="group bg-zinc-900/50 border border-white/10 p-5 rounded-2xl cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all flex items-center shadow-2xl"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 mr-4 group-hover:bg-purple-500/20">
              <Users size={28} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase italic text-white">Portal Lojista</h2>
              <p className="text-[9px] text-white/40 uppercase">Meus Carros</p>
            </div>
            <ArrowRight size={16} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
