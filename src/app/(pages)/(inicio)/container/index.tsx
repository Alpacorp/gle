import { ImageSlider } from "@/app/ui/components/ImageSlider";
import { Tracking } from "@/app/ui/components/Tracking";

const HomePage = () => {
  return (
    <div className="bg-main-gray">
      <ImageSlider />
      <Tracking />
    </div>
  );
};

export default HomePage;
