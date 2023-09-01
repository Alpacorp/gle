import { Title } from "@/app/ui/components/Title";
import Image from "next/image";

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
      <div>
        <div>
          <Title
            color="white"
            align="right"
            family={"poppins"}
            weight="semibold"
            // showLine
            className="text-4xl"
          >
            Servicios Especializados
          </Title>
        </div>
      </div>
    </section>
  );
};
