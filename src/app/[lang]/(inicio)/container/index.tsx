import {
  Certifications,
  Different,
  ImageSlider,
  Services,
  WeAreGLE,
} from "@inicio/sections/index";

import { Locale } from "@/i18n.config";

interface HomePageProps {
  params: {
    lang: Locale;
  };
}

const HomePage = ({ params: { lang } }: HomePageProps) => {
  return (
    <>
      <div className="bg-gray-pattern bg-top pb-52 bg-cover bg-no-repeat max-[380px]:bg-gray-pattern-mobile">
        <ImageSlider />
        <WeAreGLE />
      </div>
      <Services lang={lang} />
      <Different />
      <Certifications />
    </>
  );
};

export default HomePage;
