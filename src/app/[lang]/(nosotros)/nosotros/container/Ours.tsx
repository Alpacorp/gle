import { FC } from "react";
import Image from "next/image";

import { HeroPages } from "@ui/components/index";
import { ValuesText } from "../components/ValuesText";
import {
  bannerOurs,
  philosophy,
  team,
} from "@/public/assets/images/about-us/index";
import gleWhite from "@public/assets/images/gle/gle-white.png";

import dataValues from "../data/dataValues.json";

export const Ours: FC = () => {
  return (
    <>
      <HeroPages imagePath={bannerOurs} pageTitle="Nosotros" arrowDown />
      <div className="">
        <div className="px-[120px] bg-hero-main-red-bg w-full bg-cover bg-no-repeat pb-10 max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="flex flex-col max-w-[1000px] w-full m-auto mr-0">
            <div className="border-l-[2px] border-white my-4">
              <h2 className="ml-3 text-4xl font-poppins font-semibold text-white">
                Misión
              </h2>
            </div>
            <div className="border border-white rounded-2xl">
              <p className="p-5 font-poppins text-white">
                Somos una empresa dedicada a la comercialización de servicios
                logísticos, que orienta sus esfuerzos a cumplir los acuerdos
                comerciales, satisfaciendo los requisitos y expectativas de
                nuestros clientes y partes interesadas, con talento humano
                competente y diligente enfocado en la gestión del riesgo, la
                innovación y el mejoramiento continuo de nuestros procesos.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[120px] flex flex-col max-w-[1000px] w-full m-auto ml-0 pt-10 max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
              Visión
            </h2>
          </div>
          <div>
            <p className="p-5 font-poppins text-black rounded-2xl bg-[#d817300d]">
              Somos una empresa dedicada a la comercialización de servicios
              logísticos, que orienta sus esfuerzos a cumplir los acuerdos
              comerciales, satisfaciendo los requisitos y expectativas de
              nuestros clientes y partes interesadas, con talento humano
              competente y diligente enfocado en la gestión del riesgo, la
              innovación y el mejoramiento continuo de nuestros procesos.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center px-[120px] mt-14 max-[1000px]:flex-wrap max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="w-full">
            <Image
              src={philosophy}
              alt="valores"
              width={450}
              height={637}
              priority
              className="aspect-auto rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
                  Filosofía
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-white rounded-2xl bg-secondary-gray">
                  Hacer negocios serios, en donde todas las partes interesadas
                  salgan beneficiadas, con un enfoque de alto nivel de
                  satisfacción de nuestros clientes y por supuesto siempre con
                  negocios transparentes.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
                  Política de Servicio
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-black rounded-2xl bg-[#d817300d]">
                  En GLE COLOMBIA nos comprometemos a prestar servicios
                  logísticos innovadores, personalizados, oportunos y
                  confiables, que satisfagan los requisitos y expectativas de
                  nuestras partes interesadas.
                  <br />
                  <br />
                  Contamos con un enfoque a la gestión del riesgo, fortaleciendo
                  continuamente las competencias del talento humano, con
                  tecnología confiable y mejorando continuamente los procesos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[120px] mt-10 max-[550px]:px-5">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
              Valores
            </h2>
          </div>
          <div className="flex flex-wrap justify-around items-center gap-6 mt-11 max-[550px]:justify-start">
            {dataValues.map(({ id, description }) => (
              <ValuesText key={id} text={description} index={id} />
            ))}
          </div>
        </div>
        <div className="mt-28">
          <div className="text-center m-auto">
            <Image
              src={team}
              alt="Equipo de trabajo"
              width={1200}
              height={410}
              priority
              className="w-full"
            />
            <div className="bg-main-red py-6">
              <h2 className="text-4xl font-poppins font-semibold ml-3 text-white max-[550px]:text-xl">
                Trabaje con Nosotros
              </h2>
            </div>
            <Image
              src={gleWhite}
              alt="Gle grupo logístico especializado"
              width={340}
              height={100}
              priority
              className="relative aspect-auto -top-60 right-0 left-0 m-auto max-[680px]:-top-40 max-[680px]:w-[200px] max-[380px]:-top-32 max-[380px]:w-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-poppins">Únete a nuestra gran familia G.L.E.</h3>
          <form className="flex gap-4 mt-11">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Correo:
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digita tu correo"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Nombre:
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Digita tu nombre"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Dirección:
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="address"
                      placeholder="Digita tu dirección"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Ciudad:
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digita tu correo"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Número de Contacto:
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Digita tu nombre"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    Proceso:
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="address"
                      placeholder="Digita tu dirección"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};