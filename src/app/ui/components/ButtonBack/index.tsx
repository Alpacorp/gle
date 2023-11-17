import { FC } from "react";
import { ArrowCta } from "@icons/index";

interface ButtonBackProps {
  lang: string;
  text: string;
  target?: string;
}

export const ButtonBack: FC<ButtonBackProps> = ({ lang, text, target }) => {
  return (
    <a
      href={lang === "es" ? "/es" : "/en"}
      target={target}
      className="flex border-2 bg-white border-secondary-gray rounded-lg px-10 py-2 my-5 text-main-red hover:bg-light-gray-second hover:text-black transition duration-300 ease-in-out"
    >
      <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
      {text}
    </a>
  );
};
