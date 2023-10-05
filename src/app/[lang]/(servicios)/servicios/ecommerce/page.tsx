import { Ecommerce } from "./container/Ecommerce";
import { Locale } from "@/i18n.config";

const EcommercePage = async ({ params }: { params: { lang: Locale } }) => {
  return <Ecommerce lang={params.lang} />;
};

export default EcommercePage;
