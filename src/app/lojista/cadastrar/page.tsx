'use client'
import React from 'react';
import { Car, Plus, List, LogOut } from 'lucide-react';

export default function PainelLojista() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold uppercase italic">Painel <span className="text-cyan-400">Lojista</span></h1>
        <button onClick={() => window.location.href='/'} className="text-white/40 hover:text-white"><LogOut size={20}/></button>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div onClick={() => window.location.href='/lojista/cadastrar'} className="glass-card p-8 cursor-pointer border border-cyan-500/20 hover:bg-cyan-500/10 transition-all text-center">
          <Plus size={40} className="mx-auto mb-4 text-cyan-400" />
          <h2 className="font-bold uppercase tracking-widest">Cadastrar Novo Carro</h2>
        </div>
        <div className="glass-card p-8 cursor-pointer border border-white/10 hover:bg-white/5 transition-all text-center">
          <List size={40} className="mx-auto mb-4 text-white/40" />
          <h2 className="font-bold uppercase tracking-widest text-white/40">Meus Veículos (Em breve)</h2>
        </div>
      </div>
    </div>
  );
}
