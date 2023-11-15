import { FC } from "react";
import { OptionPropsInterface } from "@ui/components/Option/interfaces/optionPropsInterface";

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
