import { FC } from "react";
import Image from "next/image";

import { ArrowCta, ArrowGLE, HeroPages } from "@ui/components/index";
import { ValuesText } from "../components/ValuesText";
import {
  bannerOurs,
  bannerOursMobile,
  philosophy,
  team,
} from "@/public/assets/images/about-us/index";
import StickyTracking from "@/src/app/ui/components/StickyTracking";

import gleWhite from "@public/assets/images/gle/gle-white.png";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

import dataValues from "../data/dataValues.json";

export const Ours: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <>
      <HeroPages
        imagePath={bannerOurs}
        imagePathMobile={bannerOursMobile}
        pageTitle={pages.about.title}
        arrowDown
      />
      <div>
        <div className="relative">
          <div className="flex justify-center items-start px-28 bg-main-red w-full h-[380px] back-clip-path max-[744px]:px-14 max-[550px]:px-5 max-[610px]:h-[420px] max-[480px]:h-[675px] max-[380px]:px-6 max-[340px]:h-[700px]">
            <div className="flex flex-col max-w-[1000px] w-full">
              <div className="border-l-[2px] border-white my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-white max-[480px]:text-2xl">
                  {pages.about.sections.mision.title}
                </h2>
              </div>
              <div className="border border-white rounded-2xl">
                <p className="p-5 font-poppins text-white">
                  {pages.about.sections.mision.description}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-20 bottom-0 left-0">
            <ArrowGLE className="h-40 w-auto max-[480px]:h-44" />
          </div>
        </div>
        <div className="px-[120px] flex flex-col max-w-[1000px] w-full m-auto ml-0 pt-10 max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
              {pages.about.sections.vision.title}
            </h2>
          </div>
          <div>
            <p className="p-5 font-poppins text-black rounded-2xl bg-red-200">
              {pages.about.sections.vision.description}
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center px-[120px] mt-14 max-[1000px]:flex-wrap max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="w-full relative">
            <Image
              src={philosophy}
              alt="valores"
              title="valores G.L.E."
              width={450}
              height={637}
              priority
              className="aspect-auto rounded-2xl max-w-[550px] w-full"
            />
            <div className="absolute z-20 inset-0 bottom-0 top-0 bg-gradient-to-t from-white to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat" />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
                  {pages.about.sections.philosophy.title}
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-white rounded-2xl bg-secondary-gray">
                  {pages.about.sections.philosophy.description}
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
                  {pages.about.sections.policy.title}
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-black rounded-2xl bg-red-200">
                  {pages.about.sections.policy.description[1]}
                  <br />
                  <br />
                  {pages.about.sections.policy.description[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[120px] mt-10 max-[550px]:px-5">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
              {pages.about.sections.values.title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-around items-center gap-6 mt-11 max-[550px]:justify-start">
            {dataValues.map(({ id, descriptionEs, descriptionEn }) => (
              <ValuesText
                key={id}
                text={lang === "es" ? descriptionEs : descriptionEn}
                index={id}
              />
            ))}
          </div>
        </div>
        <div className="mt-28">
          <div className="text-center m-auto">
            <Image
              src={team}
              alt="Equipo de trabajo G.L.E."
              title="Equipo de trabajo G.L.E."
              width={1200}
              height={410}
              priority
              className="w-full"
            />
            <div className="bg-main-red py-6">
              <h2 className="text-4xl font-poppins font-semibold ml-3 text-white max-[550px]:text-xl">
                {pages.about.sections.work.title}
              </h2>
            </div>
            <Image
              src={gleWhite}
              alt="Gle grupo logístico especializado"
              width={340}
              height={100}
              priority
              className="relative aspect-auto -top-60 right-0 left-0 m-auto w-auto max-[680px]:-top-40 max-[680px]:w-[200px] max-[380px]:-top-32 max-[380px]:w-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <h3 className="font-poppins">
            {pages.about.sections.work.titleForm}
          </h3>
          <form className="flex flex-col flex-wrap gap-4 mt-11">
            <div className="flex flex-col flex-wrap gap-5">
              <div className="flex flex-wrap gap-5 justify-center">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-poppins text-secondary-gray leading-none"
                  >
                    {lang === "es" ? "Correo:" : "Email:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-main-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es"
                      ? "Nombre y Apellido:"
                      : "First and Last Name:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Dirección:" : "Address:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="address"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-poppins text-secondary-gray leading-none"
                  >
                    {lang === "es" ? "Ciudad:" : "City:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Teléfono:" : "Phone:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Proceso:" : "Department:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="address"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto">
              <button
                className="flex border-2 border-secondary-gray rounded-lg px-10 py-2 text-main-red hover:bg-light-gray-2 hover:text-black transition duration-300 ease-in-out
              "
              >
                <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
                {lang === "es" ? "Enviar" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <StickyTracking lang={lang} />
    </>
  );
};
