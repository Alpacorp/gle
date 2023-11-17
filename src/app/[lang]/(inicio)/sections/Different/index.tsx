import { FC } from "react";

import { Title } from "@ui/components/index";

import { iconsDifferent } from "@/src/app/[lang]/(inicio)/sections/Different/data/IconsDifferent";
import { TrackingInfo } from "@inicio/sections/Different/innerSections/TrackingInfo";
import { CardsInfo } from "@inicio/sections/Different/innerSections/CardsInfo";

import { LangInterface } from "@constans/interfaces/langInterface";

import data from "@inicio/sections/Different/data/dataDifferent.json";

export const Different: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="mt-24 py-11 bg-light-gray-second back-clip-path max-[1003px]:mt-0 pb-48">
      <Title
        align="center"
        className="text-4xl"
        color="secondary-gray"
        family="poppins"
        lineColor="main-red"
        showLine
        weight="semibold"
      >
        {lang === "es"
          ? "¿Qué nos hace diferentes?"
          : "What Makes us different?"}
      </Title>
      <CardsInfo data={data} iconsDifferent={iconsDifferent} lang={lang} />
      <TrackingInfo lang={lang} />
    </section>
  );
};
