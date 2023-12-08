import { FC } from 'react';

interface LoadingProps {
  open: boolean;
  loadingClass?: string;
}

export const Loading: FC<LoadingProps> = ({ open, loadingClass }) => {
  return (
    <>
      {open && (
        <div>
          <div
            className={`w-6 h-6 border-4 border-t-4 border-t-black border-white rounded-[50%] animate-spinner-forward ${loadingClass}`}
          />
        </div>
      )}
    </>
  );
};
