import { Locale } from "@/i18n.config";
import { ContactEmail } from "@/src/emails/ContactEmail";

const PqrsPage = async ({ params }: { params: { lang: Locale } }) => {
  return <ContactEmail lang={params.lang} />;
};

export default PqrsPage;
