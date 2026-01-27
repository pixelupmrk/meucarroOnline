'use client'
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Car, Plus, Trash2, LogOut, Package, ExternalLink } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PainelLojista() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os carros que o lojista cadastrou
  useEffect(() => {
    async function carregarEstoque() {
      const { data, error } = await supabase
        .from('veiculos')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setCarros(data);
      setLoading(false);
    }
    carregarEstoque();
  }, []);

  const handleSair = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HEADER DO PAINEL */}
      <header className="border-b border-white/5 bg-zinc-900/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Car className="text-purple-400" size={24} />
            </div>
            <h1 className="text-lg font-black italic uppercase tracking-tighter">
              Portal <span className="text-purple-400">Lojista</span>
            </h1>
          </div>
          
          <button 
            onClick={handleSair}
            className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-red-400 transition-all uppercase"
          >
            Sair <LogOut size={16} />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* BOAS VINDAS E AÇÕES */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black italic uppercase">Meu Estoque</h2>
            <p className="text-sm text-white/30 uppercase tracking-widest font-bold">Gerencie seus veículos ativos</p>
          </div>
          
          <button 
            onClick={() => window.location.href = '/lojista/cadastrar'}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-2xl font-black italic uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] active:scale-95"
          >
            <Plus size={20} /> Adicionar Carro
          </button>
        </div>

        {/* LISTA DE VEÍCULOS */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-20">
            <div className="animate-spin mb-4"><Package size={40} /></div>
            <p className="font-bold uppercase tracking-widest text-xs">Carregando Inventário...</p>
          </div>
        ) : carros.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carros.map((carro: any) => (
              <div key={carro.id} className="bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden group hover:border-purple-500/50 transition-all">
                {/* Espaço para Imagem */}
                <div className="aspect-video bg-zinc-800 relative flex items-center justify-center overflow-hidden">
                  {carro.imagem_url ? (
                    <img src={carro.imagem_url} alt={carro.modelo} className="w-full h-full object-cover" />
                  ) : (
                    <Car size={40} className="text-white/5" />
                  )}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-purple-400 border border-purple-500/30">
                    {carro.ano}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">{carro.marca}</p>
                  <h3 className="text-xl font-black italic uppercase mb-4">{carro.modelo}</h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-lg font-black text-white">R$ {carro.preco}</span>
                    <div className="flex gap-2">
                       <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-500/60 hover:text-red-500 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 border border-dashed border-white/10 rounded-3xl">
            <Package size={48} className="mx-auto mb-4 text-white/10" />
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Nenhum carro no estoque</p>
            <p className="text-[10px] text-white/20 mt-1">Comece adicionando seu primeiro veículo acima.</p>
          </div>
        )}
      </main>
    </div>
  );
}
