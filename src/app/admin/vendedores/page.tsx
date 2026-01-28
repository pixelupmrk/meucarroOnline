'use client'
import React, { useState } from 'react';
import { Shield, Store, Plus, Minus, Zap, AlertTriangle } from 'lucide-react';

export default function AdminGestaoLojas() {
  const [lojas, setLojas] = useState([
    { id: 1, nome: 'Premium Motors', quota: 5, usados: 3 },
    { id: 2, nome: 'Elite Cars', quota: 10, usados: 10 }, // Limite atingido
  ]);

  const ajustarQuota = (id: number, delta: number) => {
    setLojas(lojas.map(loja => 
      loja.id === id ? { ...loja, quota: Math.max(1, loja.quota + delta) } : loja
    ));
  };

  return (
    <div className="min-h-screen bg-[#020617] p-8 text-white font-sans">
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-orange-500/20 rounded-2xl text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            <Store size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">Controle de <span className="text-orange-400">Lojistas</span></h1>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Gestão de Quotas e Assinaturas</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {lojas.map(loja => (
          <div key={loja.id} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-black uppercase italic">{loja.nome}</h3>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">ID da Loja: #00{loja.id}</p>
              </div>
              {loja.usados >= loja.quota && (
                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-[8px] font-black text-red-400 uppercase animate-pulse">
                  <AlertTriangle size={12} /> Limite Atingido
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">Capacidade do Estoque</span>
                <div className="flex items-center gap-4">
                  <button onClick={() => ajustarQuota(loja.id, -1)} className="p-2 hover:bg-white/10 rounded-lg text-white/60 transition-all"><Minus size={16}/></button>
                  <span className="text-2xl font-black text-cyan-400">{loja.quota}</span>
                  <button onClick={() => ajustarQuota(loja.id, 1)} className="p-2 hover:bg-white/10 rounded-lg text-white/60 transition-all"><Plus size={16}/></button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter mb-2">
                  <span className="text-white/40">Uso Atual: {loja.usados} carros</span>
                  <span className="text-white/40">Disponível: {loja.quota - loja.usados}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${loja.usados >= loja.quota ? 'bg-red-500' : 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]'}`}
                    style={{ width: `${(loja.usados / loja.quota) * 100}%` }}
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                Atualizar Plano para {loja.quota + 5} Vagas
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
