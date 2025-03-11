import { BacklogShipments } from "@legales/(envios-rezago)/envios-en-rezago/container/BacklogShipments";
import { Locale } from "@/i18n.config";

const BacklogShipmentsPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <BacklogShipments lang={params.lang} />;
};

export default BacklogShipmentsPage;
