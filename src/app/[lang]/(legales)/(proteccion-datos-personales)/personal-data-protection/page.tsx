import { PrivacyPolicy } from "@legales/(proteccion-datos-personales)/proteccion-datos-personales/container/PrivacyPolicy";
import { Locale } from "@/i18n.config";

const PrivacyPolicyPage = async ({ params }: { params: { lang: Locale } }) => {
  return <PrivacyPolicy lang={params.lang} />;
};

export default PrivacyPolicyPage;
