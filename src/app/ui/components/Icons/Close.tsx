import { FC } from 'react';
import { IconProps } from './interfaces';

export const Close: FC<IconProps> = ({ title, className }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="-5 -5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-9 p-1 flex justify-center items-center ${className}`}
    >
      <title>{title}</title>
      <path
        id="icon"
        d="M14.5 1.91L13.09 0.5L7.5 6.09L1.91 0.5L0.5 1.91L6.09 7.5L0.5 13.09L1.91 14.5L7.5 8.91L13.09 14.5L14.5 13.09L8.91 7.5L14.5 1.91Z"
        fill="white"
      />
    </svg>
  );
};
