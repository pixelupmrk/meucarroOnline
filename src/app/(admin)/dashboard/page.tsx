'use client'
import React from 'react';
import { LayoutDashboard, Users, Car, TrendingUp, ArrowLeft, Settings, Bell } from 'lucide-react';

export default function DashboardMaster() {
  return (
    <div className="min-h-screen bg-[#020617] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black text-white flex flex-col items-center p-6">
      
      {/* HEADER PREMIUM CENTRALIZADO */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-12 py-6 border-b border-white/5">
        <button onClick={() => window.location.href='/'} className="flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-all uppercase text-[10px] font-black tracking-[0.3em]">
          <ArrowLeft size={18} /> Sair do Sistema
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter italic">MASTER <span className="text-cyan-400">COMMAND</span></h1>
          <p className="text-[10px] text-cyan-500/50 font-bold uppercase tracking-[0.5em]">System Intelligence v2.0</p>
        </div>
        <div className="flex gap-4 text-white/20">
          <Bell size={20} className="hover:text-white cursor-pointer" />
          <Settings size={20} className="hover:text-white cursor-pointer" />
        </div>
      </header>

      {/* GRID DE CARDS 3D CENTRALIZADO */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* CARD LOJISTAS */}
        <div className="group relative bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem] hover:border-cyan-500/50 transition-all hover:-translate-y-2 duration-500 shadow-2xl">
          <div className="absolute -top-6 left-8 p-4 bg-cyan-600 rounded-2xl shadow-[0_0_30px_rgba(8,145,178,0.4)] group-hover:scale-110 transition-transform">
            <Users size={32} className="text-white" />
          </div>
          <div className="mt-6">
            <h3 className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Total de Clientes</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black italic">12</span>
              <span className="text-cyan-500 text-xs font-bold uppercase">Lojistas</span>
            </div>
            <button className="w-full mt-8 py-3 bg-white/5 hover:bg-cyan-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Gerenciar Lojistas</button>
          </div>
        </div>

        {/* CARD ESTOQUE GLOBAL */}
        <div 
          onClick={() => window.location.href='/dashboard/veiculos'}
          className="group relative bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/50 transition-all hover:-translate-y-2 duration-500 shadow-2xl cursor-pointer"
        >
          <div className="absolute -top-6 left-8 p-4 bg-purple-600 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.4)] group-hover:scale-110 transition-transform">
            <Car size={32} className="text-white" />
          </div>
          <div className="mt-6">
            <h3 className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Estoque Integrado</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black italic">84</span>
              <span className="text-purple-500 text-xs font-bold uppercase">Veículos</span>
            </div>
            <button className="w-full mt-8 py-3 bg-purple-600 text-[10px] font-black uppercase tracking-widest">Ver Todos os Carros</button>
          </div>
        </div>

        {/* CARD TRAFEGO */}
        <div className="group relative bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem] hover:border-green-500/50 transition-all hover:-translate-y-2 duration-500 shadow-2xl">
          <div className="absolute -top-6 left-8 p-4 bg-green-600 rounded-2xl shadow-[0_0_30px_rgba(22,163,74,0.4)] group-hover:scale-110 transition-transform">
            <TrendingUp size={32} className="text-white" />
          </div>
          <div className="mt-6">
            <h3 className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Alcance do Site</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black italic">320</span>
              <span className="text-green-500 text-xs font-bold uppercase">Views Hoje</span>
            </div>
            <div className="w-full mt-8 h-2 bg-white/5 rounded-full overflow-hidden">
               <div className="w-[70%] h-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
