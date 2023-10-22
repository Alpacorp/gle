import { FC } from "react";

import { HeroPages, ContainerContent } from "@ui/components/index";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

import data from "../data/dataTransport.json";
import { IconsTransport } from "../IconsTransport";

export const ProhibitedTransportShipments: FC<LangInterface> = async ({
  lang,
}) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.prohibitedTransport.title}
        color="white"
      />
      <ContainerContent>
        <p className="font-poppins">{pages.prohibitedTransport.description}</p>
        <div className="flex flex-col justify-center gap-2 mx-auto my-5 max-w-[592px] w-full">
          {data.map(({ id, textEs, textEn }) => (
            <div
              key={id}
              className="flex items-center border border-main-red rounded-xl p-2"
            >
              <div className="w-14 h-14 mr-4 flex items-center justify-center">
                {
                  IconsTransport.filter((icon) => icon.iconId === id)[0]
                    .iconComponent
                }
              </div>
              <p key={id} className="font-poppins font-normal">
                {lang === "es" ? textEs : textEn}
              </p>
            </div>
          ))}
          <div className="text-center bg-main-red text-white font-poppins p-2 rounded-xl">
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
