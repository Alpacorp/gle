import { FC } from "react";

import { ArrowGLE } from "@/src/app/ui/components";

export const GleVideo: FC = () => {
  return (
    <section>
      <div className="flex justify-between items-end flex-wrap max-[1000px]:justify-end">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="-mt-6 ml-20 max-[1000px]:w-full rounded-2xl max-[1000px]:ml-0 max-[1000px]:mt-0 max-[1000px]:rounded-none"
          height="590"
          src="https://www.youtube.com/embed/pOp8_WGBYBQ?si=NQFwV5ND7eGkJ6Pn"
          title="Grupo Logístico Especializado"
          width="760"
        ></iframe>
        <div className="max-[1003px]:hidden">
          <ArrowGLE className="rotate-180" />
        </div>
      </div>
    </section>
  );
};
