import { FC } from 'react';
import Image from 'next/image';

import { ArrowCta, Title } from '@ui/components';
import { phone1, phone2 } from '@public/assets/images/home/different/index';

import { LangInterface } from '@constans/interfaces/langInterface';

export const TrackingInfo: FC<LangInterface> = ({ lang }) => {
  return (
    <section>
      <div className="flex items-center justify-center flex-wrap mt-12">
        <div className="flex items-center max-[1065px]:flex-col">
          <Title
            align="center"
            className="text-4xl max-w-[21.875rem] w-full"
            color="main-red"
            family="poppins"
            weight="semibold"
          >
            {lang === 'es'
              ? 'Rastrea tu envío desde tu celular'
              : 'Track your shipment from your smartphone'}
          </Title>
          <ArrowCta
            className="-rotate-90 w-8 h-14 max-[1065px]:rotate-0"
            stroke="#D81730"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <Image
            alt="Celular con la vista del home"
            className="aspect-auto"
            height={567}
            priority
            src={phone1}
            title="Celular con la vista del home"
            width={348}
          />
          <Image
            alt="Celular con la vista de la página de rastreo"
            className="aspect-auto"
            height={567}
            priority
            src={phone2}
            title="Celular con la vista de la página de rastreo"
            width={348}
          />
        </div>
      </div>
    </section>
  );
};
