import { FC } from "react";
import Image from "next/image";

import { Title, DifferentCard } from "@ui/components/index";
import { iconsDifferent } from "@inicio/sections/Different/IconsDifferent";
import { ArrowCta } from "@icons/index";

import { phone1, phone2 } from "@public/assets/images/home/different/index";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import data from "@inicio/sections/Different/dataDifferent.json";

export const Different: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="mt-24 py-11 bg-light-gray-2 back-clip-path max-[1003px]:mt-0 pb-48">
      <Title
        color="secondary-gray"
        align="center"
        family="poppins"
        weight="semibold"
        showLine
        lineColor="main-red"
        className="text-4xl"
      >
        {lang === "es"
          ? "¿Qué nos hace diferentes?"
          : "What Makes us different?"}
      </Title>
      <div className="flex flex-wrap justify-center gap-4 m-auto mt-16 max-[380px]:px-6">
        {data.map(({ id, descriptionEs, descriptionEn, color }) => (
          <div
            key={id}
            className="flex flex-row justify-center items-start max-w-[400px] w-full gap-1"
          >
            {
              iconsDifferent.filter((icon) => icon.iconId === id)[0]
                .iconComponent
            }
            <DifferentCard
              key={id}
              description={lang === "es" ? descriptionEs : descriptionEn}
              backgroundColor={
                color === 1
                  ? "secondary-gray"
                  : color === 2
                  ? "main-red"
                  : "white"
              }
            />
          </div>
        ))}
      </div>
      <section>
        <div className="flex items-center justify-center flex-wrap mt-12">
          <div className="flex items-center max-[1065px]:flex-col">
            <Title
              color="main-red"
              align="center"
              family="poppins"
              weight="semibold"
              className="text-4xl max-w-[350px] w-full"
            >
              {lang === "es"
                ? "Rastrea tu envío desde tu celular"
                : "Track your shipment from your smartphone"}
            </Title>
            <ArrowCta
              stroke="#D81730"
              className="-rotate-90 w-[33px] h-[56px] max-[1065px]:rotate-0"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <Image
              src={phone1}
              alt="Celular con la vista del home"
              title="Celular con la vista del home"
              width={348}
              height={567}
              priority
              className="aspect-auto"
            />
            <Image
              src={phone2}
              alt="Celular con la vista de la página de rastreo"
              title="Celular con la vista de la página de rastreo"
              width={348}
              height={567}
              priority
              className="aspect-auto"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
