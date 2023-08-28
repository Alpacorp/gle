import { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  family?: "poppins" | "inter";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  size?: string;
  color?:
    | "white"
    | "black"
    | "main-red"
    | "gray"
    | "secondary-red"
    | "secondary-gray";
  className?: string;
  showLine?: boolean;
}

export const Title: FC<TitleProps> = ({
  align,
  children,
  family,
  size,
  weight,
  color,
  className,
  showLine,
}) => {
  return (
    <h2
      className={`font-${family} font-${weight} text-${size} text-${color} text-${align} ${className} relative`}
    >
      {children}
      {showLine && (
        <div className="pt-7 after:bg-red-500 after:h-0.5 after:w-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto" />
      )}
    </h2>
  );
};
