import { Title } from "@/app/ui/components/Title";
import Image from "next/image";

import services from "./dataServices.json";
import { iconsServices } from "./IconsServices";

export const Services = () => {
  return (
    <section className="relative">
      <Image
        src="/assets/images/services-background.png"
        alt="background"
        width={980}
        height={1080}
        className="absolute top-0 right-0 z-[-1]"
      />
      <div className="mx-9 py-14">
        <div className="flex justify-end">
          <Title
            color="white"
            align="right"
            family={"poppins"}
            weight="semibold"
            showLine
            className="text-4xl max-w-xs w-full"
            lineColor="white"
          >
            Servicios Especializados
          </Title>
        </div>
        <div className="flex justify-center gap-6 items-center flex-wrap">
          {services.map(({ id, name, url }) => (
            <div
              key={id}
              className="rounded-lg overflow-hidden shadow-md relative mt-10"
            >
              <div className="relative h-[438px] w-[262px]">
                <Image src={url} alt={name} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
              </div>
              <div className="flex flex-col justify-center items-center p-4 absolute bottom-0 left-0 w-full text-white text-center">
                <div>
                  {
                    iconsServices.filter((icon: any) => icon.iconId === id)[0]
                      .iconComponent
                  }
                </div>
                <h2 className="text-xl text-white mt-2">{name}</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors">
                  Conoce más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
