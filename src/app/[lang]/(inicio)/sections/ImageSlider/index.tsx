"use client";

import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";

import { Tracking } from "@inicio/sections/Tracking";
import { TextBanner, LeftArrow, RightArrow } from "@ui/components/index";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

import images from "./dataSilders.json";

interface ImageData {
  id: number;
  idSubtext: number;
  url: string;
  urlMobile: string;
  textEs: string;
  textEn: string;
  subtextEs?: string;
  subtextEn?: string;
  subtext?: string;
}

export const ImageSlider: FC<LangInterface> = ({ lang }) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [showText, setShowText] = useState(true);
  const [mobileWidth, setMobileWidth] = useState(false);

  const redWordsText = [
    "Servicio",
    "talento",
    "mejores",
    "customized",
    "partners",
    "talent",
  ];
  const redWordsSubtext = [
    "oportuna",
    "servicios",
    "aliados",
    "indicators",
    "design",
    "strategic",
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSlideTextAnimation = () => {
    setShowText(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setShowText(true);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isTransitioning) {
        goToNextSlide();
        handleSlideTextAnimation();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning]);

  useEffect(() => {
    setAnimateText(true);
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    });

    if (window.innerWidth < 450) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }

    return () => {
      window.removeEventListener("resize", () => setMobileWidth(false));
    };
  }, []);

  return (
    <section
      className="w-full overflow-hidden h-[100svh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={bannerRef}
    >
      <div
        className={`flex transition-transform duration-1000 h-full ${
          isTransitioning ? "pointer-events-none" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((data: ImageData) => (
          <div key={data.id} className={`w-full flex-shrink-0 relative`}>
            <Image
              src={mobileWidth ? data.urlMobile : data.url}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 768px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 100vw,
                (max-width: 1536px) 100vw,
              "
              priority
              alt={lang === "es" ? data.textEs : data.textEn}
              className="object-cover object-top max-[380px]:object-center"
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
                  lang={lang}
                  type={"text"}
                  redWords={redWordsText}
                  customClass={
                    "text-5xl mb-1 font-semibold max-[744px]:text-4xl max-[380px]:text-3xl max-[320px]:text-2xl max-[380px]:leading-9 max-[320px]:leading-7"
                  }
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
                  lang={lang}
                  type={"subtext"}
                  redWords={redWordsSubtext}
                  customClass={
                    "text-2xl font-normal max-[380px]:text-lg max-[320px]:text-md max-[380px]:leading-6 max-[320px]:leading-5"
                  }
                />
              </div>
            )}
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-main-gray to-transparent" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white"
        onClick={() => {
          goToPrevSlide();
          handleSlideTextAnimation();
        }}
      >
        <LeftArrow width={"22"} height={"48"} className="max-[380px]:w-4" />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white"
        onClick={() => {
          goToNextSlide();
          handleSlideTextAnimation();
        }}
      >
        <RightArrow width={"22"} height={"48"} className="max-[380px]:w-4" />
      </button>
      <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`h-3 rounded-full ${
              index === currentIndex ? "bg-main-red w-10" : "bg-white w-3"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              handleSlideTextAnimation();
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-1 right-0 left-0">
        <Tracking lang={lang} />
      </div>
    </section>
  );
};
