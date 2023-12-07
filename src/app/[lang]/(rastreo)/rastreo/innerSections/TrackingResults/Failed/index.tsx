import { FC } from 'react';

import { Alert } from '@ui/components';
import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';

interface FailedProps extends LangInterface {
  trackingId: string;
}

export const Failed: FC<FailedProps> = ({ lang, trackingId }) => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col gap-8 justify-center items-center text-center mt-10">
        <Alert />
        <h1 className="text-2xl font-bold font-poppins text-light-gray-third text-center">
          {lang === 'es'
            ? `Lo sentimos, guía '${trackingId}' no encontrada`
            : 'Sorry, guide not found'}
        </h1>
      </div>
      <StickyTracking lang={lang} samePage />
    </section>
  );
};
