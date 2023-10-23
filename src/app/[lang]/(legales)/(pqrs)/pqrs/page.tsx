import { Pqrs } from "./container/Pqrs";
import { Locale } from "@/i18n.config";

const ProhibitedTransportPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <Pqrs lang={params.lang} />;
};

export default ProhibitedTransportPage;
