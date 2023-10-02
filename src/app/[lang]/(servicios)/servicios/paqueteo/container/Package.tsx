import { FC } from "react";

import { HeroPages } from "@/src/app/ui/components";
import {
  bannerPackage,
  bannerPackageMobile,
  packageIcon,
  packageImage,
} from "@/public/assets/images/package";
import Image from "next/image";

export const Package: FC = () => {
  return (
    <section>
      <HeroPages
        imagePath={bannerPackage}
        imagePathMobile={bannerPackageMobile}
        iconPath={packageIcon}
        pageTitle="Paqueteo"
        color="white"
      />
      <section className="flex flex-col justify-center items-center">
        <div>
          <p>
            Servicio de recolección, transporte, distribución y entrega puerta a
            puerta de paquetes y mercancías por unidad de empaque.
          </p>
          <p>Cubrimos todo el territorio nacional.</p>
        </div>
        <div className="flex items-center flex-wrap gap-12">
          <Image
            src={packageImage}
            alt="Paqueteo"
            title="Paqueteo"
            width={411}
            height={390}
            priority
            className="aspect-auto rounded-2xl"
          />
          <div>Contamos con servicios integrales de paqueteo</div>
        </div>
        <div className="text-left">pendiente de contenido ...</div>
      </section>
    </section>
  );
};
