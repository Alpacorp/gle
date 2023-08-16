"use client";

import Link from "next/link";
import { GleLogo } from "../GleLogo";
import { Close } from "../Icons/Close";
import { ArrowUp } from "../ArrowUp";
import { useContext, useState } from "react";
import { Context } from "@/app/context/Context";
import { List } from "../List";

import menuOptions from "@app/ui/components/Header/menu.json";

export const MenuMobile = () => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const { setShowMenu, showMenu } = useContext(Context);

  return (
    <>
      {showMenu && (
        <div
          className="fixed bg-black opacity-50 h-screen w-screen top-0 left-0 z-20"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <div
        className={`absolute bg-white h-screen w-3/4 z-30 left-0 top-0 p-4 lg:
    ${
      showMenu
        ? "transform translate-x-0 transition-all duration-300"
        : "transform -translate-x-full transition-all duration-300"
    }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <GleLogo height="31" width="129" />
          </Link>
          <button onClick={() => setShowMenu(false)}>
            <Close />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col items-left justify-center space-y-3 text-black">
            {menuOptions.map(({ id, text, link, type, submenu }) => (
              <List
                key={id}
                itemKey={id}
                text={text}
                link={link}
                isMobile
                submenu={submenu?.map((item) => ({
                  idSub: item.idSub,
                  linkSub: item.linkSub,
                  textSub: item.textSub,
                  typeSub: item.typeSub.toString(),
                  key: item.idSub,
                }))}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
