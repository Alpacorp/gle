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
        <div className="flex justify-evenly gap-5 items-center flex-wrap mt-5 px-2">
          <Image
            src={mintrans}
            alt="certifications"
            width={313}
            height={108}
            priority
          />
          <Image
            src={berau}
            alt="certifications"
            width={313}
            height={108}
            priority
          />
        </div>
      </div>
    </section>
  );
};