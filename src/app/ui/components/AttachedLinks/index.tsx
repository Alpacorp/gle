import { FC } from 'react';
import Link from 'next/link';

interface AttachedLinksProps {
  lang?: string;
  showRates?: boolean;
  showContract?: boolean;
}

export const AttachedLinks: FC<AttachedLinksProps> = ({
  lang,
  showRates = false,
  showContract = false,
}) => {
  return (
    <div className="flex text-center flex-col gap-2">
      <div className="flex flex-col gap-3">
        {showContract && (
          <Link
            href="/assets/images/services/contrato-prestacion-servicios-postales.pdf"
            target="_blank"
            className="underline underline-offset-8 hover:text-main-red"
          >
            {lang === 'es'
              ? 'Ver contrato de prestación de servicios de transporte de mensajería expresa'
              : 'See specialized messaging service provision contract'}
          </Link>
        )}
        {showRates && (
          <Link
            href="/assets/images/ecommerce/tarifas-gle.webp"
            target="_blank"
            className="underline underline-offset-8 hover:text-main-red"
          >
            {lang === 'es'
              ? 'Ver tárifas mensajería expresa'
              : 'See specialized messaging rates'}
          </Link>
        )}
        <Link
          href={
            lang === 'es'
              ? `/${lang}/prohibido-transporte`
              : `/${lang}/transportation-prohibited`
          }
          className="underline underline-offset-8 hover:text-main-red"
        >
          {lang === 'es'
            ? 'Ver envíos no permitidos'
            : 'See prohibited items for shipment'}
        </Link>
      </div>
    </div>
  );
};
