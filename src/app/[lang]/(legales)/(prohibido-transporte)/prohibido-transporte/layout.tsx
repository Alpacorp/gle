import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Envíos Prohibido Transporte",
  description:
    "Objetos que por su naturaleza o embalaje pongan en peligro a los empleados de los servicios postales o al público en general, o que puedan ensuciar o dañar otros objetos postales, o los equipos del operador.",
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
