'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useParams } from 'next/navigation';
import { Car, Gauge, Calendar, Shield, Info, ArrowLeft, MessageSquare } from 'lucide-react';

export default function DetalhesVeiculo() {
  const { id } = useParams();
  const [carro, setCarro] = useState<any>(null);

  useEffect(() => {
    const carregarDados = async () => {
      const { data } = await supabase.from('veiculos').select('*').eq('id', id).single();
      if (data) setCarro(data);
    };
    carregarDados();
  }, [id]);

  if (!carro) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-cyan-400 font-black animate-pulse uppercase italic">Carregando Ficha Técnica...</div>;

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <button onClick={() => window.history.back()} className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-all font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16} /> Voltar para Vitrine
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* GALERIA DE FOTOS */}
          <div className="space-y-4">
            <div className="aspect-video bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
              <img src={carro.fotos?.[0]} alt={carro.modelo} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {carro.fotos?.slice(1).map((foto: string, i: number) => (
                <div key={i} className="aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-all cursor-pointer">
                  <img src={foto} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* FICHA TÉCNICA PARA O VENDEDOR */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2">{carro.modelo}</h1>
              <p className="text-3xl font-black text-cyan-400">{carro.preco}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Ano Modelo', val: carro.ano, icon: Calendar },
                { label: 'Quilometragem', val: `${carro.km} km`, icon: Gauge },
                { label: 'Estado Geral', val: 'Completo', icon: Car },
                { label: 'Garantia', val: '90 Dias', icon: Shield },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400"><item.icon size={20} /></div>
                  <div>
                    <p className="text-[8px] font-black uppercase text-white/30 tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* OBSERVAÇÕES TÉCNICAS (O que o vendedor fala pro cliente) */}
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[2rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Info size={40} /></div>
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-4 italic">Observações do Lojista</h3>
               <p className="text-sm text-white/60 leading-relaxed italic">
                 {carro.descricao || "Veículo em excelente estado de conservação, revisado e com documentação em dia. Pneus novos e interior higienizado."}
               </p>
            </div>

            <button className="w-full bg-cyan-500 text-black font-black py-6 rounded-3xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all uppercase italic">
              <MessageSquare size={20} /> Iniciar Venda no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
