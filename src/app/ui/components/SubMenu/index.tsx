"use client";

import React, { FC, useRef } from "react";
import Link from "next/link";

interface SubMenuProps {
  submenu: {
    idSub: number;
    linkSub: string;
    textSub: string;
    typeSub: string;
    key: number;
  }[];
  lang: string;
  isMobile: boolean;
  setShowMenu: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
  iconsServices: {
    iconId: number;
    iconComponent: React.ReactNode;
  }[];
}

export const SubMenu: FC<SubMenuProps> = ({
  submenu,
  lang,
  isMobile,
  setShowMenu,
  setIsOpen,
  iconsServices,
}) => {
  const submenuContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${isMobile ? "" : "relative"}`}>
      <div
        className={`animate-slide-top w-[218px] top-16 -right-[46px] px-4 py-6 ${
          isMobile ? "mt-0" : "absolute mt-2 rounded-lg bg-white shadow"
        }`}
        ref={submenuContainerRef}
        id="submenu"
      >
        {submenu.map((item) => (
          <Link
            key={item.idSub}
            href={`/${lang}${item.linkSub}`}
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
            title={
              lang === "es" ? `Ir a ${item.textSub}` : `Go to ${item.textSub}`
            }
          >
            <div className="flex items-center my-4">
              <div>
                {
                  iconsServices.filter((icon) => icon.iconId === item.idSub)[0]
                    .iconComponent
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
  );
};
