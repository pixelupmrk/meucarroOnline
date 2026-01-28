'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MessageCircle, Car, Clock, ShieldAlert, History } from 'lucide-react';

export default function PainelLeadsVendedor() {
  const [leads, setLeads] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-cyan-400">Minha <span className="text-white">Fila de Atendimento</span></h1>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2 italic flex items-center gap-2">
              <ShieldAlert size={12} className="text-amber-500" /> Acesso Restrito: A exclusão de contatos é bloqueada pelo Admin
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4">
            <div className="text-right">
              <p className="text-[8px] text-white/30 uppercase font-black">Status de Conexão</p>
              <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Bot Ativo</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </header>

        {/* LISTA DE LEADS */}
        <div className="space-y-4">
          {leads.length === 0 ? (
            <div className="glass-3d p-20 rounded-[3rem] border border-white/5 text-center">
              <History size={48} className="mx-auto text-white/10 mb-4" />
              <p className="text-white/20 uppercase font-black italic">Aguardando novos leads do Bot Master...</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="glass-3d p-8 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 group hover:border-cyan-500/30 transition-all">
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Car size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase italic leading-none mb-1">{lead.nome_cliente}</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-2 py-1 rounded-md">Interesse: {lead.carro_interesse}</span>
                      <span className="text-[9px] font-black text-white/30 uppercase flex items-center gap-1"><Clock size={10}/> Recebido há 5 min</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="hidden md:block text-right mr-4">
                    <p className="text-[8px] text-white/20 uppercase font-black">Carro na Troca</p>
                    <p className="text-xs font-bold italic">{lead.carro_troca || 'Sem Troca'}</p>
                  </div>
                  <a 
                    href={`https://wa.me/${lead.whatsapp_cliente}`}
                    target="_blank"
                    className="flex-1 lg:flex-none bg-green-500 text-black px-10 py-5 rounded-2xl font-black uppercase italic flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all active:scale-95"
                  >
                    <MessageCircle size={20} /> Iniciar Venda
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
