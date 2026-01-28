'use client'
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

export default function ChatBot({ carroModelo }: { carroModelo?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mensagens, setMensagens] = useState([
    { role: 'bot', text: `Olá! Sou o assistente da Meu Carro Online. Gostou deste ${carroModelo || 'veículo'}?` }
  ]);
  const [input, setInput] = useState('');

  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Mensagem do Usuário
    const novaMensagem = { role: 'user', text: input };
    setMensagens([...mensagens, novaMensagem]);
    
    // Simulação de Resposta do Bot (Inteligência de Vendas)
    setTimeout(() => {
      setMensagens(prev => [...prev, { 
        role: 'bot', 
        text: "Excelente escolha! Este modelo está com alta procura. Gostaria de falar agora com um consultor para ver as condições de financiamento?" 
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* BOTÃO FLUTUANTE */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 text-black p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-110 transition-all animate-bounce"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* JANELA DO CHAT */}
      {isOpen && (
        <div className="w-80 h-[450px] bg-[#020617] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Assistente IA</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white"><X size={18} /></button>
          </div>

          {/* Área de Mensagens */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {mensagens.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-[11px] font-bold ${
                  msg.role === 'user' ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/70'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={enviarMensagem} className="p-4 bg-white/5 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte sobre o carro..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] outline-none focus:border-cyan-500"
            />
            <button className="bg-cyan-500 text-black p-2 rounded-xl"><Send size={14} /></button>
          </form>
        </div>
      )}
    </div>
  );
}
