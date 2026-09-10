const origin = "https://felipe-gonzalez.com";

export default {
  t: (data) => (data.lang === "en" ? data.en : data.es),
  canonical: (data) => origin + (data.lang === "en" ? "/en/" : "/"),
  ogLocale: (data) => (data.lang === "en" ? "en_US" : "es_CO"),
  personJsonLd: (data) => {
    if (!data.es || !data.en) return null;
    const t = data.lang === "en" ? data.en : data.es;
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Felipe Gonzalez",
      url: origin + (data.lang === "en" ? "/en/" : "/"),
      image: origin + "/img/og.png",
      jobTitle: "Tech Lead",
      worksFor: {
        "@type": "Organization",
        name: "Grupo ilao",
        url: "https://www.grupoilao.com/",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Militar Nueva Granada",
      },
      knowsAbout: ["Python", "Django", "PostgreSQL", "HTMX", "Engineering leadership"],
      sameAs: t.contact.links
        .filter((link) => link.href.startsWith("http"))
        .map((link) => link.href),
      email: "mailto:felipe3dfx@gmail.com",
    };
  },
};
