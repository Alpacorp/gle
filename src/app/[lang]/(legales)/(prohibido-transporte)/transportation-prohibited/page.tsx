import { Locale } from "@/i18n.config";
import { ProhibitedTransportShipments } from "@legales/(prohibido-transporte)/prohibido-transporte/container/ProhibitedTransportShipments";

const ProhibitedTransportPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <ProhibitedTransportShipments lang={params.lang} />;
};

export default ProhibitedTransportPage;
