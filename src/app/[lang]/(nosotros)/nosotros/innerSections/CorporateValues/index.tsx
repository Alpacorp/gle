import { FC } from 'react';
import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

import { ValuesText } from '@ui/components';

import dataValues from '@nosotros/nosotros/data/dataValues.json';

export const CorporateValues: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="px-[7.5rem] mt-10 max-[550px]:px-5">
      <div className="border-l-[0.125rem] border-main-red my-4">
        <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
          {lang === 'es' ? 'Valores Corporativos' : 'Corporate Values'}
        </h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-6 mt-11 max-[550px]:justify-start">
        {dataValues.map(({ id, descriptionEs, descriptionEn }) => (
          <ValuesText
            key={id}
            text={lang === 'es' ? descriptionEs : descriptionEn}
            index={id}
          />
        ))}
      </div>
    </div>
  );
};
