'use client'
import React, { useState } from 'react';
import { Camera, Car, DollarSign, Calendar, Gauge, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function CadastroLojista() {
  const [quota] = useState(5); // Limite que você define no Master
  const [usados] = useState(3); // Quantos ele já postou
  const limiteAtingido = usados >= quota;

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white p-4 md:p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-black uppercase italic tracking-tighter text-cyan-400">Portal do Lojista</h1>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-white/30 tracking-widest">Seu Estoque</p>
            <p className="text-sm font-black">{usados} / {quota} Carros</p>
          </div>
        </header>

        {limiteAtingido ? (
          <div className="bg-white/[0.02] border border-red-500/20 p-12 rounded-[2.5rem] text-center backdrop-blur-xl">
            <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-red-500">
              <Lock size={40} />
            </div>
            <h2 className="text-xl font-black uppercase mb-4 text-red-500">Limite de Quota Atingido</h2>
            <p className="text-sm text-white/40 mb-8 italic">"Você já usou seus {quota} espaços. Entre em contato com o Admin para aumentar seu plano."</p>
            <button className="w-full py-4 bg-white text-black font-black uppercase italic rounded-xl">Solicitar Upgrade</button>
          </div>
        ) : (
          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <div className="space-y-8">
              {/* CAMPO FOTOS */}
              <div className="aspect-video border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-2 hover:border-cyan-500/50 transition-all cursor-pointer">
                <Camera size={32} className="text-cyan-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Subir Fotos do Veículo</span>
              </div>

              {/* DADOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="MARCA E MODELO" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold focus:border-cyan-500/50 outline-none" />
                <input placeholder="PREÇO (R$)" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold focus:border-cyan-500/50 outline-none text-cyan-400" />
                <input placeholder="ANO" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold focus:border-cyan-500/50 outline-none" />
                <input placeholder="KM" className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold focus:border-cyan-500/50 outline-none" />
              </div>

              <button className="w-full bg-cyan-500 text-black font-black uppercase italic py-5 rounded-2xl shadow-lg shadow-cyan-500/20 hover:-translate-y-1 transition-all">
                Publicar no Sistema
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
