import { FC } from "react";
import Image from "next/image";

import { Title } from "@/src/app/ui/components/Title";
import { ArrowCta, ArrowGLE } from "@/src/app/ui/components/Icons";
import { ServicesContainer } from "@/src/app/ui/components/ServicesContainer";
import volamos from "@public/assets/images/gle/volamos.svg";
import {
  backServices,
  backMobile,
} from "@public/assets/images/home/services/index";

import { LangInterface } from "@constans/interfaces/langInterface";

export const Services: FC<LangInterface> = ({ lang }) => {
  return (
    <>
      <section className="relative">
        <div>
          <Image
            src={backServices}
            alt="background services"
            width={880}
            height={1980}
            className="absolute aspect-square h-full w-auto top-0 right-0 z-[-1] max-[380px]:hidden"
          />
          <Image
            src={backMobile}
            alt="background services mobile"
            width={880}
            height={1780}
            className="absolute h-[2850px] object-cover mt-[-380px] top-0 right-0 max-[380px]:block min-[381px]:hidden"
          />
          <div className="mx-9 pt-14 pb-10">
            <div className="flex justify-end">
              <Title
                color="white"
                align="right"
                family={"poppins"}
                weight="semibold"
                showLine
                className="text-4xl max-w-xs w-full"
                lineColor="white"
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
              <div className="flex flex-col items-center text-secondary-gray text-center gap-5 font-poppins text-3xl font-semibold m-auto max-w-[244px]">
                <h3 className="max-[1115px]:text-white">
                  {lang === "es"
                    ? "Conoce nuestra razón de ser"
                    : "Discover our main purpose"}
                </h3>
                <ArrowCta className="max-[1115px]:hidden" />
                <ArrowCta
                  className="hidden max-[1115px]:block max-[380px]:w-8"
                  stroke="white"
                />
              </div>
              <div>
                <Image
                  src={volamos}
                  alt="Volamos para que llegues más rápido"
                  title="Volamos para que llegues más rápido"
                  width={780}
                  height={1080}
                  className="max-[380px]:hidden h-auto"
                />
                <Image
                  src={volamos}
                  alt="Volamos para que llegues más rápido - mobile"
                  title="Volamos para que llegues más rápido"
                  width={780}
                  height={1080}
                  className="hidden max-[380px]:block h-auto w-full aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-end flex-wrap max-[1000px]:justify-end">
          <iframe
            width="760"
            height="590"
            src="https://www.youtube.com/embed/pOp8_WGBYBQ?si=NQFwV5ND7eGkJ6Pn"
            title="Grupo Logístico Especializado"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="-mt-6 ml-20 max-[1000px]:w-full rounded-2xl max-[1000px]:ml-0 max-[1000px]:mt-0 max-[1000px]:rounded-none"
          ></iframe>
          <div className="max-[1003px]:hidden">
            <ArrowGLE className="rotate-180" />
          </div>
        </div>
      </section>
    </>
  );
};
