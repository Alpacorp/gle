"use client";

import { FC, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SubMenu } from "@ui/components/SubMenu";
import { OpenSubMenu } from "@ui/components/OpenSubMenu";
import { iconsServices } from "@/src/app/ui/components/ServicesContainer/IconsServices";

import useList from "@ui/components/List/hooks/useList";

import { ListProps } from "@ui/components/List/interfaces/List";

export const List: FC<ListProps> = ({
  itemKey,
  text,
  link,
  submenu,
  isMobile,
  lang,
}) => {
  const pathname = usePathname();

  const isActiveLink = (
    pathname: string | string[],
    link: string | string[]
  ) => {
    return (
      pathname === link ||
      (pathname.includes("/servicios") && link.includes("/servicios")) ||
      (pathname.includes("/services") && link.includes("/services"))
    );
  };

  const isLinkActive = isActiveLink(pathname, link);

  const {
    handleClickMenuMobile,
    handleOutsideClick,
    isOpen,
    setIsOpen,
    setShowMenu,
    toggleMenu,
  } = useList();

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
        isMobile && isLinkActive
          ? "border-l-2 border-main-red border-opacity-100 bg-white"
          : isLinkActive &&
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
          href={`${link}`}
          title={lang === "es" ? `Ir a ${text}` : `Go to ${text}`}
          onClick={isMobile ? handleClickMenuMobile : () => {}}
        >
          {text}
        </Link>
        {!isOpen && !submenu?.length ? (
          ""
        ) : (
          <OpenSubMenu
            isMobile={!!isMobile}
            isOpen={isOpen}
            text={text}
            lang={lang ?? "es"}
            toggleMenu={toggleMenu as () => void}
          />
        )}
      </div>
      {isOpen && submenu?.length && (
        <SubMenu
          submenu={
            submenu ? submenu.map((sub, index) => ({ ...sub, key: index })) : []
          }
          lang={lang ?? "es"}
          isMobile={!!isMobile}
          setShowMenu={setShowMenu}
          setIsOpen={setIsOpen}
          iconsServices={iconsServices}
        />
      )}
    </li>
  );
};
