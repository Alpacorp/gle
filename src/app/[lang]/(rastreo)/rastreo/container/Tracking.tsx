'use client';

import { useEffect } from 'react';
import { NextPage } from 'next';

import StickyTracking from '@ui/components/StickyTracking';
import { HeroPages, LoadingTracking } from '@ui/components';

import { LangInterface } from '@constans/interfaces/langInterface';

import { formatDate } from '@utils/formatDate';

import { useTrackingResults } from '@rastreo/rastreo/hooks/useTrackingResults';

import { DataTracking } from '@/src/app/[lang]/(rastreo)/rastreo/interfaces/tracking';

import {
  Empty,
  Failed,
  Success,
} from '@/src/app/[lang]/(rastreo)/rastreo/innerSections/';

export const Tracking: NextPage<LangInterface> = ({ lang }) => {
  const {
    dataTracking,
    empty,
    error,
    getTracking,
    loading,
    statusTrackingNumber,
    trackingId,
    verifyTrackingId,
  } = useTrackingResults();

  useEffect(() => {
    if (trackingId) {
      getTracking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingId]);

  useEffect(() => {
    verifyTrackingId();
  }, [verifyTrackingId]);

  const returnComponent = () => {
    if (empty) {
      return <Empty lang={lang} />;
    }
    if (error) {
      return <Failed lang={lang} trackingId={trackingId ?? ''} />;
    }
    if (loading) {
      return <LoadingTracking />;
    }
    return (
      <Success
        dataTracking={dataTracking as DataTracking}
        formatDate={formatDate}
        statusTrackingNumber={statusTrackingNumber}
        lang={lang}
      />
    );
  };

  return (
    <section>
      <HeroPages
        pageTitle={
          empty
            ? lang === 'es'
              ? 'Rastrea tu envío'
              : 'Track your shipment'
            : `${lang === 'es' ? 'Resultados del rastreo' : 'Tracking results'}`
        }
        color="white"
        className="leading-none"
      />
      {returnComponent()}
      <StickyTracking lang={lang} samePage observerActive={true} />
    </section>
  );
};
