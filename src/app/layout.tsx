import { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import { ContextProvider } from "@context/Context";

import { Header } from "@app/ui/components/Header";
import { Footer } from "@app/ui/components/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "G.L.E. - Grupo Logístico Especializado",
  description: "Volamos para que llegues más rápido",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <ContextProvider>
        <body
          className={`${poppins.variable} ${inter.variable}`}
          suppressHydrationWarning
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
