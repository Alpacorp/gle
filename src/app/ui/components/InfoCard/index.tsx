import { FC } from 'react';

interface InfoCardProps {
  description: string;
  backgroundColor: 'secondary-gray' | 'main-red' | 'white';
}

export const InfoCard: FC<InfoCardProps> = ({
  description,
  backgroundColor,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`max-w-[18.125rem] w-full p-3 ${
          backgroundColor === 'secondary-gray' && 'bg-secondary-gray text-white'
        } ${backgroundColor === 'main-red' && 'bg-main-red text-white'} ${
          backgroundColor === 'white' && 'bg-white text-black'
        } rounded-md`}
      >
        <p className="font-poppins">{description}</p>
      </div>
    </div>
  );
};
