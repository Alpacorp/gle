import { FC } from "react";
import Link from "next/link";

import { GleLogo } from "@app/ui/components/GleLogo";
import { AgileLogo } from "@app/ui/components/AgileLogo";
import { List } from "@app/ui/components/List";

import menuOptions from "@app/ui/components/Header/menu.json";

import { HamburguerMenu } from "../HamburguerMenu";
import { MenuMobile } from "../MenuMobile";

import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header font-poppins fixed w-full top-0 bg-[#f5f5f5d0] text-black shadow-md flex items-center justify-between px-8 max-[450px]:px-1 max-[450px]:justify-bet z-30">
      <MenuMobile />
      <HamburguerMenu />
      <div>
        <Link href="/">
          <GleLogo id="gle-logo" />
        </Link>
      </div>
      <nav className="nav font-normal text-lg max-[768px]:hidden">
        <ul className="flex items-center">
          {menuOptions.map(({ id, text, link, type, submenu }) => (
            <List
              key={id}
              itemKey={id}
              text={text}
              link={link}
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
          <AgileLogo id="agile-logo" />
        </Link>
      </div>
    </header>
  );
};
