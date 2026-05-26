// Navegação lateral do dashboard
import Link from "next/link";

export function Sidebar() {
  return (
    <aside
      className="w-full shrink-0 border-zinc-800 bg-zinc-900 md:w-56 md:border-r"
      aria-label="Navegação lateral"
    >
      <nav className="flex flex-col gap-1 p-4 text-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Operação</p>
        <Link href="/" className="rounded-md px-2 py-1.5 text-zinc-300 hover:bg-zinc-800">
          Resumo
        </Link>
        <Link href="/pets" className="rounded-md px-2 py-1.5 text-zinc-300 hover:bg-zinc-800">
          Adoções
        </Link>
      </nav>
    </aside>
  );
}