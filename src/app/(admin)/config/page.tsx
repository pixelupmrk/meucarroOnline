'use client'
import React, { useState } from 'react';
import { MessageSquare, Target, Save, QrCode } from 'lucide-react';

export default function ConfigMaster() {
  const [numMaster, setNumMaster] = useState('');
  const [msg1, setMsg1] = useState('Olá! Bem-vindo à Meu Carro Online. 🚗\n\n1️⃣ Ver estoque\n2️⃣ Avaliar troca\n3️⃣ Falar com consultor');
  const [msg2, setMsg2] = useState('Ótimo! Qual o modelo e ano do carro que você tem interesse?');

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-white">
          <h1 className="text-4xl font-black uppercase italic text-cyan-400">Painel <span className="text-white">Master</span></h1>
          <p className="text-[10px] text-white/30 uppercase font-bold mt-2">Configurações de Tráfego e Automação</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5">
              <h2 className="font-black uppercase text-xs mb-4 flex items-center gap-2"><Target size={16}/> WhatsApp Master</h2>
              <input value={numMaster} onChange={(e)=>setNumMaster(e.target.value)} placeholder="5511999999999" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-xs text-white mb-4 outline-none focus:border-cyan-500" />
              <button className="w-full bg-white/10 py-4 rounded-xl text-[10px] font-black uppercase hover:bg-cyan-500 transition-all flex items-center justify-center gap-2 text-white"><QrCode size={14}/> Conectar Bot</button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5">
              <h2 className="font-black uppercase text-xs mb-6 flex items-center gap-2"><MessageSquare size={16}/> Filtros do Bot</h2>
              <div className="space-y-4">
                <textarea value={msg1} onChange={(e)=>setMsg1(e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-xs h-32 text-white outline-none focus:border-cyan-500" />
                <textarea value={msg2} onChange={(e)=>setMsg2(e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-xs h-24 text-white outline-none focus:border-cyan-500" />
                <button className="w-full bg-cyan-500 text-black py-4 rounded-xl font-black uppercase text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all"><Save size={16}/> Salvar Configurações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
