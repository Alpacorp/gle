import { FC } from "react";
import Image from "next/image";

import { Title } from "@/app/ui/components/Title";
import { DifferentCard } from "@/app/ui/components/DifferentCard";
import { ArrowCta } from "@/app/ui/components/Icons";
import { phone1, phone2 } from "@public/assets/images/";

import { iconsDifferent } from "./IconsDifferent";
import data from "./dataDifferent.json";

export const Different: FC = () => {
  return (
    <section className="mt-24 py-11 bg-light-gray max-[1003px]:mt-0">
      <Title
        color="secondary-gray"
        align="center"
        family="poppins"
        weight="semibold"
        showLine
        lineColor="main-red"
        className="text-4xl"
      >
        ¿Qué nos hace diferentes?
      </Title>
      <div className="flex flex-wrap justify-center gap-4 m-auto mt-16 max-[380px]:px-2">
        {data.map(({ id, description, color }) => (
          <div
            key={id}
            className="flex flex-row justify-left items-start max-w-[400px] w-full gap-1"
          >
            {
              iconsDifferent.filter((icon) => icon.iconId === id)[0]
                .iconComponent
            }
            <DifferentCard
              key={id}
              description={description}
              backgroundColor={
                color === 1
                  ? "secondary-gray"
                  : color === 2
                  ? "main-red"
                  : "white"
              }
            />
          </div>
        ))}
      </div>
      <section>
        <div className="flex items-center justify-center flex-wrap mt-12">
          <div className="flex items-center max-[1065px]:flex-col">
            <Title
              color="main-red"
              align="center"
              family="poppins"
              weight="semibold"
              className="text-4xl max-w-[350px] w-full"
            >
              Rastrea tu envío desde tu celular
            </Title>
            <ArrowCta
              stroke="#D81730"
              className="-rotate-90 w-[33px] h-[56px] max-[1065px]:rotate-0"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <Image
              src={phone1}
              alt="Celular"
              width={348}
              height={567}
              priority
            />
            <Image
              src={phone2}
              alt="Celular"
              width={348}
              height={567}
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
};
