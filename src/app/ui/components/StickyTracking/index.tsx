"use client";

import { FC, useEffect, useState } from "react";
import { Close, StickyTrack } from "@icons/index";
import { ArrowCta } from "..";

interface StickyTrackingProps {
  observerActive?: boolean;
  lang?: string;
}

const StickyTracking: FC<StickyTrackingProps> = ({
  observerActive = false,
  lang,
}) => {
  const [showTrackingIcon, setShowTrackingIcon] = useState(observerActive);
  const [showTrackingForm, setShowTrackingForm] = useState(false);

  const showTrackingFormHandler = () => {
    setShowTrackingForm(!showTrackingForm);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowTrackingIcon(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );
    const trackingElement = document.querySelector("#tracking");

    if (trackingElement) {
      observer.observe(trackingElement);
    }

    return () => {
      observer.disconnect();
      setShowTrackingForm(false);
    };
  }, [showTrackingIcon]);

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
                <input
                  type="number"
                  className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm"
                  placeholder={
                    lang === "es" ? "Número de guía" : "Tracking number"
                  }
                  name="tracking"
                  id="tracking"
                />
                <button className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[110px] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-slate-600 transition duration-300 ease-in-out">
                  <ArrowCta stroke="white" className="-rotate-90 w-5 h-5" />
                  {lang === "es" ? "Rastrear" : "Track"}
                </button>
              </div>
            </div>
          )}
          <StickyTrack
            onClick={showTrackingFormHandler}
            className="max-[400px]:hidden"
          />
        </section>
      )}
    </>
  );
};

export default StickyTracking;
