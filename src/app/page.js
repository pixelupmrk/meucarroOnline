'use client'
import React from 'react';
import { ShieldCheck, Users, ArrowRight, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#030712] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
      
      <div className="w-full max-w-[420px] space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase italic">
            MEU CARRO <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">ONLINE</span>
          </h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.6em] font-bold">Plataforma de Gestão Automotiva</p>
        </div>

        <div className="grid gap-6">
          {/* BOTÃO MASTER - ESTILO VIDRO 3D */}
          <div 
            onClick={() => window.location.href='/dashboard'}
            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] cursor-pointer hover:border-cyan-500/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic text-white leading-none">Painel Master</h2>
                  <p className="text-[9px] text-white/40 uppercase font-bold mt-2 tracking-widest">Controle Administrativo</p>
                </div>
              </div>
              <ArrowRight className="text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          </div>

          {/* BOTÃO LOJISTA - ESTILO VIDRO 3D */}
          <div 
            onClick={() => window.location.href='/login'}
            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] cursor-pointer hover:border-purple-500/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all">
                  <Users size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic text-white leading-none">Portal Lojista</h2>
                  <p className="text-[9px] text-white/40 uppercase font-bold mt-2 tracking-widest">Gestão de Estoque</p>
                </div>
              </div>
              <ArrowRight className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
