import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Rastrea tus envíos | Rastreo de paquetes y mensajería",
  description:
    "Rastrea tus envíos de forma rápida y segura. Optimiza tu logística con nosotros.",
  keywords: "empresa logística, servicios logísticos, misión, visión, valores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
