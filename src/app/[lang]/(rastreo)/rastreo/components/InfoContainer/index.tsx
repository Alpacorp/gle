import { FC, ReactNode } from "react";

interface InfoContainerProps {
  children: ReactNode;
  showBottomBorder?: boolean;
}

export const InfoContainer: FC<InfoContainerProps> = ({
  children,
  showBottomBorder = true,
}) => {
  return (
    <div
      className={`flex items-start gap-4 flex-wrap justify-between p-2 ${
        showBottomBorder && "border-b border-b-main-gray"
      }`}
    >
      {children}
    </div>
  );
};
