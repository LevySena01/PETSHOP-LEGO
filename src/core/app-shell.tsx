// Application Shell — Server Component
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export type AppShellProps = {
  /** Miolo dinâmico — vem do Next via layout.tsx */
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100"> {/* coluna: header · corpo · footer*/}
      <Header />
      <div className="flex flex-1 flex-col md:flex-row"> {/* aside + main lado a lado ≥ md */}
        <Sidebar />
        <main className="flex-1 overflow-auto border-zinc-800 px-4 py-6 md:border-l md:px-8">
          {children} {/* só aqui entra o page.tsx (e layouts filhos)*/}
        </main>
      </div>
      <Footer />
    </div>
  );
}