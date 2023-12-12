import { NextPage } from 'next';

import { HeroPages, ContainerContent } from '@ui/components/index';

import StickyTracking from '@ui/components/StickyTracking';
import { Address } from '@ui/components/Address';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

import dataAddress from '@ui/components/Address/data/dataAddress.json';
import Link from 'next/link';

export const Pqrs: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.pqrs.title}
        color="white"
      />
      <ContainerContent>
        <div className="flex flex-col gap-3 font-poppins">
          <p>{pages.pqrs.content[0]}</p>
          <p>{pages.pqrs.content[1]}</p>
          <p>{pages.pqrs.content[2]}</p>
          <p>{pages.pqrs.content[3]}</p>
          <p>
            {pages.pqrs.content[4]}
            <Link
              href={
                lang === 'es' ? `/${lang}/contactanos` : `/${lang}/contact-us`
              }
              className="underline underline-offset-8 hover:text-main-red"
            >
              {pages.pqrs.content[5]}
            </Link>
          </p>
        </div>
        <h3 className="font-poppins font-semibold uppercase text-center mt-10">
          {pages.pqrs.locations}
        </h3>
        <div className="flex gap-5 font-poppins flex-wrap justify-center text-center mt-10">
          {dataAddress.map(
            ({ id, city, phoneText, address, phone, type, maps }) => (
              <Address
                key={id}
                city={city}
                phoneText={phoneText}
                address={address}
                phone={phone}
                type={type}
                maps={maps}
              />
            )
          )}
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
