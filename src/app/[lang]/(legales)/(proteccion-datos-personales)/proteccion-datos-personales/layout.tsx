import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Protección de Datos Personales",
  description:
    "GRUPO LOGÍSTICO ESPECIALIZADO S.A.S. se permite informar: Que en cumplimiento de la Ley Estatutaria 1581 del 2012, por la cual se estable el 'Régimen General de Protección de Datos' y el Decreto Reglamentario 1377 del 2013",
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
