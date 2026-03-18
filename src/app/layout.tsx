import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
            <h1>Painel Administrativos</h1>
        </header>

        <nav>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/Telas/categoria/lista">Categoria</Link></li>
            <li><Link href="/Telas/unidadeMedida/lista">Unidade de Medida</Link></li>
            <li><Link href="/Telas/produto/pesquisa">Produto</Link></li>
          </ul>
        </nav>

        <main>
          {children}
        </main>

        <footer>
            <p>© 2026 • Todos os direitos reservados</p>
        </footer>
      </body>
    </html>

    
  );
}
