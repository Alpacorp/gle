import { FC } from "react";
import Link from "next/link";

import { GleLogo } from "@app/ui/components/GleLogo";
import { AgileLogo } from "@app/ui/components/AgileLogo";
import { List } from "@app/ui/components/List";

import menuOptions from "@app/ui/components/Header/menu.json";

import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header sticky top-0 bg-white text-black shadow-md flex items-center justify-around px-8 py-2 max-[450px]:px-1 max-[450px]:justify-bet">
      <label
        htmlFor="hbr"
        className="bg-main-red rounded-lg peer-checked:hamburger z-20 p-6 cursor-pointer hidden max-[768px]:block lg:hidden max-[500px]:p-3"
      >
        <div
          aria-hidden="true"
          className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
        ></div>
        <div
          aria-hidden="true"
          className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
        ></div>
      </label>
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
