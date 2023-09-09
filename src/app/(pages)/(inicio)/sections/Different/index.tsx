import { Title } from "@/app/ui/components/Title";
import { DifferentCard } from "@/app/ui/components/DifferentCard";
import { iconsDifferent } from "./IconsDifferent";

import data from "./dataDifferent.json";

export const Different = () => {
  return (
    <section className="mt-24 bg-light-gray">
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
      <div className="flex flex-wrap justify-center gap-4 m-auto mt-16">
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
    </section>
  );
};
