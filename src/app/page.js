import React from 'react';
import { Car, Shield Check, Users, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000428] text-white font-sans">
      {/* Visual Neon de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 neon-text">
          Meu Carro <span className="text-cyan-400">Online</span>
        </h1>
        <p className="text-xl text-blue-100/60 max-w-2xl mx-auto mb-12">
          A plataforma definitiva de agregação de estoque e gestão de tráfego pago para lojistas automotivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card Master (Você) */}
          <a href="/dashboard" className="glass-card p-10 border border-cyan-500/40 hover:scale-105 transition-all group">
            <ShieldCheck size={48} className="text-cyan-400 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Painel Master Admin</h2>
            <p className="text-sm text-white/40 mb-6">Gerencie lojistas, analise ROI de tráfego e controle o Chatbot.</p>
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">
              ACESSAR CENTRAL <ArrowRight size={20} />
            </div>
          </a>

          {/* Card Lojista */}
          <a href="/login" className="glass-card p-10 border border-purple-500/40 hover:scale-105 transition-all group">
            <Users size={48} className="text-purple-400 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Portal do Lojista</h2>
            <p className="text-sm text-white/40 mb-6">Área para parceiros realizarem o upload de estoque e fotos HD.</p>
            <div className="flex items-center justify-center gap-2 text-purple-400 font-bold group-hover:gap-4 transition-all">
              ENTRAR COMO LOJA <ArrowRight size={20} />
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
