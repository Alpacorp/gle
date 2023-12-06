import { NextPage } from 'next';

import { BodyServices, HeroPages } from '@ui/components/index';
import {
  bannerBulkCargo,
  bannerBulkCargoMobile,
  bulkCargoIcon,
  bulkCargoImage,
} from '@/public/assets/images/bulkCargo';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const BulkCargo: NextPage<LangInterface> = async ({ lang }) => {
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
        lang={lang}
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
        service={pages.services.bulkCargo.title}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
