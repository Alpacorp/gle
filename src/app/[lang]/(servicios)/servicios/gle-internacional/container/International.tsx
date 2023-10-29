import { FC } from "react";

import {
  BodyServices,
  CourierIcon,
  HeroPages,
  ImportExportIcon,
  PapersIcon,
} from "@ui/components/index";
import {
  bannerInternational,
  bannerInternationalMobile,
  internationalIcon,
  internationalImage,
} from "@/public/assets/images/international";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

export const International: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        imagePath={bannerInternational}
        imagePathMobile={bannerInternationalMobile}
        iconPath={internationalIcon}
        pageTitle={pages.services.international.title}
        color="white"
      />
      <BodyServices
        lang={lang}
        imageService={internationalImage}
        imageInfo={pages.services.international.imageInfo}
        sideTextTitle={pages.services.international.sideTextTitle}
        additionDescription={
          <>
            <div className="flex flex-wrap justify-center gap-4">
              <ImportExportIcon className="flex-none" />
              <div className="flex justify-center flex-col">
                <div>
                  <strong>
                    {pages.services.international.additionDescription[0].title}
                  </strong>
                  <p>
                    {
                      pages.services.international.additionDescription[0]
                        .description1
                    }
                  </p>
                </div>
                <br />
                <p>
                  {
                    pages.services.international.additionDescription[0]
                      .description2
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <PapersIcon className="flex-none" />
              <div className="flex justify-center flex-col">
                <div>
                  <strong>
                    {pages.services.international.additionDescription[1].title}
                  </strong>
                  <p>
                    {
                      pages.services.international.additionDescription[1]
                        .description1
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <CourierIcon className="flex-none" />
              <div className="flex justify-center flex-col">
                <div>
                  <strong>
                    {pages.services.international.additionDescription[2].title}
                  </strong>
                  <p>
                    {
                      pages.services.international.additionDescription[2]
                        .description1
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 my-10">
              <ImportExportIcon className="flex-none" />
              <div className="flex justify-center flex-col">
                <div>
                  <strong>
                    {pages.services.international.additionDescription[3].title}
                  </strong>
                  <p>
                    {
                      pages.services.international.additionDescription[3]
                        .description1
                    }
                  </p>
                </div>
              </div>
            </div>
          </>
        }
        service={pages.services.international.title}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
