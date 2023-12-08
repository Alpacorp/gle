'use client';

import { FC } from 'react';

import { TrackingBar } from '@/src/app/[lang]/(inicio)/sections/TrackingBar';
import {
  ImagesSlider,
  ButtonsSliders,
  BulletPagination,
} from '@inicio/sections/ImageSlider/innerSections/index';

import { LangInterface } from '@constans/interfaces/langInterface';

import { useImagesSliders } from '@inicio/sections/ImageSlider/hooks/useImagesSliders';

import images from '@inicio/sections/ImageSlider/data/dataSilders.json';

export const ImageSlider: FC<LangInterface> = ({ lang }) => {
  const {
    bannerRef,
    currentIndex,
    isTransitioning,
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
  } = useImagesSliders(images);

  return (
    <section
      className="w-full overflow-hidden h-[100svh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={bannerRef}
    >
      <ImagesSlider
        animateText={animateText}
        currentIndex={currentIndex}
        images={images}
        isTransitioning={isTransitioning}
        lang={lang}
        mobileWidth={mobileWidth}
        redWordsSubtext={redWordsSubtext}
        redWordsText={redWordsText}
        showText={showText}
      />
      <ButtonsSliders
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        handleSlideTextAnimation={handleSlideTextAnimation}
      />
      <BulletPagination
        currentIndex={currentIndex}
        images={images}
        setCurrentIndex={setCurrentIndex}
        handleSlideTextAnimation={handleSlideTextAnimation}
      />
      <TrackingBar lang={lang} />
    </section>
  );
};
