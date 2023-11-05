import { Locale } from "@/i18n.config";
import { Tracking } from "./container/Tracking";

const trackingPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Tracking lang={params.lang} />;
};

export default trackingPage;
