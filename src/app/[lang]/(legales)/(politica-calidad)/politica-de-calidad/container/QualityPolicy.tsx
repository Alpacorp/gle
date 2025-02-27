import { NextPage } from 'next';

import { HeroPages, ContainerContent } from '@ui/components';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const QualityPolicy: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages['quality-policy'].title}
        color="white"
      />
      <ContainerContent>
        <div className="flex flex-col gap-3 font-poppins">
          <p>{pages['quality-policy'].content[0]}</p>
          <p>{pages['quality-policy'].content[1]}</p>
          <p>{pages['quality-policy'].content[2]}</p>
          <p>{pages['quality-policy'].content[3]}</p>
          <p>{pages['quality-policy'].content[4]}</p>
          <p>{pages['quality-policy'].content[5]}</p>
          <p>{pages['quality-policy'].content[6]}</p>
          <p>{pages['quality-policy'].content[7]}</p>
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
