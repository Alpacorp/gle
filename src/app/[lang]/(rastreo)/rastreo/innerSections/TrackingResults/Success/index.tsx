import {
  HeaderTracking,
  HistoryTracking,
  MainData,
} from '@/src/app/[lang]/(rastreo)/rastreo/innerSections';
import { DataTracking } from '@/src/app/[lang]/(rastreo)/rastreo/interfaces/tracking';
import { ArrowCta } from '@/src/app/ui/components';
import StickyTracking from '@/src/app/ui/components/StickyTracking';
import { FC } from 'react';

interface SuccessProps {
  dataTracking: DataTracking | null;
  formatDate: (date: string) => string;
  statusTrackingNumber: (code: number) => string;
  lang: string;
}

export const Success: FC<SuccessProps> = ({
  dataTracking,
  formatDate,
  statusTrackingNumber,
  lang,
}) => {
  return (
    <section className="flex justify-center items-center font-poppins mt-12 mx-5">
      <div className="max-w-md w-full">
        <HeaderTracking dataTracking={dataTracking ?? ''} />
        <MainData
          dataTracking={dataTracking ?? ''}
          statusTrackingNumber={statusTrackingNumber}
          lang={lang}
        />
        <div className="flex flex-col justify-center items-center gap-3 text-2xl font-semibold my-5">
          <h2>{lang === 'es' ? 'Historial de rastreo' : 'Tracking history'}</h2>
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
      <StickyTracking lang={lang} samePage />
    </section>
  );
};
