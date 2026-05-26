// Rodapé partilhado de todo o painel

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 px-4 py-4 text-sm text-zinc-500 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
        <span>© Petshop LEGO</span>
        <span>Dashboard · modo demonstração</span>
      </div>
    </footer>
  );
}