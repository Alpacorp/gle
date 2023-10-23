import { PrivacyPolicy } from "@legales/(aviso-de-privacidad)/aviso-de-privacidad/container/PrivacyPolicy";
import { Locale } from "@/i18n.config";

const PrivacyPolicyPage = async ({ params }: { params: { lang: Locale } }) => {
  return <PrivacyPolicy lang={params.lang} />;
};

export default PrivacyPolicyPage;
