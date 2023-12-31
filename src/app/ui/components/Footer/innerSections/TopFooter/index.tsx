import { FC } from "react";
import Link from "next/link";

import { Address } from "@ui/components/index";
import { GleLogoWhite, WhatsAppWhite } from "@icons/index";

import dataAddress from "@ui/components/Address/data/dataAddress.json";

export const TopFooter: FC = () => {
  return (
    <section className="bg-secondary-gray py-9 px-10 flex flex-wrap gap-4 justify-around items-center text-white font-poppins mt-9 max-[1000px]:justify-center">
      <div>
        <div className="flex mb-5 max-[990px]:justify-center">
          <GleLogoWhite />
        </div>
        <div className="flex items-center justify-center gap-3 flex-wrap max-[500px]:flex-col">
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
        {dataAddress.map(
          ({ id, city, phoneText, address, phone, type, maps }) => (
            <Address
              key={id}
              city={city}
              phoneText={phoneText}
              address={address}
              phone={phone}
              type={type}
              maps={maps}
            />
          )
        )}
      </div>
    </section>
  );
};
