import { FC } from "react";
import { IconProps } from "./interfaces";

export const ImportExportIcon: FC<IconProps> = ({ className, title }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <rect width="80" height="80" rx="5" fill="white" />
      <g clipPath="url(#clip0_448_2960)">
        <path
          d="M50.2518 50.3374C47.5063 50.3374 44.7589 50.3457 42.0134 50.3292C41.6189 50.3272 41.3472 50.4485 41.0774 50.7448C38.5373 53.5365 35.3973 55.2049 31.6857 55.4415C25.6413 55.8241 20.9274 53.3184 17.9001 47.9552C13.7316 40.5676 16.6844 31.1373 24.17 27.4383C29.8883 24.6138 36.6332 25.8954 41.0171 30.66C41.3331 31.0035 41.6471 31.1434 42.106 31.1414C47.5224 31.127 52.9409 31.1311 58.3573 31.1331C59.887 31.1331 60.7565 32.0198 60.7565 33.5813C60.7565 38.352 60.7565 43.1207 60.7565 47.8914C60.7565 49.4508 59.885 50.3374 58.3553 50.3395C55.6541 50.3395 52.9529 50.3395 50.2518 50.3395V50.3374ZM49.9136 48.8007C52.7034 48.8007 55.4931 48.8027 58.2848 48.8007C58.9833 48.8007 59.251 48.5353 59.251 47.8358C59.255 43.098 59.255 38.3602 59.251 33.6224C59.251 32.9456 58.9813 32.6761 58.315 32.674C56.89 32.6678 55.4649 32.6822 54.0398 32.6637C53.6715 32.6596 53.5407 32.7707 53.5487 33.1575C53.5689 34.3075 53.5487 35.4575 53.5608 36.6074C53.5648 36.9551 53.4662 37.0971 53.1039 37.095C50.9884 37.0806 48.873 37.0806 46.7576 37.095C46.3671 37.0971 46.2785 36.9366 46.2845 36.5766C46.3007 35.4739 46.2705 34.3692 46.3006 33.2644C46.3127 32.8118 46.204 32.6473 45.731 32.6596C44.3825 32.6925 43.0319 32.6699 41.6813 32.672C40.8158 32.672 40.5924 32.9003 40.5924 33.7911C40.5924 38.4219 40.5924 43.0528 40.5924 47.6816C40.5924 48.5723 40.8158 48.8007 41.6813 48.8027C44.4267 48.8027 47.1722 48.8027 49.9176 48.8027L49.9136 48.8007ZM30.462 39.9669C31.7079 39.9669 32.9518 39.9525 34.1977 39.9751C34.6003 39.9813 34.711 39.8394 34.7029 39.4423C34.6687 37.815 34.4956 36.2042 34.2279 34.6016C34.1736 34.2807 34.0548 34.1326 33.7026 34.1347C31.5569 34.1511 29.4113 34.1491 27.2656 34.1347C26.9335 34.1347 26.7786 34.2375 26.7202 34.579C26.4485 36.1981 26.2733 37.8233 26.2431 39.467C26.2371 39.8435 26.3458 39.9813 26.7262 39.9751C27.9721 39.9566 29.216 39.9669 30.462 39.9669ZM30.462 41.5037C29.216 41.5037 27.9721 41.516 26.7262 41.4954C26.3438 41.4893 26.2371 41.6312 26.2452 42.0056C26.2754 43.6494 26.4464 45.2746 26.7242 46.8936C26.7765 47.196 26.8953 47.338 27.2234 47.3359C29.3831 47.3236 31.5449 47.3236 33.7046 47.3359C34.0186 47.3359 34.1695 47.2331 34.2219 46.9142C34.4956 45.2808 34.6768 43.6391 34.7029 41.981C34.709 41.625 34.6003 41.4934 34.242 41.4975C32.982 41.514 31.722 41.5037 30.462 41.5037ZM21.1105 39.9669C22.1592 39.9669 23.2079 39.9587 24.2565 39.971C24.5544 39.9751 24.6873 39.8908 24.6893 39.5596C24.7054 37.8727 24.8946 36.2022 25.1804 34.542C25.2388 34.2108 25.1281 34.1388 24.8382 34.1388C23.1153 34.1449 21.3923 34.1449 19.6673 34.1388C19.4117 34.1388 19.2507 34.2252 19.1279 34.4576C18.2886 36.0417 17.8075 37.7328 17.6223 39.5205C17.5881 39.862 17.7129 39.9813 18.0491 39.9751C19.0675 39.9587 20.086 39.969 21.1065 39.969L21.1105 39.9669ZM21.1548 41.5037C20.1202 41.5037 19.0877 41.514 18.0531 41.4975C17.7149 41.4913 17.5942 41.6148 17.6284 41.9542C17.8116 43.7419 18.2946 45.433 19.134 47.0171C19.2567 47.2495 19.4198 47.3339 19.6734 47.3339C21.3822 47.3257 23.0891 47.3257 24.798 47.3339C25.1301 47.3339 25.2408 47.2598 25.1744 46.8833C24.8906 45.254 24.7054 43.6123 24.6933 41.9563C24.6913 41.5757 24.5444 41.4934 24.2102 41.4975C23.1918 41.514 22.1733 41.5037 21.1528 41.5037H21.1548ZM30.4901 32.6041C31.2832 32.6041 32.0782 32.6041 32.8713 32.6041C33.7891 32.6041 33.7992 32.6 33.5114 31.6968C33.1229 30.4831 32.6559 29.3063 31.8307 28.323C30.9712 27.2985 29.993 27.3005 29.1255 28.3106C29.0953 28.3456 29.0671 28.3806 29.0389 28.4176C28.1392 29.5635 27.6642 30.913 27.2536 32.2955C27.1529 32.6308 27.3683 32.6041 27.5696 32.602C28.5438 32.602 29.516 32.602 30.4901 32.602V32.6041ZM30.5224 48.8645C29.5341 48.8645 28.5458 48.8665 27.5575 48.8645C27.3341 48.8645 27.163 48.8727 27.2576 49.1875C27.638 50.465 28.0768 51.7158 28.8558 52.8082C28.9343 52.9193 29.0188 53.0283 29.1053 53.1332C29.9789 54.1721 30.9732 54.1783 31.8387 53.1332C32.7888 51.9853 33.2658 50.5987 33.6905 49.1895C33.7831 48.883 33.6261 48.8604 33.3966 48.8624C32.4385 48.8686 31.4804 48.8645 30.5224 48.8645ZM39.0868 44.4291C39.0868 43.5877 39.0787 42.7462 39.0908 41.9048C39.0948 41.6106 38.9962 41.4934 38.7003 41.4996C38.0261 41.514 37.3538 41.516 36.6795 41.4996C36.3695 41.4913 36.2628 41.6065 36.2588 41.9233C36.2347 43.5918 36.0575 45.2478 35.7737 46.8916C35.7174 47.2228 35.7798 47.338 36.1139 47.3339C36.9673 47.3215 37.8207 47.3195 38.6742 47.3339C38.9862 47.3401 39.0989 47.229 39.0928 46.908C39.0767 46.0831 39.0868 45.2561 39.0868 44.4291ZM39.0868 37.0786C39.0868 36.2515 39.0767 35.4266 39.0928 34.5996C39.0989 34.2766 39.0204 34.1244 38.6681 34.1326C37.8147 34.1532 36.9613 34.1449 36.1079 34.1367C35.82 34.1347 35.7093 34.2087 35.7657 34.5399C36.0535 36.1981 36.2387 37.8665 36.2588 39.5514C36.2628 39.8764 36.3836 39.9751 36.6875 39.969C37.3457 39.9525 38.0059 39.9484 38.6641 39.969C39.0083 39.9793 39.1009 39.8373 39.0948 39.5082C39.0787 38.6976 39.0888 37.8871 39.0888 37.0765L39.0868 37.0786ZM20.3316 32.6041C22.0082 32.6041 23.5641 32.5958 25.12 32.6102C25.4682 32.6144 25.6131 32.493 25.7037 32.1453C26.0539 30.8122 26.5068 29.5141 27.2113 28.325C27.2636 28.2386 27.3784 28.1419 27.314 28.0411C27.2314 27.9074 27.0986 28.002 26.9899 28.0329C25.4743 28.4711 24.0834 29.1644 22.8174 30.1251C21.9116 30.8122 21.1065 31.6022 20.3296 32.602L20.3316 32.6041ZM20.3376 48.8665C21.0119 49.7491 21.7063 50.4403 22.4671 51.0637C23.8177 52.1704 25.3334 52.9481 26.9959 53.4356C27.0946 53.4644 27.2012 53.5365 27.2938 53.4562C27.3884 53.376 27.2979 53.2875 27.2556 53.2155C26.5048 51.9627 26.0399 50.5925 25.6655 49.1833C25.6131 48.9879 25.5226 48.8624 25.2951 48.8624C23.6809 48.8665 22.0666 48.8645 20.3376 48.8645V48.8665ZM33.6281 28.0205C33.6261 28.0535 33.612 28.0905 33.6241 28.1111C34.395 29.4215 34.9102 30.8369 35.2866 32.3099C35.3551 32.5814 35.5382 32.6082 35.7677 32.6061C36.6372 32.6 37.5068 32.5732 38.3743 32.6144C38.9177 32.6411 39.3042 32.5403 39.5719 31.9931C39.7067 31.7195 39.7752 31.5857 39.5377 31.345C37.9938 29.7815 36.1783 28.6953 34.0991 28.0637C33.9501 28.0185 33.7972 27.9095 33.6281 28.0185V28.0205ZM37.2894 48.8645C36.764 48.8645 36.2407 48.8748 35.7154 48.8604C35.4597 48.8542 35.337 48.9632 35.2725 49.208C34.9042 50.6008 34.4433 51.9586 33.7006 53.197C33.6563 53.2711 33.5737 53.3554 33.6382 53.4439C33.6985 53.5282 33.8052 53.4933 33.8898 53.4645C34.3024 53.3266 34.721 53.2032 35.1256 53.0427C36.7982 52.3865 38.2696 51.4072 39.5417 50.1153C39.749 49.9034 39.7349 49.7758 39.596 49.5043C39.3082 48.9365 38.9016 48.7842 38.3239 48.8562C37.9838 48.8994 37.6356 48.8645 37.2914 48.8645H37.2894ZM49.9217 35.548C50.5054 35.548 51.0891 35.5418 51.6728 35.5521C51.9325 35.5562 52.0572 35.4719 52.0532 35.1859C52.0411 34.4679 52.0411 33.7479 52.0532 33.0299C52.0572 32.7398 51.9264 32.6658 51.6688 32.6658C50.5014 32.672 49.3359 32.6761 48.1685 32.6658C47.8646 32.6637 47.7821 32.7954 47.7881 33.0793C47.8002 33.7664 47.8042 34.4556 47.7881 35.1427C47.7801 35.478 47.923 35.5624 48.2188 35.5541C48.7865 35.5397 49.3561 35.55 49.9237 35.55L49.9217 35.548Z"
          fill="black"
        />
        <path
          d="M41.6369 23.7702C44.9238 23.7702 48.2087 23.7764 51.4956 23.762C51.9324 23.762 52.19 23.8361 52.1175 24.3566C52.0753 24.6631 52.2222 24.6919 52.4638 24.5664C53.7902 23.8834 55.1206 23.2086 56.4471 22.5277C56.5356 22.4824 56.6685 22.4577 56.6685 22.3281C56.6685 22.1985 56.5356 22.1759 56.4471 22.1306C55.1327 21.4559 53.8163 20.7893 52.504 20.1104C52.2202 19.9623 52.0692 19.9911 52.1155 20.347C52.1779 20.8222 51.9424 20.8963 51.5399 20.8942C46.8581 20.8839 42.1764 20.8819 37.4966 20.8963C37.0377 20.8963 36.8988 20.7605 36.9169 20.2976C36.9572 19.2094 36.8042 19.3534 37.867 19.3534C41.9187 19.3472 45.9685 19.3513 50.0202 19.3513C50.4134 19.3513 50.61 19.1483 50.61 18.7424C50.61 18.4194 50.616 18.0984 50.61 17.7755C50.6059 17.5224 50.6985 17.4298 50.936 17.5471C51.0166 17.5862 51.0971 17.6273 51.1776 17.6685C54.0357 19.1291 56.8939 20.5877 59.7521 22.0504C59.8809 22.1162 60.0882 22.145 60.1023 22.3055C60.1204 22.5153 59.8869 22.5318 59.7501 22.6017C56.8818 24.0747 54.0096 25.5415 51.1373 27.0063C50.6442 27.2573 50.614 27.2387 50.61 26.6936C50.608 26.3418 50.6039 25.9879 50.61 25.6362C50.614 25.4037 50.5174 25.2947 50.2879 25.3049C50.1531 25.3111 50.0182 25.3049 49.8833 25.3049C43.8812 25.3049 37.879 25.3049 31.8789 25.3049C31.1644 25.3049 31.1603 25.3049 31.1644 24.587C31.1684 23.688 31.0859 23.7702 31.9614 23.7702C35.1879 23.7682 38.4124 23.7702 41.6389 23.7702H41.6369Z"
          fill="#D81730"
        />
        <path
          d="M50.282 56.2275C46.9971 56.2275 43.7102 56.2213 40.4254 56.2357C39.9946 56.2357 39.7249 56.172 39.7994 55.6453C39.8437 55.3429 39.7008 55.3059 39.4552 55.4334C38.1167 56.1226 36.7742 56.8076 35.4316 57.4927C35.184 57.6182 35.182 57.7231 35.4316 57.8486C36.7742 58.5316 38.1167 59.2167 39.4552 59.9079C39.6987 60.0334 39.8437 60.0005 39.7994 59.696C39.7249 59.1714 39.9926 59.1035 40.4234 59.1035C45.0749 59.1159 49.7245 59.1097 54.376 59.1118C54.99 59.1118 54.996 59.1138 54.992 59.7474C54.9859 60.7699 55.1007 60.6465 54.0963 60.6465C50.0304 60.6506 45.9646 60.6465 41.8987 60.6465C41.5056 60.6465 41.3083 60.8487 41.307 61.2533C41.307 61.529 41.309 61.8047 41.307 62.0803C41.3009 62.5679 41.2667 62.5864 40.8219 62.3663C40.7957 62.354 40.7696 62.3375 40.7414 62.3231C37.8832 60.8625 35.025 59.4039 32.1689 57.9412C32.0401 57.8754 31.8327 57.8466 31.8187 57.6881C31.8005 57.4783 32.034 57.4639 32.1709 57.394C35.0391 55.923 37.9114 54.4562 40.7816 52.9894C41.2768 52.7364 41.3029 52.7549 41.307 53.3042C41.309 53.656 41.313 54.0098 41.307 54.3616C41.3029 54.5961 41.4036 54.699 41.631 54.6908C41.7659 54.6846 41.9007 54.6908 42.0356 54.6908C48.0357 54.6908 54.0379 54.6908 60.038 54.6908C60.7526 54.6908 60.7566 54.6908 60.7526 55.4087C60.7486 56.3098 60.8311 56.2255 59.9555 56.2255C56.729 56.2275 53.5045 56.2255 50.278 56.2255L50.282 56.2275Z"
          fill="#D81730"
        />
        <path
          d="M34.7795 20.8901C34.0428 20.8901 34.0408 20.8901 34.0428 20.1063C34.0468 19.267 33.9864 19.3596 34.8539 19.3534C35.5463 19.3493 35.5463 19.3534 35.5463 20.1824C35.5463 20.6542 35.2907 20.8901 34.7795 20.8901Z"
          fill="black"
        />
        <path
          d="M31.1603 20.0777C31.1603 19.5949 31.4253 19.3535 31.9553 19.3535C32.4277 19.3535 32.6638 19.6244 32.6638 20.1661C32.6638 20.6489 32.3988 20.8903 31.8688 20.8903C31.3964 20.8903 31.1603 20.6194 31.1603 20.0777Z"
          fill="black"
        />
        <path
          d="M57.8761 59.8976C57.8761 60.6444 57.8761 60.6464 57.1032 60.6423C56.288 60.6382 56.3786 60.702 56.3746 59.8071C56.3705 59.1056 56.3746 59.1056 57.1918 59.1076C57.6493 59.1076 57.8774 59.371 57.8761 59.8976Z"
          fill="black"
        />
        <path
          d="M59.9836 60.6442C59.253 60.6442 59.2509 60.6442 59.255 59.8543C59.259 59.0211 59.1966 59.1137 60.0722 59.1095C60.7585 59.1054 60.7585 59.1095 60.7565 59.9448C60.7565 60.4125 60.4989 60.6456 59.9836 60.6442Z"
          fill="black"
        />
        <path
          d="M54.2411 42.9108C55.2897 42.9108 56.3404 42.9232 57.3891 42.9046C57.7554 42.8985 57.8923 43.0178 57.8822 43.4025C57.852 44.6266 58.011 44.4393 56.898 44.4455C54.9798 44.4558 53.0616 44.4393 51.1434 44.4558C50.7368 44.4599 50.5899 44.3385 50.6039 43.9106C50.6402 42.7483 50.4771 42.9252 51.5902 42.9129C52.4738 42.9026 53.3595 42.9129 54.2431 42.9129L54.2411 42.9108Z"
          fill="black"
        />
        <path
          d="M52.1137 46.6613C52.1137 47.1496 51.8513 47.3937 51.3267 47.3937C50.849 47.3937 50.6101 47.1256 50.6101 46.5893C50.6101 46.1011 50.8879 45.8569 51.4434 45.8569C51.8916 45.8569 52.115 46.1251 52.1137 46.6613Z"
          fill="black"
        />
        <path
          d="M54.9938 46.6468C54.9938 47.3935 54.9938 47.3956 54.2208 47.3915C53.4057 47.3874 53.4962 47.4511 53.4922 46.5562C53.4882 45.8547 53.4922 45.8547 54.3094 45.8568C54.767 45.8568 54.9951 46.1201 54.9938 46.6468Z"
          fill="black"
        />
        <path
          d="M57.0913 47.3937C56.6122 47.3937 56.3727 47.1263 56.3727 46.5914C56.3727 46.1017 56.6344 45.8569 57.1577 45.8569C57.6381 45.8569 57.8776 46.1395 57.8763 46.7045C57.8763 47.164 57.6146 47.3937 57.0913 47.3937Z"
          fill="black"
        />
        <path
          d="M33.3844 37.7535C33.3764 38.6258 33.4589 38.5538 32.6236 38.5579C31.8809 38.5599 31.8809 38.5579 31.8809 37.7802C31.8809 37.2742 32.1345 37.0211 32.6417 37.0211C33.1489 37.0211 33.3965 37.2652 33.3844 37.7535Z"
          fill="black"
        />
        <path
          d="M30.5043 37.8152C30.5043 38.5599 30.5043 38.562 29.7293 38.5579C28.9162 38.5537 29.0067 38.6175 29.0027 37.7206C28.9987 37.0211 29.0027 37.0211 29.8219 37.0232C30.2782 37.0232 30.5056 37.2872 30.5043 37.8152Z"
          fill="black"
        />
        <path
          d="M31.9455 43.6948C31.9455 44.4478 31.9455 44.4498 31.1786 44.4478C30.3574 44.4437 30.448 44.5074 30.4419 43.6187C30.4379 42.911 30.4419 42.911 31.2531 42.911C31.7147 42.911 31.9455 43.1723 31.9455 43.6948Z"
          fill="black"
        />
        <path
          d="M27.5594 43.6352C27.5594 43.1524 27.8244 42.911 28.3545 42.911C28.8268 42.911 29.063 43.1819 29.063 43.7236C29.063 44.2064 28.798 44.4478 28.2679 44.4478C27.7956 44.4478 27.5594 44.1769 27.5594 43.6352Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_448_2960">
          <rect
            width="48"
            height="45"
            fill="white"
            transform="translate(16 17.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
