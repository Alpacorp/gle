import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { ArrowGLE } from '@icons/index';
import { AttachedLinks, ButtonQuote } from '@ui/components';

interface BodyServicesProps {
  additionDescription?: React.ReactNode | string;
  containerImageInfoClass?: string;
  imageInfo: string;
  imageService?: StaticImageData;
  lang: string;
  mainDescription?: React.ReactNode;
  service: string;
  showContract?: boolean;
  showRates?: boolean;
  sideTextTitle: string;
}

export const BodyServices: FC<BodyServicesProps> = ({
  additionDescription,
  containerImageInfoClass,
  imageInfo,
  imageService,
  lang = 'es',
  mainDescription,
  service,
  showContract = false,
  showRates = false,
  sideTextTitle,
}) => {
  return (
    <div className="relative z-20 mb-32">
      <div className="flex flex-col mt-14 px-6 max-w-4xl w-full m-auto justify-center font-poppins items-center max-[400px]:mt-5">
        <div className="text-xl max-[400px]:text-lg">{mainDescription}</div>
        <div
          className={`flex justify-center items-center w-full my-20 flex-wrap gap-12 max-[400px]:my-10 ${containerImageInfoClass}`}
        >
          <Image
            alt={imageInfo}
            className="aspect-square rounded-2xl object-cover"
            height={390}
            priority
            src={imageService as StaticImageData}
            title={imageInfo}
            width={411}
          />
          <div className="max-w-[24.25rem] w-full border-l-[3px] border-main-red pl-5 text-3xl font-semibold leading-8 max-[400px]:text-xl max-[400px]:leading-6">
            <h3>{sideTextTitle}</h3>
          </div>
        </div>
        <div className="text-xl max-[400px]:text-lg">{additionDescription}</div>
        <div className="absolute z-auto top-44 left-0 max-[600px]:hidden">
          <ArrowGLE className="h-full w-32 max-[480px]:h-44" />
        </div>
        <ButtonQuote service={service} lang={lang} />
        <AttachedLinks
          lang={lang}
          showRates={showRates}
          showContract={showContract}
        />
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
    </div>
  );
};
