import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { DataTracking } from '@rastreo/rastreo/interfaces/tracking';

import dataTest from '@rastreo/rastreo/dataTest/data.json';

export const useTrackingResults = () => {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get('tracking-id');

  const [dataTracking, setDataTracking] = useState<DataTracking>();
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyTrackingId = () => {
    if (
      !trackingId ||
      trackingId.length < 1 ||
      trackingId.length === 0 ||
      trackingId === ''
    ) {
      setEmpty(true);
    }
  };

  const getTracking = async () => {
    verifyTrackingId();
    const trackingNumber = trackingId;
    const sendTracking = await fetch('/api/tracking', {
      method: 'POST',
      body: JSON.stringify({
        remesa: trackingNumber,
      }),
    });

    // const response = await sendTracking.json();
    const response = dataTest;

    // if (response.code === 404 && response.status === 'fail') {
    //   setError(true);
    //   return;
    // }

    if (response) setDataTracking(response);
    setLoading(false);
  };

  const statusTracking = (status: string) => {
    switch (status) {
      case 'ENTREGADO':
        return 'bg-green-500';
      case 'EN TRÁNSITO':
        return 'bg-yellow-500';
      case 'PENDIENTE':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const statusTrackingNumber = (status: number) => {
    if (status % 2 === 0) {
      return 'bg-gray-500';
    }
    if (status === 1) {
      return 'bg-main-green';
    }
    return 'bg-red-500';
  };

  return {
    dataTracking,
    empty,
    error,
    getTracking,
    loading,
    statusTracking,
    statusTrackingNumber,
    trackingId,
    verifyTrackingId,
  };
};
