import Image from "next/image";

import berau from "@public/assets/images/berau.webp";
import mintrans from "@public/assets/images/mintransporte.webp";
import { Title } from "@/src/app/ui/components/Title";

export const Certifications = () => {
  return (
    <section className="my-11">
      <div>
        <Title
          color="black"
          align="center"
          family="poppins"
          weight="semibold"
          className="text-4xl"
          showLine
          lineColor="main-red"
        >
          Estamos certificados
        </Title>
        <div className="flex justify-center gap-10 items-center flex-wrap mt-5 px-2">
          <Image
            src={mintrans}
            alt="Certificación del Ministerio de Transporte"
            title="Certificación del Ministerio de Transporte"
            width={213}
            height={108}
            priority
            className="w-auto"
          />
          <Image
            src={berau}
            alt="Certificación de Berau Veritas"
            title="Certificación de Berau Veritas"
            width={213}
            height={108}
            priority
            className="w-auto"
          />
        </div>
      </div>
    </section>
  );
};
