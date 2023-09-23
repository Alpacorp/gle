import { FC } from "react";
import { IconProps } from "./interfaces";

interface ArrowCtaProps {
  stroke?: "#D81730" | "#313131" | "white";
}

export const ArrowCta: FC<IconProps & ArrowCtaProps> = ({
  stroke = "#313131",
  className,
  width = "65",
  height = "39",
  title,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 65 39`}
      fill="none"
      className={className}
    >
      <title>{title}</title>
      <g clipPath="url(#clip0_410_11486)">
        <path
          d="M63.2656 3.69993L32.3672 35.9503L1.73476 2.24218"
          stroke={stroke}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M23.3008 36.4031L1.73434 12.6669"
          stroke={stroke}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M63.2656 13.3984L50.9386 26.2684"
          stroke={stroke}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_410_11486">
          <rect
            width="38"
            height="65"
            fill="white"
            transform="translate(65 0.5) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
