import { PrivacyPolicy } from "./container/PrivacyPolicy";
import { Locale } from "@/i18n.config";

const PrivacyPolicyPage = async ({ params }: { params: { lang: Locale } }) => {
  return <PrivacyPolicy lang={params.lang} />;
};

export default PrivacyPolicyPage;
