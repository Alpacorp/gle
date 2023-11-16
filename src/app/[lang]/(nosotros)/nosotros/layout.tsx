import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Nosotros | Misión, Visión y Valores",
  description:
    "Conócenos y descubre nuestros valores. Ofrecemos logística innovadora y compromiso con la satisfacción del cliente.",
  keywords: "empresa logística, servicios logísticos, misión, visión, valores",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
