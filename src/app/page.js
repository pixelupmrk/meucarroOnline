export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '50px', 
      textAlign: 'center',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#1a73e8', fontSize: '3rem' }}>🚗 Meu Carro Online</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Bem-vindo ao seu sistema de gerenciamento de estoque.
      </p>
      
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="/cadastro" style={{
          padding: '15px 25px',
          backgroundColor: '#1a73e8',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          Cadastrar Novo Veículo
        </a>
        
        <a href="/lista" style={{
          padding: '15px 25px',
          backgroundColor: '#34a853',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          Ver Estoque Atual
        </a>
      </div>

      <footer style={{ marginTop: '50px', color: '#888', fontSize: '0.9rem' }}>
        Conectado ao Banco de Dados Supabase via Prisma
      </footer>
    </div>
  )
}
