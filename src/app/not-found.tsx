import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)'}}>
      <h1 style={{color: 'var(--text-primary)'}}>Página não encontrada</h1>
      <p>Desculpe, não conseguimos encontrar a página que você procura.</p>
      <Link href="/" className="btn btn-primary">Voltar para a home</Link>
    </div>
  );
}
