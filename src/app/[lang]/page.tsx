import { getDictionary } from "@/src/lib/dictionary";
import HomePage from "./(inicio)/container";

import { Locale } from "@/i18n.config";

const HomeContainer = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);
  return (
    <main>
      <HomePage
        params={{
          lang,
        }}
      />
      <p>{page.home.description}</p>
    </main>
  );
};

export default HomeContainer;
