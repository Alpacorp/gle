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
  lineColor?: "white" | "black" | "main-red";
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
  lineColor = "white",
}) => {
  return (
    <h2
      className={`font-${family} font-${weight} text-${size} text-${color} ${className} relative
        ${
          (align === "left" && "text-left") ||
          (align === "center" && "text-center") ||
          (align === "right" && "text-right")
        }
      `}
    >
      {children}
      {showLine && (
        <div
          className={`pt-7 after:h-0.5 after:w-10 after:absolute after:bottom-0
          ${
            (align === "left" && "after:left-0") ||
            (align === "center" &&
              "after:left-1/2 after:transform after:-translate-x-1/2") ||
            (align === "right" && "after:right-0")
          }
          ${
            (lineColor === "white" && "after:bg-white") ||
            (lineColor === "black" && "after:bg-black") ||
            (lineColor === "main-red" && "after:bg-main-red")
          }
        `}
        />
      )}
    </h2>
  );
};
