import { FC } from 'react';
import Image from 'next/image';

import { team } from '@public/assets/images/about-us/index';
import gleWhite from '@public/assets/images/gle/gle-white.png';

import { LangInterface } from '@constans/interfaces/langInterface';

export const WorkWithUsImage: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="mt-28">
      <div className="text-center m-auto">
        <Image
          src={team}
          alt="Equipo de trabajo G.L.E."
          title="Equipo de trabajo G.L.E."
          width={1200}
          height={410}
          priority
          className="w-full"
        />
        <div className="bg-main-red py-6">
          <h2 className="text-4xl font-poppins font-semibold ml-3 text-white max-[550px]:text-xl">
            {lang === 'es' ? 'Trabaja con Nosotros' : 'Work with us'}
          </h2>
        </div>
        <Image
          src={gleWhite}
          alt="Gle grupo logístico especializado"
          width={340}
          height={100}
          priority
          className="relative aspect-auto -top-60 right-0 left-0 m-auto w-auto max-[680px]:-top-40 max-[680px]:w-[12.5rem] max-[380px]:-top-32 max-[380px]:w-[9.375rem]"
        />
      </div>
    </div>
  );
};
