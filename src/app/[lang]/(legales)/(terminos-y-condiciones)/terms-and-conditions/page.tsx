import { TermsConditions } from "../terminos-y-condiciones/container/TermsConditions";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <TermsConditions lang={params.lang} />;
};

export default BulkLoadPage;
