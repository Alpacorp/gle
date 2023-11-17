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
  variant?: "red" | "gray";
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
  variant = "gray",
}) => {
  return (
    <select
      name={name}
      id={id}
      value={subject}
      onChange={handleInputChange}
      className={
        variant === "gray"
          ? `border w-full border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:ring-main-gray focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-second placeholder:text-xs ${className}`
          : `border w-full border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray ${className}`
      }
      placeholder={placeholder}
      required={required}
    >
      {children}
    </select>
  );
};
