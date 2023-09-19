import { getDictionary } from "@/src/lib/dictionary";

import { Locale } from "@/i18n.config";
import HomePage from "./(inicio)/container";

const HomeContainer = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);
  return (
    <main>
      <HomePage />
      <p>{page.home.description}</p>
    </main>
  );
};

export default HomeContainer;
