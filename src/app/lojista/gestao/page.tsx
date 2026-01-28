'use client'
import React, { useState } from 'react';
import { Trash2, Car, Eye, RefreshCcw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function GerenciarStock() {
  // Simulação do stock do lojista
  const [veiculos, setVeiculos] = useState([
    { id: 1, modelo: 'Toyota Corolla 2024', preco: 'R$ 148.900', status: 'Ativo' },
    { id: 2, modelo: 'Honda Civic Type R', preco: 'R$ 420.000', status: 'Em Análise' },
    { id: 3, modelo: 'Jeep Compass S', preco: 'R$ 189.000', status: 'Ativo' },
  ]);

  const [confirmarExclusao, setConfirmarExclusao] = useState(null);

  const removerVeiculo = (id) => {
    setVeiculos(veiculos.filter(v => v.id !== id));
    setConfirmarExclusao(null);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER DE GESTÃO */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">Gestão de <span className="text-cyan-400">Stock</span></h1>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2">Libertar Quota e Monitorar Anúncios</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-8">
            <div className="text-center">
              <p className="text-[8px] uppercase text-white/40 font-black mb-1">Quota Usada</p>
              <p className="text-xl font-black text-white">{veiculos.length} <span className="text-white/20">/ 5</span></p>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-[8px] uppercase text-white/40 font-black mb-1">Vagas Livres</p>
              <p className="text-xl font-black text-cyan-400">{5 - veiculos.length}</p>
            </div>
          </div>
        </header>

        {/* LISTA DE VEÍCULOS */}
        <div className="grid gap-4">
          {veiculos.length > 0 ? veiculos.map((carro) => (
            <div key={carro.id} className="group bg-white/[0.02] border border-white/10 p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/[0.04] transition-all">
              
              <div className="flex items-center gap-6 flex-1">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 border border-white/10">
                  <Car size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase italic tracking-tight">{carro.modelo}</h3>
                  <p className="text-cyan-400 font-black text-sm">{carro.preco}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`w-2 h-2 rounded-full ${carro.status === 'Ativo' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-[9px] font-black uppercase text-white/40 tracking-widest">{carro.status}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white/40 hover:text-white transition-all">
                  <Eye size={20} />
                </button>
                <button 
                  onClick={() => setConfirmarExclusao(carro.id)}
                  className="p-4 bg-red-500/10 hover:bg-red-500 rounded-2xl text-red-500 hover:text-white transition-all border border-red-500/20"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          )) : (
            <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
              <RefreshCcw size={48} className="mx-auto text-white/10 mb-4 animate-spin-slow" />
              <p className="text-xs font-black uppercase text-white/20 tracking-widest">O seu stock está vazio.<br/>Liberte a sua primeira quota!</p>
            </div>
          )}
        </div>

        {/* MODAL DE CONFIRMAÇÃO (PORTAL) */}
        {confirmarExclusao && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#020617]/90 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] max-w-sm w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
                <AlertCircle size={32} />
              </div>
              <h4 className="text-xl font-black uppercase italic mb-2">Eliminar Veículo?</h4>
              <p className="text-sm text-white/40 mb-8">Esta ação irá libertar 1 vaga na sua quota, mas o anúncio será removido permanentemente.</p>
              
              <div className="flex gap-4">
                <button onClick={() => setConfirmarExclusao(null)} className="flex-1 py-4 bg-white/5 rounded-xl font-black uppercase text-[10px]">Cancelar</button>
                <button onClick={() => removerVeiculo(confirmarExclusao)} className="flex-1 py-4 bg-red-500 text-white rounded-xl font-black uppercase text-[10px] shadow-lg shadow-red-500/20">Confirmar</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
