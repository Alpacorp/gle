import { FC } from "react";

import { HeroPages, ContainerContent } from "@ui/components/index";

import StickyTracking from "@ui/components/StickyTracking";
import { Address } from "@ui/components/Address";

import { LangInterface } from "@constans/interfaces/langInterface";
import { getDictionary } from "@lib/dictionary";

import dataAddress from "@ui/components/Address/data/dataAddress.json";

export const Pqrs: FC<LangInterface> = async ({ lang }) => {
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
          <p>{pages.pqrs.content[4]}</p>
          <p>{pages.pqrs.content[5]}</p>
        </div>
        <div className="flex flex-col gap-5 font-poppins flex-wrap mt-10">
          <h3 className="font-poppins font-semibold uppercase">
            {pages.pqrs.locations}
          </h3>
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
