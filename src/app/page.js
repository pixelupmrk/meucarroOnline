'use client'
import React from 'react';
import { Car, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-6">
      
      {/* ÍCONE NO CANTO SUPERIOR ESQUERDO */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
          <Car size={32} className="text-cyan-400" />
        </div>
        <div>
          <h2 className="text-xl font-black italic tracking-tighter uppercase leading-none">
            Meu Carro <span className="text-cyan-400">Online</span>
          </h2>
          <p className="text-[10px] text-blue-300/50 uppercase font-bold tracking-widest">Portal Automotivo</p>
        </div>
      </div>

      {/* CONTEÚDO CENTRAL - OS DOIS BOTÕES QUADRADOS */}
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter neon-text mb-4">
            Gestão de Estoque & Tráfego
          </h1>
          <p className="text-blue-100/40 text-sm md:text-base uppercase tracking-widest font-medium">
            Selecione o portal de acesso abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* BOTÃO QUADRADO 1: ADMIN MASTER */}
          <div 
            onClick={() => window.location.href='/dashboard'}
            className="glass-card aspect-square flex flex-col items-center justify-center p-8 text-center cursor-pointer group hover:scale-105 transition-all"
          >
            <div className="p-6 rounded-2xl bg-cyan-500/10 mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <ShieldCheck size={60} className="text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
            </div>
            <h2 className="text-2xl font-black uppercase italic mb-2">Painel Master</h2>
            <p className="text-xs text-white/40 mb-6">Administração de Lojistas e ROI de Tráfego</p>
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-widest group-hover:translate-x-2 transition-transform">
              ENTRAR <ArrowRight size={18} />
            </div>
          </div>

          {/* BOTÃO QUADRADO 2: PORTAL LOJISTA */}
          <div 
            onClick={() => window.location.href='/login'}
            className="glass-card aspect-square flex flex-col items-center justify-center p-8 text-center cursor-pointer group hover:scale-105 transition-all"
          >
            <div className="p-6 rounded-2xl bg-purple-500/10 mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Users size={60} className="text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
            </div>
            <h2 className="text-2xl font-black uppercase italic mb-2">Portal Lojista</h2>
            <p className="text-xs text-white/40 mb-6">Upload de Veículos e Gestão de Inventário</p>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm tracking-widest group-hover:translate-x-2 transition-transform">
              ACESSAR <ArrowRight size={18} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
