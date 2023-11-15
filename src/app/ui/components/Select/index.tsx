import { FC } from "react";
import { SelectPropsInterface } from "@ui/components/Select/interfaces/selectPropsInterface";

export const Select: FC<SelectPropsInterface> = ({
  handleInputChange,
  subject,
  name,
  id,
  className,
  placeholder,
  required,
  children,
}) => {
  return (
    <select
      name={name}
      id={id}
      value={subject}
      onChange={handleInputChange}
      className={`border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs ${className}`}
      placeholder={placeholder}
      required={required}
    >
      {children}
    </select>
  );
};
