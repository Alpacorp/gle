import Link from "next/link";
import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "../Icons";
import { FC } from "react";

interface SocialMediaProps {
  align?: "center" | "start" | "end";
}

export const SocialMedia: FC<SocialMediaProps> = ({ align = "center" }) => {
  return (
    <div className={`flex flex-col items-${align} mt-16 gap-6`}>
      <h3 className="font-semibold">Síguenos:</h3>
      <div className="flex flex-row gap-3">
        <Link href="https://www.facebook.com/GLEColombia" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon />
        </Link>
        <Link href="https://linkedin.com/" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};
