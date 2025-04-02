import { FC } from 'react';

import { CardTrackingInfo } from '@rastreo/rastreo/components';

import { DataTracking } from '@rastreo/rastreo/interfaces/tracking';

interface HistoryTrackingProps {
  dataTracking: DataTracking;
  formatDate: (date: string) => string;
  statusTrackingNumber: (code: number) => string;
}

export const HistoryTracking: FC<HistoryTrackingProps> = ({
  dataTracking,
  formatDate,
  statusTrackingNumber,
}) => {
  return (
    <ul
      className={`flex flex-1 justify-center mx-auto flex-col bg-third-gray p-2 items-center rounded-xl w-auto max-w-[45.625rem]`}
    >
      {dataTracking?.get_movimientos?.map((status, index) => (
        <li
          className="relative flex flex-col justify-center items-center gap-1 pb-4 w-full"
          key={status.creado}
        >
          <span
            className={`absolute left-0 top-0 w-8 h-8 bg-white rounded-full z-10 border-2 border-black flex items-center justify-center hover:animate-heartbeat-effect`}
          >{`${index + 1}`}</span>
          {index === dataTracking?.get_movimientos.length - 1 ? (
            ''
          ) : (
            <div
              className={`absolute left-4 w-[0.125rem] h-full bg-black ${
                index === 0 && 'top-4'
              }`}
            />
          )}

          <CardTrackingInfo
            detail={status.Estado}
            detailClass="normal-case"
            containerDetailClass={`max-w-[12.5rem] w-full text-center py-1 px-2 rounded-md text-white font-poppins font-semibold ${statusTrackingNumber(
              Number(status?.codEstado)
            )}`}
          />
          <CardTrackingInfo
            detail={formatDate(status?.creado)}
            detailClass="font-semibold"
          />
          <p className="max-[480px]:text-sm max-w-[12.5rem] w-full text-center font-light">
            {status?.Novedad}
          </p>
          <p className="max-[480px]:text-sm max-w-[12.5rem] w-full text-center">
            {status?.ANOTACION}
          </p>
          <hr className="max-w-sm w-52 border-1 border-black" />
        </li>
      ))}
    </ul>
  );
};
