'use client'
import React from 'react';
import { Car, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000428] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase neon-text">
            Meu Carro <span className="text-cyan-400">Online</span>
          </h1>
          <p className="text-blue-200/60 text-lg">Ecossistema de Gestão de Estoque e Tráfego Pago</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Master Admin */}
          <div className="glass-card p-10 border border-cyan-500/30 hover:border-cyan-400 transition-all group cursor-pointer" onClick={() => window.location.href='/dashboard'}>
            <ShieldCheck size={48} className="mx-auto mb-4 text-cyan-400" />
            <h2 className="text-2xl font-bold">Painel Master</h2>
            <p className="text-white/40 text-sm mt-2 mb-6">Gerencie lojistas e métricas de anúncios.</p>
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold">
              ENTRAR <ArrowRight size={20} />
            </div>
          </div>

          {/* Card Lojista */}
          <div className="glass-card p-10 border border-purple-500/30 hover:border-purple-400 transition-all group cursor-pointer" onClick={() => window.location.href='/login'}>
            <Users size={48} className="mx-auto mb-4 text-purple-400" />
            <h2 className="text-2xl font-bold">Portal Lojista</h2>
            <p className="text-white/40 text-sm mt-2 mb-6">Área para upload de fotos e veículos.</p>
            <div className="flex items-center justify-center gap-2 text-purple-400 font-bold">
              ACESSAR <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
