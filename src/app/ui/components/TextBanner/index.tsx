import { FC } from "react";

interface TextBannerProps {
  content: {
    id: number;
    idSubtext?: number;
    textEs: string;
    textEn: string;
    subtextEs: string;
    subtextEn: string;
    url: string;
  };
  lang: string;
  redWords: string[];
  customClass?: string;
  type: "text" | "subtext";
}

export const TextBanner: FC<TextBannerProps> = ({
  content,
  lang,
  redWords,
  customClass,
  type,
}) => {
  const text = content[`text${lang === "es" ? "Es" : "En"}`];
  const subtext = content[`subtext${lang === "es" ? "Es" : "En"}`];

  return (
    <h2
      className={`${customClass}`}
      key={type === "text" ? `${content.id}` : `${content.idSubtext}`}
    >
      {type === "text"
        ? text?.split(" ").map((word: string) => (
            <span
              key={`${content?.id || content?.idSubtext}-${word}`}
              className={redWords.includes(word) ? "text-red-500" : ""}
            >
              {word}{" "}
            </span>
          ))
        : subtext?.split(" ").map((word: string) => (
            <span
              key={`${content?.idSubtext}-${word}`}
              className={redWords.includes(word) ? "text-red-500" : ""}
            >
              {word}{" "}
            </span>
          ))}
    </h2>
  );
};
