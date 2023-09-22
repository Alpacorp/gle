/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "es", "en-US"],
    defaultLocale: "default",
    localeDetection: true,
  },
  trailingSlash: false,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/nosotros": { page: "/nosotros" },
      "/contacto": { page: "/contacto" },
    };
  },
};

module.exports = nextConfig;
