import { FC } from "react";

interface InputPropsInterface {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  id: string;
}

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
