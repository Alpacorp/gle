import { FC } from "react";

interface RightArrowProps {
  className?: string;
  width?: string;
  height?: string;
}

export const RightArrow: FC<RightArrowProps> = ({
  className,
  width,
  height,
}) => {
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
        d="M18.2822 24.3493L18.6232 24L18.2822 23.6507L0.699142 5.64038L5.51822 0.714956L28.3005 24L5.51821 47.285L0.699137 42.3596L18.2822 24.3493Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};
