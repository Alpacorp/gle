import { Pqrs } from "../pqrs/container/Pqrs";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Pqrs lang={params.lang} />;
};

export default BulkLoadPage;
