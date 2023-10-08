import { FC } from "react";

interface TextInfoProps {
  children: string;
}

export const TextInfo: FC<TextInfoProps> = ({ children }) => {
  return (
    <p className="text-white text-[8px] font-inter font-medium leading-none">
      {children}
    </p>
  );
};
