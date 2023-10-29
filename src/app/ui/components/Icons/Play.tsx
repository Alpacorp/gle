import { FC } from "react";
import { IconProps } from "./interfaces";

export const Play: FC<IconProps> = ({ title, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="120"
      viewBox="0 0 119 120"
      fill="none"
      className={className}
    >
      <title>{title}</title>
      <g clip-path="url(#clip0_620_6501)">
        <g filter="url(#filter0_d_620_6501)">
          <path
            d="M95.8935 17.8395H25.2086C21.6597 17.8395 18.7827 20.7529 18.7827 24.3468V95.9264C18.7827 99.5203 21.6597 102.434 25.2086 102.434H95.8935C99.4425 102.434 102.319 99.5203 102.319 95.9264V24.3468C102.319 20.7529 99.4425 17.8395 95.8935 17.8395Z"
            fill="#AE0E22"
          />
          <path
            d="M95.8935 17.8395H25.2086C21.6597 17.8395 18.7827 20.7529 18.7827 24.3468V95.9264C18.7827 99.5203 21.6597 102.434 25.2086 102.434H95.8935C99.4425 102.434 102.319 99.5203 102.319 95.9264V24.3468C102.319 20.7529 99.4425 17.8395 95.8935 17.8395Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M49.1772 74.6477V46.5365C49.1797 46.0661 49.3048 45.6048 49.54 45.1992C49.7753 44.7936 50.1122 44.4582 50.5167 44.227C50.9211 43.9958 51.3788 43.8769 51.8432 43.8826C52.3077 43.8882 52.7624 44.018 53.1613 44.2589L76.9371 58.2495C77.3374 58.4837 77.6698 58.8205 77.9009 59.226C78.132 59.6315 78.2537 60.0914 78.2537 60.5596C78.2537 61.0277 78.132 61.4877 77.9009 61.8932C77.6698 62.2986 77.3374 62.6354 76.9371 62.8696L53.1613 76.9253C52.7624 77.1662 52.3077 77.296 51.8432 77.3016C51.3788 77.3073 50.9211 77.1884 50.5167 76.9572C50.1122 76.726 49.7753 76.3906 49.54 75.985C49.3048 75.5794 49.1797 75.1181 49.1772 74.6477Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_620_6501"
          x="0.782715"
          y="-0.16049"
          width="119.537"
          height="120.594"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_620_6501"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_620_6501"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_620_6501">
          <rect
            width="117.916"
            height="119.409"
            fill="white"
            transform="translate(0.965332 0.556648)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
