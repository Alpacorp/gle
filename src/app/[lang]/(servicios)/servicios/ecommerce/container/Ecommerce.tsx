import { NextPage } from 'next';

import { BodyServices, HeroPages } from '@ui/components/index';
import {
  bannerEcommerce,
  bannerEcommerceMobile,
  ecommerceIcon,
  ecommerceImage,
} from '@/public/assets/images/ecommerce';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const Ecommerce: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        imagePath={bannerEcommerce}
        imagePathMobile={bannerEcommerceMobile}
        iconPath={ecommerceIcon}
        pageTitle={pages.services.ecommerce.title}
        color="white"
      />
      <BodyServices
        lang={lang}
        mainDescription={
          <>
            <p>{pages.services.ecommerce.mainDescription}</p>
            <ul className="list-disc mt-5 ml-10">
              <li>{pages.services.ecommerce.additionDescription[1]}</li>
              <li>{pages.services.ecommerce.additionDescription[2]}</li>
              <li>{pages.services.ecommerce.additionDescription[3]}</li>
              <li>{pages.services.ecommerce.additionDescription[4]}</li>
              <li>{pages.services.ecommerce.additionDescription[5]}</li>
              <li>{pages.services.ecommerce.additionDescription[6]}</li>
            </ul>
          </>
        }
        imageService={ecommerceImage}
        imageInfo={pages.services.ecommerce.imageInfo}
        sideTextTitle={pages.services.ecommerce.sideTextTitle}
        additionDescription={
          <p>{pages.services.ecommerce.additionDescription[7]}</p>
        }
        showRates
        showContract
        service={pages.services.ecommerce.title}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
