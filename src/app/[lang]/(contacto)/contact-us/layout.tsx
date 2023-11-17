import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Contact Us | Let's Talk!",
  description:
    "Contact us for info on transport and logistics. We help you get there fast and efficiently.",
  keywords: "contact, cargo transportation, logistics, parcel service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
