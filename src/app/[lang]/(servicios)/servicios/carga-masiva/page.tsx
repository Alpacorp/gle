import { BulkCargo } from "./container/BulkCargo";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <BulkCargo lang={params.lang} />;
};

export default BulkLoadPage;
