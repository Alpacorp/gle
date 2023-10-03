import { FC } from "react";
import Image from "next/image";

import { ArrowCta, HeroPages } from "@/src/app/ui/components";
import {
  bannerPackage,
  bannerPackageMobile,
  packageIcon,
  packageImage,
} from "@/public/assets/images/package";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { getDictionary } from "@/src/lib/dictionary";

export const Package: FC<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);

  return (
    <section>
      <HeroPages
        imagePath={bannerPackage}
        imagePathMobile={bannerPackageMobile}
        iconPath={packageIcon}
        pageTitle="Paqueteo"
        color="white"
      />
      <section className="flex flex-col mt-14 text-xl justify-center font-poppins items-center">
        <div>
          <p>
            Servicio de recolección, transporte, distribución y entrega puerta a
            puerta de paquetes y mercancías por unidad de empaque.
          </p>
          <p>Cubrimos todo el territorio nacional.</p>
        </div>
        <div className="flex items-center my-20 flex-wrap gap-12">
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
        <div className="text-left ">pendiente de contenido ...</div>
        <button
          className="flex border-2 border-secondary-gray rounded-lg px-10 py-2 my-10 text-main-red hover:bg-light-gray-2 hover:text-black transition duration-300 ease-in-out
              "
        >
          <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
          {lang === "es" ? "Cotización Servicio" : "Service Quote"}
        </button>
      </section>
    </section>
  );
};
