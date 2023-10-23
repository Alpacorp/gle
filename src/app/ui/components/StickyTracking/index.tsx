"use client";

import { FC } from "react";
import { Close, StickyTrackEs, StickyTrackEn } from "@icons/index";
import { ArrowCta } from "..";
import useObserverTracking from "./hooks/useObserverTracking";
import useTracking from "@/src/app/hooks/useTracking";

interface StickyTrackingProps {
  observerActive?: boolean;
  lang: string;
}

const StickyTracking: FC<StickyTrackingProps> = ({
  observerActive = false,
  lang = "es",
}) => {
  const [showTrackingIcon, showTrackingForm, showTrackingFormHandler] =
    useObserverTracking(observerActive);

  const [handleInputChange, handleTracking, trackingNumber, setTrackingNumber] =
    useTracking(lang);

  return (
    <>
      {!showTrackingIcon && (
        <section
          className={`animate-slide-in-blurred-bottom duration-0 fixed flex items-center m-3 rounded-full shadow-sticky-shadow bottom-0 right-0 left-auto z-40 max-[400px]:bg-white max-[400px]:h-12 max-[400px]:m-0 max-[400px]:rounded-none max-[400px]:w-full max-[400px]:text-center max-[400px]:flex max-[400px]:justify-center ${
            showTrackingForm && "bg-white rounded-l-none rounded-r-full pr-2"
          }`}
        >
          {!showTrackingForm ? (
            <button
              className="flex items-center justify-center gap-3 min-[401px]:hidden font-poppins font-medium w-full h-12"
              onClick={showTrackingFormHandler}
            >
              <ArrowCta
                stroke="#D81730"
                className="transform -rotate-90 w-7 h-5"
              />
              {lang === "es" ? "Rastrea tu envío" : "Track your shipment"}
            </button>
          ) : (
            <button
              onClick={showTrackingFormHandler}
              className="ml-2 min-[401px]:hidden"
            >
              <Close className="w-6 h-6 bg-main-red" />
            </button>
          )}
          {showTrackingForm && (
            <div className="animate-fade-in-right flex justify-evenly flex-wrap items-center gap-1 mx-2 py-2 max-w-[730px] w-full max-[640px]:p-2 max-[380px]:p-2">
              <div className="flex justify-center gap-2">
                <div>
                  <input
                    type="number"
                    className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm"
                    placeholder={
                      lang === "es"
                        ? "Ingrese su número de guía"
                        : "Enter your tracking number"
                    }
                    name="tracking-sticky"
                    id="tracking-sticky"
                    value={trackingNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {trackingNumber && (
                    <button
                      className="absolute left-[10px] top-[18px] cursor-pointer flex items-center justify-center text-white bg-main-gray p-1 text-xl font-poppins rounded-sm leading-[1]"
                      onClick={() => setTrackingNumber("")}
                      title={lang === "es" ? "Limpiar" : "Clear"}
                    >
                      X
                    </button>
                  )}
                </div>
                <button
                  onClick={() => handleTracking("sticky-tracking")}
                  className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[110px] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-slate-600 transition duration-300 ease-in-out disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-gray-100"
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
                  {lang === "es" ? "Rastrear" : "Track"}
                </button>
              </div>
            </div>
          )}
          {lang === "es" ? (
            <StickyTrackEs
              onClick={showTrackingFormHandler}
              className="max-[400px]:hidden"
              title="Realice aquí el seguimiento de sus envíos nacionales"
            />
          ) : (
            <StickyTrackEn
              onClick={showTrackingFormHandler}
              className="max-[400px]:hidden"
              title="Track your national shipments here"
            />
          )}
        </section>
      )}
    </>
  );
};

export default StickyTracking;
