import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowCta } from '@icons/index';
import { iconsServices } from '@ui/components/ServicesContainer/IconsServices';

import services from '@ui/components/ServicesContainer/data/dataServices.json';

import { LangInterface } from '@/src/app/constans/interfaces/langInterface';

export const ServicesContainer: FC<LangInterface> = ({ lang }) => {
  return (
    <>
      {services.map(({ id, nameEs, nameEn, url, linkEs, linkEn }) => (
        <Link key={id} href={`/${lang}${lang === 'es' ? linkEs : linkEn}`}>
          <div
            key={id}
            className="rounded-2xl overflow-hidden shadow-card-shadow relative mt-10 hover:scale-105 transition-transform"
          >
            <div className="relative h-[27.375rem] w-[16.375rem]">
              <Image
                src={url}
                alt={lang === 'es' ? nameEs : nameEn}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, (max-width: 1536px) 100vw,"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="flex flex-col justify-center items-center p-4 absolute bottom-0 left-0 w-full text-white text-center">
              <div>
                {
                  iconsServices.filter((icon: any) => icon.iconId === id)[0]
                    .iconComponentService
                }
              </div>
              <h2 className="text-2xl font-poppins font-semibold text-white mt-2">
                {lang === 'es' ? nameEs : nameEn}
              </h2>
              <div className="flex items-center justify-between text-main-red font-poppins text-xl font-normal px-4 py-2 mt-4 hover:text-white transition-colors">
                <ArrowCta
                  stroke="#D81730"
                  className="-rotate-90 w-[1.875rem] h-[1.688rem]"
                />{' '}
                <span className="ml-3">
                  {lang === 'es' ? 'Conoce más' : 'Learn more'}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
