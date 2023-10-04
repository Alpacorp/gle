import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { ArrowCta, ArrowGLE } from "..";

interface BodyServicesProps {
  buttonText: string;
  imageService: StaticImageData;
  mainDescription: React.ReactNode;
  additionDescription: React.ReactNode;
  sideTextTitle: string;
}

export const BodyServices: FC<BodyServicesProps> = ({
  buttonText,
  imageService,
  mainDescription,
  additionDescription,
  sideTextTitle,
}) => {
  return (
    <div className="relative z-20">
      <div className="flex flex-col mt-14 px-6 max-w-[896px] w-full m-auto justify-center font-poppins items-center max-[400px]:mt-5">
        <div className="text-xl max-[400px]:text-lg">{mainDescription}</div>
        <div className="flex justify-center items-center w-full my-20 flex-wrap gap-12 max-[400px]:my-10">
          <Image
            src={imageService}
            alt="Paqueteo"
            title="Paqueteo"
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
        <button className="flex border-2 border-secondary-gray rounded-lg px-10 py-2 my-20 text-main-red hover:bg-light-gray-2 hover:text-black transition duration-300 ease-in-out">
          <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
          {buttonText}
        </button>
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
    </div>
  );
};
