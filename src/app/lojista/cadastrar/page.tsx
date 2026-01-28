'use client'
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase'; // Conexão que criamos acima
import { Camera, CheckCircle2, Loader2 } from 'lucide-react';

export default function CadastroReal() {
  const [carregando, setCarregando] = useState(false);
  const [form, setForm] = useState({ modelo: '', preco: '', ano: '', km: '' });

  const salvarCarro = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    
    const { error } = await supabase
      .from('veiculos')
      .insert([{ ...form, loja_id: 'LOJA_01' }]); // ID temporário

    setCarregando(false);
    if (!error) alert("Carro publicado e disponível para os vendedores!");
    else alert("Erro ao salvar: " + error.message);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10 font-sans">
      <div className="max-w-xl mx-auto glass-3d p-10 rounded-[3rem]">
        <h2 className="text-2xl font-black italic uppercase mb-8">Novo <span className="text-cyan-400">Anúncio</span></h2>
        
        <form onSubmit={salvarCarro} className="space-y-6">
          <input 
            placeholder="NOME DO VEÍCULO" 
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-cyan-500"
            onChange={(e) => setForm({...form, modelo: e.target.value})}
          />
          <input 
            placeholder="PREÇO DE VENDA" 
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-cyan-400 text-cyan-400 font-bold"
            onChange={(e) => setForm({...form, preco: e.target.value})}
          />
          <button 
            disabled={carregando}
            className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
          >
            {carregando ? <Loader2 className="animate-spin" /> : <CheckCircle2 />}
            PUBLICAR AGORA
          </button>
        </form>
      </div>
    </div>
  );
}
