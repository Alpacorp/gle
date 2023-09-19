import { FC } from "react";
import { ArrowCta } from "@/src/app/ui/components/Icons";

export const Tracking: FC = () => {
  return (
    <section className="flex justify-center border-0">
      <div className="flex justify-evenly flex-wrap py-5 items-center gap-1 border-2 border-main-red mx-4 rounded-xl max-w-[730px] w-full max-[640px]:p-2 max-[380px]:p-2">
        <h1 className="text-xl text-center leading-none font-semibold font-poppins text-white max-[380px]:text-lg">
          Rastree su envío
        </h1>
        <div className="flex justify-center gap-2">
          <input
            type="number"
            className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm max-[460px]:max-w-[280px] max-[460px]:w-full max-[460px]:text-sm"
            placeholder="No. de guía"
          />
          <button className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[110px] max-[460px]:w-full max-[460px]:text-sm font-inter text-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
            <ArrowCta stroke="white" className="-rotate-90 w-5 h-5" />
            Consultar
          </button>
        </div>
      </div>
    </section>
  );
};
