import { FC } from 'react';

import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const Vision: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="px-[7.5rem] flex flex-col max-w-[62.5rem] w-full m-auto ml-0 pt-10 max-[550px]:px-5 max-[380px]:px-6">
      <div className="border-l-[2px] border-main-red my-4">
        <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
          {lang === 'es' ? 'Visión' : 'Vision'}
        </h2>
      </div>
      <div>
        <p className="p-5 font-poppins text-black rounded-2xl bg-red-200 text-justify">
          {lang === 'es'
            ? 'G.L.E COLOMBIA será reconocida en el mercado nacional e internacional como una empresa de servicios logísticos innovadores, que satisface los requisitos y las expectativas de nuestros clientes y partes interesadas; a través del fortalecimiento de alianzas perdurables con proveedores confiables, talento humano comprometido y competente, con enfoque en la gestión del riesgo, tecnología adecuada y mejoramiento continuo de los procesos.'
            : 'G.L.E COLOMBIA will be recognized in the national and international market as an innovative logistics services company that meets the requirements and expectations of our clients and stakeholders; through the strengthening of enduring alliances with reliable suppliers, a committed and proficient team of professionals, focusing on risk  management, appropriate technology, and continuous process improvement.'}
        </p>
      </div>
    </div>
  );
};
