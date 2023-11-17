import { FC } from "react";

import { LangInterface } from "@constans/interfaces/langInterface";

export const ChannelsTitle: FC<LangInterface> = ({ lang }) => {
  return (
    <h3 className="text-2xl font-poppins font-semibold my-7">
      {lang === "es" ? "Canales de Atención" : "Attention Channels"}
    </h3>
  );
};
