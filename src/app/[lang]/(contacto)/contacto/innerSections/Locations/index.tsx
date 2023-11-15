import { FC } from "react";
import Link from "next/link";

import { Location } from "@ui/components";
import { Address } from "@ui/components/Footer/Address";

import data from "@ui/components/Footer/data/dataFooter.json";

export const Locations: FC = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center my-5">
      {data.map((item) => (
        <div className="flex flex-col items-center gap-4" key={item.id}>
          <Address
            classNameContainer="font-semibold font-poppins"
            className="font-extrabold"
            key={item.id}
            city={item.city}
            phoneText={item.phoneText}
            address={item.address}
            phone={item.phone}
            type={item.type}
            maps={item.maps}
          />
          <Link
            href={item.maps}
            target="_blank"
            className="hover:scale-105 duration-200"
          >
            <Location />
          </Link>
        </div>
      ))}
    </div>
  );
};
