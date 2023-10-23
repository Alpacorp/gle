import { TermsConditions } from "./container/TermsConditions";
import { Locale } from "@/i18n.config";

const TermsConditionsPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <TermsConditions lang={params.lang} />;
};

export default TermsConditionsPage;
