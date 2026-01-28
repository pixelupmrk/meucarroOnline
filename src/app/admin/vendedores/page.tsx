'use client'
import React from 'react';
import { Users, UserPlus, Shield, Power, Monitor, HardDrive } from 'lucide-react';

export default function AdminVendedores() {
  const vendedores = [
    { id: 1, nome: 'Vendedor Alpha', status: 'online', conversas: 12 },
    { id: 2, nome: 'Vendedor Beta', status: 'offline', conversas: 0 },
  ];

  return (
    <div className="min-h-screen w-full bg-[#020617] p-8 flex flex-col items-center">
      <header className="w-full max-w-6xl mb-12 bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-cyan-500/20 rounded-2xl text-cyan-400">
            <Shield size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase italic text-white leading-none">Gestão de <span className="text-cyan-400">Vendedores</span></h1>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mt-2">Sua força de vendas remota</p>
          </div>
        </div>
        <button className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black uppercase italic text-sm hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all">
          <UserPlus size={20} className="inline mr-2" /> Cadastrar Vendedor
        </button>
      </header>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendedores.map((v) => (
          <div key={v.id} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] hover:-translate-y-2 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <Users size={32} className={v.status === 'online' ? 'text-cyan-400' : 'text-white/20'} />
              </div>
              <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase border ${v.status === 'online' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
                {v.status}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase italic">{v.nome}</h3>
            <p className="text-white/40 text-[11px] font-bold uppercase mt-2 tracking-widest">{v.conversas} conversas ativas</p>
            <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
              <button className="flex-1 py-3 bg-white/5 rounded-xl text-[10px] font-black uppercase hover:text-cyan-400 transition-all">Relatórios</button>
              <button className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Power size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
