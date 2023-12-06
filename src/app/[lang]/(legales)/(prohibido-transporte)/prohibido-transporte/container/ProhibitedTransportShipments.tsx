import { NextPage } from 'next';

import { HeroPages, ContainerContent } from '@ui/components/index';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

import data from '@legales/(prohibido-transporte)/prohibido-transporte/data/dataTransport.json';
import { IconsTransport } from '@legales/(prohibido-transporte)/prohibido-transporte/data/IconsTransport';

export const ProhibitedTransportShipments: NextPage<LangInterface> = async ({
  lang,
}) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowColor="red"
        arrowDown
        color="white"
        pageTitle={pages.prohibitedTransport.title}
      />
      <ContainerContent>
        <p className="font-poppins">{pages.prohibitedTransport.description}</p>
        <div className="flex flex-col justify-center gap-2 mx-auto my-5 max-w-[37rem] w-full">
          {data.map(({ id, textEs, textEn }) => (
            <div
              className="flex items-center border border-main-red rounded-xl p-2"
              key={id}
            >
              <div className="w-14 h-14 mr-4 flex items-center justify-center">
                {
                  IconsTransport.filter((icon) => icon.iconId === id)[0]
                    .iconComponent
                }
              </div>
              <p key={id} className="font-poppins font-normal">
                {lang === 'es' ? textEs : textEn}
              </p>
            </div>
          ))}
          <div className="text-center bg-main-red text-white font-poppins p-2 rounded-xl max-[400px]:text-xs">
            <h3>{pages.prohibitedTransport.lastText}</h3>
          </div>
        </div>
        <p className="font-poppins">
          {pages.prohibitedTransport.additionalDescription}
        </p>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
