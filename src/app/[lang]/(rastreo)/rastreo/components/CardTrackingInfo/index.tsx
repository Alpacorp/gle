import { FC } from "react";

import { LocationTracking } from "@ui/components";

interface CardTrackingInfoProps {
  containerClass?: string;
  containerDetailClass?: string;
  detail: string;
  detailClass?: string;
  icon?: boolean;
  title?: string;
  titleClass?: string;
}

export const CardTrackingInfo: FC<CardTrackingInfoProps> = ({
  containerClass = "",
  containerDetailClass = "",
  detail = "",
  detailClass = "",
  icon = false,
  title,
  titleClass = "",
}) => {
  return (
    <div className={`flex-1 flex-wrap ${containerClass}`}>
      <h3
        className={`font-semibold text-lg max-[480px]:text-base ${titleClass}`}
      >
        {title}
      </h3>
      <div className={`flex items-center gap-3 ${containerDetailClass}`}>
        {icon ? <LocationTracking /> : null}
        <p className={`capitalize max-[480px]:text-sm ${detailClass}`}>
          {detail}
        </p>
      </div>
    </div>
  );
};
