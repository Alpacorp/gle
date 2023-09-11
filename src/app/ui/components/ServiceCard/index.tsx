import { FC } from "react";
import Image from "next/image";

import { Title } from "@/app/ui/components/Title";

export const ServiceCard: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/services/1.png"
          alt="service"
          width={120}
          height={120}
        />
      </div>
      <div className="px-6 py-8">
        <div className="text-center">
          <Title
            color="gray"
            align="center"
            family={"poppins"}
            weight="semibold"
            className="text-2xl"
          >
            Servicio
          </Title>
          <Title
            color="gray"
            align="center"
            family={"poppins"}
            weight="semibold"
            className="text-2xl"
          >
            Especializado
          </Title>
        </div>
      </div>
    </div>
  );
};
