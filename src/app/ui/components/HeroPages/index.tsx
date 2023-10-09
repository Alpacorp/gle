import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowCta } from "../Icons";

interface HeroPagesProps {
  color?: "red" | "white";
  iconPath?: string | StaticImageData;
  imagePath?: string | StaticImageData;
  imagePathMobile?: string | StaticImageData;
  pageTitle: string;
  arrowDown?: boolean;
  arrowColor?: "red" | "white";
}

export const HeroPages: FC<HeroPagesProps> = ({
  color,
  arrowColor = "white",
  imagePath,
  imagePathMobile = imagePath as StaticImageData,
  pageTitle,
  iconPath,
  arrowDown,
}) => {
  return (
    <div className="relative h-auto">
      {imagePath ? (
        <Image
          src={imagePath}
          alt={pageTitle}
          height={800}
          width={1200}
          priority
          className="object-contain w-full max-[500px]:hidden"
        />
      ) : (
        <div
          className={`h-[300px] w-full ${
            color === "white" ? "from-white" : "from-main-red"
          }`}
        ></div>
      )}
      {imagePathMobile && (
        <Image
          src={imagePathMobile}
          alt={pageTitle}
          height={500}
          width={400}
          priority
          className="object-contain w-full min-[501px]:hidden"
        />
      )}
      {(imagePath || imagePathMobile) && (
        <div
          className={`absolute z-10 inset-0 bottom-0 top-0 bg-gradient-to-t ${
            color === "white" ? "from-white" : "from-main-red"
          } to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat`}
        />
      )}
      <div className="absolute z-10 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-white max-[400px]:bottom-24">
        {iconPath && (
          <Image
            src={iconPath}
            alt={pageTitle}
            width={50}
            height={50}
            priority
            className="w-[50px] h-[50px]"
          />
        )}
        <h1
          className={`text-[40px] font-semibold font-poppins max-[680px]:text-3xl ${
            color === "white" ? "text-black" : "text-white"
          }`}
        >
          {pageTitle}
        </h1>
        {arrowDown && (
          <div>
            <ArrowCta
              stroke={arrowColor === "white" ? "white" : "#D81730"}
              className="w-10 max-[680px]:w-8 max-[680px]:h-3"
            />
          </div>
        )}
      </div>
    </div>
  );
};
