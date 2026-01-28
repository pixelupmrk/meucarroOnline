'use client'
import React, { useState } from 'react';
import { MessageSquare, Car, Send, User, Search, CheckCheck } from 'lucide-react';

export default function PainelAtendimentoVendedor() {
  return (
    <div className="flex h-screen w-full bg-[#020617] text-white overflow-hidden">
      
      {/* LATERAL: LISTA DE CONVERSAS (FILTRADAS PELO SEU BOT) */}
      <div className="w-1/3 border-r border-white/10 bg-white/[0.02] backdrop-blur-xl flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-black italic uppercase tracking-tighter text-cyan-400">Mensagens</h2>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
            <input placeholder="Buscar lead..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-cyan-500/50" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Exemplo de conversa vinda do Bot */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold shadow-lg">
                L{i}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm uppercase">Lead Interessado {i}</h4>
                  <span className="text-[9px] text-white/30 font-bold">14:20</span>
                </div>
                <p className="text-xs text-white/50 truncate">Tenho interesse no Corolla 2024...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTRO: O CHAT (ESTILO SUPERAPP) */}
      <div className="flex-1 flex flex-col relative">
        <div className="p-4 border-b border-white/10 bg-white/[0.03] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-cyan-400">
              <User size={20} />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase italic">Lead Ativo #442</h3>
              <p className="text-[9px] text-green-400 font-bold uppercase tracking-widest animate-pulse">Atendimento em curso</p>
            </div>
          </div>
          <button className="bg-white/5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2">
            <Car size={14} className="text-cyan-400" /> Ver Estoque Completo
          </button>
        </div>

        {/* ÁREA DE MENSAGENS */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[70%]">
              <p className="text-sm">Olá! Gostaria de saber se o Corolla ainda está disponível e qual a taxa de financiamento.</p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="bg-cyan-600 p-4 rounded-2xl rounded-tr-none max-w-[70%] shadow-[0_10px_20px_rgba(6,182,212,0.2)]">
              <p className="text-sm font-medium">Com certeza! Ele está na loja X. Vou verificar a melhor taxa para você agora mesmo.</p>
              <div className="flex justify-end mt-1">
                <CheckCheck size={14} className="text-white/60" />
              </div>
            </div>
          </div>
        </div>

        {/* INPUT DE MENSAGEM */}
        <div className="p-6 bg-[#020617]">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-2xl focus-within:border-cyan-500/50 transition-all shadow-2xl">
            <input 
              placeholder="Digite sua resposta..." 
              className="flex-1 bg-transparent border-none focus:ring-0 p-3 text-sm placeholder:text-white/20"
            />
            <button className="bg-cyan-500 text-black p-3 rounded-xl hover:bg-cyan-400 transition-all shadow-lg active:scale-95">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
