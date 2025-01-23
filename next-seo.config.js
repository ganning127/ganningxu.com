const title = "Ganning Xu";
const description =
  "Personal website for Ganning Xu, a Computer Science student at Georgia Tech.";

const SEO = {
  title,
  description,
  canonical: "https://www.ganning.me",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.ganning.me",
    title,
    description,
    images: [
      {
        url: "https://benjamincarlson.io/images/favicon.png",
        alt: title,
      },
    ],
  },
};

export default SEO;
