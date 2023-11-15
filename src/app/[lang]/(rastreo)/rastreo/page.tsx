import { Tracking } from "@rastreo/rastreo/container/Tracking";
import { Locale } from "@/i18n.config";

const trackingPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Tracking lang={params.lang} />;
};

export default trackingPage;
