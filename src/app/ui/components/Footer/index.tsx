import { FC } from "react";

import { SocialMedia } from "@ui/components/index";
import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import {
  BottomFooter,
  MiddleFooter,
  TopFooter,
} from "@ui/components/Footer/innerSections/";

export const Footer: FC<LangInterface> = ({ lang }) => {
  return (
    <footer>
      <section>
        <SocialMedia lang={lang} align="center" />
      </section>
      <TopFooter />
      <MiddleFooter lang={lang} />
      <BottomFooter lang={lang} />
    </footer>
  );
};
