import { FC } from "react";
import Link from "next/link";

import { LangInterface } from "@constans/interfaces/langInterface";

export const CareChannels: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center font-poppins">
      <h3 className="text-lg font-normal text-main-red uppercase mt-2">
        {lang === "es" ? "Página web" : "Website"}
      </h3>
      <Link
        href="https://www.glecolombia.com/"
        target="_blank"
        className="text-base font-medium font-inter border hover:scale-105 duration-100 border-third-gray rounded-md max-w-[300px] w-full"
      >
        www.glecolombia.com
      </Link>
      <h3 className="text-lg font-normal text-main-red uppercase mt-2">
        {lang === "es" ? "Correo electrónico" : "Email"}
      </h3>
      <Link
        href="mailto:contactenos@glecolombia.com"
        className="text-base font-medium font-inter border hover:scale-105 duration-100 border-third-gray rounded-md max-w-[300px] w-full"
      >
        contactenos@glecolombia.com
      </Link>
      <h3 className="text-lg font-normal text-main-red uppercase mt-2">
        {lang === "es" ? "Nuestras Sedes" : "Locations"}
      </h3>
    </div>
  );
};
