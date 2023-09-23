import { FC } from "react";
import { IconProps } from "./interfaces";

export const Arrow: FC<IconProps> = ({
  className = "",
  height = "46",
  width = "16",
  title,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 10"
      fill="none"
      className={`mx-1 ${className}`}
    >
      <title>{title}</title>
      <path
        d="M2.67214 0.611324L0.984497 2.28151L8.16596 9.38867L15.3474 2.28151L13.6598 0.611324L8.16596 6.03646L2.67214 0.611324Z"
        fill="#D81730"
      />
    </svg>
  );
};
