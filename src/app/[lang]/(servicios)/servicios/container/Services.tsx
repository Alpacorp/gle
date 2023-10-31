import { FC } from "react";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";
import { HeroPages } from "@/src/app/ui/components";
import { ServicesContainer } from "@/src/app/ui/components/ServicesContainer";
import Image from "next/image";
import { operate } from "@/public/assets/images/services";

export const Services: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section className="relative">
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.services.title}
        color="white"
        className="leading-none"
      />
      <div className="flex justify-evenly gap-6 items-center flex-wrap">
        <ServicesContainer lang={lang} />
      </div>
      <div className="max-w-xl mx-auto my-20 text-center text-xl font-poppins font-normal">
        <p>{pages.services.description[0]}</p>
        <br />
        <p className="font-bold">{pages.services.description[1]}</p>
      </div>
      <div className="relative">
        <Image
          src={operate}
          alt="valores"
          title="valores G.L.E."
          width={450}
          height={637}
          priority
          className="aspect-auto rounded-2xl max-w-[430px] w-full"
        />
        <div
          title="Valores G.L.E."
          className="absolute z-20 inset-0 bottom-0 top-0 bg-gradient-to-t from-white to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat"
        />
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
    </section>
  );
};
