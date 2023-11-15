import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Privacy Policy",
  description:
    "GRUPO LOGÍSTICO ESPECIALIZADO S.A.S. wishes to inform: That in compliance with Statutory Law 1581 of 2012, which establishes the 'General Data Protection Regime' and the Regulatory Decree 1377 of 2013",
  keywords: "transport, cargo, logistics, air, land, sea, mass cargo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
