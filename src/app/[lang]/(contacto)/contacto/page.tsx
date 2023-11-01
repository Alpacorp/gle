import { Contact } from "@contacto/contacto/container/Contact";
import { Locale } from "@/i18n.config";

const ContactPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Contact lang={params.lang} />;
};

export default ContactPage;
