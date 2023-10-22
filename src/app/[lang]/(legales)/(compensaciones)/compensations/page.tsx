import { Compensations } from "../compensaciones/container/Compensations";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Compensations lang={params.lang} />;
};

export default BulkLoadPage;
