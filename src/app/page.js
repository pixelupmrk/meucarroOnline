export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>🚗 Meu Carro Online</h1>
      <p style={{ fontSize: '1.2rem' }}>O site está oficialmente no ar!</p>
      <div style={{ marginTop: '30px' }}>
        <a href="/cadastro" style={{ padding: '12px 24px', background: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Acessar Sistema de Cadastro
        </a>
      </div>
    </div>
  )
}
