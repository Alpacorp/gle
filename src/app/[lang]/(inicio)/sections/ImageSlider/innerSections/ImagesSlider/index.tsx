import { FC } from "react";
import Image from "next/image";

import { TextBanner } from "@/src/app/ui/components";

import {
  ImageData,
  ImagesSliderProps,
} from "@inicio/sections/ImageSlider/interfaces/imageSlider";

export const ImagesSlider: FC<ImagesSliderProps> = ({
  animateText,
  currentIndex,
  images,
  isTransitioning,
  lang,
  mobileWidth,
  redWordsSubtext,
  redWordsText,
  showText,
}) => {
  return (
    <div
      className={`flex transition-transform duration-1000 h-full ${
        isTransitioning ? "pointer-events-none" : ""
      }`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((data: ImageData) => (
        <div key={data.id} className={`w-full flex-shrink-0 relative`}>
          <Image
            alt={lang === "es" ? data.textEs : data.textEn}
            className="object-cover object-top max-[380px]:object-center"
            fill
            priority
            sizes="
            (max-width: 640px) 100vw,
            (max-width: 768px) 100vw,
            (max-width: 1024px) 100vw,
            (max-width: 1280px) 100vw,
            (max-width: 1536px) 100vw,
            "
            src={mobileWidth ? data.urlMobile : data.url}
          />
          {showText && (
            <div
              className={`absolute z-40 bottom-32 left-9 p-4 text-white leading-tight font-poppins max-w-[54rem] ${
                animateText ? "animate-fade-in-bottom delay-1000" : ""
              }`}
            >
              <TextBanner
                content={{
                  id: data.id,
                  textEs: data.textEs,
                  textEn: data.textEn,
                  subtextEs: data.subtextEs ?? "",
                  subtextEn: data.subtextEn ?? "",
                  url: data.url,
                }}
                customClass={
                  "text-5xl mb-1 font-semibold max-[744px]:text-4xl max-[380px]:text-3xl max-[320px]:text-2xl max-[380px]:leading-9 max-[320px]:leading-7"
                }
                lang={lang}
                redWords={redWordsText}
                type={"text"}
              />
              <TextBanner
                content={{
                  id: data.idSubtext,
                  textEs: data.textEs,
                  textEn: data.textEn,
                  subtextEs: data.subtextEs ?? "",
                  subtextEn: data.subtextEn ?? "",
                  url: data.url,
                }}
                customClass={
                  "text-2xl font-normal max-[380px]:text-lg max-[320px]:text-md max-[380px]:leading-6 max-[320px]:leading-5"
                }
                lang={lang}
                redWords={redWordsSubtext}
                type={"subtext"}
              />
            </div>
          )}
          <div className="absolute z-10 inset-0 bg-gradient-to-t from-main-gray to-transparent" />
        </div>
      ))}
    </div>
  );
};
