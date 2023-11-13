import { FC } from "react";
import { BulletPaginationProps } from "@inicio/sections/ImageSlider/interfaces/imageSlider";

export const BulletPagination: FC<BulletPaginationProps> = ({
  currentIndex,
  handleSlideTextAnimation,
  images,
  setCurrentIndex,
}) => {
  return (
    <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-2">
      {images.map((image, index) => (
        <button
          className={`h-3 rounded-full ${
            index === currentIndex ? "bg-main-red w-10" : "bg-white w-3"
          }`}
          key={image.id}
          onClick={() => {
            setCurrentIndex(index);
            handleSlideTextAnimation();
          }}
        />
      ))}
    </div>
  );
};
