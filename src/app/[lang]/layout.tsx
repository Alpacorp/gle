import { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Header from "@ui/components/Header";
import { Footer, Modal } from "@ui/components/";
import { GlobalScripts, GtmBodyScript } from "@scripts/index";

import { Locale } from "@/i18n.config";
import { ContextProvider } from "@context/Context";

import "@globals/globals.css";

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
  metadataBase: new URL("https://www.glecolombia.com/"),
  title: "G.L.E. Grupo Logístico Especializado",
  alternates: {
    canonical: "https://www.glecolombia.com/",
  },
  description: "Volamos para que llegues más rápido",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.glecolombia.com/",
    siteName: "G.L.E. Grupo Logístico Especializado",
    title: "G.L.E. Grupo Logístico Especializado",
    description: "Volamos para que llegues más rápido",
    images: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    site: "@glecolombia",
    creator: "@glecolombia",
    title: "G.L.E. Grupo Logístico Especializado",
    description: "Volamos para que llegues más rápido",
    images: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  readonly children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <GlobalScripts />
      </head>
      <ContextProvider>
        <body
          className={`${poppins.variable} ${inter.variable}`}
          suppressHydrationWarning
        >
          <GtmBodyScript />
          <Modal lang={params.lang} />
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
          <Analytics />
        </body>
      </ContextProvider>
    </html>
  );
}
