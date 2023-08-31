import { FC } from "react";
import { ArrowRight } from "../../../../ui/components/Icons";

export const Tracking: FC = () => {
  return (
    <section className="flex justify-center mt-10 border-0">
      <div className="flex justify-center flex-wrap items-center gap-7 border-2 p-9 border-main-red mx-2 rounded-xl max-w-[730px] w-full max-[380px]:p-2">
        <h1 className="text-xl text-center font-semibold font-poppins text-white">
          Rastree su envío
        </h1>
        <div className="flex justify-center gap-7 flex-wrap max-[380px]:gap-2">
          <input
            type="number"
            className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-xl lg:max-w-[250px] lg:w-full max-[380px]:w-full "
            placeholder="Número de guía"
          />
          <button
            className="bg-main-red flex items-center justify-center gap-4 rounded-md py-2 px-4 text-white max-[380px]:w-full font-inter text-lg hover:bg-opacity-80 transition duration-300 ease-in-out
          "
          >
            <ArrowRight /> Consultar
          </button>
        </div>
      </div>
    </section>
  );
};
