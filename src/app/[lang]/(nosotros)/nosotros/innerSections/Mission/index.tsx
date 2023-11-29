import { FC } from 'react';

import { ArrowGLE } from '@ui/components';

import { LangInterface } from '@constans/interfaces/langInterface';

export const Mission: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="relative">
      <div className="flex justify-center items-start px-[7.5rem] bg-main-red w-full h-[380px] back-clip-path max-[744px]:px-14 max-[550px]:px-5 max-[610px]:h-[420px] max-[480px]:h-[675px] max-[380px]:px-6 max-[340px]:h-[700px]">
        <div className="flex flex-col max-w-[1000px] w-full">
          <div className="border-l-[2px] border-white my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-white max-[480px]:text-2xl">
              {lang === 'es' ? 'Misión' : 'Mission'}
            </h2>
          </div>
          <div className="border border-white rounded-2xl">
            <p className="p-5 font-poppins text-white">
              {lang === 'es'
                ? 'Somos una empresa dedicada a la comercialización de servicios logísticos, que orienta sus esfuerzos a cumplir los acuerdos comerciales, satisfaciendo los requisitos y expectativas de nuestros clientes y partes interesadas, con talento humano competente y diligente enfocado en la gestión del riesgo, la innovación y el mejoramiento continuo de nuestros procesos.'
                : 'We are a company committed to the marketing of high-quality logistical services, directing our efforts to fulfill commercial agreements, meeting the requirements and expectations of our clients and stakeholders, relying on our team of skillful and diligent  professionals which focus on risk management, innovation, and continuous improvement of our processes.'}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-20 bottom-0 left-0">
        <ArrowGLE className="h-40 w-auto max-[480px]:h-44" />
      </div>
    </div>
  );
};
