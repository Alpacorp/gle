import { FC } from "react";
import Link from "next/link";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { HeroPages, WhatsAppWhite } from "@/src/app/ui/components";
import { Address } from "@/src/app/ui/components/Footer/Address";
import { getDictionary } from "@/src/lib/dictionary";

import data from "@ui/components/Footer/dataFooter.json";

export const Contact: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);
  return (
    <section className="text-center">
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={pages.contact.title}
        color="white"
        className="leading-none"
      />
      <div>
        <h3 className="text-2xl font-poppins font-semibold my-7">
          {pages.contact["title-channels"]}
        </h3>
        <h4 className="text-lg font-poppins font-normal">
          <span className="text-main-red">
            {pages.contact["customer-service"][0]}
          </span>{" "}
          {pages.contact["customer-service"][1]}
        </h4>
        <Link
          href="https://api.whatsapp.com/send?phone=+573102695133&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos"
          target="_blank"
          className="text-black font-poppins max-w-[200px] w-full mx-auto text-lg font-bold flex items-center justify-center border-main-red border-2 px-2 py-1 my-3 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
        >
          <WhatsAppWhite fill="#00000" className="mr-1" /> 3102695133
        </Link>
        <div className="flex justify-center my-8">
          <div className="bg-third-gray max-w-[600px] w-full p-3 rounded-md font-poppins text-sm">
            <p className="font-bold">{pages.contact["attention-schedule:"]}</p>
            <p>{pages.contact["schedules"]}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 items-center font-poppins">
          <h3 className="text-lg font-normal text-main-red uppercase">
            {pages.contact["data-contact"][0]["web-page"]}
          </h3>
          <h4 className="text-base font-medium font-inter border border-third-gray rounded-md max-w-[300px] w-full">
            {pages.contact["data-contact"][0]["content-page"]}
          </h4>
          <h3 className="text-lg font-normal text-main-red uppercase">
            {pages.contact["data-contact"][1]["email"]}
          </h3>
          <h4 className="text-base font-medium font-inter border border-third-gray rounded-md max-w-[300px] w-full">
            {pages.contact["data-contact"][1]["content-email"]}
          </h4>
          <h3 className="text-lg font-normal text-main-red uppercase">
            {pages.contact["data-contact"][2]["address"]}
          </h3>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center my-5">
          {data.map((item) => (
            <Address
              key={item.id}
              city={item.city}
              phoneText={item.phoneText}
              address={item.address}
              phone={item.phone}
              type={item.type}
              maps={item.maps}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
