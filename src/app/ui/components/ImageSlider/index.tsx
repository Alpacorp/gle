"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import images from "./dataSilders.json";
import { LeftArrow } from "../SlideArrows/LeftArrow";
import { RightArrow } from "../SlideArrows/RightArrow";
import { TextBanner } from "../TextBanner";

export const ImageSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [showText, setShowText] = useState(true);

  const redWordsText = ["Servicio", "talento", "aliado"];
  const redWordsSubtext = ["oportuna", "procedimientos", "calidad"];

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

  return (
    <div
      className="relative w-full h-[100dvh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              src={image.url}
              fill
              sizes="
              (max-width: 640px) 100vw,
              (max-width: 768px) 100vw,
              (max-width: 1024px) 100vw,
              (max-width: 1280px) 100vw,
              (max-width: 1536px) 100vw,
              "
              loading="lazy"
              alt={image.text}
              className="object-cover object-top"
            />
            {showText && (
              <div
                className={`absolute z-50 bottom-16 right-0 p-4 text-white leading-tight font-poppins max-w-[54rem] ${
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
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-black to-transparent" />
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
    </div>
  );
};
