import { FC } from "react";
import Link from "next/link";

interface AttachedLinksProps {
  lang?: string;
  showRates?: boolean;
}

export const AttachedLinks: FC<AttachedLinksProps> = ({
  lang,
  showRates = false,
}) => {
  return (
    <div className="flex text-center flex-col gap-2">
      <div className="flex flex-col gap-3">
        {showRates && (
          <Link
            href="/assets/images/ecommerce/tarifas-gle.webp"
            target="_blank"
            className="underline underline-offset-8 hover:text-main-red"
          >
            {lang === "es"
              ? "Ver tárifas mensajería especializada"
              : "See specialized messaging rates"}
          </Link>
        )}
        <Link
          href={
            lang === "es"
              ? `/${lang}/prohibido-transporte`
              : `/${lang}/transportation-prohibited`
          }
          className="underline underline-offset-8 hover:text-main-red"
        >
          {lang === "es"
            ? "Ver envíos de prohibido transporte"
            : "See prohibited transport shipments"}
        </Link>
      </div>
    </div>
  );
};
