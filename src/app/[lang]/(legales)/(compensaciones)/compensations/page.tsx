import { Compensations } from "@legales/(compensaciones)/compensaciones/container/Compensations";
import { Locale } from "@/i18n.config";

const CompensationsPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Compensations lang={params.lang} />;
};

export default CompensationsPage;
