'use client'
import React, { useState } from 'react';
import { MessageSquare, Target, Save, ShieldCheck, QrCode } from 'lucide-react';

export default function ConfigMaster() {
  const [numMaster, setNumMaster] = useState('');
  const [msgEntrada, setMsgEntrada] = useState('Olá! Bem-vindo à Meu Carro Online. 🚗\n\n1️⃣ Ver estoque\n2️⃣ Avaliar troca\n3️⃣ Falar com consultor');
  const [msgColeta, setMsgColeta] = useState('Ótimo! Qual o modelo e ano do carro que você tem interesse?');

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-white">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-cyan-400">Painel <span className="text-white">Master</span></h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2">Configurações de Tráfego e Automação</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6"><Target className="text-cyan-400" size={20} /><h2 className="font-black uppercase italic text-xs">WhatsApp Master</h2></div>
              <div className="space-y-4">
                <label className="text-[9px] font-bold text-white/40 uppercase mb-2 block">Número do Anúncio</label>
                <input value={numMaster} onChange={(e) => setNumMaster(e.target.value)} placeholder="5511999999999" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold text-white outline-none focus:border-cyan-500" />
                <button className="w-full bg-white/10 border border-white/10 py-4 rounded-xl text-[10px] font-black uppercase hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center gap-2"><QrCode size={14} /> Conectar QR Code</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 h-full bg-white/[0.01]">
              <div className="flex items-center gap-3 mb-8"><MessageSquare className="text-cyan-400" size={20} /><h2 className="font-black uppercase italic text-xs text-white">Filtros do Bot</h2></div>
              <div className="space-y-6">
                <div><label className="text-[9px] font-bold text-white/40 uppercase block mb-2">01: Saudação</label><textarea value={msgEntrada} onChange={(e) => setMsgEntrada(e.target.value)} className="w-full bg-white/5 border border-white/10 p-5 rounded-[2rem] text-xs font-medium h-40 text-white outline-none focus:border-cyan-500 leading-relaxed" /></div>
                <div><label className="text-[9px] font-bold text-white/40 uppercase block mb-2">02: Coleta de Dados</label><textarea value={msgColeta} onChange={(e) => setMsgColeta(e.target.value)} className="w-full bg-white/5 border border-white/10 p-5 rounded-[2rem] text-xs font-medium h-24 text-white outline-none focus:border-cyan-500 leading-relaxed" /></div>
                <button className="w-full bg-cyan-500 text-black py-5 rounded-2xl font-black uppercase italic text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"><Save size={18} /> Salvar Configurações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
