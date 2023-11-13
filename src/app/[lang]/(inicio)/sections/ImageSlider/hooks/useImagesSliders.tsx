import { useEffect, useRef, useState } from "react";
import { ImageData } from "../interfaces/imageSlider";

export const useImagesSliders = (images: ImageData[]) => {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return {
    bannerRef,
    currentIndex,
    isTransitioning,
    images,
    mobileWidth,
    showText,
    animateText,
    redWordsText,
    redWordsSubtext,
    goToNextSlide,
    goToPrevSlide,
    handleSlideTextAnimation,
    setCurrentIndex,
    setIsHovered,
    setIsTransitioning,
    setAnimateText,
    setShowText,
    setMobileWidth,
  };
};
