'use client';

import { FC } from 'react';
import Link from 'next/link';

import { GleLogo, AgileLogo, WhatsAppWhite } from '@icons/index';
import { HamburguerMenu, MenuMobile, List, Toggle } from '@ui/components/';

import useChangeLanguageRoutes from '@hooks/useChangeLanguage';

import { LangInterface } from '@constans/interfaces/langInterface';

import dataMenu from '@ui/components/Header/dataMenu.json';

const Header: FC<LangInterface> = ({ lang }) => {
  const { changeLanguage } = useChangeLanguageRoutes({ lang });

  return (
    <header className="font-poppins fixed w-full top-0 bg-[#f5f5f5d0] text-black shadow-md flex items-center justify-between px-8 max-[450px]:px-1 max-[450px]:justify-bet z-30">
      <MenuMobile lang={lang} />
      <HamburguerMenu />
      <div>
        <Link href={`/${lang}`}>
          <GleLogo id="gle-logo" className="max-[500px]:w-[8.563rem]" />
        </Link>
      </div>
      <nav className="nav font-normal text-lg max-[768px]:hidden">
        <ul className="flex items-center">
          {dataMenu.map(({ id, textEs, textEn, linkEs, linkEn, submenu }) => (
            <List
              key={id}
              lang={lang}
              itemKey={id}
              text={lang === 'es' ? textEs ?? '' : textEn ?? ''}
              link={lang === 'es' ? `/${lang}${linkEs}` : `/${lang}${linkEn}`}
              submenu={submenu?.map((item) => ({
                idSub: item.idSub,
                linkSub:
                  lang === 'es' ? `${item.linkSubEs}` : `${item.linkSubEn}`,
                textSub: lang === 'es' ? item.textSubEs : item.textSubEn,
                typeSub: item.typeSub.toString(),
              }))}
            />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-1">
        <Link
          href={
            lang === 'es'
              ? 'https://wa.me/573153093999?text=Hola,%20quiero%20más%20información%20sobre%20los%20envíos'
              : 'https://wa.me/573153093999?text=Hello,%20I%20want%20more%20information%20about%20shipping'
          }
          target="_blank"
          className="text-black font-poppins max-w-[12.5rem] w-full mx-auto text-xs font-bold flex items-center justify-center border-main-red border-2 px-2 py-1 my-3 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
        >
          <WhatsAppWhite fill="#00000" className="mr-1 max-[940px]:mr-0" />
          <span className="max-[940px]:hidden">
            {lang === 'es' ? 'Estado envíos' : 'Tracking'}
          </span>
        </Link>
        <Toggle onChange={changeLanguage} lang={lang} />
        <Link href="https://agile.glecolombia.com/GLEWeb" target="_blank">
          <AgileLogo
            id="agile-logo"
            title="Agile Platform"
            className="hover:scale-105 transition-transform w-20 max-[500px]:w-[4.75rem]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
