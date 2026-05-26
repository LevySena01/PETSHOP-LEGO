// Barra global do painel — marca + links principais
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-semibold text-zinc-50">
          Petshop LEGO
        </Link>
        <nav className="flex gap-4 text-sm text-zinc-400" aria-label="Principal">
          <Link href="/" className="hover:text-zinc-50">Painel</Link>
          <Link href="/pets" className="hover:text-zinc-50">Pets</Link>
        </nav>
      </div>
    </header>
  );
}