import { useState } from "react";
import { gtmEvents } from "@/src/lib/gtm";

const useTracking = (lang: string) => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const trackingNumber = event.target.value;
    setTrackingNumber(trackingNumber);
  };

  const handleTracking = (origin: string) => {
    if (trackingNumber === "") {
      lang === "es"
        ? alert("Por favor ingrese un número de guía")
        : alert("Please enter a tracking number");
      return;
    }
    gtmEvents({
      event: `clic_rastreo_${origin}`,
      action: "clic-event",
      category: "clic",
      label: "rastreo",
    });
    // @ts-ignore
    window.open(
      `https://agile.glecolombia.com/GLEWeb/Home/DetailsGuia?guia=${trackingNumber}`,
      "_blank"
    );
    resetTracking();
  };

  const resetTracking = () => {
    setTrackingNumber("");
  };

  return [
    handleInputChange,
    handleTracking,
    trackingNumber,
    setTrackingNumber,
    resetTracking,
  ] as const;
};

export default useTracking;
