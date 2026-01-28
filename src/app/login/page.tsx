'use client'
import React, { useState } from 'react';
import { ShieldCheck, Lock, User, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui conectaremos com seu Supabase
    console.log("Login efetuado com:", usuario);
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] glass-3d p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <button onClick={() => window.location.href='/'} className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-[10px] uppercase font-bold mb-8">
          <ArrowLeft size={14} /> Voltar
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-purple-500/20 rounded-2xl text-purple-400 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase italic text-white tracking-tighter">Acesso <span className="text-purple-500">Lojista</span></h2>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mt-2">Portal de Gerenciamento</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-purple-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="USUÁRIO"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-purple-500 transition-colors" size={18} />
            <input 
              type="password" 
              placeholder="SENHA"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black uppercase italic py-4 rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all hover:-translate-y-1 active:scale-95">
            Entrar no Sistema
          </button>
        </form>

        <p className="text-center text-[9px] text-white/20 uppercase font-bold mt-8 tracking-[0.2em]">Sistema Seguro & Criptografado</p>
      </div>
    </div>
  );
}
