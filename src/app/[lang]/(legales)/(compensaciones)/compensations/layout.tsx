import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Compensation Procedure",
  description:
    "By accessing this site, the user accepts the following conditions and policies of use.",
  keywords: "transport, cargo, logistics, air, land, sea, mass cargo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}