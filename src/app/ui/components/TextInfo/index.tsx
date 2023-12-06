import { FC } from 'react';

interface TextInfoProps {
  children: string;
}

export const TextInfo: FC<TextInfoProps> = ({ children }) => {
  return (
    <p className="text-white text-[0.5rem] my-1 font-inter no-underline font-medium leading-none">
      {children}
    </p>
  );
};
