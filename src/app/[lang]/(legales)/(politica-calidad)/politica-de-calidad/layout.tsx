import React from "react";
import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Política de Calidad",
  description:
    "G.L.E. es una empresa que brinda servicios logísticos para carga aérea, terrestre y marítima. Estamos comprometidos a brindar el mejor servicio a nuestros clientes.",
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
