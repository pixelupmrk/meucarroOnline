'use client'
import React, { useState } from 'react';
import { ShieldAlert, Search, Trash2, Download, ExternalLink, Car, CheckCircle } from 'lucide-react';

export default function AuditoriaEstoque() {
  const [estoqueGlobal, setEstoqueGlobal] = useState([
    { id: 1, loja: 'Premium Motors', modelo: 'Porsche 911', preco: 'R$ 948.000', status: 'Verificado' },
    { id: 2, loja: 'Elite Cars', modelo: 'Corolla 2024', preco: 'R$ 148.900', status: 'Pendente' },
  ]);

  // Função que será conectada ao Supabase para baixar as fotos
  const baixarPackFotos = (id: number, modelo: string) => {
    console.log(`Iniciando download das fotos originais do ${modelo}`);
    alert(`Preparando download do Pack de Fotos em Alta Resolução do ${modelo}. Aguarde o processamento...`);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-cyan-500/20 rounded-2xl text-cyan-400">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black uppercase italic tracking-tighter">Auditoria de <span className="text-cyan-400">Estoque Global</span></h1>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Acesse as mídias originais para Tráfego Pago</p>
            </div>
          </div>
        </header>

        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest">Veículo</th>
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest">Loja Origem</th>
                <th className="p-6 text-[10px] font-black uppercase text-white/20 tracking-widest text-right">Ações Master</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {estoqueGlobal.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 border border-white/10">
                        <Car size={24} />
                      </div>
                      <div>
                        <p className="font-black uppercase italic text-sm">{item.modelo}</p>
                        <p className="text-[10px] text-white/30 font-bold">{item.preco}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-[11px] font-bold text-white/60 uppercase">{item.loja}</span>
                  </td>
                  <td className="p-6 text-right space-x-2">
                    {/* BOTÃO DE DOWNLOAD PARA TRÁFEGO PAGO */}
                    <button 
                      onClick={() => baixarPackFotos(item.id, item.modelo)}
                      className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all border border-cyan-500/20 group relative"
                      title="Baixar Pack para Anúncios"
                    >
                      <Download size={18} />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DOWNLOAD PACK MÍDIA</span>
                    </button>
                    
                    <button className="p-3 bg-white/5 rounded-xl text-white/20 hover:text-white transition-all"><ExternalLink size={18}/></button>
                    <button className="p-3 bg-red-500/10 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/10"><Trash2 size={18}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
