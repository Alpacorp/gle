import type { StaticImageData } from "next/image";

export interface HeroPagesPropsInterface {
  color?: "red" | "white";
  className?: string;
  iconPath?: string | StaticImageData;
  imagePath?: string | StaticImageData;
  imagePathMobile?: string | StaticImageData;
  pageTitle: string;
  arrowDown?: boolean;
  arrowColor?: "red" | "white";
}
