import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SocialMedia } from "@ui/components/index";
import { GleLogoWhite, WhatsAppWhite } from "@icons/index";
import { TextInfo } from "./components/TextInfo";
import { Address } from "./Address";

import { Mintic, Sic, SuperTransporte } from "@/public/assets/images/footer";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import data from "./dataFooter.json";

export const Footer: FC<LangInterface> = ({ lang }) => {
  return (
    <footer>
      <div>
        <SocialMedia lang={lang} align="center" />
      </div>
      <div className="bg-secondary-gray py-9 px-10 flex flex-wrap gap-4 justify-around items-center text-white font-poppins mt-9 max-[1000px]:justify-center">
        <div>
          <div className="flex mb-5 max-[990px]:justify-center">
            <GleLogoWhite />
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap max-[500px]:flex-col">
            <Link
              href="mailto:contacto@glecolombia.com"
              target="_blank"
              className="text-white text-xs hover:text-rose-400"
            >
              contacto@glecolombia.com
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+573102695133&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos"
              target="_blank"
              className="text-white font-poppins text-lg font-bold flex items-center border-main-red border-2 px-2 py-1 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
            >
              <WhatsAppWhite className="mr-1" /> 3102695133
            </Link>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {data.map((item) => (
            <Address
              key={item.id}
              city={item.city}
              phoneText={item.phoneText}
              address={item.address}
              phone={item.phone}
              type={item.type}
              maps={item.maps}
            />
          ))}
        </div>
      </div>
      <section className="flex justify-around items-center font-inter flex-wrap gap-3 bg-main-red text-white text-sm py-6 px-10 max-[400px]:justify-start">
        <div className="flex flex-wrap gap-3 flex-col">
          <Link
            href={
              lang === "es"
                ? `/${lang}/aviso-de-privacidad`
                : `/${lang}/privacy-policy`
            }
            className="hover:underline hover:underline-offset-8"
          >
            {lang === "es" ? "Aviso de privacidad" : "Privacy policy"}
          </Link>
          <Link
            href={
              lang === "es"
                ? `/${lang}/terminos-y-condiciones`
                : `/${lang}/terms-and-conditions`
            }
            className="hover:underline hover:underline-offset-8"
          >
            {lang === "es" ? "Términos y condiciones" : "Terms and conditions"}
          </Link>
          <Link
            href={
              lang === "es"
                ? `/${lang}/compensaciones`
                : `/${lang}/compensations`
            }
            className="hover:underline hover:underline-offset-8"
          >
            {lang === "es"
              ? "Procedimiento de compensación"
              : "Compensation procedure"}
          </Link>
          <Link
            href={lang === "es" ? `/${lang}/pqrs` : `/${lang}/claims`}
            className="hover:underline hover:underline-offset-8"
          >
            {lang === "es"
              ? "Proceso PQR’S e Indemnizaciones"
              : "PQR’S and Compensation process"}
          </Link>
          <Link
            href={
              lang === "es"
                ? `/${lang}/prohibido-transporte`
                : `/${lang}/transportation-prohibited`
            }
            className="hover:underline hover:underline-offset-8"
          >
            {lang === "es"
              ? "Envíos de prohibido transporte"
              : "Prohibited transport shipments"}
          </Link>
        </div>
        <div className="flex gap-3 flex-wrap max-[400px]:mt-4">
          <div>
            <div>
              <Image
                alt="SuperTransporte"
                title="SuperTransporte"
                src={SuperTransporte}
                width={140}
                height={40}
                className="aspect-auto mb-4"
              />
              <TextInfo>
                Diagonal 26 G # 95 A - 85 Torre 3 Piso 1, Bogotá
              </TextInfo>
              <TextInfo>+57 (601) 352 6700</TextInfo>
              <TextInfo>01 8000 915615</TextInfo>
              <TextInfo>atencionciudadano@supertransporte.gov.co</TextInfo>
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Mintic"
                title="Mintic"
                src={Mintic}
                width={140}
                height={40}
                className="aspect-auto mb-4"
              />
              <TextInfo>Cra. 8a entre calles 12 A y 12 B, Bogotá</TextInfo>
              <TextInfo>+57 (601) 344 3460</TextInfo>
              <TextInfo>01 8000 914014</TextInfo>
              <TextInfo>minticresponde@mintic.gov.co</TextInfo>
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Sic"
                title="Sic"
                src={Sic}
                width={140}
                height={40}
                className="aspect-auto mb-4"
              />
              <TextInfo>Carrera 13 No. 27 - 00, Pisos 1 y 3, Bogotá</TextInfo>
              <TextInfo>+57 (601) 592 0400</TextInfo>
              <TextInfo>01 8000 910165</TextInfo>
              <TextInfo>contactenos@sic.gov.co</TextInfo>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-around items-center font-inter flex-wrap gap-3 bg-main-red text-white text-sm pb-6 px-10 max-[400px]:justify-center max-[400px]:pb-20">
        <div className="pt-4">
          <hr className="m-auto border-white w-1/3" />
          <h5 className="pt-4">
            G.L.E. {new Date().getFullYear()} |{" "}
            {lang === "es"
              ? "Todos los derechos reservados"
              : "All rights reserved"}
          </h5>
        </div>
      </section>
    </footer>
  );
};
