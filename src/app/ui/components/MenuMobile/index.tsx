"use client";

import Link from "next/link";
import { useContext } from "react";

import menuOptions from "@app/ui/components/Header/menu.json";
import { SocialMedia } from "@app/ui/components/SocialMedia";
import { Close } from "@app/ui/components/Icons/Close";
import { GleLogo } from "@app/ui/components/GleLogo";
import { List } from "@app/ui/components/List";
import { Context } from "@/src/app/context/Context";

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
            {menuOptions.map(({ id, text, link, submenu }) => (
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
