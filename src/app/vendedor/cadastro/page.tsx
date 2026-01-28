'use client'
import React, { useState } from 'react';
import { User, MapPin, CreditCard, Briefcase, ChevronRight } from 'lucide-react';

export default function CadastroVendedor() {
  const [etapa, setEtapa] = useState(1);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full glass-3d p-10 rounded-[3rem]">
        
        {etapa === 1 ? (
          <div className="space-y-8 animate-in fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Dados do <span className="text-purple-400">Consultor</span></h2>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-2">Identificação para recebimento de comissões</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input placeholder="NOME COMPLETO" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-purple-500 text-xs font-bold" />
              </div>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input placeholder="CPF / CHAVE PIX" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-purple-500 text-xs font-bold" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input placeholder="ENDEREÇO RESIDENCIAL" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-purple-500 text-xs font-bold" />
              </div>
            </div>

            <button onClick={() => setEtapa(2)} className="w-full bg-purple-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-purple-500 transition-all shadow-xl">
              Próximo Passo <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in slide-in-from-right">
             <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
               <h3 className="text-purple-400 font-black uppercase text-xs mb-4 flex items-center gap-2">
                 <Briefcase size={16} /> Contrato de Parceria Digital
               </h3>
               <p className="text-[10px] text-white/50 leading-relaxed italic">
                 "O consultor declara estar ciente de que atua como parceiro autônomo, sem qualquer vínculo empregatício com a plataforma ou com os lojistas cadastrados. A remuneração é exclusivamente baseada no sucesso das vendas (comissão), sendo o consultor responsável por seus próprios encargos e conduta ética."
               </p>
             </div>

             <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-purple-400 transition-all uppercase italic">
               Finalizar e Atender Leads
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
