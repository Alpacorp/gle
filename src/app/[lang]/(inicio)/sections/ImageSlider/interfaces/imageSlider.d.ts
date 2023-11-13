export interface ButtonSlideProps {
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  handleSlideTextAnimation: () => void;
}

export interface ImageData {
  id: number;
  idSubtext: number;
  subtext?: string | "";
  subtextEn: string | "";
  subtextEs: string | "";
  textEn: string | "";
  textEs: string | "";
  url: string | "";
  urlMobile: string | "";
}

export interface BulletPaginationProps {
  currentIndex: number;
  handleSlideTextAnimation: () => void;
  images: ImageData[];
  setCurrentIndex: (index: number) => void;
}

export interface ImagesSliderProps {
  animateText: boolean;
  currentIndex: number;
  images: ImageData[];
  isTransitioning: boolean;
  lang: string;
  mobileWidth: boolean;
  redWordsSubtext: string[];
  redWordsText: string[];
  showText: boolean;
}
