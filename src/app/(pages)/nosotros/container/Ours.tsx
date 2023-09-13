import { HeroPages } from "@/app/ui/components/HeroPages";
import { FC } from "react";

const image = "/assets/images/banner-nosotros-web.webp";

export const Ours: FC = () => {
  return (
    <>
      <HeroPages imagePath={image} pageTitle="Nosotros" arrowDown />
      <div className="bg-main-red px-2">
        <div className="flex flex-col justify-end max-w-[1000px] w-full m-auto">
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
    </>
  );
};
