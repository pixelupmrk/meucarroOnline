'use client'
import React from 'react';
import { ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-end pr-10 md:pr-24">
      
      {/* CONTEÚDO POSICIONADO À DIREITA */}
      <div className="w-full max-w-sm space-y-6">
        <div className="text-right mb-8">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter neon-text">
            Meu Carro <span className="text-cyan-400">Online</span>
          </h1>
          <p className="text-[10px] text-blue-300/40 uppercase tracking-[0.3em]">System Control v1.0</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* BOTÃO ADMIN MASTER - MENOR */}
          <div 
            onClick={() => window.location.href='/dashboard'}
            className="glass-card flex items-center p-6 cursor-pointer group hover:border-cyan-400/50 transition-all shadow-xl"
          >
            <div className="p-3 rounded-lg bg-cyan-500/10 mr-5">
              <ShieldCheck size={32} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold uppercase italic leading-none">Painel Master</h2>
              <p className="text-[9px] text-white/30 uppercase mt-1">Gerência & ROI</p>
            </div>
            <ArrowRight size={18} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
          </div>

          {/* BOTÃO PORTAL LOJISTA - MENOR */}
          <div 
            onClick={() => window.location.href='/login'}
            className="glass-card flex items-center p-6 cursor-pointer group hover:border-purple-400/50 transition-all shadow-xl"
          >
            <div className="p-3 rounded-lg bg-purple-500/10 mr-5">
              <Users size={32} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold uppercase italic leading-none">Portal Lojista</h2>
              <p className="text-[9px] text-white/30 uppercase mt-1">Stock & Upload</p>
            </div>
            <ArrowRight size={18} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
