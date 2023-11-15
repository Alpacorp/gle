import { FC } from "react";
import { InputPropsInterface } from "@ui/components/Input/interfaces/inputPropsInterface";

export const Input: FC<InputPropsInterface> = ({
  handleInputChange,
  value,
  id,
  name,
  type,
  required,
  disabled,
  className,
  placeholder,
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={handleInputChange}
      type={type}
      className={`border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs ${className}`}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};
