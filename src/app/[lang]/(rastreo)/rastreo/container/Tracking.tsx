"use client";

import { useEffect } from "react";
import { NextPage } from "next";

import {
  HeaderTracking,
  MainData,
  HistoryTracking,
} from "@rastreo/rastreo/innerSections";

import StickyTracking from "@ui/components/StickyTracking";
import { HeroPages } from "@ui/components";
import { ErrorLayout } from "@rastreo/rastreo/components/";

import { LangInterface } from "@constans/interfaces/langInterface";

import { formatDate } from "@utils/formatDate";

import { DataTracking } from "@rastreo/rastreo/interfaces/tracking";

import { useTrackingResults } from "@rastreo/rastreo/hooks/useTrackingResults";

export const Tracking: NextPage<LangInterface> = ({ lang }) => {
  const {
    dataTracking,
    error,
    getTracking,
    loading,
    statusTrackingNumber,
    trackingId,
  } = useTrackingResults();

  useEffect(() => {
    if (trackingId) {
      getTracking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingId]);

  if (error) {
    return <ErrorLayout lang={lang} />;
  }

  return (
    <section>
      <HeroPages
        pageTitle={
          lang === "es" ? "Resultados del rastreo" : "Tracking results"
        }
        color="white"
        className="leading-none"
      />
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <section className="flex justify-center items-center font-poppins mt-12 mx-5">
          <div>
            <HeaderTracking dataTracking={dataTracking} />
            <MainData
              dataTracking={dataTracking}
              statusTrackingNumber={statusTrackingNumber}
            />
            <HistoryTracking
              dataTracking={dataTracking as DataTracking}
              formatDate={formatDate}
              statusTrackingNumber={statusTrackingNumber}
            />
          </div>
        </section>
      )}
      <StickyTracking lang={lang} samePage />
    </section>
  );
};
