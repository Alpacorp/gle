import { FC } from "react";
import { IconProps } from "./interfaces";

export const ArrowGLE: FC<IconProps> = ({ className, title }) => {
  return (
    <svg
      width="164"
      height="283"
      viewBox="0 0 164 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <path
        d="M140.236 144.222L-6.49767 278.924L-45 277.387L104.996 144.677"
        fill="#DA1730"
      />
      <path
        d="M104.996 144.677L-37.2305 8.34033L-4.36139 9.39747L140.236 144.222L104.996 144.677Z"
        fill="#8C8C8C"
      />
      <path
        d="M53.4771 243.834L30.7637 243.527L140.501 144.26L84.0992 92.2079L104.426 93.0253L164 143.752L53.4771 243.834Z"
        fill="#313131"
      />
      <path
        d="M66.2509 63.075L-0.395508 0L18.7322 0.713176L87.4611 63.075H66.2509Z"
        fill="#DA1730"
      />
      <path
        d="M39.4538 282.238L21.7344 282.765L125.044 190.475H143.989L39.4538 282.238Z"
        fill="#E6E6E6"
      />
      <mask
        id="mask0_410_11313"
        maskUnits="userSpaceOnUse"
        x="6"
        y="159"
        width="123"
        height="70"
      >
        <path
          d="M128.716 163.772L55.7525 228.933L6.16406 226.626L65.8607 159.508L128.716 163.772Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_410_11313)">
        <path
          d="M117.743 173.8H70.4141L76.7847 168.022H125.819L117.743 173.8Z"
          fill="white"
        />
        <path
          d="M107.262 183.539H59.7119L66.3041 177.761H115.339L107.262 183.539Z"
          fill="white"
        />
        <path
          d="M96.4888 193.28H48.9385L55.5338 187.502H104.565L96.4888 193.28Z"
          fill="white"
        />
        <path
          d="M84.0671 203.022H36.7383L43.1089 197.244H92.1435L84.0671 203.022Z"
          fill="white"
        />
        <path
          d="M73.5865 212.763H26.0361L32.6315 206.985H81.6629L73.5865 212.763Z"
          fill="white"
        />
        <path
          d="M62.8162 222.501H15.2627L21.858 216.723H70.8926L62.8162 222.501Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
