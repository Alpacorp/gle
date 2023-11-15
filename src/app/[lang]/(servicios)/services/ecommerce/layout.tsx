import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Ecommerce",
  description:
    "We are the best ally for your E-commerce, we make national and international deliveries",
  keywords: "transport, cargo, logistics, air, land, maritime, ecommerce",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
