export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>🚗 Meu Carro Online</h1>
      <p>O site está no ar!</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/cadastro" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Cadastrar Veículo
        </a>
      </div>
    </div>
  )
}
