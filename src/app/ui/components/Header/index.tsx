import { FC } from "react";
import Link from "next/link";

import { GleLogo } from "@app/ui/components/GleLogo";
import { AgileLogo } from "@app/ui/components/AgileLogo";
import { List } from "@app/ui/components/List";
import { HamburguerMenu } from "@app/ui/components/HamburguerMenu";
import { MenuMobile } from "@app/ui/components/MenuMobile";

import { Locale } from "@/i18n.config";

import menuOptions from "@app/ui/components/Header/menu.json";
import "./styles.css";
// import { getDictionary } from "@/src/lib/dictionary";

export const Header = async ({ lang }: { lang: Locale }) => {
  // const { navigation } = await getDictionary(lang);
  console.log("lang", lang);

  return (
    <header className="font-poppins fixed w-full top-0 bg-[#f5f5f5d0] text-black shadow-md flex items-center justify-between px-8 max-[450px]:px-1 max-[450px]:justify-bet z-30">
      <MenuMobile lang={lang} />
      <HamburguerMenu />
      <div>
        <Link href={`/${lang}`}>
          <GleLogo id="gle-logo" />
        </Link>
      </div>
      <nav className="nav font-normal text-lg max-[768px]:hidden">
        <ul className="flex items-center">
          {menuOptions.map(({ id, text, link, submenu }) => (
            <List
              key={id}
              lang={lang}
              itemKey={id}
              text={text}
              link={`/${lang}${link}`}
              submenu={submenu?.map((item) => ({
                idSub: item.idSub,
                linkSub: item.linkSub,
                textSub: item.textSub,
                typeSub: item.typeSub.toString(),
              }))}
            />
          ))}
        </ul>
      </nav>
      <div>
        <Link href="https://agile.glecolombia.com/GLEWeb" target="_blank">
          <AgileLogo
            id="agile-logo"
            className="hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </header>
  );
};
