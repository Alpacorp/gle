import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - Tracking | Package and Messaging Tracking",
  description:
    "Track your shipments quickly and securely. Optimize your logistics with us.",
  keywords:
    "logistics company, tracking, logistics services, mission, vision, values",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
