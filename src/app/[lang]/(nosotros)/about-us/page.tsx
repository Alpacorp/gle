import { Ours } from "@nosotros/nosotros/container/Ours";

import { Locale } from "@/i18n.config";

const usPage = async ({ params }: { params: { lang: Locale } }) => {
  return <Ours lang={params.lang} />;
};

export default usPage;
