import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - PQRs",
  description:
    "GRUPO LOGISTICO ESPECIALIZADO S.A.S tiene a disposición de sus clientes el proceso de servicio al cliente que dispone de todos los medios requeridos para atender en forma integral sus peticiones, quejas, reclamos, recursos y solicitudes de indemnización.",
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
