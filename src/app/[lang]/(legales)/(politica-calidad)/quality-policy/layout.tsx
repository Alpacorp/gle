import React from "react";
import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Quality Policy",
  description:
    "G.L.E. is a company that provides logistics services for air, land, and sea cargo. We are committed to providing the best service to our customers.",
  keywords: "transport, cargo, logistics, air, land, sea, mass cargo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
