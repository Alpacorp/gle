import { FC } from "react";

interface LeftArrowProps {
  className?: string;
  width?: string;
  height?: string;
}

export const LeftArrow: FC<LeftArrowProps> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "29"}
      height={height ?? "48"}
      viewBox="0 0 29 48"
      fill="none"
      className={className}
    >
      <path
        d="M10.7178 23.6507L10.3768 24L10.7178 24.3493L28.3009 42.3596L23.4818 47.285L0.699515 24L23.4818 0.714952L28.3009 5.64038L10.7178 23.6507Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};
