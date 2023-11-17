import { FC, ReactNode } from "react";
interface SelectPropsInterface {
  handleInputChange: (e: any) => void;
  subject: string;
  name: string;
  id: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  children: ReactNode;
}

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
      className={`border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-second placeholder:text-xs ${className}`}
      placeholder={placeholder}
      required={required}
    >
      {children}
    </select>
  );
};
