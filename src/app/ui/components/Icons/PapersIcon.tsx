import { FC } from "react";
import { IconProps } from "./interfaces";

export const PapersIcon: FC<IconProps> = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="5" fill="white" />
      <g clipPath="url(#clip0_448_2905)">
        <path
          d="M47.6254 56.4352C52.2302 56.4352 56.8329 56.4269 61.4377 56.4457C61.9708 56.4457 61.92 56.1591 61.92 55.8201C61.9179 45.9786 61.92 36.137 61.92 26.2954C61.92 26.1092 61.9137 25.9209 61.9263 25.7347C61.9581 25.2723 62.2732 24.9878 62.7301 24.9983C63.1637 25.0066 63.4599 25.2849 63.4958 25.7263C63.5064 25.8498 63.5022 25.9753 63.5022 26.1008C63.5022 36.3629 63.5022 46.6271 63.5022 56.8892C63.5022 56.998 63.5064 57.1089 63.498 57.2177C63.4683 57.6926 63.1997 57.9646 62.7259 57.996C62.5842 58.0065 62.4425 58.0002 62.3007 58.0002C47.4308 58.0002 32.5609 58.0002 17.6909 58.0002C17.5323 58.0002 17.3736 58.0106 17.2192 57.9918C16.8047 57.9437 16.5656 57.7073 16.5149 57.2972C16.4958 57.1424 16.5064 56.9855 16.5064 56.8307C16.5064 46.5999 16.5064 36.3671 16.5064 26.1364C16.5064 25.9795 16.4979 25.8226 16.517 25.6698C16.5635 25.264 16.8723 25.0024 17.2912 25.0003C17.71 24.9983 18.0272 25.2535 18.0738 25.6573C18.0949 25.8414 18.0865 26.0318 18.0865 26.218C18.0865 36.0596 18.0865 45.9011 18.0865 55.7427C18.0865 56.2072 18.3142 56.4394 18.7697 56.4394C23.311 56.4394 27.8524 56.4394 32.3938 56.4206C30.2468 56.2867 28.0999 56.1758 25.9551 56.0147C24.2756 55.8871 22.594 55.7406 20.961 55.2845C20.703 55.2134 20.4534 55.1172 20.1996 55.0335C19.7406 54.8807 19.529 54.5774 19.529 54.0836C19.5354 43.696 19.5333 33.3084 19.5354 22.9207C19.5354 22.2073 20.0282 21.8391 20.6903 22.0755C22.3127 22.6508 24.0091 22.7931 25.7033 22.9375C29.0137 23.2178 32.343 23.2576 35.6406 23.699C37.0324 23.8852 38.4137 24.1279 39.7039 24.7158C39.9049 24.8079 40.0826 24.8141 40.2898 24.7221C41.834 24.0338 43.4859 23.7911 45.1485 23.6028C47.8729 23.2931 50.6142 23.2053 53.347 23.0191C54.98 22.9082 56.6151 22.7743 58.2142 22.3977C58.5505 22.3182 58.8826 22.2157 59.2104 22.1048C59.974 21.8433 60.4647 22.1675 60.4732 22.9584C60.4817 23.7701 60.4753 24.5798 60.4753 25.3916C60.4753 31.5677 60.469 37.7438 60.4795 43.9199C60.4795 45.0726 60.2574 46.1334 59.5975 47.1104C59.2421 47.6376 59.0772 48.2758 58.7535 48.8323C56.9493 51.9308 54.356 54.2217 51.2657 56.0063C50.868 56.2365 50.4238 56.2574 49.986 56.2867C49.2012 56.3411 48.4144 56.3725 47.6275 56.4122C47.6275 56.4206 47.6275 56.429 47.6296 56.4394L47.6254 56.4352ZM40.7912 41.0724C40.7912 45.7672 40.7912 50.4621 40.7912 55.1569C40.7912 55.6688 41.0316 55.8543 41.5124 55.7134C41.6626 55.6695 41.8149 55.6297 41.9693 55.5921C44.6176 54.9477 47.325 54.8159 50.0304 54.6757C50.6248 54.6443 51.0076 54.4058 51.2741 53.91C51.5428 53.4079 51.7078 52.8744 51.8029 52.3178C52.061 50.8052 52.0843 49.28 52.0822 47.7506C52.0822 46.8531 52.4608 46.5581 53.3365 46.7924C54.3052 47.0518 55.2867 47.1502 56.2851 47.0832C57.6388 46.9933 58.4849 46.3238 58.7556 45.0998C58.8508 44.6751 58.8953 44.24 58.8931 43.8006C58.8889 41.3528 58.8931 38.9028 58.8931 36.455C58.8931 32.4464 58.8889 28.4378 58.8995 24.4292C58.8995 23.9982 58.7937 23.8873 58.3538 23.9961C57.3131 24.2534 56.247 24.3769 55.1809 24.4731C52.0441 24.7577 48.8903 24.8267 45.7577 25.1447C44.2834 25.2953 42.8196 25.4941 41.4067 25.9753C40.954 26.128 40.7806 26.3498 40.7827 26.8477C40.8038 31.5886 40.7954 36.3316 40.7954 41.0724H40.7912ZM39.2111 41.1122C39.2111 36.3253 39.2069 31.5384 39.2196 26.7494C39.2196 26.3624 39.1053 26.1489 38.7309 26.0234C38.2529 25.8623 37.7727 25.7117 37.2799 25.6071C34.0902 24.9376 30.837 24.9041 27.6049 24.6782C25.6251 24.5401 23.6452 24.4124 21.6971 24.0128C21.1155 23.8936 21.1133 23.8936 21.1133 24.4731C21.1133 28.216 21.1133 31.9589 21.1133 35.7018C21.1133 41.5034 21.1197 47.3029 21.1028 53.1045C21.1028 53.5543 21.2466 53.7363 21.6802 53.8284C22.6363 54.0313 23.5987 54.2029 24.5717 54.2761C27.6959 54.5167 30.8222 54.7092 33.9463 54.954C35.5475 55.0795 37.1403 55.295 38.6823 55.7762C39.0348 55.8864 39.2118 55.7546 39.2132 55.3808C39.2132 50.6253 39.2132 45.8677 39.2132 41.1122H39.2111ZM53.3978 52.5584C54.7769 51.504 55.9509 50.4035 56.8266 49.0227C56.89 48.9222 57.0127 48.8134 56.9196 48.69C56.8477 48.5959 56.7124 48.6377 56.6066 48.6565C55.7711 48.8009 54.9398 48.7298 54.1149 48.5875C53.7786 48.5289 53.6474 48.5959 53.6559 48.9453C53.6876 50.1294 53.6136 51.3094 53.3978 52.5584Z"
          fill="black"
        />
        <path
          d="M42.2379 47.5642C42.2379 46.2692 42.2379 44.9762 42.2379 43.6812C42.2379 42.9573 42.4219 42.7334 43.1326 42.6037C44.8227 42.2961 46.5339 42.1518 48.2451 42.0367C50.9631 41.8526 53.6854 41.7522 56.3929 41.4467C57.0973 41.3672 57.4336 41.658 57.4378 42.3568C57.4441 43.1665 57.4463 43.9782 57.4378 44.79C57.4315 45.3277 57.1311 45.6394 56.6467 45.6373C56.1644 45.6352 55.8747 45.3235 55.8641 44.7816C55.8556 44.3444 55.8556 43.9092 55.8641 43.4719C55.8683 43.2083 55.7816 43.1309 55.496 43.1581C53.3639 43.359 51.2254 43.4594 49.0869 43.5933C47.4688 43.6937 45.8528 43.8088 44.2452 44.0431C43.9343 44.0891 43.8095 44.2063 43.8116 44.5201C43.8201 46.4533 43.8222 48.3864 43.8116 50.3196C43.8116 50.646 43.9153 50.7088 44.2304 50.6648C45.8993 50.4284 47.5809 50.3322 49.2604 50.2004C49.5121 50.1815 49.7638 50.1711 50.0155 50.1794C50.4788 50.1941 50.7749 50.4598 50.813 50.8782C50.8553 51.3406 50.6374 51.667 50.1488 51.7381C49.5586 51.8239 48.96 51.8532 48.3635 51.8908C46.6671 51.9975 44.9729 52.1356 43.2976 52.4453C42.6313 52.5687 42.2442 52.2256 42.24 51.5414C42.2337 50.2171 42.24 48.8907 42.24 47.5663L42.2379 47.5642Z"
          fill="#D81730"
        />
        <path
          d="M43.1009 40.4885C42.6207 40.4885 42.3077 40.2291 42.2506 39.8064C42.1914 39.3776 42.3944 39.0449 42.8492 38.9361C43.8603 38.6934 44.8946 38.5637 45.9289 38.4842C49.0827 38.2436 52.2407 38.0344 55.3945 37.8105C55.7562 37.7854 56.1137 37.7289 56.4733 37.6913C57 37.6348 57.3722 37.8963 57.4315 38.3608C57.4949 38.844 57.2221 39.1934 56.6975 39.2667C55.3416 39.4571 53.9752 39.5512 52.6088 39.6454C49.5015 39.8608 46.3795 39.9069 43.304 40.4697C43.2278 40.4843 43.1474 40.4864 43.103 40.4906L43.1009 40.4885Z"
          fill="black"
        />
        <path
          d="M43.0924 29.2577C42.6144 29.2577 42.3035 28.9899 42.2485 28.5673C42.1935 28.1384 42.3987 27.812 42.8555 27.7032C43.8835 27.4605 44.9306 27.3287 45.9818 27.2513C49.1208 27.0149 52.2598 26.8057 55.4009 26.5797C55.7604 26.5546 56.12 26.496 56.4796 26.4584C57.0042 26.404 57.3786 26.6718 57.4315 27.1362C57.4865 27.6133 57.2051 27.9627 56.6848 28.0359C55.3586 28.2221 54.0239 28.3162 52.6913 28.4083C49.5523 28.6238 46.3985 28.6719 43.2934 29.2368C43.2172 29.2514 43.1369 29.2514 43.0924 29.2556V29.2577Z"
          fill="black"
        />
        <path
          d="M43.084 33.0027C42.6271 32.9985 42.3225 32.7474 42.2527 32.3478C42.1766 31.9064 42.3902 31.557 42.864 31.444C43.892 31.2034 44.9411 31.0716 45.9903 30.9921C49.1293 30.7578 52.2682 30.5465 55.4093 30.3205C55.7689 30.2954 56.1285 30.2368 56.4881 30.1992C57.0084 30.1448 57.3828 30.4209 57.4315 30.8875C57.4822 31.3645 57.1988 31.7055 56.6742 31.7809C55.3649 31.9671 54.045 32.0591 52.7272 32.1512C49.5735 32.3688 46.4049 32.4148 43.2807 32.9839C43.2046 32.9985 43.1242 32.9985 43.0819 33.0027H43.084Z"
          fill="black"
        />
        <path
          d="M43.0776 36.7456C42.6229 36.7393 42.3183 36.4841 42.2527 36.0845C42.1829 35.6577 42.3838 35.3062 42.828 35.1995C43.8708 34.9484 44.9348 34.8187 46.0008 34.7371C49.1398 34.5007 52.2788 34.2915 55.4199 34.0655C55.7647 34.0404 56.1073 33.9881 56.4521 33.9505C56.9915 33.8919 57.3616 34.1346 57.4314 34.5928C57.5055 35.0844 57.2157 35.4485 56.6721 35.5259C55.3776 35.7079 54.0746 35.802 52.7716 35.892C49.6009 36.1096 46.4175 36.1577 43.2786 36.7268C43.2024 36.7414 43.122 36.7414 43.0797 36.7435L43.0776 36.7456Z"
          fill="black"
        />
        <path
          d="M37.7621 34.1116C37.7621 35.9045 37.7642 37.6996 37.7621 39.4926C37.7621 40.2856 37.3793 40.591 36.586 40.4446C34.5999 40.0784 32.5862 39.9654 30.5746 39.8315C28.1865 39.6725 25.7921 39.5951 23.4167 39.2771C22.8012 39.1955 22.5622 38.9424 22.5622 38.3189C22.558 34.6681 22.558 31.0193 22.5622 27.3685C22.5622 26.6948 22.9091 26.3914 23.5733 26.4647C25.8746 26.7178 28.1887 26.8329 30.4985 26.9772C32.6031 27.1091 34.712 27.2304 36.7933 27.6133C37.5865 27.7597 37.7642 27.9627 37.7663 28.7723C37.7663 30.5507 37.7663 32.329 37.7663 34.1074L37.7621 34.1116ZM36.182 33.9505C36.182 32.5006 36.1778 31.0507 36.1863 29.6008C36.1863 29.2933 36.1249 29.1154 35.7632 29.0673C33.9991 28.8309 32.2266 28.7033 30.4498 28.5945C28.4848 28.4731 26.5176 28.3957 24.5611 28.1782C24.2438 28.1426 24.1338 28.2137 24.1338 28.5317C24.1401 31.4796 24.1401 34.4254 24.1338 37.3732C24.1338 37.6745 24.2713 37.7917 24.5547 37.8126C25.3077 37.8712 26.0608 37.9507 26.8138 37.9967C29.7983 38.1787 32.7914 38.2917 35.759 38.6829C36.1186 38.7311 36.1905 38.6244 36.1863 38.3022C36.1736 36.8523 36.1799 35.4024 36.1799 33.9525L36.182 33.9505Z"
          fill="#D81730"
        />
        <path
          d="M23.3427 42.1622C26.9999 42.5953 30.5979 42.633 34.1684 42.9824C35.1075 43.0744 36.0403 43.2251 36.971 43.3799C37.521 43.4719 37.7494 43.7335 37.7557 44.1603C37.7621 44.7189 37.3475 45.0662 36.7383 44.9595C35.7928 44.7942 34.8431 44.6498 33.8849 44.5808C32.3154 44.4657 30.7459 44.336 29.1765 44.2356C27.2283 44.1122 25.2781 44.0159 23.3427 43.7607C22.7949 43.6895 22.5241 43.3736 22.5643 42.8903C22.6024 42.4259 22.9493 42.1371 23.3427 42.1602V42.1622Z"
          fill="black"
        />
        <path
          d="M36.9879 48.7233C36.2243 48.6166 35.5094 48.514 34.7902 48.4199C33.4153 48.2421 32.0341 48.1605 30.6508 48.0705C28.2331 47.9094 25.809 47.8278 23.4019 47.5119C22.7949 47.4324 22.5051 47.1123 22.5685 46.5997C22.6299 46.0976 22.9895 45.8695 23.6113 45.9386C25.8662 46.1896 28.1294 46.3026 30.3927 46.4386C32.5439 46.5683 34.6972 46.7043 36.8251 47.0872C37.4829 47.2064 37.7473 47.4324 37.7579 47.8906C37.7706 48.3781 37.4342 48.7212 36.9879 48.7212V48.7233Z"
          fill="black"
        />
        <path
          d="M36.9816 52.4683C36.2116 52.3616 35.4819 52.234 34.7479 52.1628C33.4005 52.031 32.0531 51.9139 30.7036 51.8197C28.2711 51.6524 25.8302 51.5728 23.4083 51.2569C22.7991 51.1774 22.5093 50.8615 22.5685 50.3489C22.6278 49.8447 22.9895 49.6146 23.6071 49.6836C25.8598 49.9347 28.1252 50.0477 30.3885 50.1857C32.5396 50.3175 34.6929 50.4514 36.8208 50.8343C37.4998 50.9557 37.7684 51.1983 37.7579 51.6816C37.7473 52.1503 37.4215 52.4683 36.9837 52.4704L36.9816 52.4683Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_448_2905">
          <rect
            width="47"
            height="36"
            fill="white"
            transform="translate(16.5 22)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
