import { FC } from "react";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

export const BottomFooter: FC<LangInterface> = ({ lang }) => {
  return (
    <section className="flex justify-around items-center font-inter flex-wrap gap-3 bg-main-red text-white text-sm pb-6 px-10 max-[400px]:justify-center max-[400px]:pb-20">
      <div className="pt-4">
        <hr className="m-auto border-white w-1/3" />
        <h5 className="pt-4">
          G.L.E. {new Date().getFullYear()} |{" "}
          {lang === "es"
            ? "Todos los derechos reservados"
            : "All rights reserved"}
        </h5>
      </div>
    </section>
  );
};
