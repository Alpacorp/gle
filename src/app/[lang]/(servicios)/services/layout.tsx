import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Parcel Service",
  description:
    "Fast and secure shipping: air, land, and sea. Optimize your logistics with us.",
  keywords: "parcel service, cargo transportation, logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
