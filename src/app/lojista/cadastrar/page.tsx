'use client'
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Car, DollarSign, Calendar, Tag, Save, ArrowLeft } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CadastrarCarro() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ marca: '', modelo: '', ano: '', preco: '' });

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('veiculos').insert([formData]);

    if (error) {
      alert("Erro ao salvar: " + error.message);
    } else {
      alert("Carro cadastrado com sucesso!");
      setFormData({ marca: '', modelo: '', ano: '', preco: '' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass-card w-full max-w-[500px] p-8 border border-cyan-500/20">
        <header className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-500/20 rounded-lg">
            <Car className="text-cyan-400" size={24} />
          </div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">Novo Veículo</h1>
        </header>

        <form onSubmit={handleSalvar} className="space-y-5">
          <div className="grid grid-cols-1 gap-5">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Marca</label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input required placeholder="Ex: Toyota" className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none" 
                  onChange={e => setFormData({...formData, marca: e.target.value})} value={formData.marca} />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Modelo</label>
              <input required placeholder="Ex: Corolla Cross" className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:outline-none" 
                onChange={e => setFormData({...formData, modelo: e.target.value})} value={formData.modelo} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Ano</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input required placeholder="2024" className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none" 
                    onChange={e => setFormData({...formData, ano: e.target.value})} value={formData.ano} />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-cyan-500/70 ml-1">Preço (R$)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input required placeholder="150.000" className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl focus:outline-none" 
                    onChange={e => setFormData({...formData, preco: e.target.value})} value={formData.preco} />
                </div>
              </div>
            </div>
          </div>

          <button disabled={loading} className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-black uppercase italic tracking-widest flex items-center justify-center gap-2 transition-all">
            {loading ? "Salvando..." : <><Save size={20} /> SALVAR NO ESTOQUE</>}
          </button>
        </form>
      </div>
    </div>
  );
}
