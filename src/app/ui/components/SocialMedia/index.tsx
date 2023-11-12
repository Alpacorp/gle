import { FC } from "react";
import Link from "next/link";

import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@ui/components/Icons";

interface SocialMediaProps {
  align: "center" | "start" | "end";
  lang: string;
}

export const SocialMedia: FC<SocialMediaProps> = ({ align, lang }) => {
  return (
    <div className={`flex flex-col items-${align} mt-8 gap-6`}>
      <h3 className="font-semibold font-poppins">
        {lang === "es" ? "Síguenos" : "Follow us"}
      </h3>
      <div className="flex flex-row gap-4">
        <Link
          href="https://www.facebook.com/GLEColombia"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <FacebookIcon title="Facebook" />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <YouTubeIcon title="YouTube" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/gle-colombia/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <LinkedInIcon title="LinkedIn" />
        </Link>
      </div>
    </div>
  );
};
