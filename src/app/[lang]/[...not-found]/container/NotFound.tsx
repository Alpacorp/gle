import { FC } from "react";

import { Alert, ButtonBack } from "@ui/components";

import StickyTracking from "@/src/app/ui/components/StickyTracking";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

export const NotFound: FC<LangInterface> = ({ lang }) => {
  return (
    <section>
      <div className="h-[100svh] flex flex-col gap-8 justify-center items-center">
        <Alert />
        <h1 className="text-9xl font-bold font-poppins text-light-gray-third">
          404
        </h1>
        <h2 className="text-3xl font-semibold font-poppins">
          {lang === "es"
            ? "Lo sentimos, página no encontrada"
            : "Sorry, page not found"}
        </h2>
        <ButtonBack
          lang={lang}
          text={lang === "es" ? "Volver al inicio" : "Back to home"}
        />
      </div>
      <StickyTracking lang={lang} />
    </section>
  );
};
