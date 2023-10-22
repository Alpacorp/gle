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
        <iframe
          width="760"
          height="590"
          src="https://www.youtube.com/embed/-kYRivzbjQc?si=S3zfctAyD9P1q_lB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>
        <div className="flex justify-center font-poppins my-5">
          <Link
            href="/assets/images/compensations/document.pdf"
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
