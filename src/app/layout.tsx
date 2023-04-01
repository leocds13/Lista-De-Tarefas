import { ReactNode } from "react";

import "@/Services/ServicesFactory";
import "./globals.css";
// import { AppProvider } from "./AppProvider";

export const metadata = {
  title: "Vibbraneo - Lista de itens",
};

export default function Home({ children }: { children: ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="min-h-screen flex flex-col">
        {/* <AppProvider listProvider={globalThis.ListService}> */}
        <header className="p-6 border-b flex justify-center">
          <ul>
            <li>Sobre</li>
          </ul>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-6 border-t">
          Direitos autorais © 2023 Vibbraneo. Todos os direitos reservados.
          Desenvolvido por Leonardo Cabral
        </footer>
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
