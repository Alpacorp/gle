import { FC } from "react";
import Link from "next/link";

import { GleLogoWhite } from "@app/ui/components/GleLogoWhite";
import { SocialMedia } from "@app/ui/components/SocialMedia";
import { WhatsAppWhite } from "@app/ui/components/Icons/";

import data from "./dataFooter.json";
import { Address } from "./Address";

export const Footer: FC = () => {
  return (
    <footer className="">
      <div>
        <SocialMedia align="center" />
      </div>
      <div className="bg-secondary-gray py-9 flex flex-wrap gap-4 justify-evenly items-center text-white font-poppins mt-9">
        <div>
          <div className="flex mb-5 max-[990px]:justify-center">
            <GleLogoWhite />
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="mailto:contacto@glecolombia.com"
              target="_blank"
              className="text-white text-xs hover:text-rose-400"
            >
              contacto@glecolombia.com
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+573102695133&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos"
              target="_blank"
              className="text-white font-poppins text-lg font-bold flex items-center border-main-red border-2 px-2 py-1 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
            >
              <WhatsAppWhite className="mr-1" /> 3102695133
            </Link>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {data.map((item) => (
            <>
              <Address
                key={item.id}
                city={item.city}
                phoneText={item.phoneText}
                address={item.address}
                phone={item.phone}
                type={item.type}
                maps={item.maps}
              />
              {item.id === data.length ? (
                ""
              ) : (
                <hr className="border-gray-300 border-[1px] h-9 max-[442px]:hidden" />
              )}
            </>
          ))}
        </div>
      </div>
    </footer>
  );
};
