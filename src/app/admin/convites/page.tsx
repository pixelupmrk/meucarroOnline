'use client'
import React, { useState } from 'react';
import { Share2, Copy, UserPlus, Store, Check } from 'lucide-react';

export default function GeradorConvites() {
  const [tipo, setTipo] = useState('lojista');
  const [copiado, setCopiado] = useState(false);
  
  // URL base do seu projeto (Vercel)
  const urlBase = "https://meucarroonline.vercel.app"; 
  const linkGerado = `${urlBase}/cadastro?role=${tipo}`;

  const copiarLink = () => {
    navigator.clipboard.writeText(linkGerado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 md:p-12 font-sans">
      <div className="max-w-2xl mx-auto glass-3d p-10 rounded-[3.5rem] border border-white/10">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-4 bg-cyan-500/20 rounded-2xl text-cyan-400 shadow-neon">
            <Share2 size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-cyan-400">Gerador de <span className="text-white">Convites</span></h1>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Expanda sua rede de parceiros</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setTipo('lojista')}
              className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${tipo === 'lojista' ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/5 bg-white/5 opacity-40'}`}
            >
              <Store size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Novo Lojista</span>
            </button>
            <button 
              onClick={() => setTipo('vendedor')}
              className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${tipo === 'vendedor' ? 'border-purple-500 bg-purple-500/10' : 'border-white/5 bg-white/5 opacity-40'}`}
            >
              <UserPlus size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Novo Vendedor</span>
            </button>
          </div>

          <div className="bg-black/40 border border-white/10 p-6 rounded-3xl flex items-center justify-between gap-4">
            <code className="text-[10px] text-cyan-400 font-bold truncate">{linkGerado}</code>
            <button 
              onClick={copiarLink}
              className="p-4 bg-white text-black rounded-2xl hover:bg-cyan-400 transition-all flex items-center gap-2 shrink-0"
            >
              {copiado ? <Check size={18} /> : <Copy size={18} />}
              <span className="text-[10px] font-black uppercase">Copiar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
