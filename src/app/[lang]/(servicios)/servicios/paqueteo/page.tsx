import { Package } from "@servicios/servicios/paqueteo/container/Package";
import { Locale } from "@/i18n.config";

const PackagePage = async ({ params }: { params: { lang: Locale } }) => {
  return <Package lang={params.lang} />;
};

export default PackagePage;
