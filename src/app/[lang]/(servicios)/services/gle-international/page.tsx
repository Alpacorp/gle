import { International } from "@servicios/servicios/gle-internacional/container/International";
import { Locale } from "@/i18n.config";

const InternationalPage = async ({ params }: { params: { lang: Locale } }) => {
  return <International lang={params.lang} />;
};

export default InternationalPage;
