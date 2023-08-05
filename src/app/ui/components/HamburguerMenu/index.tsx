import { FC } from "react";

export const HamburguerMenu: FC = () => {
  return (
    <label
      htmlFor="hbr"
      className="bg-main-red rounded-lg peer-checked:hamburger z-20 p-6 cursor-pointer hidden max-[768px]:block lg:hidden max-[500px]:p-3"
    >
      <div
        aria-hidden="true"
        className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
      ></div>
      <div
        aria-hidden="true"
        className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
      ></div>
    </label>
  );
};
