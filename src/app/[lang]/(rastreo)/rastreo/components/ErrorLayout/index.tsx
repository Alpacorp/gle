import { FC } from "react";

import { HeroPages } from "@ui/components";
import StickyTracking from "@ui/components/StickyTracking";

import { LangInterface } from "@constans/interfaces/langInterface";

export const ErrorLayout: FC<LangInterface> = ({ lang }) => {
  return (
    <>
      <HeroPages
        pageTitle={
          lang === "es" ? "Resultados del rastreo" : "Tracking results"
        }
        color="white"
        className="leading-none"
      />
      <p className="text-center">
        {lang === "es"
          ? "Ocurrió un error al consultar el rastreo"
          : "An error occurred while querying the tracking"}
      </p>
      <StickyTracking lang={lang} samePage />
    </>
  );
};
