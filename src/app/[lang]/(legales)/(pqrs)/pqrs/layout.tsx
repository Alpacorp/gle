import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - PQRs",
  description:
    "Al acceder a este sitio, el usuario acepta las siguientes condiciones y políticas de uso.",
  keywords:
    "transporte, carga, logística, aéreo, terrestre, marítimo, carga masiva",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
