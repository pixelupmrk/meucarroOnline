export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>🚗 Meu Carro Online</h1>
      <p>Projeto reiniciado com sucesso!</p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href="/cadastro">Cadastrar</a>
        <a href="/lista">Ver Estoque</a>
      </div>
    </div>
  )
}
