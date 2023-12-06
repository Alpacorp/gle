import { InfoCard } from '@/src/app/ui/components';
import { FC } from 'react';

import { InfoCardProps } from '@inicio/sections/Different/interfaces/different';

export const CardsInfo: FC<InfoCardProps> = ({
  data,
  iconsDifferent,
  lang,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 m-auto mt-16 max-[380px]:px-6">
      {data.map(({ color, descriptionEn, descriptionEs, id }) => (
        <div
          className="flex flex-row justify-center items-start max-w-[25rem] w-full gap-1"
          key={id}
        >
          {iconsDifferent.filter((icon) => icon.iconId === id)[0].iconComponent}
          <InfoCard
            backgroundColor={
              color === 1
                ? 'secondary-gray'
                : color === 2
                ? 'main-red'
                : 'white'
            }
            description={lang === 'es' ? descriptionEs : descriptionEn}
            key={id}
          />
        </div>
      ))}
    </div>
  );
};
