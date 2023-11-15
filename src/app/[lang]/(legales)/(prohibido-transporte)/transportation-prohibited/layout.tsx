import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Prohibited Transport Shipments",
  description:
    "Objects that, due to their nature or packaging, endanger postal services employees or the general public, or that may dirty or damage other postal objects, or the operator's equipment.",
  keywords: "transport, cargo, logistics, air, land, sea, mass cargo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
