import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Servicio de Paqueteo",
  description:
    "Envíos rápidos y seguros: aéreo, terrestre y marítimo. Optimiza tu logística con nosotros.",
  keywords: "paqueteo, transporte de carga, logística",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
