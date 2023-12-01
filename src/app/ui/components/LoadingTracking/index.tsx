import { FC } from 'react';

export const LoadingTracking: FC = () => {
  return (
    <div className="flex justify-center my-10">
      <div
        className={`w-10 h-10 border-4 border-t-4 border-t-black border-main-red rounded-[50%] animate-spinner-forward`}
      />
    </div>
  );
};
