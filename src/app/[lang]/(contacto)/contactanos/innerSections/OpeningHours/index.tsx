import { FC } from 'react';

import { LangInterface } from '@constans/interfaces/langInterface';

export const OpeningHours: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="flex justify-center my-8 mx-2">
      <div className="bg-third-gray max-w-[37.5rem] w-full p-3 rounded-md font-poppins text-sm">
        <p className="font-bold">
          {lang === 'es' ? 'Horario de atención' : 'Attention schedule'}
        </p>
        <p>
          {lang === 'es'
            ? 'Lunes a viernes: de 8.00 a.m. a 6:00 p.m / Sábados de 8:00 a.m. a 12:00 p.m.'
            : 'Monday to Friday: from 8:00 a.m. to 6:00 p.m. / Saturdays from 8:00 a.m. to 12:00 p.m.'}
        </p>
      </div>
    </div>
  );
};
