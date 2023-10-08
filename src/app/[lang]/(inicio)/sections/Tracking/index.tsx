import { FC } from "react";
import { ArrowCta } from "@icons/index";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import useTracking from "@hooks/useTracking";

export const Tracking: FC<LangInterface> = ({ lang }) => {
  const [handleInputChange, handleTracking, trackingNumber, setTrackingNumber] =
    useTracking(lang);

  return (
    <section id="tracking" className="flex justify-center border-0">
      <div className="flex justify-center flex-col p-2 items-center gap-1 border-2 border-main-red mx-4 rounded-xl w-auto max-w-[730px]">
        <h2 className="text-sm text-center text-white font-inter max-[650px]:text-[10px]">
          {lang === "es"
            ? "Realice aquí el seguimiento de sus envíos nacionales"
            : "Track your national shipments here"}
        </h2>
        <div className="flex justify-center gap-2">
          <div className="relative">
            <input
              type="number"
              className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm"
              placeholder={
                lang === "es"
                  ? "Ingrese su número de guía"
                  : "Enter your tracking number"
              }
              name="tracking-input"
              id="tracking-input"
              value={trackingNumber}
              onChange={handleInputChange}
              required
            />
            {trackingNumber && (
              <button
                className="absolute left-1 top-[10px] cursor-pointer flex items-center justify-center text-white bg-main-gray p-1 text-xl font-poppins rounded-sm leading-[1]"
                onClick={() => setTrackingNumber("")}
                title={lang === "es" ? "Limpiar" : "Clear"}
              >
                X
              </button>
            )}
          </div>
          <button
            onClick={() => handleTracking("tracking")}
            className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[110px] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-opacity-80 transition duration-300 ease-in-out hover:bg-slate-600  disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled={
              !!(trackingNumber.length < 10 || trackingNumber.length > 12)
            }
            title={
              trackingNumber.length < 1 || trackingNumber.length > 10
                ? lang === "es"
                  ? "Ingrese un número de guía válido"
                  : "Enter a valid tracking number"
                : ""
            }
          >
            <ArrowCta stroke="white" className="-rotate-90 w-5 h-5" />
            {lang === "es" ? "Consultar" : "Track"}
          </button>
        </div>
      </div>
    </section>
  );
};
