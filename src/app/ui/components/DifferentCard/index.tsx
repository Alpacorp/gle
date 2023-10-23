import { FC } from "react";

interface DifferentCardProps {
  description: string;
  backgroundColor: "secondary-gray" | "main-red" | "white";
}

export const DifferentCard: FC<DifferentCardProps> = ({
  description,
  backgroundColor,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`max-w-[290px] w-full p-3 ${
          backgroundColor === "secondary-gray" && "bg-secondary-gray text-white"
        } ${backgroundColor === "main-red" && "bg-main-red text-white"} ${
          backgroundColor === "white" && "bg-white text-black"
        } rounded-md`}
      >
        <p className="font-poppins">{description}</p>
      </div>
    </div>
  );
};
