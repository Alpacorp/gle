import { FC } from "react";

import { HeroPages, ContainerContent } from "@ui/components/index";

import StickyTracking from "@ui/components/StickyTracking";

import { LangInterface } from "@constans/interfaces/langInterface";
import { getDictionary } from "@lib/dictionary";

export const TermsConditions: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages["terms-&-conditions"].title}
        color="white"
      />
      <ContainerContent>
        <div className="flex flex-col gap-3 font-poppins">
          <p>{pages["terms-&-conditions"].content[0]}</p>
          <p className="text-main-red">
            {pages["terms-&-conditions"].content[1]}
          </p>
          <p>{pages["terms-&-conditions"].content[2]}</p>
          <p className="text-main-red">
            {pages["terms-&-conditions"].content[3]}
          </p>
          <p>{pages["terms-&-conditions"].content[4]}</p>
          <p>{pages["terms-&-conditions"].content[5]}</p>
          <p>{pages["terms-&-conditions"].content[6]}</p>
          <p>{pages["terms-&-conditions"].content[7]}</p>
          <p>{pages["terms-&-conditions"].content[8]}</p>
          <p>{pages["terms-&-conditions"].content[9]}</p>
          <p className="text-main-red">
            {pages["terms-&-conditions"].content[10]}
          </p>
          <p>{pages["terms-&-conditions"].content[11]}</p>
          <p>{pages["terms-&-conditions"].content[12]}</p>
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
