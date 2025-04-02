import { ArrowCta } from "@ui/components";
import { FC } from "react";

import { CardTrackingInfo } from "@rastreo/rastreo/components";

interface HeaderTrackingProps {
  dataTracking: { GUIA: string };
  lang: string;
}

export const HeaderTracking: FC<HeaderTrackingProps> = ({ dataTracking, lang }) => {
  return (
    <div className="flex items-center justify-around">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold text-main-red max-[480px]:text-2xl">
          {
            lang === "es"
              ? "Consulta"
              : "Tracking"
          }
        </h1>
        <ArrowCta
          stroke="#D81730"
          height="33"
          width="33"
          className="-rotate-90"
        />
      </div>
      <CardTrackingInfo
        containerClass="text-center"
        detail={dataTracking?.GUIA || ""}
        containerDetailClass="text-xl font-semibold justify-center"
        title={lang === "es" ? "Número de guía:" : "Tracking Number:"}
        titleClass="!font-normal"
      />
    </div>
  );
};
