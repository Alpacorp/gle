import { FC } from "react";

interface TextBannerProps {
  image: {
    id: number;
    text: string;
    subtext: string;
    url: string;
  };
  redWords: string[];
  customClass?: string;
  type: "text" | "subtext";
}

export const TextBanner: FC<TextBannerProps> = ({
  image,
  redWords,
  customClass,
  type,
}) => {
  return (
    <h2 className={`${customClass}`}>
      {type === "text"
        ? image.text.split(" ").map((word: string) => (
            <span
              key={`${image.id}-${word}`}
              className={redWords.includes(word) ? "text-red-500" : ""}
            >
              {word}{" "}
            </span>
          ))
        : image.subtext.split(" ").map((word: string) => (
            <span
              key={`${image.id}-${word}`}
              className={redWords.includes(word) ? "text-red-500" : ""}
            >
              {word}{" "}
            </span>
          ))}
    </h2>
  );
};
