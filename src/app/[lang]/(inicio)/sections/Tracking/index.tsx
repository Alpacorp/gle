import { FC } from "react";
import { ArrowCta } from "@icons/index";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

export const Tracking: FC<LangInterface> = ({ lang }) => {
  return (
    <section id="tracking" className="flex justify-center border-0">
      <div className="flex justify-center flex-wrap py-2 items-center gap-x-2 border-2 border-main-red mx-4 rounded-xl max-w-[730px] w-full max-[640px]:p-2 max-[600px]:py-[2px] max-[380px]:py-1">
        <h2 className="text-xl text-center leading-none font-semibold font-poppins text-white max-[650px]:text-xs max-[380px]:text-xs">
          {lang === "es" ? "Rastrea tu envío" : "Track your shipment"}
        </h2>
        <div className="flex justify-center gap-2">
          <input
            type="number"
            className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm"
            placeholder={
              lang === "es"
                ? "Ingrese su número de guía"
                : "Enter your tracking number"
            }
            name="tracking"
            id="tracking"
          />
          <button className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[110px] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
            <ArrowCta stroke="white" className="-rotate-90 w-5 h-5" />
            {lang === "es" ? "Consultar" : "Track"}
          </button>
        </div>
        <p className="text-sm text-center text-white font-inter max-[650px]:text-[10px]">
          {lang === "es"
            ? "Realice aquí el seguimiento de sus envíos nacionales"
            : "Track your national shipments here"}
        </p>
      </div>
    </section>
  );
};
