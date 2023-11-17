import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Contacto | ¡Hablemos!",
  description:
    "Contáctanos para información sobre transporte y logística. Ayudamos a llegar rápido y eficiente.",
  keywords: "contacto, transporte de carga, logística, servicio de paqueteo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
