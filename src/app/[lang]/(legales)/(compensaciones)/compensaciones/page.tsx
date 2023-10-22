import { Compensations } from "./container/Compensations";
import { Locale } from "@/i18n.config";

const ProhibitedTransportPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <Compensations lang={params.lang} />;
};

export default ProhibitedTransportPage;
