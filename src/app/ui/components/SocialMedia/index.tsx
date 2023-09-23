import { FC } from "react";
import Link from "next/link";

import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@ui/components/Icons";

interface SocialMediaProps {
  align: "center" | "start" | "end";
}

export const SocialMedia: FC<SocialMediaProps> = ({ align }) => {
  return (
    <div className={`flex flex-col items-${align} mt-16 gap-6`}>
      <h3 className="font-semibold font-poppins">Síguenos:</h3>
      <div className="flex flex-row gap-4">
        <Link
          href="https://www.facebook.com/GLEColombia"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <YouTubeIcon />
        </Link>
        <Link
          href="https://linkedin.com/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};
