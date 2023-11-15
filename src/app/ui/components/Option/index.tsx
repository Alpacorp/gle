import { FC, ReactNode } from "react";
interface OptionPropsInterface {
  children: ReactNode;
  className?: string;
  value: string;
}

export const Option: FC<OptionPropsInterface> = ({
  children,
  className,
  value,
}) => {
  return (
    <option value={value} className={`text-black ${className}`}>
      {children}
    </option>
  );
};
