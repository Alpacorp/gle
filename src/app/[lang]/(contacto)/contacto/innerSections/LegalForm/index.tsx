import { FC } from "react";
import Link from "next/link";

import { LangInterface } from "@constans/interfaces/langInterface";

export const LegalForm: FC<LangInterface> = ({ lang }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[500px] w-full mx-auto text-sm text-left">
      <p>
        {lang === "es"
          ? "Con el diligenciamiento del formulario autorizas el tratamiento de datos personales de acuerdo con la ley Estatutaria 1581, puedes consultar aquí:"
          : "With the completion of the form you authorize the processing of personal data in accordance with Statutory Law 1581, you can check here:"}{" "}
        <Link
          href={
            lang === "es"
              ? `/${lang}/proteccion-datos-personales`
              : `/${lang}/personal-data-protection`
          }
          className="text-gray-400 hover:underline"
          target="_blank"
        >
          {lang === "es"
            ? "Política de Tratamiento de Datos Personales"
            : "Personal Data Treatment Policy"}
        </Link>
      </p>
      <p>
        {lang === "es"
          ? "Conoce el procedimiento de Compensaciones"
          : "Know the Compensation procedure"}{" "}
        <Link
          href={
            lang === "es" ? `/${lang}/compensaciones` : `/${lang}/compensations`
          }
          className="text-gray-400 hover:underline"
        >
          {lang === "es" ? "aquí" : "here"}
        </Link>
      </p>
    </div>
  );
};
