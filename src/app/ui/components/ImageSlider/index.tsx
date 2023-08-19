"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import images from "./dataSilders.json";

export const ImageSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isTransitioning) {
        goToNextSlide();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
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
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            {/* <div
              className="bg-cover bg-no-repeat w-full h-full bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            /> */}
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
              alt="test"
              className="object-cover object-center"
            />
            <div className="absolute animate-slide-in-right delay-100 bottom-16 right-0 p-4 text-white text-4xl font-semibold leading-10 font-poppins">
              {image.text}I
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white"
        onClick={() => {
          setIsTransitioning(true);
          goToPrevSlide();
          setTimeout(() => setIsTransitioning(false), 1000);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="48"
          viewBox="0 0 29 48"
          fill="none"
        >
          <path
            d="M10.7178 23.6507L10.3768 24L10.7178 24.3493L28.3009 42.3596L23.4818 47.285L0.699515 24L23.4818 0.714952L28.3009 5.64038L10.7178 23.6507Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white"
        onClick={() => {
          setIsTransitioning(true);
          goToNextSlide();
          setTimeout(() => setIsTransitioning(false), 1000);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="48"
          viewBox="0 0 29 48"
          fill="none"
        >
          <path
            d="M18.2822 24.3493L18.6232 24L18.2822 23.6507L0.699142 5.64038L5.51822 0.714956L28.3005 24L5.51821 47.285L0.699137 42.3596L18.2822 24.3493Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`h-3 rounded-full ${
              index === currentIndex ? "bg-main-red w-10" : "bg-white w-3"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
