import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Claims",
  description:
    "GRUPO LOGISTICO ESPECIALIZADO S.A.S has a customer service process available to its clients that has all the means required to comprehensively address their requests, complaints, claims, resources and requests for compensation.",
  keywords: "transport, cargo, logistics, air, land, sea, mass cargo",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
