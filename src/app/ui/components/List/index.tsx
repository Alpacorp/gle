"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ListProps {
  key: number;
  text: string;
  link: string;
}

export const List: FC<ListProps> = ({ key, text, link }) => {
  const pathname = usePathname();

  return (
    <li
      key={key}
      className={`mx-1 w-full flex justify-evenly border-b-2 border-main-red border-opacity-0 cursor-pointer active font-normal hover:border-opacity-100 hover:text-main-red duration-200 ${
        pathname === link &&
        "border-opacity-100 text-main-red font-medium hover:border-opacity-100 bg-main-red bg-opacity-5 hover:bg-opacity-10"
      }`}
    >
      <Link
        className="flex items-center justify-center h-[46px] w-[116px] max-[800px]:w-[90px]"
        href={link}
      >
        {text}
      </Link>
    </li>
  );
};
