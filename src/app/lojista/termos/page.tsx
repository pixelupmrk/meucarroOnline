'use client'
import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TermosLojista() {
  const [aceito, setAceito] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 flex items-center justify-center font-sans">
      <div className="max-w-2xl w-full glass-3d p-8 md:p-12 rounded-[3.5rem] border border-white/10">
        <div className="flex items-center gap-4 mb-8 text-cyan-400">
          <ShieldCheck size={40} />
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Termo de <span className="text-white">Responsabilidade</span></h1>
        </div>

        <div className="space-y-6 overflow-y-auto max-h-[400px] pr-4 text-white/60 text-sm leading-relaxed custom-scrollbar">
          <section className="space-y-3">
            <h3 className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <CheckCircle size={14} className="text-cyan-400" /> 1. Autenticidade e Qualidade
            </h3>
            <p>O Lojista declara que todos os veículos cadastrados são de sua propriedade ou posse legítima, responsabilizando-se civil e criminalmente pela veracidade das informações, fotos e estado de conservação anunciado.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <CheckCircle size={14} className="text-cyan-400" /> 2. Garantia e Nota Fiscal
            </h3>
            <p>A emissão de Nota Fiscal de venda e a garantia legal de 90 dias (motor e câmbio) são de responsabilidade **exclusiva da loja anunciante**, isentando a plataforma de qualquer disputa comercial pós-venda.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <CheckCircle size={14} className="text-cyan-400" /> 3. Comissionamento
            </h3>
            <p>O Lojista concorda em honrar a comissão pré-estabelecida com a plataforma para cada venda concretizada através dos leads gerados pelos consultores remotos.</p>
          </section>
        </div>

        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4">
          <input 
            type="checkbox" 
            id="termo" 
            className="mt-1 w-5 h-5 accent-cyan-500 cursor-pointer"
            onChange={(e) => setAceito(e.target.checked)}
          />
          <label htmlFor="termo" className="text-[10px] font-black uppercase tracking-widest leading-tight cursor-pointer">
            Li e aceito as condições de responsabilidade e regras da plataforma Meu Carro Online.
          </label>
        </div>

        <button 
          disabled={!aceito}
          onClick={() => window.location.href = '/lojista/cadastrar'}
          className={`w-full mt-6 py-5 rounded-2xl font-black uppercase italic transition-all ${
            aceito 
            ? 'bg-cyan-500 text-black shadow-[0_0_25px_rgba(6,182,212,0.4)]' 
            : 'bg-white/5 text-white/20 cursor-not-allowed'
          }`}
        >
          Acessar Portal de Cadastro
        </button>
      </div>
    </div>
  );
}
