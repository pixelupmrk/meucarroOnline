'use client'
import React, { useState } from 'react';
import { Settings, MessageSquare, Target, Save, ShieldCheck } from 'lucide-react';

export default function ConfigMaster() {
  const [numMaster, setNumMaster] = useState('');
  const [msgBoasVindas, setMsgBoasVindas] = useState('Olá! Vi seu anúncio no Facebook e tenho interesse no carro...');

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-black uppercase italic text-cyan-400">Configuração <span className="text-white">Master</span></h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Controle Central de Tráfego e Automação</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CONFIG DE WHATSAPP MASTER */}
          <div className="glass-3d p-8 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-cyan-400" size={24} />
              <h2 className="font-black uppercase italic text-sm">Número dos Anúncios (API)</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-[9px] font-bold text-white/40 uppercase mb-2 block">WhatsApp Master (Link Meta)</label>
                <input 
                  value={numMaster}
                  onChange={(e) => setNumMaster(e.target.value)}
                  placeholder="5511999999999"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="text-[9px] font-bold text-white/40 uppercase mb-2 block">Mensagem Padrão do Lead</label>
                <textarea 
                  value={msgBoasVindas}
                  onChange={(e) => setMsgBoasVindas(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold h-24 outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* REGRAS DE DISTRIBUIÇÃO */}
          <div className="glass-3d p-8 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-purple-400" size={24} />
              <h2 className="font-black uppercase italic text-sm">Regra de Redirecionamento</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-[10px] font-black uppercase italic">Distribuição por Fila</span>
                <div className="w-12 h-6 bg-cyan-500 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-black rounded-full ml-auto"></div>
                </div>
              </div>
              <p className="text-[9px] text-white/30 leading-relaxed italic">
                * Quando ativado, o bot enviará o lead para o próximo vendedor disponível na lista, garantindo que todos recebam oportunidades iguais.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-cyan-500 text-black px-12 py-5 rounded-2xl font-black uppercase italic flex items-center gap-2 hover:scale-105 transition-all">
          <Save size={20} /> Salvar Configurações Master
        </button>
      </div>
    </div>
  );
}
