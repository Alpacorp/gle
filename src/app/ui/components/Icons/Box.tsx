import { FC } from "react";
import { IconProps } from "./interfaces";

export const Box: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "40"}
      height={height ?? "40"}
      viewBox="0 0 42 42"
      fill="none"
    >
      <path
        d="M38.0205 4.19339H4.40723V37.8066H38.0205V4.19339Z"
        fill="#F0F0F0"
      />
      <path
        d="M41.2139 1H1.21387V41H41.2139V1Z"
        stroke="#D81730"
        strokeMiterlimit="10"
      />
      <path
        d="M31.9279 21.0175C31.9279 22.4881 31.9307 23.9574 31.9279 25.428C31.9251 26.5457 31.4419 27.4099 30.4783 27.9673C27.8648 29.4758 25.2442 30.9716 22.6181 32.4577C21.7063 32.9731 20.7567 32.9773 19.8407 32.4675C18.3168 31.6201 16.8098 30.7447 15.2957 29.8806C14.2369 29.2755 13.1822 28.6634 12.1177 28.0682C11.0365 27.4631 10.4958 26.5639 10.5 25.316C10.5112 22.3999 10.5042 19.4824 10.5028 16.5664C10.5028 15.4109 11.0337 14.5523 12.0113 13.9864C14.5758 12.5032 17.1529 11.041 19.7272 9.57453C20.7119 9.01428 21.7133 9.01428 22.6965 9.57172C25.2723 11.0354 27.848 12.5004 30.4125 13.9822C31.4013 14.5537 31.9293 15.4207 31.9279 16.5832C31.9265 18.0608 31.9279 19.5385 31.9279 21.0161V21.0175ZM21.8408 26.3776C21.8408 27.9407 21.8408 29.5052 21.8408 31.0683C21.8408 31.1313 21.8408 31.1929 21.8408 31.256C21.8408 31.368 21.8898 31.3974 21.9878 31.3456C22.0368 31.3204 22.0845 31.2938 22.1321 31.2672C24.6742 29.8245 27.2163 28.3805 29.7612 26.9407C30.3845 26.5877 30.6828 26.0639 30.6814 25.3468C30.6772 22.4545 30.6814 19.5609 30.6786 16.6686C30.6786 16.5552 30.7332 16.3941 30.6366 16.3367C30.5245 16.2694 30.4125 16.4067 30.3102 16.4655C27.5622 18.0538 24.8171 19.6463 22.0677 21.2304C21.894 21.3312 21.8352 21.4433 21.8366 21.6394C21.8436 23.2193 21.8408 24.7977 21.8408 26.3776ZM20.5928 26.393C20.5928 24.83 20.5872 23.2669 20.5984 21.7038C20.5998 21.4629 20.5298 21.3242 20.3169 21.2038C19.1614 20.5483 18.0143 19.8774 16.8644 19.2121C15.2411 18.2723 13.6178 17.3325 11.9945 16.3941C11.783 16.2722 11.762 16.2862 11.7536 16.5215C11.7536 16.5524 11.7536 16.5846 11.7536 16.6154C11.7536 19.5539 11.7536 22.4937 11.7536 25.4322C11.7536 26.0905 12.0505 26.5863 12.6219 26.9113C15.1907 28.3693 17.7608 29.8245 20.3309 31.2812C20.583 31.424 20.5928 31.4184 20.5928 31.1313C20.5928 29.5528 20.5928 27.9729 20.5928 26.3944V26.393ZM24.9599 18.1C24.9333 17.9992 24.8451 17.988 24.782 17.9516C21.9934 16.3423 19.2034 14.7372 16.4162 13.1251C16.2747 13.0438 16.1697 13.048 16.0324 13.1279C14.9091 13.775 13.7803 14.415 12.6542 15.0579C12.4343 15.1826 12.4357 15.2022 12.6626 15.3338C13.8125 15.9991 14.9624 16.6644 16.1123 17.3297C17.7552 18.2807 19.3995 19.2317 21.0424 20.1827C21.1405 20.2388 21.2231 20.2836 21.3421 20.215C22.5103 19.5343 23.6812 18.8578 24.8507 18.1813C24.8899 18.1589 24.9249 18.128 24.9613 18.1028L24.9599 18.1ZM17.5227 12.2763C17.5689 12.3701 17.6487 12.3912 17.7146 12.429C18.9261 13.1279 20.139 13.8254 21.3505 14.5243C22.9276 15.4333 24.5061 16.3423 26.0818 17.2541C26.1981 17.3213 26.2905 17.3507 26.4236 17.2737C27.5426 16.6182 28.6673 15.9711 29.7892 15.3212C29.9923 15.2036 29.9909 15.1784 29.7766 15.0565C27.1981 13.5831 24.621 12.1096 22.041 10.639C21.485 10.3225 20.9234 10.3337 20.3687 10.6488C19.9751 10.8729 19.5816 11.0984 19.188 11.3225C18.6334 11.6404 18.0787 11.9584 17.5227 12.2763Z"
        fill="#313131"
      />
      <path
        d="M17.9404 22.0329C17.9404 22.5386 17.439 22.8355 17.0118 22.617C16.7485 22.4825 16.4964 22.3243 16.2386 22.1758C15.691 21.8593 15.1392 21.5497 14.5999 21.222C14.1952 20.9755 14.1657 20.5035 14.5173 20.1981C14.7288 20.0147 14.9557 19.9951 15.254 20.1631C15.9263 20.5441 16.593 20.9335 17.2625 21.32C17.397 21.3985 17.5342 21.4741 17.6645 21.5609C17.8465 21.6828 17.9264 21.8635 17.9404 22.0329Z"
        fill="#DA1730"
      />
    </svg>
  );
};
