import { FC } from "react";

interface ValuesTextProps {
  text: string;
  key: number;
  index: number;
}

export const ValuesText: FC<ValuesTextProps> = ({ text, key, index }) => {
  return (
    <h4
      className={`border py-2 px-4 rounded-md font-poppins text-sm
        hover:bg-main-red hover:text-white
      ${index % 2 === 0 ? "border-gray-500" : "border-main-red"}`}
      key={key}
    >
      {text}
    </h4>
  );
};
