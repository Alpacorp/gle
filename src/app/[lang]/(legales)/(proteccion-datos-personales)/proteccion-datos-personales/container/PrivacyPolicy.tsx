import { NextPage } from 'next';

import { ContainerContent, HeroPages } from '@ui/components/index';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const PrivacyPolicy: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <ContainerContent>
        <HeroPages
          arrowDown
          arrowColor="red"
          pageTitle={pages['privacy-policy'].title}
          color="white"
          className="leading-none"
        />
      </ContainerContent>
      <ContainerContent>
        <div className="flex flex-col gap-3 font-poppins">
          <p className="text-main-red">{pages['privacy-policy'].law}</p>
          <p>{pages['privacy-policy'].content[0]}</p>
          <p>{pages['privacy-policy'].content[1]}</p>
          <p>{pages['privacy-policy'].content[2]}</p>
          <p>{pages['privacy-policy'].content[3]}</p>
          <p>{pages['privacy-policy'].content[4]}</p>
        </div>
      </ContainerContent>
      <StickyTracking lang={lang} />
    </section>
  );
};
