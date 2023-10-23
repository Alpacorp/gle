import { FC } from "react";

import { HeroPages, ContainerContent } from "@ui/components/index";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

import data from "@ui/components/Footer/dataFooter.json";
import { Address } from "@/src/app/ui/components/Footer/Address";

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
          {data.map((item) => (
            <Address
              key={item.id}
              city={item.city}
              phoneText={item.phoneText}
              address={item.address}
              phone={item.phone}
              type={item.type}
              maps={item.maps}
            />
          ))}
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
