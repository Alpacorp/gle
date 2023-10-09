import { usePathname, useRouter } from "next/navigation";

import allLinks from "@routes/allLinks.json";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

const useChangeLanguageRoutes = ({ lang }: LangInterface) => {
  const pathname = usePathname();
  const router = useRouter();

  const langPrefix = lang === "es" ? "/es" : "/en";

  const changeLanguage = () => {
    const route = allLinks.find(
      (item) =>
        item.linkEs === pathname.replace(langPrefix, "") ||
        item.linkEn === pathname.replace(langPrefix, "")
    );

    if (route) {
      const newLangPath = lang === "es" ? route.linkEn : route.linkEs;
      const newLangPrefix = lang === "es" ? "/en" : "/es";
      router.push(`${newLangPrefix}${newLangPath}`);
    } else {
      router.push(lang === "es" ? "/en" : "/es");
    }

    changeLanguageSubRoutes();
  };

  const changeLanguageSubRoutes = () => {
    const subRoute = allLinks.find(
      (item) =>
        item.submenu?.find(
          (subitem) =>
            subitem.linkSubEs === pathname.replace(langPrefix, "") ||
            subitem.linkSubEn === pathname.replace(langPrefix, "")
        ) !== undefined
    );

    if (subRoute) {
      const subRouteSubmenu = subRoute.submenu?.find(
        (subitem) =>
          subitem.linkSubEs === pathname.replace(langPrefix, "") ||
          subitem.linkSubEn === pathname.replace(langPrefix, "")
      );

      if (subRouteSubmenu) {
        const newLangPath =
          lang === "es" ? subRouteSubmenu.linkSubEn : subRouteSubmenu.linkSubEs;
        const newLangPrefix = lang === "es" ? "/en" : "/es";
        router.push(`${newLangPrefix}${newLangPath}`);
      } else {
        router.push(lang === "es" ? "/en" : "/es");
      }
    }
  };

  return { changeLanguage };
};

export default useChangeLanguageRoutes;
