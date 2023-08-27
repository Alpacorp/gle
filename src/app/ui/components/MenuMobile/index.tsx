"use client";

import { useContext } from "react";
import Link from "next/link";
import { Context } from "@/app/context/Context";

import menuOptions from "@app/ui/components/Header/menu.json";
import { SocialMedia } from "../SocialMedia";
import { Close } from "../Icons/Close";
import { GleLogo } from "../GleLogo";
import { List } from "../List";

export const MenuMobile = () => {
  const { setShowMenu, showMenu } = useContext(Context);

  return (
    <>
      {showMenu && (
        <div
          className="fixed bg-black opacity-50 h-screen w-screen top-0 left-0 z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <div
        className={`absolute bg-white h-[100dvh] overflow-auto w-3/4 z-50 left-0 top-0 p-4 ${
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
        <SocialMedia align="start" />
      </div>
    </>
  );
};
