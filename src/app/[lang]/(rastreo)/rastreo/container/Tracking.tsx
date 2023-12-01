'use client';

import { useEffect } from 'react';
import { NextPage } from 'next';

import {
  HeaderTracking,
  MainData,
  HistoryTracking,
} from '@rastreo/rastreo/innerSections';

import StickyTracking from '@ui/components/StickyTracking';
import { ArrowCta, HeroPages, LoadingTracking } from '@ui/components';
import { ErrorLayout } from '@rastreo/rastreo/components/';

import { LangInterface } from '@constans/interfaces/langInterface';

import { formatDate } from '@utils/formatDate';

import { DataTracking } from '@rastreo/rastreo/interfaces/tracking';

import { useTrackingResults } from '@rastreo/rastreo/hooks/useTrackingResults';

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
          lang === 'es' ? 'Resultados del rastreo' : 'Tracking results'
        }
        color="white"
        className="leading-none"
      />
      {loading ? (
        <LoadingTracking />
      ) : (
        <section className="flex justify-center items-center font-poppins mt-12 mx-5">
          <div className="max-w-md w-full">
            <HeaderTracking dataTracking={dataTracking} />
            <MainData
              dataTracking={dataTracking}
              statusTrackingNumber={statusTrackingNumber}
              lang={lang}
            />
            <div className="flex flex-col justify-center items-center gap-3 text-2xl font-semibold my-5">
              <h2>
                {lang === 'es' ? 'Historial de rastreo' : 'Tracking history'}
              </h2>
              <ArrowCta
                fill="#D81730"
                color="#D81730"
                height="20"
                stroke="#D81730"
              />
            </div>
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
