import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Prohibited Transport Shipments",
  description:
    "We are a company that provides logistics services, we have a team of professionals with extensive experience in the sector, we offer a personalized service, we are your best allies.",
  keywords: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
