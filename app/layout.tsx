import React from "react";

export const metadata = {
  title: "meucarroOnline",
  description: "Plataforma de lojas de carros - painel de gerenciamento e CRM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottom: '1px solid #e6e6e6', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/logo.png" alt="meucarroOnline" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <div>
              <strong style={{ display: 'block' }}>meucarroOnline</strong>
              <small style={{ color: '#666', fontSize: 12 }}>Plataforma de lojas de carros</small>
            </div>
          </div>

          <nav>
            <a href="/" style={{ marginRight: 12, color: '#111', textDecoration: 'none' }}>Home</a>
            <a href="/dashboard" style={{ marginRight: 12, color: '#111', textDecoration: 'none' }}>Dashboard</a>
            <a href="/dashboard/crm" style={{ color: '#111', textDecoration: 'none' }}>CRM</a>
          </nav>
        </header>

        <main style={{ padding: 24, minHeight: 'calc(100vh - 96px)', background: '#fafafa' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
        </main>

        <footer style={{ padding: 16, borderTop: '1px solid #e6e6e6', textAlign: 'center', background: '#fff' }}>
          <small style={{ color: '#666' }}>© {new Date().getFullYear()} meucarroOnline — desenvolvido por você</small>
        </footer>
      </body>
    </html>
  );
}
