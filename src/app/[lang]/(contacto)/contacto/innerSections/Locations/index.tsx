import { FC } from "react";
import Link from "next/link";

import { Location } from "@ui/components";
import { Address } from "@/src/app/ui/components/Address";

import dataAddress from "@ui/components/Address/data/dataAddress.json";

export const Locations: FC = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center my-5">
      {dataAddress.map(
        ({ id, city, phoneText, address, phone, type, maps }) => (
          <div className="flex flex-col items-center gap-4" key={id}>
            <Address
              classNameContainer="font-semibold font-poppins"
              className="font-extrabold"
              key={id}
              city={city}
              phoneText={phoneText}
              address={address}
              phone={phone}
              type={type}
              maps={maps}
            />
            <Link
              href={maps}
              target="_blank"
              className="hover:scale-105 duration-200"
            >
              <Location />
            </Link>
          </div>
        )
      )}
    </div>
  );
};
