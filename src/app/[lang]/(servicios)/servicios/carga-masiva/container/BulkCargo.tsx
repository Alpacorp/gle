import { FC } from "react";

import { BodyServices, HeroPages } from "@ui/components/index";
import {
  bannerBulkCargo,
  bannerBulkCargoMobile,
  bulkCargoIcon,
  bulkCargoImage,
} from "@/public/assets/images/bulkCargo";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

export const BulkCargo: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        imagePath={bannerBulkCargo}
        imagePathMobile={bannerBulkCargoMobile}
        iconPath={bulkCargoIcon}
        pageTitle={pages.services.bulkCargo.title}
        color="white"
      />
      <BodyServices
        mainDescription={
          <>
            <p>{pages.services.bulkCargo.mainDescription[1]}</p>
            <br />
            <p>{pages.services.bulkCargo.mainDescription[2]}</p>
            <br />
            <p>{pages.services.bulkCargo.mainDescription[3]}</p>
          </>
        }
        imageService={bulkCargoImage}
        imageInfo={pages.services.bulkCargo.imageInfo}
        sideTextTitle={pages.services.bulkCargo.sideTextTitle}
        additionDescription={
          <>
            <p>{pages.services.bulkCargo.additionDescription[1]}</p>
          </>
        }
        buttonText={lang === "es" ? "Cotización Servicio" : "Service Quote"}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
