'use client'
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase'; // Certifique-se que o arquivo lib/supabase.ts existe
import { Camera, DollarSign, Car, Calendar, Gauge, Loader2, CheckCircle } from 'lucide-react';

export default function CadastroVeiculoReal() {
  const [loading, setLoading] = useState(false);
  const [fotos, setFotos] = useState<File[]>([]);
  const [form, setForm] = useState({
    modelo: '',
    preco: '',
    ano: '',
    km: '',
    descricao: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Upload das fotos para o Storage (Bucket 'veiculos')
      const linksFotos = [];
      for (const foto of fotos) {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error: uploadError } = await supabase.storage
          .from('veiculos')
          .upload(fileName, foto);
        
        if (data) {
          const { data: urlData } = supabase.storage.from('veiculos').getPublicUrl(fileName);
          linksFotos.push(urlData.publicUrl);
        }
      }

      // 2. Inserir dados na tabela 'veiculos'
      const { error } = await supabase
        .from('veiculos')
        .insert([{
          ...form,
          fotos: linksFotos,
          status: 'ativo'
        }]);

      if (error) throw error;

      alert("Veículo anunciado com sucesso!");
      window.location.href = '/lojista/gestao'; // Redireciona para a lista de estoque

    } catch (error: any) {
      alert("Erro ao publicar: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black uppercase italic mb-8 text-cyan-400">Anunciar Nova Máquina</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl">
          
          {/* SELEÇÃO DE FOTOS */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Fotos em Alta Resolução</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="aspect-square border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500/50 transition-all group">
                <Camera size={24} className="text-white/20 group-hover:text-cyan-400" />
                <input 
                  type="file" 
                  multiple 
                  className="hidden" 
                  onChange={(e) => setFotos(Array.from(e.target.files || []))} 
                />
              </label>
              {fotos.map((_, i) => (
                <div key={i} className="aspect-square bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400">
                  <CheckCircle size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* INPUTS PRINCIPAIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input required placeholder="MODELO (EX: PORSCHE 911)" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-cyan-500 font-bold"
                onChange={e => setForm({...form, modelo: e.target.value})} />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" size={18} />
              <input required placeholder="PREÇO" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-cyan-500 font-bold text-cyan-400"
                onChange={e => setForm({...form, preco: e.target.value})} />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input placeholder="ANO" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-cyan-500 font-bold"
                onChange={e => setForm({...form, ano: e.target.value})} />
            </div>
            <div className="relative">
              <Gauge className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input placeholder="KM" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-cyan-500 font-bold"
                onChange={e => setForm({...form, km: e.target.value})} />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 text-black font-black py-6 rounded-3xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all uppercase italic"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Publicar no Sistema"}
          </button>
        </form>
      </div>
    </div>
  );
}
