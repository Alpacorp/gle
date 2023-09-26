import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowCta } from "../Icons";

interface HeroPagesProps {
  iconPath?: string | StaticImageData;
  imagePath: string | StaticImageData;
  imagePathMobile?: string | StaticImageData;
  pageTitle: string;
  arrowDown?: boolean;
}

export const HeroPages: FC<HeroPagesProps> = ({
  imagePath,
  imagePathMobile = imagePath as StaticImageData,
  pageTitle,
  iconPath,
  arrowDown,
}) => {
  return (
    <div className="relative">
      <Image
        src={imagePath}
        alt={pageTitle}
        height={800}
        width={1200}
        priority
        className="object-contain w-full h-full aspect-auto max-[400px]:hidden"
      />
      <Image
        src={imagePathMobile}
        alt={pageTitle}
        height={500}
        width={400}
        priority
        className="object-contain w-full h-full aspect-auto min-[401px]:hidden"
      />
      <div className="absolute z-10 inset-0 bottom-0 top-0 bg-gradient-to-t from-main-red to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat" />
      <div className="absolute z-10 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-white">
        {iconPath && <Image src={iconPath} alt="Icon" width={50} height={50} />}
        <h1 className="text-[45px] font-semibold max-[680px]:text-3xl">
          {pageTitle}
        </h1>
        {arrowDown && (
          <div className="mt-4">
            <ArrowCta
              stroke="white"
              className="max-[680px]:w-8 max-[680px]:h-3"
            />
          </div>
        )}
      </div>
    </div>
  );
};
