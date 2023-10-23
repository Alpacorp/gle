import { Pqrs } from "@legales/(pqrs)/pqrs/container/Pqrs";
import { Locale } from "@/i18n.config";

const PqrsPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Pqrs lang={params.lang} />;
};

export default PqrsPage;
