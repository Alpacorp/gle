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
        imageService={ecommerceImage}
        imageInfo={pages.services.ecommerce.imageInfo}
        sideTextTitle={pages.services.ecommerce.sideTextTitle}
        additionDescription={
          <>
            <ul>
              <li>
                <p>{pages.services.ecommerce.additionDescription[1]}</p>
              </li>
              <li>
                <p>{pages.services.ecommerce.additionDescription[2]}</p>
              </li>
              <li>
                <p>{pages.services.ecommerce.additionDescription[3]}</p>
              </li>
              <li>
                <p>{pages.services.ecommerce.additionDescription[4]}</p>
              </li>
              <li>
                <p>{pages.services.ecommerce.additionDescription[5]}</p>
              </li>
              <li>
                <p>{pages.services.ecommerce.additionDescription[6]}</p>
              </li>
            </ul>
            <br />
            <p>{pages.services.ecommerce.additionDescription[7]}</p>
          </>
        }
        buttonText={lang === "es" ? "Cotización Servicio" : "Service Quote"}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
