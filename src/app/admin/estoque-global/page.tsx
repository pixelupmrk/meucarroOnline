'use client'
import React, { useState } from 'react';
import { ShieldAlert, Search, Filter, Trash2, ExternalLink, AlertOctagon, Car } from 'lucide-react';

export default function AuditoriaEstoque() {
  const [busca, setBusca] = useState('');
  
  // Simulação da base de dados global (que virá do Supabase)
  const [estoqueGlobal, setEstoqueGlobal] = useState([
    { id: 1, loja: 'Premium Motors', modelo: 'Porsche 911', preco: 'R$ 948.000', data: '28/01', status: 'Verificado' },
    { id: 2, loja: 'Elite Cars', modelo: 'Corolla 2024', preco: 'R$ 148.900', data: '28/01', status: 'Pendente' },
    { id: 3, loja: 'Loja do Zé', modelo: 'Fusca 1970', preco: 'R$ 5.000', data: '27/01', status: 'Suspeito' },
  ]);

  const banirAnuncio = (id: number) => {
    if(confirm("Deseja remover este anúncio de TODA a plataforma?")) {
      setEstoqueGlobal(estoqueGlobal.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DE AUDITORIA */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-500/20 rounded-2xl text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black uppercase italic tracking-tighter">Auditoria de <span className="text-red-500">Estoque Global</span></h1>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2">Monitoramento de Integridade da Plataforma</p>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                placeholder="BUSCAR POR LOJA OU MODELO..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-bold uppercase focus:border-red-500/50 outline-none transition-all"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-white/40">
              <Filter size={20} />
            </button>
          </div>
        </header>

        {/* TABELA DE AUDITORIA LUXO */}
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest">Veículo / Detalhes</th>
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest">Origem (Loja)</th>
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest">Status IA</th>
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest text-right">Ações de Comando</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {estoqueGlobal.map((item) => (
                <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/20 border border-white/10 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                        <Car size={24} />
                      </div>
                      <div>
                        <p className="font-black uppercase italic text-sm">{item.modelo}</p>
                        <p className="text-[10px] text-cyan-400 font-bold">{item.preco} • {item.data}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-[11px] font-bold text-white/60 uppercase">{item.loja}</span>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                      item.status === 'Verificado' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 
                      item.status === 'Suspeito' ? 'bg-red-500/10 border-red-500/20 text-red-500 animate-pulse' : 
                      'bg-yellow-500/10 border-yellow-500/20 text-yellow-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6 text-right space-x-2">
                    <button className="p-3 bg-white/5 rounded-xl text-white/20 hover:text-white transition-all"><ExternalLink size={16}/></button>
                    <button 
                      onClick={() => banirAnuncio(item.id)}
                      className="p-3 bg-red-500/10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/10"
                    >
                      <Trash2 size={16}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ALERTA DE SEGURANÇA */}
        <div className="mt-8 flex items-center gap-3 bg-orange-500/5 border border-orange-500/10 p-4 rounded-2xl">
          <AlertOctagon size={18} className="text-orange-500" />
          <p className="text-[10px] font-bold text-orange-500/80 uppercase tracking-widest">
            Atenção: A remoção de anúncios é instantânea e afeta a visibilidade de todos os vendedores remotos.
          </p>
        </div>
      </div>
    </div>
  );
}
