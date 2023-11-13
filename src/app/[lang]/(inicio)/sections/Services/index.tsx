import { FC } from "react";
import Image from "next/image";

import {
  FlyFastImage,
  GleVideo,
  ReasonToBe,
} from "@inicio/sections/Services/innerSections";
import { Title } from "@/src/app/ui/components/Title";
import {
  backMobile,
  backServices,
} from "@public/assets/images/home/services/index";
import { ServicesContainer } from "@/src/app/ui/components/ServicesContainer";
import volamos from "@public/assets/images/gle/volamos.svg";

import { LangInterface } from "@constans/interfaces/langInterface";

export const Services: FC<LangInterface> = ({ lang }) => {
  return (
    <>
      <section className="relative">
        <div>
          <Image
            alt="background services"
            className="absolute aspect-square h-full w-auto top-0 right-0 z-[-1] max-[380px]:hidden"
            height={1980}
            src={backServices}
            width={880}
          />
          <Image
            alt="background services mobile"
            className="absolute h-[2850px] object-cover mt-[-380px] top-0 right-0 max-[380px]:block min-[381px]:hidden"
            height={1780}
            src={backMobile}
            width={880}
          />
          <div className="mx-9 pt-14 pb-10">
            <div className="flex justify-end">
              <Title
                align="right"
                className="text-4xl max-w-xs w-full"
                color="white"
                family={"poppins"}
                lineColor="white"
                showLine
                weight="semibold"
              >
                {lang === "es"
                  ? "Servicios Especializados"
                  : "Specialized Services"}
              </Title>
            </div>
            <div className="flex justify-evenly gap-6 items-center flex-wrap">
              <ServicesContainer lang={lang} />
            </div>
            <div className="relative flex items-center justify-around flex-wrap-reverse gap-5 mt-10">
              <ReasonToBe lang={lang} />
              <FlyFastImage volamos={volamos} />
            </div>
          </div>
        </div>
      </section>
      <GleVideo />
    </>
  );
};
