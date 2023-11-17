import { Locale } from "@/i18n.config";
import { NotFound } from "./container/NotFound";

const PqrsPage = async ({ params }: { params: { lang: Locale } }) => {
  return <NotFound lang={params.lang} />;
};

export default PqrsPage;
