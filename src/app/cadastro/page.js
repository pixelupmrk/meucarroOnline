'use client'
import { useState } from 'react'

export default function CadastroCarro() {
  const [form, setForm] = useState({ marca: '', modelo: '', ano: '', preco: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/carros', {
      method: 'POST',
      body: JSON.stringify({
        marca: form.marca,
        modelo: form.modelo,
        ano: parseInt(form.ano),
        preco: parseFloat(form.preco)
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) {
      alert('Carro cadastrado com sucesso!')
      setForm({ marca: '', modelo: '', ano: '', preco: '' })
    }
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1>Cadastrar Carro</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input placeholder="Marca" value={form.marca} onChange={e => setForm({...form, marca: e.target.value})} required style={{padding: '8px'}}/>
        <input placeholder="Modelo" value={form.modelo} onChange={e => setForm({...form, modelo: e.target.value})} required style={{padding: '8px'}}/>
        <input placeholder="Ano" type="number" value={form.ano} onChange={e => setForm({...form, ano: e.target.value})} required style={{padding: '8px'}}/>
        <input placeholder="Preço" type="number" step="0.01" value={form.preco} onChange={e => setForm({...form, preco: e.target.value})} required style={{padding: '8px'}}/>
        <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Salvar Carro</button>
      </form>
    </div>
  )
}
