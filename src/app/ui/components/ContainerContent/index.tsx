import { FC, ReactNode } from 'react';

interface ContainerContentProps {
  children: ReactNode;
  className?: string;
}

export const ContainerContent: FC<ContainerContentProps> = ({
  children,
  className,
}) => {
  return (
    <section
      className={`max-w-4xl w-full mx-auto px-3 mt-6 max-[500px]:px-5 ${className}`}
    >
      {children}
    </section>
  );
};
