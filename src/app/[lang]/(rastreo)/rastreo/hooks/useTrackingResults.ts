import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { DataTracking } from "@rastreo/rastreo/interfaces/tracking";

export const useTrackingResults = () => {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get("tracking-id");

  const [dataTracking, setDataTracking] = useState<DataTracking>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getTracking = async () => {
    if (!trackingId) {
      setError(true);
      return;
    }
    const trackingNumber = trackingId?.slice(0, 10);
    const sendTracking = await fetch("/api/tracking", {
      method: "POST",
      body: JSON.stringify({
        remesa: trackingNumber,
      }),
    });

    const response = await sendTracking.json();

    if (response.error) {
      setError(true);
      return;
    }

    if (response) setDataTracking(response);
    setLoading(false);
  };

  const statusTracking = (status: string) => {
    switch (status) {
      case "ENTREGADO":
        return "bg-green-500";
      case "EN TRÁNSITO":
        return "bg-yellow-500";
      case "PENDIENTE":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const statusTrackingNumber = (status: number) => {
    if (status % 2 === 0) {
      return "bg-gray-500";
    }
    if (status === 1) {
      return "bg-main-green";
    }
    return "bg-red-500";
  };

  return {
    dataTracking,
    error,
    getTracking,
    loading,
    statusTracking,
    statusTrackingNumber,
    trackingId,
  };
};
