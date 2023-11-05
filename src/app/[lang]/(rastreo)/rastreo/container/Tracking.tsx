"use client";

import { FC, useEffect, useState } from "react";

import StickyTracking from "@src/app/ui/components/StickyTracking";

import { LangInterface } from "@src/app/constans/interfaces/langInterface";
import { useSearchParams } from "next/navigation";
import { HeroPages } from "@/src/app/ui/components";

export const Tracking: FC<LangInterface> = ({ lang }) => {
  const [dataTracking, setDataTracking] = useState([]);
  const searchParams = useSearchParams();

  console.log("dataTracking", dataTracking);

  const trackingId = searchParams.get("tracking-id");

  const getTracking = async () => {
    const trackingNumber = trackingId?.slice(0, 10);
    console.log("trackingNumber", trackingNumber);
    const sendTracking = await fetch("/api/tracking", {
      method: "POST",
      body: JSON.stringify({
        remesa: trackingNumber,
      }),
    });
    const response = await sendTracking.json();

    // Verifica que "data" en la respuesta sea una matriz antes de asignarla a "dataTracking"
    if (Array.isArray(response.data)) setDataTracking(response.data);
  };

  useEffect(() => {
    if (trackingId) {
      getTracking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingId]);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={
          lang === "es" ? "Resultados del rastreo" : "Tracking results"
        }
        color="white"
        className="leading-none"
      />
      <div className="flex justify-center mx-auto flex-col p-2 items-center gap-1 border-2 border-main-red rounded-xl w-auto max-w-[730px]">
        {dataTracking.map((item: any) => (
          <div key={item.GUIA}>
            <p>Número de Guía: {item.GUIA}</p>
            <p>Destinatario: {item.DESTINATARIO}</p>
          </div>
        ))}
        <StickyTracking lang={lang} />
      </div>
    </section>
  );
};
