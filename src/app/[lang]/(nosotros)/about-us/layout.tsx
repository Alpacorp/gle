import { Metadata } from "next";

import "@globals/globals.css";

export const metadata: Metadata = {
  title: "G.L.E. - About Us | Mission, Vision, and Values",
  description:
    "Get to know us and discover our values. We offer innovative logistics and customer satisfaction.",
  keywords: "logistics company, logistics services, mission, vision, values",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
