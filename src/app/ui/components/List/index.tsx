"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowDown } from "../ArrowDown";
import { ArrowUp } from "../ArrowUp";
import { Car, Box, World, Cart } from "@icons/index";

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

const iconsSubmenu = [
  {
    iconId: 1,
    iconComponent: <Box />,
  },
  {
    iconId: 2,
    iconComponent: <Car />,
  },
  {
    iconId: 3,
    iconComponent: <World />,
  },
  {
    iconId: 4,
    iconComponent: <Cart />,
  },
];

export const List: FC<ListProps> = ({ key, text, link, submenu }) => {
  const activeSubmenuRef = useRef<HTMLButtonElement>(null);
  const submenuContainerRef = useRef<HTMLDivElement>(null);
  console.log("activeSubmenuRef", activeSubmenuRef);
  console.log("submenuContainerRef", submenuContainerRef);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      console.log("event", event);
      if (activeSubmenuRef?.current?.id === "arrowdown" && !isOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

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
          <button onClick={toggleMenu} ref={activeSubmenuRef} id="arrowdown">
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
          <div
            className="absolute w-[218px] top-10 -right-[46px] mt-2 bg-white shadow-lg rounded-lg py-6 px-4"
            ref={submenuContainerRef}
            id="submenu"
          >
            {submenu.map((item: any) => (
              <Link
                key={item.idSub}
                href={item.linkSub}
                className="leading-[22px] text-black font-normal hover:text-main-red duration-200 py-2 text-center"
                onClick={() => setIsOpen(true)}
              >
                <div className="flex items-center">
                  <div>
                    {
                      iconsSubmenu.filter(
                        (icon) => icon.iconId === item.idSub
                      )[0].iconComponent
                    }
                  </div>
                  <div className="text-left ml-[10px]">{item.textSub}</div>
                </div>
                {item.idSub === submenu.length ? (
                  ""
                ) : (
                  <hr className="my-4 border-gray-300 border-[1.5px]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};
