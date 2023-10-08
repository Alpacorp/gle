import { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import Header from "@ui/components/Header";
import { Footer } from "@ui/components/";
import { GlobalScripts } from "../scripts/GlobalScripts";

import { Locale } from "@/i18n.config";
import { ContextProvider } from "@context/Context";

import "@globals/globals.css";
import { GtmBodyScript } from "../scripts/GtmBodyScript";

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
  title: "G.L.E. Grupo Logístico Especializado",
  description: "Volamos para que llegues más rápido",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <GlobalScripts />
      <ContextProvider>
        <body
          className={`${poppins.variable} ${inter.variable}`}
          suppressHydrationWarning
        >
          <GtmBodyScript />
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </body>
      </ContextProvider>
    </html>
  );
}
