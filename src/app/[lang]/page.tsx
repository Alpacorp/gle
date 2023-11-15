import HomePage from "@inicio/container";
import { Locale } from "@/i18n.config";

const HomeContainer = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  return (
    <main>
      <HomePage
        params={{
          lang,
        }}
      />
    </main>
  );
};

export default HomeContainer;
