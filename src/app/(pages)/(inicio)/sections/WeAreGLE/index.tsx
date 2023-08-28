import { Title } from "@/app/ui/components/Title";

import { iconsWeAre } from "./IconsWeAre";
import { ArrowGLE } from "@/app/ui/components/Icons/ArrowGLE";

import data from "./data.json";

export const WeAreGLE = () => {
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
    <section className="m-auto max-w-[1300px] w-full">
      <div className="my-14">
        <Title
          color="white"
          align="center"
          family={"poppins"}
          weight="semibold"
          showLine
          className="text-4xl"
        >
          Somos G.L.E.
        </Title>
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          {data.map(({ id, description }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-4"
            >
              {iconsWeAre.filter((icon) => icon.iconId === id)[0].iconComponent}
              <p className="text-white text-center text-base font-poppins max-w-[300px] w-full">
                {description.split(" ").map((word: string) => (
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
      <div className="">
        <ArrowGLE className="absolute left-0 pt-20" />
      </div>
    </section>
  );
};
