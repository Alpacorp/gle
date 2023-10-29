import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { ArrowGLE } from "..";
import { AttachedLinks } from "../AttachedLinks";
import { ButtonQuote } from "../ButtonQuote";

interface BodyServicesProps {
  lang: string;
  showRates?: boolean;
  service: string;
  imageInfo: string;
  imageService: StaticImageData;
  mainDescription?: React.ReactNode;
  additionDescription?: React.ReactNode | string;
  sideTextTitle: string;
}

export const BodyServices: FC<BodyServicesProps> = ({
  lang = "es",
  imageInfo,
  imageService,
  mainDescription,
  additionDescription,
  sideTextTitle,
  service,
  showRates = false,
}) => {
  return (
    <div className="relative z-20 mb-32">
      <div className="flex flex-col mt-14 px-6 max-w-[896px] w-full m-auto justify-center font-poppins items-center max-[400px]:mt-5">
        <div className="text-xl max-[400px]:text-lg">{mainDescription}</div>
        <div className="flex justify-center items-center w-full my-20 flex-wrap gap-12 max-[400px]:my-10">
          <Image
            src={imageService}
            alt={imageInfo}
            title={imageInfo}
            width={411}
            height={390}
            priority
            className="aspect-square rounded-2xl object-cover"
          />
          <div className="max-w-[388px] w-full border-l-[3px] border-main-red pl-5 text-3xl font-semibold leading-8 max-[400px]:text-xl max-[400px]:leading-6">
            <h3>{sideTextTitle}</h3>
          </div>
        </div>
        <div className="text-xl max-[400px]:text-lg">{additionDescription}</div>
        <div className="absolute z-auto top-44 left-0 max-[600px]:hidden">
          <ArrowGLE className="h-full w-32 max-[480px]:h-44" />
        </div>
        <ButtonQuote service={service} lang={lang} />
        <AttachedLinks lang={lang} showRates={showRates} />
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
    </div>
  );
};
