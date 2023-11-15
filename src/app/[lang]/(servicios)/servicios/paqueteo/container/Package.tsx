import { FC } from "react";

import { BodyServices, HeroPages } from "@ui/components/index";
import {
  bannerPackage,
  bannerPackageMobile,
  packageIcon,
  packageImage,
} from "@/public/assets/images/package";
import StickyTracking from "@ui/components/StickyTracking";

import { LangInterface } from "@constans/interfaces/langInterface";
import { getDictionary } from "@lib/dictionary";

export const Package: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        imagePath={bannerPackage}
        imagePathMobile={bannerPackageMobile}
        iconPath={packageIcon}
        pageTitle={pages.services.packaging.title}
        color="white"
      />
      <BodyServices
        lang={lang}
        mainDescription={
          <>
            <p>{pages.services.packaging.mainDescription[1]}</p>
            <br />
            <p>{pages.services.packaging.mainDescription[2]}</p>
          </>
        }
        imageService={packageImage}
        imageInfo={pages.services.packaging.imageInfo}
        sideTextTitle={pages.services.packaging.sideTextTitle}
        service={pages.services.packaging.title}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
