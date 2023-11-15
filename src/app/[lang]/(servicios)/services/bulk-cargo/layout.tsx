import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Bulk Cargo",
  description:
    "Mobilization of dedicated vehicles, including turbo, single, double truck, skateboard, and tractor-trailer, point-to-point.",
  keywords: "transport, cargo, logistics, air, land, sea, bulk cargo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
