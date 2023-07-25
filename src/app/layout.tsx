import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "./ui/components/Header";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "G.L.E. - Grupo Logístico Especializado",
  description: "Volamos para que llegues más rápido",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
