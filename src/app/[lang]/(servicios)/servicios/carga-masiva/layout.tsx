import { Metadata } from 'next';

import '@globals/globals.css';

export const metadata: Metadata = {
  title: 'G.L.E. - Carga Masiva',
  description:
    'Movilización de vehículos dedicados tipo turbo, sencillo, NHR, patineta y tractomula punto a punto.',
  keywords:
    'transporte, carga, logística, aéreo, terrestre, marítimo, carga masiva',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}
