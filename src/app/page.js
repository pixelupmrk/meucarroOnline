'use client'
import React from 'react';
import { ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-end pr-10 md:pr-20 bg-black">
      {/* Container fixo para não esticar */}
      <div className="w-[320px] space-y-4 z-10">
        <div className="text-right mb-6">
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-cyan-400">
            Meu Carro <span className="text-white">Online</span>
          </h1>
          <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">Admin Console v1.0</p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Botão Master */}
          <div onClick={() => window.location.href='/dashboard'} className="bg-white/5 border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-cyan-500/10 transition-all flex items-center">
            <ShieldCheck size={24} className="text-cyan-400 mr-4" />
            <div className="flex-1 text-left">
              <h2 className="text-sm font-bold uppercase italic text-white">Painel Master</h2>
              <p className="text-[8px] text-white/40 uppercase">Gestão Total</p>
            </div>
            <ArrowRight size={14} className="text-cyan-400" />
          </div>

          {/* Botão Lojista */}
          <div onClick={() => window.location.href='/login'} className="bg-white/5 border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-purple-500/10 transition-all flex items-center">
            <Users size={24} className="text-purple-400 mr-4" />
            <div className="flex-1 text-left">
              <h2 className="text-sm font-bold uppercase italic text-white">Portal Lojista</h2>
              <p className="text-[8px] text-white/40 uppercase">Estoque</p>
            </div>
            <ArrowRight size={14} className="text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
