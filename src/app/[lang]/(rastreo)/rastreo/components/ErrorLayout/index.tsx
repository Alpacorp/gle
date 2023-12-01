import { FC } from 'react';

import { Alert, HeroPages } from '@ui/components';
import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';

export const ErrorLayout: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-20">
      <HeroPages
        pageTitle={
          lang === 'es' ? 'Resultados del rastreo' : 'Tracking results'
        }
        color="white"
        className="leading-none"
      />
      <div className="flex flex-col gap-8 justify-center items-center">
        <Alert />
        <h1 className="text-2xl font-bold font-poppins text-light-gray-third">
          {lang === 'es'
            ? 'Lo sentimos, guía no encontrada'
            : 'Sorry, guide not found'}
        </h1>
      </div>
      <StickyTracking lang={lang} samePage />
    </section>
  );
};
