import { Services } from "./container/Services";
import { Locale } from "@/i18n.config";

const servicesPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Services lang={params.lang} />;
};

export default servicesPage;
