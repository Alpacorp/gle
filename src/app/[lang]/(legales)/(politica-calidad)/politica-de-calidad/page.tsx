import { QualityPolicy } from "@legales/(politica-calidad)/politica-de-calidad/container/QualityPolicy";
import { Locale } from "@/i18n.config";

const QualityPolicyPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <QualityPolicy lang={params.lang} />;
};

export default QualityPolicyPage;
