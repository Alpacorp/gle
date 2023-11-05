import { FC } from "react";

interface LoadingProps {
  open: boolean;
}

export const Loading: FC<LoadingProps> = ({ open }) => {
  return (
    <>
      {open && (
        <div>
          <div className="w-5 h-5 border-4 border-t-4 border-t-black border-white rounded-[50%] animate-spinner-forward" />
        </div>
      )}
    </>
  );
};
