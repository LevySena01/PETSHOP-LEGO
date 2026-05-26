// Raiz App Router — envelope do documento
import type { Metadata } from "next";
import "@/assets/styles/globals.css"; // Tailwind + tema
import { AppShell } from "@/core/app-shell";

export const metadata: Metadata = { title: "Petshop LEGO · Painel" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <AppShell>{children}</AppShell> {/* children desce até <main> dentro do shell */}
      </body>
    </html>
  );
}