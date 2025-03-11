import { NextPage } from 'next';
import Link from "next/link";

import { HeroPages, ContainerContent } from '@ui/components';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const BacklogShipments: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages['backlog-shipments'].title}
        color="white"
      />
      <ContainerContent>
        <div className="flex flex-col gap-3 font-poppins">
          <p>{pages['backlog-shipments'].content[0]}</p>
          <p>{pages['backlog-shipments'].content[1]}</p>
          <p>{pages['backlog-shipments'].content[2]}</p>
          <Link
            href="/assets/documents/backlog-shipments/1822.pdf"
            target="_blank"
            className="underline underline-offset-8 hover:text-red-500"
          >
            {pages['backlog-shipments'].content[3]}
          </Link>
          <Link
            href="/assets/documents/backlog-shipments/acta-gle.pdf"
            target="_blank"
            className="underline underline-offset-8 hover:text-red-500"
          >
            {pages['backlog-shipments'].content[4]}
          </Link>
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
