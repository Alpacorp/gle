import { FC } from "react";
import Image from "next/image";

import { Title } from "@ui/components/index";

import {
  berau,
  mintrans,
} from "@public/assets/images/home/certifications/index";

import { LangInterface } from "@constans/interfaces/langInterface";

export const Certifications: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="my-11">
      <div>
        <Title
          align="center"
          className="text-4xl"
          color="black"
          family="poppins"
          lineColor="main-red"
          showLine
          weight="semibold"
        >
          {lang === "es" ? "Estamos certificados" : "We are certified"}
        </Title>
        <div className="flex justify-center gap-10 items-center flex-wrap mt-5 px-2">
          <Image
            alt="Certificación del Ministerio de Transporte"
            className="w-auto"
            height={108}
            priority
            src={mintrans}
            title="Certificación del Ministerio de Transporte"
            width={213}
          />
          <Image
            alt="Certificación de Berau Veritas"
            className="w-auto"
            height={108}
            priority
            src={berau}
            title="Certificación de Berau Veritas"
            width={213}
          />
        </div>
      </div>
    </section>
  );
};
