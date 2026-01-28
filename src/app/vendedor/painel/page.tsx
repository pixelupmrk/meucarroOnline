'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Car, DollarSign, MessageCircle, Zap, Search } from 'lucide-react';

export default function VitrineVendedor() {
  const [estoque, setEstoque] = useState<any[]>([]);

  // 1. Busca inicial e Inscrição em Tempo Real
  useEffect(() => {
    const buscarCarros = async () => {
      const { data } = await supabase.from('veiculos').select('*').eq('status', 'ativo');
      if (data) setEstoque(data);
    };

    buscarCarros();

    // Escuta mudanças na tabela 'veiculos' em tempo real
    const canal = supabase.channel('estoque-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'veiculos' }, (payload) => {
        buscarCarros(); // Recarrega a vitrine automaticamente
      })
      .subscribe();

    return () => { supabase.removeChannel(canal); };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-8">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-black italic uppercase text-cyan-400">Vitrine de <span className="text-white">Vendas</span></h1>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Estoque Atualizado em Tempo Real</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-2 border border-white/10">
          <Zap size={16} className="text-cyan-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">{estoque.length} Carros Online</span>
        </div>
      </header>

      {/* GRADE DE CARROS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estoque.map((carro) => (
          <div key={carro.id} className="group glass-3d rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all">
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              {carro.fotos && carro.fotos[0] ? (
                <img src={carro.fotos[0]} alt={carro.modelo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10"><Car size={48} /></div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-black uppercase italic mb-1">{carro.modelo}</h3>
              <p className="text-cyan-400 font-black text-xl mb-4">{carro.preco}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-6 text-[10px] font-bold text-white/40 uppercase">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">Ano: {carro.ano}</div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">KM: {carro.km}</div>
              </div>

              <button className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all uppercase italic text-xs">
                <MessageCircle size={18} /> Abrir Negociação
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
