'use client';

import { NextPage } from 'next';

import StickyTracking from '@ui/components/StickyTracking';
import { HeroPages, LoadingTracking } from '@ui/components';

import { LangInterface } from '@constans/interfaces/langInterface';

import { formatDate } from '@utils/formatDate';

import { DataTracking } from '@/src/app/[lang]/(rastreo)/rastreo/interfaces/tracking';

import {
  Empty,
  Failed,
  Success,
} from '@/src/app/[lang]/(rastreo)/rastreo/innerSections/';

interface Props extends LangInterface {
  dataTracking?: DataTracking;
  trackingId?: string;
  status: 'empty' | 'error' | 'success';
}

export const Tracking: NextPage<Props> = ({ lang, dataTracking, status, trackingId }) => {

  const returnComponent = () => {
    if (status === 'empty') return <Empty lang={lang} />;
    if (status === 'error') return <Failed lang={lang} trackingId={trackingId ?? ''} />;
    if (status === 'success' && dataTracking) {
      return (
        <Success
          dataTracking={dataTracking}
          formatDate={formatDate}
          statusTrackingNumber={(status: number) => {
            if (status % 2 === 0) return 'bg-gray-500';
            if (status === 1) return 'bg-main-green';
            return 'bg-red-500';
          }}
          lang={lang}
        />
      );
    }
    return <LoadingTracking />;
  };

  return (
    <section>
      <HeroPages
        pageTitle={
          status === 'empty'
            ? lang === 'es'
              ? 'Rastrea tu envío'
              : 'Track your shipment'
            : lang === 'es'
              ? 'Resultados del rastreo'
              : 'Tracking results'
        }
        color="white"
        className="leading-none"
      />
      {returnComponent()}
      <StickyTracking lang={lang} samePage observerActive={true} />
    </section>
  );
};
