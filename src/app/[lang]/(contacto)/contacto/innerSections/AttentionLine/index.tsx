import { FC } from "react";
import Link from "next/link";

import { WhatsAppWhite } from "@ui/components";

import { LangInterface } from "@constans/interfaces/langInterface";

export const AttentionLine: FC<LangInterface> = ({ lang }) => {
  return (
    <>
      <h4 className="text-lg font-poppins font-normal">
        <span className="text-main-red">
          {lang === "es"
            ? "LÍNEA DE ATENCIÓN SERVICIO AL CLIENTE"
            : "CUSTOMER SERVICE"}
        </span>{" "}
        {lang === "es"
          ? "por favor comunícate al teléfono:"
          : "please call the phone number:"}
      </h4>
      <Link
        href="https://api.whatsapp.com/send?phone=+573102695133&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos"
        target="_blank"
        className="text-black font-poppins max-w-[200px] w-full mx-auto text-lg font-bold flex items-center justify-center border-main-red border-2 px-2 py-1 my-3 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
      >
        <WhatsAppWhite fill="#00000" className="mr-1" /> 3102695133
      </Link>
    </>
  );
};
