"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown } from "../ArrowDown";
import { ArrowUp } from "../ArrowUp";

interface SubMenuProps {
  idSub: number;
  linkSub: string;
  textSub: string;
  typeSub: string;
}

interface ListProps {
  key: number;
  text: string;
  link: string;
  submenu?: SubMenuProps[];
  idSub?: number;
  linkSub?: string;
  textSub?: string;
}

export const List: FC<ListProps> = ({ key, text, link, submenu }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        {!isOpen && !submenu?.length ? (
          ""
        ) : isOpen && submenu?.length ? (
          <button onClick={toggleMenu}>
            <ArrowDown />
          </button>
        ) : !isOpen ? (
          <button onClick={toggleMenu}>
            <ArrowUp />
          </button>
        ) : (
          ""
        )}
      </Link>
      {isOpen && submenu?.length && (
        <div className="relative">
          <div className="absolute w-[150px] top-10 right-0 mt-2 bg-white shadow-lg rounded-lg py-2 px-2">
            {submenu.map((item: any) => (
              <Link
                key={item.idSub}
                href={item.linkSub}
                className="block text-gray-800 hover:bg-blue-500 hover:text-white py-2 text-center"
              >
                {item.textSub}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};
