import { FC } from 'react';

import { TrackingBar } from '@/src/app/[lang]/(inicio)/sections/TrackingBar';

import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const Empty: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="mt-10">
      <TrackingBar
        lang={lang}
        showText={false}
        sameWindow={true}
        position="relative"
      />
    </div>
  );
};
