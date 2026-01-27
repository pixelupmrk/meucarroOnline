'use client'
import React from 'react';
import { Car, Lock, User, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Card Principal com efeito de Vidro */}
      <div className="glass-card w-full max-w-md p-8 border border-cyan-500/30">
        
        <div className="text-center mb-10">
          <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-4 neon-border">
            <Car size={40} className="text-cyan-400" />
          </div>
          <h1 className="text-3xl font-black neon-text uppercase tracking-tighter">
            Meu Carro Online
          </h1>
          <p className="text-blue-200/60 mt-2">Portal do Lojista Parceiro</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-cyan-300 ml-1">Usuário / E-mail</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-cyan-500/50" size={20} />
              <input 
                type="text" 
                placeholder="seuusuario"
                className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-xl focus:outline-none focus:border-cyan-500 transition-all text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-cyan-300 ml-1">Senha de Acesso</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-cyan-500/50" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/10 p-3 pl-10 rounded-xl focus:outline-none focus:border-cyan-500 transition-all text-white"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] active:scale-95">
            ENTRAR NO PAINEL <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/40">
            Ainda não é parceiro? <span className="text-cyan-400 cursor-pointer hover:underline">Solicitar Acesso</span>
          </p>
        </div>
      </div>

      {/* Detalhe Decorativo de Fundo */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
    </div>
  )
}
