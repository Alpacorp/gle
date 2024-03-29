import { NextPage } from 'next';
import Link from 'next/link';

import { HeroPages, ContainerContent, Download } from '@ui/components/index';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const Compensations: NextPage<LangInterface> = async ({ lang }) => {
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
        <video controls className="rounded-md w-full aspect-video">
          <source
            src="/assets/videos/compensations/proceso-compensaciones-gle.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="captions.vtt" label="English" />
        </video>
        <div className="flex justify-center text-center font-poppins my-10">
          <Link
            href="/assets/documents/compensations/proceso-de-compensaciones-Gle-Colombia.pdf"
            target="_blank"
            className="flex justify-center items-center max-w-[25rem] w-full text-white bg-main-gray rounded-xl px-4 py-2 gap-2"
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
