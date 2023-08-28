import { ImageSlider } from "@/app/(pages)/(inicio)/sections/ImageSlider";
import { Tracking } from "@/app/(pages)/(inicio)/sections/Tracking";
import { WeAreGLE } from "@/app/(pages)/(inicio)/sections/WeAreGLE";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-pattern bg-top pb-80 bg-cover bg-no-repeat max-[380px]:bg-gray-pattern-mobile">
        <ImageSlider />
        <Tracking />
        <WeAreGLE />
      </div>
    </>
  );
};

export default HomePage;
