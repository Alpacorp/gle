import { FC, ComponentProps } from 'react';

interface InputCustomPropsInterface {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'red' | 'gray';
}

type InputProps = Omit<ComponentProps<'input'>, 'onChange'> &
  InputCustomPropsInterface;

export const Input: FC<InputProps> = ({
  className,
  disabled,
  handleInputChange,
  id,
  name,
  placeholder,
  required,
  type,
  value,
  variant = 'gray',
  ...rest
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={handleInputChange}
      type={type}
      className={
        variant === 'gray'
          ? `border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-second placeholder:text-xs ${className}`
          : `border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray ${className}`
      }
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      {...rest}
    />
  );
};
