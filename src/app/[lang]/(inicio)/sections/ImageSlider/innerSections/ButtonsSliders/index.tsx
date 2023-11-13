import { LeftArrow, RightArrow } from "@/src/app/ui/components";
import { FC } from "react";
import { ButtonSlideProps } from "@inicio/sections/ImageSlider/interfaces/imageSlider";

export const ButtonsSliders: FC<ButtonSlideProps> = ({
  goToNextSlide,
  goToPrevSlide,
  handleSlideTextAnimation,
}) => {
  return (
    <>
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white"
        onClick={() => {
          goToPrevSlide();
          handleSlideTextAnimation();
        }}
      >
        <LeftArrow className="max-[380px]:w-4" height={"48"} width={"22"} />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white"
        onClick={() => {
          goToNextSlide();
          handleSlideTextAnimation();
        }}
      >
        <RightArrow className="max-[380px]:w-4" height={"48"} width={"22"} />
      </button>
    </>
  );
};
