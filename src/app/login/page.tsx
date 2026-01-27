'use client'
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Lock, User, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

// Conexão com o seu banco que configuramos
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LojistaLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Busca o lojista no banco de dados
    const { data, error: dbError } = await supabase
      .from('lojistas')
      .select('*')
      .eq('usuario', user)
      .eq('senha', pass)
      .single();

    if (dbError || !data) {
      setError('Usuário ou senha incorretos.');
      setLoading(false);
    } else {
      // Login com sucesso! Redireciona para o painel dele
      window.location.href = '/lojista/painel';
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      
      {/* Botão Voltar */}
      <button 
        onClick={() => window.location.href = '/'}
        className="absolute top-8 left-8 text-white/40 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all"
      >
        <ArrowLeft size={16} /> Voltar
      </button>

      <div className="w-full max-w-[360px]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black italic uppercase text-white">Acesso <span className="text-purple-400">Lojista</span></h2>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-2">Portal de Gerenciamento</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="USUÁRIO" 
              className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 rounded-xl text-white focus:border-purple-500 outline-none transition-all text-sm"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="password" 
              placeholder="SENHA" 
              className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 rounded-xl text-white focus:border-purple-500 outline-none transition-all text-sm"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <button 
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-black italic uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Entrar no Sistema'}
          </button>
        </form>

        <p className="text-center mt-8 text-[9px] text-white/20 uppercase font-bold tracking-widest">
          Sistema Seguro & Criptografado
        </p>
      </div>
    </div>
  );
}
