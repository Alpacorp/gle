import { gtmEvents } from "@/src/lib/gtm";

const useTracking = ({ lang, origin }: { lang: string; origin: string }) => {
  const handleTracking = ({
    trackingNumber,
    trackingType,
    origin,
  }: {
    trackingNumber: string;
    trackingType: string;
    origin: string;
  }) => {
    switch (trackingType) {
      case "packaging":
        handleTrackingPackaging(trackingNumber);
        break;
      case "messaging":
        handleTrackingMessaging(trackingNumber);
        break;
      default:
        break;
    }

    gtmEvents({
      event: `clic_rastreo_${origin}`,
      action: "clic-event",
      category: "clic",
      label: "rastreo",
    });
  };

  const handleTrackingPackaging = (trackingNumber: string) => {
    window.open(
      `https://agile.glecolombia.com/GLEWeb/Home/DetailsGuia?guia=${trackingNumber}`,
      "_blank"
    );
  };

  const handleTrackingMessaging = (trackingNumber: string) => {
    lang === "es"
      ? window.open(`/${lang}/rastreo?tracking-id=${trackingNumber}`, "_blank")
      : window.open(
          `/${lang}/tracking?tracking-id=${trackingNumber}`,
          "_blank"
        );
  };

  return [handleTracking] as const;
};

export default useTracking;
