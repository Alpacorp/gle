import { NextPage } from "next";

import {
  Certifications,
  Different,
  ImageSlider,
  Services,
  WeAreGLE,
} from "@inicio/sections/index";

import StickyTracking from "@ui/components/StickyTracking";

import { HomePageProps } from "@/src/app/[lang]/(inicio)/interfaces/homePage";

const HomePage: NextPage<HomePageProps> = ({ params: { lang } }) => {
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
