import { FC, ReactNode } from 'react';
interface OptionPropsInterface {
  children: ReactNode;
  className?: string;
  value: string;
  color?: 'black' | 'white';
}

export const Option: FC<OptionPropsInterface> = ({
  children,
  className,
  value,
  color = 'black',
}) => {
  return (
    <option value={value} className={`text-${color} ${className}`}>
      {children}
    </option>
  );
};
