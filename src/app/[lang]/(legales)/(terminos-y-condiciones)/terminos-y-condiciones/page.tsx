import { TermsConditions } from "./container/TermsConditions";
import { Locale } from "@/i18n.config";

const ProhibitedTransportPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <TermsConditions lang={params.lang} />;
};

export default ProhibitedTransportPage;
