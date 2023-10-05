import { FC } from "react";

import { BodyServices, HeroPages } from "@ui/components/index";
import {
  bannerPackage,
  bannerPackageMobile,
  packageIcon,
  packageImage,
} from "@/public/assets/images/package";
import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

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
        additionDescription={
          <>
            <p>{pages.services.packaging.additionDescription[1]}</p>
            <br />
            <p>{pages.services.packaging.additionDescription[2]}</p>
            <br />
            <p>{pages.services.packaging.additionDescription[3]}</p>
          </>
        }
        buttonText={lang === "es" ? "Cotización Servicio" : "Service Quote"}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
