'use client'
import React, { useState } from 'react';
import { MessageSquare, Target, Save, ShieldCheck, QrCode } from 'lucide-react';

export default function ConfigMaster() {
  const [numMaster, setNumMaster] = useState('');
  const [msgEntrada, setMsgEntrada] = useState('Olá! Bem-vindo à Meu Carro Online. 🚗\n\nComo posso te ajudar hoje?\n1️⃣ Ver estoque\n2️⃣ Avaliar troca\n3️⃣ Falar com consultor');
  const [msgColeta, setMsgColeta] = useState('Ótimo! Para agilizar o atendimento, qual o modelo e ano do carro que você tem interesse?');

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans text-white">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-cyan-400">
            Painel <span className="text-white">Master</span>
          </h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2">
            Gestão Central de Tráfego e Automação de Leads
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CONFIGURAÇÃO DE WHATSAPP E REDE */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-cyan-400" size={20} />
                <h2 className="font-black uppercase italic text-xs text-white">WhatsApp Master</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-white/40 uppercase mb-2 block tracking-widest">Número do Anúncio (Meta)</label>
                  <input 
                    value={numMaster}
                    onChange={(e) => setNumMaster(e.target.value)}
                    placeholder="5511999999999"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold outline-none focus:border-cyan-500 transition-all text-white shadow-inner"
                  />
                </div>
                <button className="w-full bg-white/10 border border-white/10 py-4 rounded-xl text-[10px] font-black uppercase hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center gap-2 text-white shadow-lg">
                  <QrCode size={14} /> Conectar Bot Master
                </button>
              </div>
            </div>

            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 bg-white/[0.01]">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-purple-400" size={20} />
                <h2 className="font-black uppercase italic text-xs text-white">Segurança do Lead</h2>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase italic text-white/60 text-white">Rodízio Ativo</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                </div>