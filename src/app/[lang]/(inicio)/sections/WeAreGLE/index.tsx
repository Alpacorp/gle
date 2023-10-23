import { FC } from "react";

import { Title } from "@ui/components/index";
import { ArrowGLE } from "@icons/index";
import { iconsWeAre } from "@inicio/sections/WeAreGLE/IconsWeAre";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import data from "@inicio/sections/WeAreGLE/dataWeAre.json";

export const WeAreGLE: FC<LangInterface> = ({ lang }) => {
  const hightWords = [
    "compañía",
    "integradora",
    "10",
    "años",
    "experiencia",
    "modelos",
    "operativos",
    "innovadores",
    "profesionales",
    "compententes.",
  ];

  return (
    <section className="relative">
      <div className="bg-gradient-to-b from-main-gray to-main-gray m-auto py-14 back-clip-path relative w-full h-[600px] max-[620px]:h-[900px] max-[480px]:h-[1100px]">
        <Title
          color="white"
          align="center"
          family={"poppins"}
          weight="semibold"
          showLine
          className="text-4xl"
        >
          {lang === "es" ? "Somos G.L.E." : "We are G.L.E."}
        </Title>
        <div className="flex flex-wrap items-center my-10 justify-evenly gap-4">
          {data.map(({ id, descriptionEs, descriptionEn }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-4"
            >
              {iconsWeAre.filter((icon) => icon.iconId === id)[0].iconComponent}
              <p className="text-white text-center text-base font-poppins max-w-[300px] w-full">
                {lang === "es"
                  ? descriptionEs.split(" ").map((word: string) => (
                      <span
                        key={`word-${id}-${Math.random()}}`}
                        className={hightWords.includes(word) ? "font-bold" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))
                  : descriptionEn.split(" ").map((word: string) => (
                      <span
                        key={`word-${id}-${Math.random()}}`}
                        className={hightWords.includes(word) ? "font-bold" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-20 bottom-0 left-0">
        <ArrowGLE className="h-full w-auto max-[480px]:h-44" />
      </div>
    </section>
  );
};
