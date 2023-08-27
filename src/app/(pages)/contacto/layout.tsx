import { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Contacto",
  description: "Volamos para que llegues más rápido",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
