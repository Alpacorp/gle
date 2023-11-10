"use client";

import { FC } from "react";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import useTracking from "@/src/app/hooks/useTracking";
import { useForm } from "@/src/app/hooks/useForm";

export const Tracking: FC<LangInterface> = ({ lang }) => {
  const [formValues, handleInputChange, reset] = useForm({
    trackingNumber: "" as string,
    trackingType: "",
  });

  const { trackingNumber, trackingType } = formValues;
  const [handleTracking] = useTracking({ lang, origin: "tracking" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleTracking({
      trackingNumber,
      trackingType,
      origin,
    });
    reset();
  };

  return (
    <section id="tracking" className="flex justify-center border-0">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col p-2 items-center gap-1 border-2 border-main-red mx-4 rounded-xl w-auto max-w-[730px]"
      >
        <h2 className="text-sm text-center text-white font-inter max-[650px]:text-[10px]">
          {lang === "es"
            ? "Realiza aquí el seguimiento de tus envíos nacionales"
            : "Track your national shipments here"}
        </h2>
        <div className="flex justify-center gap-2">
          <div className="relative flex gap-2">
            <input
              id="trackingNumber"
              name="trackingNumber"
              type="text"
              value={trackingNumber}
              onChange={handleInputChange}
              className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:placeholder:text-xs max-[320px]:text-xs max-[320px]:max-w-[120px] max-[320px]:w-full"
              placeholder={lang === "es" ? "Número de guía" : "Tracking number"}
              maxLength={12}
              required
            />
            <select
              id="trackingType"
              name="trackingType"
              value={trackingType}
              onChange={handleInputChange}
              className="p-2 px-1 text-base text-center font-normal font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:max-w-[100px] max-[400px]:w-full max-[320px]:text-xs max-[320px]:max-w-[80px] max-[320px]:w-full"
              required
            >
              <option value="">
                {lang === "es" ? "Selecciona" : "Select"}
              </option>
              <option value="packaging">
                {lang === "es" ? "Paquetería" : "Packaging"}
              </option>
              <option value="messaging">
                {lang === "es" ? "Mensajería" : "Messaging"}
              </option>
            </select>
          </div>
          <button
            className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[75px] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-opacity-80 transition duration-300 ease-in-out hover:bg-slate-600  disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-gray-400"
            type="submit"
            disabled={
              trackingNumber.length < 5 ||
              trackingNumber === "" ||
              trackingType === ""
            }
            title={
              trackingNumber.length < 5 || trackingType === ""
                ? lang === "es"
                  ? "Complete los campos"
                  : "Fill the fields"
                : ""
            }
          >
            {lang === "es" ? "Consultar" : "Track"}
          </button>
        </div>
      </form>
    </section>
  );
};
