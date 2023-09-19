import { Services } from "../sections/Services";
import { Different } from "../sections/Different";
import { Certifications } from "../sections/Certifications";
import { ImageSlider } from "../sections/ImageSlider";
import { WeAreGLE } from "../sections/WeAreGLE";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-pattern bg-top pb-52 bg-cover bg-no-repeat max-[380px]:bg-gray-pattern-mobile">
        <ImageSlider />
        {/* <Tracking /> */}
        <WeAreGLE />
      </div>
      <Services />
      <Different />
      <Certifications />
    </>
  );
};

export default HomePage;
