import { FC } from "react";
import { ArrowCta } from "..";

interface ButtonQuoteProps {
  lang: string;
  service: string;
}

export const ButtonQuote: FC<ButtonQuoteProps> = ({ lang, service }) => {
  return (
    <a
      href={
        `https://api.whatsapp.com/send?phone=+573102695133` +
        (lang === "es"
          ? "&text=Hola%20equipo%20GLE.%20Solicito%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20" +
            `"${service}"`
          : "&text=Hi%20GLE%20team.%20I%20request%20more%20information%20about%20" +
            `"${service}"`)
      }
      target="_blank"
      className="flex border-2 bg-white border-secondary-gray rounded-lg px-10 py-2 my-5 text-main-red hover:bg-light-gray-2 hover:text-black transition duration-300 ease-in-out"
    >
      <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
      {lang === "es" ? "Cotiza este Servicio" : "Quote this Service"}
    </a>
  );
};
