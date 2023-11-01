import { FC } from "react";

import { HeroPages, ContainerContent, Download } from "@ui/components/index";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";
import Link from "next/link";

export const Compensations: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.compensations.title}
        color="white"
      />
      <ContainerContent>
        <video controls autoPlay className="rounded-md w-full aspect-video">
          <source
            src="https://upaledigital.com/GLE/proceso-compensaciones-gle.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex justify-center text-center font-poppins my-10">
          <Link
            href="/assets/images/compensations/proceso-de-compensaciones-Gle-Colombia.pdf"
            target="_blank"
            className="flex justify-center items-center max-w-[400px] w-full text-white bg-main-gray rounded-xl px-4 py-2 gap-2"
          >
            <Download />
            {pages.compensations.text}
          </Link>
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
