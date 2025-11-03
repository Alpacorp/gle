import { NextPage } from "next";
import { redirect } from 'next/navigation';
import { Locale } from "@/i18n.config";

import { config } from '@src/lib/config/env';
import { flags } from '@src/lib/config/flags';

import { Tracking } from '@rastreo/rastreo/container/Tracking';
import { ApiResponse, DataTracking } from '@rastreo/rastreo/interfaces/tracking';

interface TrackingPageProps {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
}

const TrackingPage: NextPage<TrackingPageProps> = async ({ params, searchParams }) => {
  if (!flags.trackingEnabled) {
    return redirect(`/${params.lang}`);
  }
  const trackingId = searchParams['tracking-id'];

  if (!trackingId || typeof trackingId !== 'string' || trackingId.trim() === '') {
    return (
      <Tracking lang={params.lang} status="empty" />
    );
  }

  try {
    const res = await fetch(`${config.BASE_URL}/api/tracking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ remesa: trackingId }),
      cache: 'no-store',
    });

    const result: ApiResponse<DataTracking[]> = await res.json();

    if (result.status === 'fail' || result.data.length === 0) {
      return (
        <Tracking lang={params.lang} status="error" trackingId={trackingId} />
      );
    }

    return (
      <Tracking
        lang={params.lang}
        dataTracking={result.data[0]}
        trackingId={trackingId}
        status="success"
      />
    );
  } catch {
    return (
      <Tracking lang={params.lang} status="error" trackingId={trackingId} />
    );
  }
};

export default TrackingPage;

