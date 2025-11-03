import { gtmEvents } from "@/src/lib/gtm";
import { flags } from "@src/lib/config/flags";

export const useTracking = ({
  lang,
  sameWindow = false,
}: {
  lang: string;
  sameWindow?: boolean;
}) => {
  const handleTracking = ({
    trackingNumber,
    trackingType,
    origin,
  }: {
    trackingNumber: string;
    trackingType: string;
    origin: string;
  }) => {
    if (!flags.trackingEnabled) return;

    let didAction = false;
    switch (trackingType) {
      case "packaging":
        handleTrackingPackaging(trackingNumber);
        didAction = true;
        break;
      case "messaging":
        if (flags.messagingTrackingEnabled) {
          handleTrackingMessaging(trackingNumber);
          didAction = true;
        }
        break;
      default:
        break;
    }

    if (didAction) {
      gtmEvents({
        event: `clic_rastreo_${origin}`,
        action: "clic-event",
        category: "clic",
        label: "rastreo",
      });
    }
  };

  const handleTrackingPackaging = (trackingNumber: string) => {
    window.open(
      `https://agile.glecolombia.com/GLEWeb/Home/DetailsGuia?guia=${trackingNumber}`,
      "_blank"
    );
  };

  const handleTrackingMessaging = (trackingNumber: string) => {
    lang === "es"
      ? window.open(
          `/${lang}/rastreo?tracking-id=${trackingNumber}`,
          `${sameWindow ? "_self" : "_blank"}`
        )
      : window.open(
          `/${lang}/tracking?tracking-id=${trackingNumber}`,
          `${sameWindow ? "_self" : "_blank"}`
        );
  };

  return { handleTracking } as const;
};
