import { FC } from "react";

import { BodyServices, HeroPages } from "@ui/components/index";
import {
  bannerEcommerce,
  bannerEcommerceMobile,
  ecommerceIcon,
  ecommerceImage,
} from "@/public/assets/images/ecommerce";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

export const Ecommerce: FC<LangInterface> = async ({ lang }) => {
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
        service={pages.services.ecommerce.title}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
