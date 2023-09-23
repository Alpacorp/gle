"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { GleLogo, AgileLogo, En, Es } from "@icons/index";
import { List } from "@ui/components/List";
import { HamburguerMenu } from "@ui/components/HamburguerMenu";
import { MenuMobile } from "@ui/components/MenuMobile";

import { LangInterface } from "@constans/interfaces/langInterface";
import dataMenu from "@ui/components/Header/dataMenu.json";

export const Header: FC<LangInterface> = ({ lang }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = () => {
    const langPrefix = lang === "es" ? "/es" : "/en";
    const route = dataMenu.find(
      (item) =>
        item.linkEs === pathname.replace(langPrefix, "") ||
        item.linkEn === pathname.replace(langPrefix, "")
    );

    if (route) {
      const newLangPath = lang === "es" ? route.linkEn : route.linkEs;
      const newLangPrefix = lang === "es" ? "/en" : "/es";
      router.push(`${newLangPrefix}${newLangPath}`);
    } else {
      router.push(lang === "es" ? "/en" : "/es");
    }
  };

  return (
    <header className="font-poppins fixed w-full top-0 bg-[#f5f5f5d0] text-black shadow-md flex items-center justify-between px-8 max-[450px]:px-1 max-[450px]:justify-bet z-30">
      <MenuMobile lang={lang} />
      <HamburguerMenu />
      <div>
        <Link href={`/${lang}`}>
          <GleLogo id="gle-logo" className="max-[500px]:w-[137px]" />
        </Link>
      </div>
      <nav className="nav font-normal text-lg max-[768px]:hidden">
        <ul className="flex items-center">
          {dataMenu.map(({ id, textEs, textEn, linkEs, linkEn, submenu }) => (
            <List
              key={id}
              lang={lang}
              itemKey={id}
              text={lang === "es" ? textEs ?? "" : textEn ?? ""}
              link={lang === "es" ? `/${lang}${linkEs}` : `/${lang}${linkEn}`}
              submenu={submenu?.map((item) => ({
                idSub: item.idSub,
                linkSub:
                  lang === "es" ? `${item.linkSubEs}` : `${item.linkSubEn}`,
                textSub: lang === "es" ? item.textSubEs : item.textSubEn,
                typeSub: item.typeSub.toString(),
              }))}
            />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <button onClick={changeLanguage}>
          {lang === "es" ? (
            <Es title="Cambiar idioma a inglés" />
          ) : (
            <En title="Change language to Spanish" />
          )}
        </button>
        <Link href="https://agile.glecolombia.com/GLEWeb" target="_blank">
          <AgileLogo
            id="agile-logo"
            title="Agile Platform"
            className="hover:scale-105 transition-transform w-20 max-[500px]:w-[76px]"
          />
        </Link>
      </div>
    </header>
  );
};
