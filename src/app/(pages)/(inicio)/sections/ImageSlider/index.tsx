"use client";

import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";

import { LeftArrow } from "../../../../ui/components/SlideArrows/LeftArrow";
import { RightArrow } from "../../../../ui/components/SlideArrows/RightArrow";
import { TextBanner } from "../../../../ui/components/TextBanner";

import images from "./dataSilders.json";

export const ImageSlider: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [showText, setShowText] = useState(true);
  const [mobileWidth, setMobileWidth] = useState(false);

  const redWordsText = ["Servicio", "talento", "mejores"];
  const redWordsSubtext = ["oportuna", "servicios", "aliados"];

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
        {images.map((image) => (
          <div key={image.id} className={`w-full flex-shrink-0 relative`}>
            <Image
              src={mobileWidth ? image.urlMobile : image.url}
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 768px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 100vw,
                (max-width: 1536px) 100vw,
              "
              priority
              alt={image.text}
              className="object-cover object-top"
            />
            {showText && (
              <div
                className={`absolute z-40 bottom-16 right-0 p-4 text-white leading-tight font-poppins max-w-[54rem] ${
                  animateText ? "animate-fade-in-bottom delay-1000" : ""
                }`}
              >
                <TextBanner
                  image={image}
                  type={"text"}
                  redWords={redWordsText}
                  customClass={
                    "text-5xl mb-1 font-semibold max-[744px]:text-4xl max-[380px]:text-3xl max-[320px]:text-2xl max-[380px]:leading-9 max-[320px]:leading-7"
                  }
                />
                <TextBanner
                  image={image}
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
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
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
    </section>
  );
};
