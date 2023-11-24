import { FC } from "react";

import { CardTrackingInfo, InfoContainer } from "@rastreo/rastreo/components";

interface MainDataProps {
  dataTracking: any;
  statusTrackingNumber: (code: number) => string;
}

export const MainData: FC<MainDataProps> = ({
  dataTracking,
  statusTrackingNumber,
}) => {
  return (
    <div className="flex flex-col border border-main-red rounded-xl p-3 my-3">
      <InfoContainer>
        <CardTrackingInfo title="Servicio" detail="Mensajería Expresa" />
        <CardTrackingInfo
          title="Estado Actual"
          detail={dataTracking?.StatusDelivery[0].Status || ""}
          containerDetailClass={`flex items-center gap-3 w-fit py-1 px-2 rounded-md text-white font-poppins font-semibold ${statusTrackingNumber(
            dataTracking?.StatusDelivery[12].Code || 0
          )}`}
        />
      </InfoContainer>
      <InfoContainer>
        <CardTrackingInfo
          title="Ciudad Origen"
          detail={dataTracking?.ShipFromCity || ""}
          icon
        />
        <CardTrackingInfo
          title="Ciudad Destino"
          detail={dataTracking?.ShipToCity || ""}
          icon
        />
      </InfoContainer>
      <InfoContainer>
        <CardTrackingInfo
          title="Dirección Destino"
          detail={dataTracking?.ShipToAddress || ""}
        />
        <CardTrackingInfo
          title="Barrio"
          detail={dataTracking?.ShipToNeighborhood || ""}
        />
      </InfoContainer>
      <InfoContainer showBottomBorder={false}>
        <CardTrackingInfo
          title="Nombre Destinatario"
          detail={dataTracking?.ShipToName || ""}
        />
        <CardTrackingInfo
          title="Contacto Destinatario"
          detail={dataTracking?.ShipToPhoneNumber || ""}
        />
      </InfoContainer>
    </div>
  );
};
