import Image from "next/image";
import { FC } from "react";
import { FlyFastImageProps } from "@inicio/sections/Services/interfaces/services";

export const FlyFastImage: FC<FlyFastImageProps> = ({ volamos }) => {
  return (
    <div>
      <Image
        alt="Volamos para que llegues más rápido"
        className="max-[380px]:hidden h-auto"
        height={1080}
        src={volamos}
        title="Volamos para que llegues más rápido"
        width={780}
      />
      <Image
        alt="Volamos para que llegues más rápido - mobile"
        className="hidden max-[380px]:block h-auto w-full aspect-auto"
        height={1080}
        src={volamos}
        title="Volamos para que llegues más rápido"
        width={780}
      />
    </div>
  );
};
