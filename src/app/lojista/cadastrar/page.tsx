'use client'
import React from 'react';
import { ArrowLeft, Save, Car, Camera } from 'lucide-react';

export default function CadastrarCarro() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl">
        <button onClick={() => window.location.href='/lojista/painel'} className="mb-8 flex items-center gap-2 text-white/40 hover:text-purple-400 font-bold uppercase text-[10px] tracking-widest transition-all">
          <ArrowLeft size={16} /> Voltar ao Painel
        </button>

        <h2 className="text-3xl font-black italic uppercase mb-10">Cadastrar <span className="text-purple-500">Veículo</span></h2>

        <div className="space-y-6 bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-white/40 ml-2">Marca</label>
              <input type="text" placeholder="Ex: Toyota" className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm uppercase font-bold" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-white/40 ml-2">Modelo</label>
              <input type="text" placeholder="Ex: Corolla" className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm uppercase font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-white/40 ml-2">Ano</label>
              <input type="number" placeholder="2024" className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm font-bold" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase text-white/40 ml-2">Preço (R$)</label>
              <input type="text" placeholder="150.000" className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm font-bold" />
            </div>
          </div>

          <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all cursor-pointer">
            <Camera className="text-white/20" size={40} />
            <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Clique para subir fotos do veículo</p>
          </div>

          <button className="w-full py-5 bg-purple-600 hover:bg-purple-500 rounded-2xl font-black italic uppercase tracking-[0.2em] shadow-lg shadow-purple-600/20 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Save size={20} /> Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
