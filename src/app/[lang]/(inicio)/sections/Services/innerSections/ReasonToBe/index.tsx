import { FC } from "react";

import { ArrowCta } from "@/src/app/ui/components";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

export const ReasonToBe: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="flex flex-col items-center text-secondary-gray text-center gap-5 font-poppins text-3xl font-semibold m-auto max-w-[244px]">
      <h3 className="max-[1115px]:text-white">
        {lang === "es"
          ? "Conoce nuestra razón de ser"
          : "Discover our main purpose"}
      </h3>
      <ArrowCta className="max-[1115px]:hidden" />
      <ArrowCta
        className="hidden max-[1115px]:block max-[380px]:w-8"
        stroke="white"
      />
    </div>
  );
};
