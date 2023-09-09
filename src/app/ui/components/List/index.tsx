"use client";

import {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUp } from "../Icons/ArrowUp";
import { ListProps } from "./interfaces/List";
import { Context } from "@/app/context/Context";
import { iconsServices } from "../../../(pages)/(inicio)/sections/Services/IconsServices";

export const List: FC<ListProps> = ({
  itemKey,
  text,
  link,
  submenu,
  isMobile,
}) => {
  const submenuContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { setShowMenu } = useContext(Context);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!submenuContainerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );

  const handleClickMenuMobile = () => {
    if (link === "/servicios") {
      setShowMenu(true);
      setIsOpen(true);
    } else {
      setTimeout(() => {
        setShowMenu(false);
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <li
      key={itemKey}
      className={`${
        isMobile
          ? "flex-col"
          : "mx-1 w-full flex justify-evenly border-b-2 border-main-red border-opacity-0 cursor-pointer active font-medium hover:border-opacity-100 hover:text-main-red duration-200"
      } ${
        isMobile && pathname === link
          ? "border-l-2 border-main-red border-opacity-100 bg-white"
          : pathname === link &&
            "border-opacity-100 text-main-red font-medium hover:border-opacity-100 bg-main-red bg-opacity-5 hover:bg-opacity-10"
      }`}
    >
      <div className="flex items-center">
        <Link
          className={`flex items-center ${
            isMobile
              ? "justify-start text-[25px] leading-5 font-normal p-2 max-[800px]:w-full"
              : "justify-center h-[75px] w-[116px] max-[800px]:w-[90px]"
          }`}
          href={link}
          onClick={isMobile ? handleClickMenuMobile : () => {}}
        >
          {text}
        </Link>
        {!isOpen && !submenu?.length ? (
          ""
        ) : (
          <button onClick={toggleMenu}>
            <ArrowUp
              className={
                isOpen
                  ? "rotate-180 transition-all duration-300"
                  : "transition-all duration-300"
              }
              height={isMobile ? "16" : "75"}
            />
          </button>
        )}
      </div>
      {isOpen && submenu?.length && (
        <div className={`${isMobile ? "" : "relative"}`}>
          <div
            className={`animate-slide-top w-[218px] top-16 -right-[46px] px-4 py-6 ${
              isMobile ? "mt-0" : "absolute mt-2 rounded-lg bg-white shadow"
            }`}
            ref={submenuContainerRef}
            id="submenu"
          >
            {submenu.map((item: any) => (
              <Link
                key={item.idSub}
                href={item.linkSub}
                className="leading-[22px] text-black font-normal hover:text-main-red duration-200 text-center"
                onClick={() =>
                  isMobile
                    ? setTimeout(() => {
                        setShowMenu(false);
                      }, 500)
                    : setTimeout(() => {
                        setIsOpen(false);
                      }, 500)
                }
              >
                <div className="flex items-center my-4">
                  <div>
                    {
                      iconsServices.filter(
                        (icon: any) => icon.iconId === item.idSub
                      )[0].iconComponent
                    }
                  </div>
                  <div className="text-left ml-[10px]">{item.textSub}</div>
                </div>
                {item.idSub === submenu.length ? (
                  ""
                ) : (
                  <hr className="border-gray-300 border-[1px]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};
