import Image from "next/image";

import volamos from "@public/assets/images/gle/volamos.svg";
import backMobile from "@public/assets/images/services/services-mobile-background.svg";
import backServices from "@public/assets/images/services/services-background.png";

import { iconsServices } from "./IconsServices";
import services from "./dataServices.json";
import { Title } from "@/src/app/ui/components/Title";
import { ArrowCta, ArrowGLE } from "@/src/app/ui/components/Icons";

export const Services = () => {
  return (
    <>
      <section className="relative">
        <div>
          <Image
            src={backServices}
            alt="background services"
            width={880}
            height={1980}
            className="absolute h-full top-0 right-0 z-[-1] max-[380px]:hidden"
          />
          <Image
            src={backMobile}
            alt="background services mobile"
            width={880}
            height={1780}
            className="absolute h-[2850px] object-cover top-0 right-0 max-[380px]:block mt-[-380px] min-[381px]:hidden"
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
                Servicios Especializados
              </Title>
            </div>
            <div className="flex justify-evenly gap-6 items-center flex-wrap">
              {services.map(({ id, name, url }) => (
                <div
                  key={id}
                  className="rounded-2xl overflow-hidden shadow-card-shadow relative mt-10 hover:scale-105 transition-transform"
                >
                  <div className="relative h-[438px] w-[262px]">
                    <Image
                      src={url}
                      alt={name}
                      fill
                      sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 100vw,
                    (max-width: 1280px) 100vw,
                    (max-width: 1536px) 100vw,
                  "
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="flex flex-col justify-center items-center p-4 absolute bottom-0 left-0 w-full text-white text-center">
                    <div>
                      {
                        iconsServices.filter(
                          (icon: any) => icon.iconId === id
                        )[0].iconComponentService
                      }
                    </div>
                    <h2 className="text-2xl font-poppins font-semibold text-white mt-2">
                      {name}
                    </h2>
                    <button className="flex items-center justify-between text-main-red font-poppins text-xl font-normal px-4 py-2 mt-4 hover:text-white transition-colors">
                      <ArrowCta
                        stroke="#D81730"
                        className="-rotate-90 w-[30px] h-[27px]"
                      />{" "}
                      <span className="ml-3">Conoce más </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex items-center justify-around flex-wrap-reverse gap-5 mt-10">
              <div className="flex flex-col items-center text-secondary-gray text-center gap-5 font-poppins text-3xl font-semibold m-auto max-w-[244px]">
                <h3 className="max-[1115px]:text-white">
                  Conoce nuestra razón de ser
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
                  className="max-[380px]:hidden"
                />
                <Image
                  src={volamos}
                  alt="Volamos para que llegues más rápido - mobile"
                  title="Volamos para que llegues más rápido"
                  width={780}
                  height={1080}
                  className="hidden max-[380px]:block"
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
            src="https://www.youtube.com/embed/-kYRivzbjQc?si=S3zfctAyD9P1q_lB"
            title="YouTube video player"
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
