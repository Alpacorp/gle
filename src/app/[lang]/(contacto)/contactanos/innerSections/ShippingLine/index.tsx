import { FC } from 'react';
import Link from 'next/link';

import { WhatsAppWhite } from '@ui/components';
import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const ShippingLine: FC<LangInterface> = ({ lang }) => {
  return (
    <Link
      href={
        lang === 'es'
          ? 'https://wa.me/573153093999?text=Hola,%20quiero%20más%20información%20sobre%20los%20envíos'
          : 'https://wa.me/573153093999?text=Hello,%20I%20want%20more%20information%20about%20shipping'
      }
      target="_blank"
      className="text-black font-poppins max-w-[12.5rem] w-full mx-auto text-lg font-bold flex items-center justify-center border-main-red border-2 px-2 py-1 my-3 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
    >
      <WhatsAppWhite fill="#00000" className="mr-1" /> 3153093999
    </Link>
  );
};
