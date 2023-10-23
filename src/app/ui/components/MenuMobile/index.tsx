"use client";

import Link from "next/link";
import { useContext } from "react";

import { List } from "@ui/components/List";
import { SocialMedia } from "@ui/components/SocialMedia";
import { Close, GleLogo } from "@ui/components/Icons/";

import { Context } from "@/src/app/context/Context";
import { Locale } from "@/i18n.config";

import dataMenu from "@ui/components/Header/dataMenu.json";

export const MenuMobile = ({ lang }: { lang: Locale }) => {
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
          <Link href={`/${lang}`}>
            <GleLogo height="31" width="129" />
          </Link>
          <button onClick={() => setShowMenu(false)}>
            <Close className="bg-black" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col items-left justify-center space-y-3 text-black">
            {dataMenu.map(({ id, textEs, textEn, linkEs, linkEn, submenu }) => (
              <List
                key={id}
                lang={lang}
                itemKey={id}
                text={lang === "es" ? textEs ?? "" : textEn ?? ""}
                link={lang === "es" ? `/${lang}${linkEs}` : `/${lang}${linkEn}`}
                isMobile
                submenu={submenu?.map((item) => ({
                  idSub: item.idSub,
                  linkSub: lang === "es" ? item.linkSubEs : item.linkSubEn,
                  textSub: lang === "es" ? item.textSubEs : item.textSubEn,
                  typeSub: item.typeSub.toString(),
                  key: item.idSub,
                }))}
              />
            ))}
          </ul>
        </nav>
        <SocialMedia align="start" lang={lang} />
      </div>
    </>
  );
};
