import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - 404",
  description:
    "Somos una empresa de transporte de carga internacional, con más de 20 años de experiencia en el mercado.",
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
