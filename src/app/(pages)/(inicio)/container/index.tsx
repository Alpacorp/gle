import { ImageSlider } from "@/app/(pages)/(inicio)/sections/ImageSlider";
import { Tracking } from "@/app/(pages)/(inicio)/sections/Tracking";
import { WeAreGLE } from "@/app/(pages)/(inicio)/sections/WeAreGLE";
import { Services } from "../sections/Services";
import { Different } from "../sections/Different";
import { Certifications } from "../sections/Certifications";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-pattern bg-top pb-80 bg-cover bg-no-repeat max-[380px]:bg-gray-pattern-mobile">
        <ImageSlider />
        <Tracking />
        <WeAreGLE />
      </div>
      <Services />
      <Different />
      <Certifications />
    </>
  );
};

export default HomePage;
