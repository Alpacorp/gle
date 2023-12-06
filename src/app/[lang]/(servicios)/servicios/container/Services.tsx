import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowCta,
  ArrowGLE,
  HeroPages,
  ServicesContainer,
} from '@ui/components';
import { Check, Contract } from '@icons/index';
import StickyTracking from '@/src/app/ui/components/StickyTracking';
import { operate } from '@/public/assets/images/services';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

export const Services: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section className="relative">
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.services.title}
        color="white"
        className="leading-none"
      />
      <div className="flex justify-evenly gap-6 items-center flex-wrap">
        <ServicesContainer lang={lang} />
      </div>
      <div className="max-w-xl mx-auto my-20 px-5 text-center text-xl font-poppins font-normal">
        <p>{pages.services.description[0]}</p>
        <br />
        <p className="font-bold">{pages.services.description[1]}</p>
      </div>
      <div className="flex gap-8 justify-center items-center px-[7.5rem] mt-14 max-[1000px]:flex-wrap max-[550px]:px-5 max-[380px]:px-6">
        <div className="relative flex flex-1 justify-center max-w-[18.75rem] w-full max-[720px]:flex-auto max-[720px]:flex-grow-0">
          <Image
            src={operate}
            alt="valores"
            title="valores G.L.E."
            width={300}
            height={637}
            priority
            className="aspect-auto rounded-2xl"
          />
        </div>
        <div className="flex flex-wrap flex-1 gap-5 items-start justify-center px-5 max-[720px]:flex-auto max-[720px]:mt-5">
          {pages.services['how-operate'].map((item: string) => (
            <div
              key={item}
              className="flex flex-col justify-center items-center max-w-[18.75rem] w-full gap-2 px-4 py-2"
            >
              <Check
                fill={
                  pages.services['how-operate'].indexOf(item) % 2 === 0
                    ? '#D81730'
                    : '#313131'
                }
                className="w-9"
              />
              <p className="text-base font-poppins font-normal max-w-[18.75rem]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center font-poppins my-20 px-5">
        <Link
          href="/assets/images/services/contrato-prestacion-servicios-postales.pdf"
          target="_blank"
          className="flex text-sm justify-center items-center max-w-[40.625rem] w-full text-white bg-main-gray rounded-xl hover:scale-105 duration-75 px-4 py-2 gap-2"
        >
          <Contract />
          <ArrowCta className="w-7 h-7 -rotate-90" stroke="#D81730" />
          {pages.services.contract}
        </Link>
      </div>
      <div className="absolute z-auto top-1/2 left-0 max-[600px]:hidden">
        <ArrowGLE className="h-full w-32 max-[480px]:h-44" />
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
      <StickyTracking lang={lang} />
    </section>
  );
};
