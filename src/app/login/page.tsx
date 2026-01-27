'use client'
import React, { useState } from 'react';
import { Car, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function LojistaLogin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Aqui conectaremos ao Supabase no próximo passo
    setTimeout(() => (window.location.href = '/lojista/painel'), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Botão para voltar à Home no canto */}
      <div className="absolute top-8 left-8 cursor-pointer" onClick={() => window.location.href='/'}>
        <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase text-xs tracking-widest hover:brightness-125">
          <ArrowRight className="rotate-180" size={16} /> Voltar
        </div>
      </div>

      <div className="glass-card w-full max-w-[400px] p-10 border border-white/10 relative overflow-hidden">
        {/* Detalhe de luz no topo do card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <div className="text-center mb-10">
          <div className="inline-block p-4 rounded-2xl bg-cyan-500/10 mb-4">
            <Car size={40} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">Acesso Lojista</h2>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Insira suas credenciais</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Usuário / ID</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                required
                type="text" 
                placeholder="Ex: portal_veiculos"
                className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Senha de Acesso</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none transition-all"
              />
            </div>
          </div>

          <button 
            disabled={loading}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-black italic uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)] active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Entrar no Sistema'}
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] text-white/20 uppercase font-medium">
          Esqueceu a senha? Contate o Suporte Master
        </p>
      </div>
    </div>
  );
}
