'use client'
import React, { useState, useEffect } from 'react';
import { QrCode, Smartphone, CheckCircle2, RefreshCcw, Wifi } from 'lucide-react';

export default function ConexaoWhatsapp() {
  const [status, setStatus] = useState('desconectado'); // desconectado, gerando, conectado
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // Simulação da chamada da sua API de WhatsApp
  const gerarNovoQR = () => {
    setStatus('gerando');
    // Aqui chamaremos a sua API que você já tem no repertório
    setTimeout(() => {
      setQrCodeUrl('https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MEU-CARRO-ONLINE-TOKEN');
      setStatus('aguardando');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans flex items-center justify-center">
      <div className="max-w-md w-full glass-3d p-10 rounded-[3.5rem] border border-white/10 text-center">
        <header className="mb-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 mx-auto mb-4">
            <Wifi size={32} />
          </div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter text-green-500">Conexão <span className="text-white">Bot</span></h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-2 font-bold">Vincule seu WhatsApp de Trabalho</p>
        </header>

        {status === 'desconectado' && (
          <button 
            onClick={gerarNovoQR}
            className="w-full bg-white text-black font-black py-6 rounded-3xl flex items-center justify-center gap-3 hover:bg-green-500 transition-all uppercase italic"
          >
            <QrCode size={20} /> Gerar QR Code
          </button>
        )}

        {status === 'gerando' && (
          <div className="py-12 flex flex-col items-center gap-4">
            <RefreshCcw size={40} className="text-cyan-400 animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Solicitando Instância à API...</p>
          </div>
        )}

        {status === 'aguardando' && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="bg-white p-4 rounded-[2rem] inline-block shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <img src={qrCodeUrl} alt="QR Code Whatsapp" className="w-full h-full" />
            </div>
            <p className="text-xs text-white/60 px-6">Abra o WhatsApp {`>`} Aparelhos Conectados {`>`} Conectar um Aparelho</p>
            <button onClick={() => setStatus('desconectado')} className="text-[10px] font-bold text-white/20 uppercase hover:text-red-500 transition-colors">Cancelar Conexão</button>
          </div>
        )}

        {status === 'conectado' && (
          <div className="py-10 space-y-4">
            <CheckCircle2 size={60} className="text-green-500 mx-auto animate-bounce" />
            <p className="font-black uppercase italic">WhatsApp Ativo!</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">O Bot agora responderá em seu nome.</p>
          </div>
        )}
      </div>
    </div>
  );
}
