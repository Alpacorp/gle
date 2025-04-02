import { FC } from 'react';

import { CardTrackingInfo, InfoContainer } from '@rastreo/rastreo/components';

interface MainDataProps {
  dataTracking: {
    ESTADO: string;
    CODESTADO: string;
    CIUDADREMITENTE: string;
    CIUDAD: string;
    DIRECCION: string;
    BARRIO: string | null;
    DESTINATARIO: string;
    TELEFONO: string;
  };
  statusTrackingNumber: (code: number) => string;
  lang: string;
}

export const MainData: FC<MainDataProps> = ({
  dataTracking,
  statusTrackingNumber,
  lang,
}) => {
  return (
    <div className="flex flex-col border border-main-red rounded-xl p-3 mt-3">
      <InfoContainer>
        <CardTrackingInfo
          title={lang === 'es' ? 'Servicio:' : 'Service:'}
          detail={lang === 'es' ? 'Mensajería Expresa:' : 'Express Courier:'}
        />
        <CardTrackingInfo
          title={lang === 'es' ? 'Estado Actual:' : 'Current Status:'}
          detail={dataTracking?.ESTADO || ''}
          containerDetailClass={`flex items-center gap-3 w-fit py-1 px-2 rounded-md text-white font-poppins font-semibold ${statusTrackingNumber(
            Number(dataTracking?.CODESTADO) || 0
          )}`}
        />
      </InfoContainer>
      <InfoContainer>
        <CardTrackingInfo
          title={lang === 'es' ? 'Ciudad Origen:' : 'Origin City:'}
          detail={dataTracking?.CIUDADREMITENTE || ''}
          icon
        />
        <CardTrackingInfo
          title={lang === 'es' ? 'Ciudad Destino:' : 'Destination City:'}
          detail={dataTracking?.CIUDAD || ''}
          icon
        />
      </InfoContainer>
      <InfoContainer>
        <CardTrackingInfo
          title={lang === 'es' ? 'Dirección Destino:' : 'Destination Address:'}
          detail={dataTracking?.DIRECCION || ''}
        />
        <CardTrackingInfo
          title={lang === 'es' ? 'Barrio:' : 'Neighborhood:'}
          detail={dataTracking?.BARRIO || ''}
        />
      </InfoContainer>
      <InfoContainer showBottomBorder={false}>
        <CardTrackingInfo
          title={lang === 'es' ? 'Nombre Destinatario:' : 'Recipient Name:'}
          detail={dataTracking?.DESTINATARIO || ''}
        />
        <CardTrackingInfo
          title={lang === 'es' ? 'Contacto:' : 'Contact:'}
          detail={dataTracking?.TELEFONO || ''}
        />
      </InfoContainer>
    </div>
  );
};
