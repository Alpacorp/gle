import { ProhibitedTransportShipments } from "./container/ProhibitedTransportShipments";
import { Locale } from "@/i18n.config";

const ProhibitedTransportPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <ProhibitedTransportShipments lang={params.lang} />;
};

export default ProhibitedTransportPage;
