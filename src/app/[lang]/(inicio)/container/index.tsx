import {
  Certifications,
  Different,
  ImageSlider,
  Services,
  WeAreGLE,
} from "@inicio/sections/index";

import { Locale } from "@/i18n.config";
import StickyTracking from "@ui/components/StickyTracking";

interface HomePageProps {
  params: {
    lang: Locale;
  };
}

const HomePage = ({ params: { lang } }: HomePageProps) => {
  return (
    <>
      <ImageSlider lang={lang} />
      <WeAreGLE lang={lang} />
      <Services lang={lang} />
      <Different lang={lang} />
      <Certifications lang={lang} />
      <StickyTracking observerActive={true} lang={lang} />
    </>
  );
};

export default HomePage;
