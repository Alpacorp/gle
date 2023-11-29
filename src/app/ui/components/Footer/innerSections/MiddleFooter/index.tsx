import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Mintic, Sic, SuperTransporte } from '@/public/assets/images/footer';
import { TextInfo } from '@ui/components/index';

import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const MiddleFooter: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="flex justify-around items-center font-inter flex-wrap gap-3 bg-main-red text-white text-sm py-6 px-10 max-[400px]:justify-start">
      <div className="flex flex-wrap gap-3 flex-col">
        <Link
          href={
            lang === 'es'
              ? `/${lang}/proteccion-datos-personales`
              : `/${lang}/personal-data-protection`
          }
          className="hover:underline hover:underline-offset-8"
        >
          {lang === 'es'
            ? 'Protección de datos personales'
            : 'Personal data protection'}
        </Link>
        <Link
          href={
            lang === 'es'
              ? `/${lang}/terminos-y-condiciones`
              : `/${lang}/terms-and-conditions`
          }
          className="hover:underline hover:underline-offset-8"
        >
          {lang === 'es'
            ? 'Términos y condiciones de servicio'
            : 'Terms of service'}
        </Link>
        <Link
          href={
            lang === 'es' ? `/${lang}/compensaciones` : `/${lang}/compensations`
          }
          className="hover:underline hover:underline-offset-8"
        >
          {lang === 'es'
            ? 'Procedimiento de compensación'
            : 'Compensation procedure'}
        </Link>
        <Link
          href={lang === 'es' ? `/${lang}/pqrs` : `/${lang}/claims`}
          className="hover:underline hover:underline-offset-8"
        >
          {lang === 'es'
            ? 'Proceso PQR’S e Indemnizaciones'
            : 'PQR’S and Compensation process'}
        </Link>
        <Link
          href={
            lang === 'es'
              ? `/${lang}/prohibido-transporte`
              : `/${lang}/transportation-prohibited`
          }
          className="hover:underline hover:underline-offset-8"
        >
          {lang === 'es'
            ? 'Ver envíos no permitidos'
            : 'Prohibited items for shipment'}
        </Link>
      </div>
      <div className="flex gap-3 flex-wrap max-[400px]:mt-4">
        <div>
          <div>
            <Image
              alt="SuperTransporte"
              title="SuperTransporte"
              src={SuperTransporte}
              width={140}
              height={40}
              className="aspect-auto mb-4"
            />
            <TextInfo>
              Diagonal 26 G # 95 A - 85 Torre 3 Piso 1, Bogotá
            </TextInfo>
            <TextInfo>+57 (601) 352 6700</TextInfo>
            <TextInfo>01 8000 915615</TextInfo>
            <TextInfo>atencionciudadano@supertransporte.gov.co</TextInfo>
          </div>
        </div>
        <div>
          <div>
            <Image
              alt="Mintic"
              title="Mintic"
              src={Mintic}
              width={140}
              height={40}
              className="aspect-auto mb-4"
            />
            <TextInfo>Cra. 8a entre calles 12 A y 12 B, Bogotá</TextInfo>
            <TextInfo>+57 (601) 344 3460</TextInfo>
            <TextInfo>01 8000 914014</TextInfo>
            <TextInfo>minticresponde@mintic.gov.co</TextInfo>
          </div>
        </div>
        <div>
          <div>
            <Image
              alt="Sic"
              title="Sic"
              src={Sic}
              width={140}
              height={40}
              className="aspect-auto mb-4"
            />
            <TextInfo>Carrera 13 No. 27 - 00, Pisos 1 y 3, Bogotá</TextInfo>
            <TextInfo>+57 (601) 592 0400</TextInfo>
            <TextInfo>01 8000 910165</TextInfo>
            <TextInfo>contactenos@sic.gov.co</TextInfo>
          </div>
        </div>
      </div>
    </section>
  );
};
