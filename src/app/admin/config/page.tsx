'use client'
import React, { useState } from 'react';
import { Settings, MessageSquare, Target, Save, ShieldCheck, Zap, QrCode } from 'lucide-react';

export default function ConfigMaster() {
  const [numMaster, setNumMaster] = useState('');
  const [msgEntrada, setMsgEntrada] = useState('Olá! Bem-vindo à Meu Carro Online. 🚗\n\nComo posso te ajudar hoje?\n1️⃣ Ver estoque\n2️⃣ Avaliar troca\n3️⃣ Falar com consultor');
  const [msgColeta, setMsgColeta] = useState('Ótimo! Para agilizar, qual o modelo e ano do carro que você tem interesse?');

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
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
          
          {/* COLUNA ESQUERDA: CONFIGS DE CONEXÃO */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-cyan-400" size={20} />
                <h2 className="font-black uppercase italic text-xs">WhatsApp Master</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-white/40 uppercase mb-2 block">Número do Anúncio (Meta)</label>
                  <input 
                    value={numMaster}
                    onChange={(e) => setNumMaster(e.target.value)}
                    placeholder="5511999999999"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <QrCode size={14} /> Parear WhatsApp Master
                </button>
              </div>
            </div>

            <div className="glass-3d p-8 rounded-[3rem] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-purple-400" size={20} />
                <h2 className="font-black uppercase italic text-xs">Regras de Fila</h2>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-[9px] font-black uppercase italic">Rodízio Ativo</span>
                <div className="w-10 h-5 bg-cyan-500 rounded-full flex items-center px-1">
                  <div className="w-3 h-3 bg-black rounded-full ml-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: SCRIPTS DO BOT */}
          <div className="lg:col-span-2">
            <div className="glass-3d p-8 rounded-[3rem] border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-cyan-400" size={20} />
                <h2 className="font-black uppercase italic text-xs">Scripts de Automação (Filtro do Bot)</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-[9px] font-bold text-white/40 uppercase block">Mensagem 01: Saudação e Opções</label>
                    <span className="text-[8px] bg-cyan-500/10 text-cyan-500 px-2 py-0.5 rounded uppercase font-black">Primeiro Contato</span>
                  </div>
                  <textarea 
                    value={msgEntrada}
                    onChange={(e) => setMsgEntrada(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-[2rem] text-xs font-medium h-40 outline-none focus:border-cyan-500 text-white/70 leading-relaxed"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-[9px] font-bold text-white/40 uppercase block">Mensagem 02: Coleta de Dados (Dossiê)</label>
                    <span className="text-[8px] bg-purple-500/10 text-purple-500 px-2 py-0.5 rounded uppercase font-black">Qualificação</span>
                  </div>
                  <textarea 
                    value={msgColeta}
                    onChange={(e) => setMsgColeta(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-[2rem] text-xs font-medium h-24 outline-none focus:border-cyan-500 text-white/70 leading-relaxed"
                  />
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-4">
                  <button className="flex-1 bg-cyan-500 text-black py-5 rounded-2xl font-black uppercase italic text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <Save size={18} /> Salvar Alterações Master
                  </button>
                  <button className="px-8 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase hover:bg-white/10 transition-all italic text-white/40">
                    Testar Fluxo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
