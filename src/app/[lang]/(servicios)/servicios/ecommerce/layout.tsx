import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Ecommerce",
  description:
    "Somos el mejor aliado para su E-commerce, hacemos entregas nacionales e internacionales",
  keywords:
    "transporte, carga, logística, aéreo, terrestre, marítimo, ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
