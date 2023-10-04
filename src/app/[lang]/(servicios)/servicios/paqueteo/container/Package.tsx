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
      <div className="relative z-20">
        <div className="flex flex-col mt-14 px-6 max-w-[896px] w-full m-auto justify-center font-poppins items-center max-[400px]:mt-5">
          <div className="text-xl max-[400px]:text-lg">
            <p>
              Servicio de recolección, transporte, distribución y entrega puerta
              a puerta de paquetes y mercancías por unidad de empaque.
            </p>
            <p>Cubrimos todo el territorio nacional.</p>
          </div>
          <div className="flex justify-center items-center w-full my-20 flex-wrap gap-12 max-[400px]:my-10">
            <Image
              src={packageImage}
              alt="Paqueteo"
              title="Paqueteo"
              width={411}
              height={390}
              priority
              className="aspect-square rounded-2xl object-cover"
            />
            <div className="max-w-[388px] w-full border-l-[3px] border-main-red pl-5 text-3xl font-semibold leading-8 max-[400px]:text-xl max-[400px]:leading-6">
              <h3>Contamos con servicios integrales de paqueteo</h3>
            </div>
          </div>
          <div className="text-xl max-[400px]:text-lg">
            <p>pendiente de contenido ...</p>
          </div>
          <button className="flex border-2 border-secondary-gray rounded-lg px-10 py-2 my-20 text-main-red hover:bg-light-gray-2 hover:text-black transition duration-300 ease-in-out">
            <ArrowCta className="h-6 w-6 -rotate-90" stroke="#D81730" />
            {lang === "es" ? "Cotización Servicio" : "Service Quote"}
          </button>
        </div>
        <div className="absolute bottom-0 back-clip-path-inverse-bottom bg-third-red h-full z-[-1] left-0 right-0" />
      </div>
    </section>
  );
};
