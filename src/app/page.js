'use client'
import React from 'react';
import { ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-end pr-10 md:pr-20">
      
      {/* PAINEL DE ACESSO COMPACTO À DIREITA */}
      <div className="w-full max-w-[320px] space-y-4">
        <div className="text-right mb-6">
          <h1 className="text-2xl font-black italic uppercase tracking-tighter neon-text">
            Meu Carro <span className="text-cyan-400">Online</span>
          </h1>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">Admin Console v1.0</p>
        </div>

        <div className="flex flex-col gap-3">
          {/* BOTÃO MASTER - COMPACTO */}
          <div 
            onClick={() => window.location.href='/dashboard'}
            className="glass-card flex items-center p-4 cursor-pointer group hover:border-cyan-400/50 transition-all border border-white/5"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 mr-4">
              <ShieldCheck size={24} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase italic leading-none">Painel Master</h2>
              <p className="text-[8px] text-white/20 uppercase mt-1">Gestão Total</p>
            </div>
            <ArrowRight size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
          </div>

          {/* BOTÃO LOJISTA - COMPACTO */}
          <div 
            onClick={() => window.location.href='/login'}
            className="glass-card flex items-center p-4 cursor-pointer group hover:border-purple-400/50 transition-all border border-white/5"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 mr-4">
              <Users size={24} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase italic leading-none">Portal Lojista</h2>
              <p className="text-[8px] text-white/20 uppercase mt-1">Estoque</p>
            </div>
            <ArrowRight size={14} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
