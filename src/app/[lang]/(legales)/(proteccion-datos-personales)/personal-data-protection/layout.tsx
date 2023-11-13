import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Privacy Policy",
  description: "Privacy Notice for Personal Data Protection",
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
