import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - International",
  description:
    "We advise you throughout the entire international delivery process",
  keywords: "transport, cargo, logistics, air, land, maritime",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
