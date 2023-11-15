export const getMetaTags = () => {
  const title: string = "G.L.E. Grupo Logístico Especializado";
  const account: string = "@glecolombia";
  return {
    authors: [{ name: account }],
    openGraph: {
      title,
      description: "Volamos para que llegues más rápido",
      url: "https://www.glecolombia.com/",
      type: "website",
      images: [
        {
          url: "/favicon.ico",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: title,
      locale: "es_CO",
    },
    twitter: {
      card: "summary",
      site: account,
      creator: account,
      title,
      description: "Volamos para que llegues más rápido",
      images: ["/favicon.ico"],
    },
  };
};
