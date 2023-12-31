import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Internacional",
  description: "Te asesoramos en todo el proceso de entregas internacionales",
  keywords: "transporte, carga, logística, aéreo, terrestre, marítimo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
