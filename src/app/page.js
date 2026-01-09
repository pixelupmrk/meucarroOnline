export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px', display: 'flex', gap: '15px' }}>
          <a href="/">Início</a>
          <a href="/cadastro">Cadastrar Carro</a>
          <a href="/lista">Ver Estoque</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
