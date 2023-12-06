import { FC } from 'react';
import Image from 'next/image';

import { philosophy } from '@public/assets/images/about-us/index';

import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const Philosophy: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="flex gap-8 items-center px-[7.5rem] mt-14 max-[1000px]:flex-wrap max-[550px]:px-5 max-[380px]:px-6">
      <div className="w-full relative">
        <Image
          src={philosophy}
          alt="valores"
          title="valores G.L.E."
          width={450}
          height={637}
          priority
          className="aspect-auto rounded-2xl max-w-[34.375rem] w-full"
        />
        <div
          title="Valores G.L.E."
          className="absolute z-20 inset-0 bottom-0 top-0 bg-gradient-to-t from-white to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
              {lang === 'es' ? 'Filosofía' : 'Philosophy'}
            </h2>
          </div>
          <div>
            <p className="p-5 font-poppins text-white rounded-2xl bg-secondary-gray text-justify">
              {lang === 'es'
                ? 'Hacer negocios serios, en donde todas las partes interesadas salgan beneficiadas, con un enfoque de alto nivel de satisfacción de nuestros clientes y por supuesto siempre con negocios transparentes.'
                : 'To build trustworthy and prosperous businesses where all stakeholders can benefit from, focusing on high levels of customer satisfaction and, of course, conducting all deals in the most transparent manner.'}
            </p>
          </div>
        </div>
        <div>
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
              {lang === 'es' ? 'Política de Servicio' : 'Service Policy'}
            </h2>
          </div>
          <div>
            <p className="p-5 font-poppins text-black rounded-2xl bg-red-200 text-justify">
              {lang === 'es'
                ? 'En GLE COLOMBIA nos comprometemos a prestar servicios logísticos innovadores, personalizados, oportunos y confiables, que satisfagan los requisitos y expectativas de nuestras partes interesadas.'
                : 'At GLE COLOMBIA, we are committed to providing innovative, personalized, timely, and reliable logistical services that meet the requirements and expectations of our stakeholders.'}
              <br />
              <br />
              {lang === 'es'
                ? 'Contamos con un enfoque a la gestión del riesgo, fortaleciendo continuamente las competencias del talento humano, con tecnología confiable y mejorando continuamente los procesos.'
                : 'We focus on risk management, continuously strengthening the competencies of our talented personnel, always relying on cutting edge technology and constantly improving our business processes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
