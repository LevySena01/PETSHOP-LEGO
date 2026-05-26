// Conteúdo da rota "/" — renderizado dentro de <main> do AppShell

export default function PainelHomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-50">Dashboard</h1>
      <p className="max-w-2xl text-zinc-400">
        {/* Conteúdo dinâmico da rota (filhos vindos do layout), dentro do <main> do AppShell — sem repetir header, sidebar nem footer. */}
      </p>
      <section className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
        <h2 className="text-sm font-medium text-zinc-300">Área de trabalho</h2>
        <p className="mt-2 text-sm text-zinc-500">Aqui entrariam KPIs, gráficos ou lista rápida de pets.</p>
      </section>
    </div>
  );
}