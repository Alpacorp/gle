import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowCta } from "../Icons";

interface HeroPagesProps {
  iconPath?: string | StaticImageData;
  imagePath: string | StaticImageData;
  pageTitle: string;
  arrowDown?: boolean;
}

export const HeroPages: FC<HeroPagesProps> = ({
  imagePath,
  pageTitle,
  iconPath,
  arrowDown,
}) => {
  return (
    <div className="relative h-[100svh]">
      <Image src={imagePath} alt={pageTitle} fill className="object-cover" />
      <div className="absolute z-10 inset-0 bg-gradient-to-t from-main-red to-transparent" />
      <div className="absolute z-10 bottom-20 right-0 left-0 flex flex-col justify-center items-center text-white">
        {iconPath && <Image src={iconPath} alt="Icon" width={50} height={50} />}
        <h1 className="text-[45px] font-semibold">{pageTitle}</h1>
        {arrowDown && (
          <div className="mt-4">
            <ArrowCta stroke="white" />
          </div>
        )}
      </div>
    </div>
  );
};
