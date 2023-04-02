import { Roboto } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

import { ThemeSwitch } from "@/Components/Athoms/ThemeSwitch";

import { AppProvider } from "./AppProvider";

import "@/Services/ServicesFactory";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "300", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vibbraneo - Lista de itens",
};

export default function Home({ children }: { children: ReactNode }) {
  return (
    <html className={roboto.variable}>
      <head></head>
      <body className="font-roboto min-h-screen flex flex-col bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text">
        <AppProvider>
          <header className="p-6 border-b flex justify-between items-center">
            <ul className="flex-1 flex justify-center">
              <li>
                <Link href={"/"}>Sobre</Link>
              </li>
            </ul>
            <ThemeSwitch />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="p-6 border-t">
            Direitos autorais © 2023 Vibbraneo. Todos os direitos reservados.
            Desenvolvido por Leonardo Cabral
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
