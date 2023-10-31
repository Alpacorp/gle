import { Locale } from "@/i18n.config";
import { Services } from "@servicios/servicios/container/Services";

const servicesPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Services lang={params.lang} />;
};

export default servicesPage;
