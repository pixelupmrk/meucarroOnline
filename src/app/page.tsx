'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Search, Car, Gauge, Calendar, ChevronRight, Zap } from 'lucide-react';

export default function VitrineCliente() {
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const carregarVitrine = async () => {
      const { data } = await supabase.from('veiculos').select('*').eq('status', 'ativo');
      if (data) setVeiculos(data);
    };
    carregarVitrine();
  }, []);

  const filtrados = veiculos.filter(v => v.modelo.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">
      
      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Car size={24} />
          </div>
          <span className="font-black italic uppercase tracking-tighter text-xl">MEU CARRO <span className="text-cyan-400">ONLINE</span></span>
        </div>
        <button onClick={() => window.location.href='/login'} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Acesso Restrito</button>
      </nav>

      {/* HERO / BUSCA */}
      <section className="pt-16 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-8">
          ENCONTRE SUA PRÓXIMA <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EXPERIÊNCIA</span>
        </h1>
        
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
          <div className="relative flex items-center bg-white/[0.03] border border-white/10 p-2 rounded-[2rem] backdrop-blur-3xl">
            <Search className="ml-6 text-white/20" size={20} />
            <input 
              placeholder="Qual máquina você busca hoje?" 
              className="flex-1 bg-transparent border-none focus:ring-0 p-5 text-xs font-bold uppercase tracking-widest placeholder:text-white/20"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* GRID DE VEÍCULOS */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtrados.map((carro) => (
            <div key={carro.id} className="group glass-3d rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={carro.fotos?.[0] || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800'} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                  <span className="text-[10px] font-black italic">{carro.ano}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-1 tracking-tighter">{carro.modelo}</h3>
                <p className="text-3xl font-black text-cyan-400 mb-6 italic">{carro.preco}</p>
                
                <div className="flex gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase">
                    <Gauge size={14} className="text-cyan-500" /> {carro.km} KM
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase">
                    <Zap size={14} className="text-cyan-500" /> REVISADO
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href=`/vendedor/painel/${carro.id}`}
                  className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black py-4 rounded-2xl flex items-center justify-center gap-2 font-black uppercase italic text-[11px] transition-all"
                >
                  Ver Detalhes <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
