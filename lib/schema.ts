import { BUSINESS, COMUNAS_RM, FAQ_ITEMS, SITE_URL } from "@/lib/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: BUSINESS.name,
    image: `${SITE_URL}/opengraph-image`,
    url: SITE_URL,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    priceRange: "$$",
    areaServed: COMUNAS_RM.map((comuna) => ({
      "@type": "AdministrativeArea",
      name: comuna,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [BUSINESS.facebookUrl, BUSINESS.instagramUrl],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };
}
