import { FC } from "react";

interface AgileLogoProps {
  className?: string;
  id?: string;
}

export const AgileLogo: FC<AgileLogoProps> = ({ className, id }) => {
  return (
    <svg
      width="116"
      height="48"
      viewBox="0 0 116 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id={id}
    >
      <title>Agile</title>
      <rect
        x="0.253906"
        y="0.331055"
        width="115.117"
        height="47.3379"
        rx="5.37931"
        fill="#313131"
      />
      <g clipPath="url(#clip0_516_2570)">
        <path
          d="M22.8131 36.9104C19.1653 36.9104 15.5167 36.9104 11.8688 36.9104C11.2228 36.9104 10.9813 36.6956 11.0147 36.0706C11.2174 32.354 12.997 29.6329 16.3553 27.9456C17.6465 27.2967 19.0426 27.0329 20.4915 27.0383C22.0731 27.0437 23.6548 27.0375 25.2357 27.0398C29.8906 27.0475 33.717 30.2081 34.547 34.7353C34.6317 35.197 34.6798 35.6641 34.6798 36.135C34.6798 36.6688 34.4414 36.9096 33.9018 36.9096C30.205 36.9104 26.5083 36.9096 22.8123 36.9096L22.8131 36.9104Z"
          fill="white"
        />
        <path
          d="M22.8363 24.6524C19.1489 24.6363 15.9731 21.7472 15.9824 17.8526C15.9925 13.8477 19.3383 11.0759 22.8705 11.0897C26.4228 11.1035 29.7103 13.9006 29.7088 17.8718C29.7072 21.7748 26.5206 24.6462 22.8355 24.6524H22.8363Z"
          fill="white"
        />
      </g>
      <path
        d="M44.499 25.7192C44.499 21.8784 47.0972 19.3479 50.3732 19.3479C52.4743 19.3479 53.9203 20.342 54.6884 21.3587V19.5513H57.2866V32.0001H54.6884V30.1474C53.8977 31.2093 52.4065 32.2034 50.328 32.2034C47.0972 32.2034 44.499 29.56 44.499 25.7192ZM54.6884 25.7644C54.6884 23.0984 52.8584 21.5846 50.9154 21.5846C48.995 21.5846 47.1423 23.0306 47.1423 25.7192C47.1423 28.4078 48.995 29.9667 50.9154 29.9667C52.8584 29.9667 54.6884 28.4529 54.6884 25.7644ZM67.8316 16.0945C71.1076 16.0945 73.9318 17.7438 75.1292 20.8165H72.0339C71.198 19.235 69.7068 18.4442 67.8316 18.4442C64.7138 18.4442 62.4545 20.6583 62.4545 24.1151C62.4545 27.5718 64.7138 29.8085 67.8316 29.8085C70.6783 29.8085 72.4632 28.0915 72.8473 25.4481H66.9505V23.3921H75.6036V25.4029C75.1292 29.0404 72.0565 32.1356 67.8316 32.1356C63.4034 32.1356 59.8111 28.837 59.8111 24.1151C59.8111 19.4157 63.4034 16.0945 67.8316 16.0945ZM78.1439 32.0001V19.5513H80.7196V32.0001H78.1439ZM79.4543 17.902C78.528 17.902 77.8051 17.179 77.8051 16.2527C77.8051 15.3264 78.528 14.6034 79.4543 14.6034C80.3581 14.6034 81.0811 15.3264 81.0811 16.2527C81.0811 17.179 80.3581 17.902 79.4543 17.902ZM84.1011 16.2979H86.6767V29.9215H91.9861V32.0001H84.1011V16.2979ZM99.3816 21.5169C97.642 21.5169 96.2412 22.6917 95.9701 24.6573H102.861C102.816 22.7369 101.302 21.5169 99.3816 21.5169ZM105.211 28.2948C104.51 30.4637 102.545 32.2034 99.4946 32.2034C95.9249 32.2034 93.2815 29.673 93.2815 25.7644C93.2815 21.8558 95.8119 19.3479 99.4946 19.3479C103.042 19.3479 105.55 21.8106 105.55 25.4707C105.55 25.8999 105.527 26.3066 105.459 26.7359H95.9475C96.1282 28.7918 97.5968 30.0345 99.4946 30.0345C101.076 30.0345 101.957 29.2663 102.432 28.2948H105.211Z"
        fill="white"
      />
      <defs>
        <clipPath id="clip0_516_2570">
          <rect
            width="23.669"
            height="25.8207"
            fill="white"
            transform="translate(11.0127 11.0897)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
