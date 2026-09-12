import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/cerrajero-en-santiago", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/cerraduras-digitales", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/testimonios-de-confianza", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/cerrajero-a-domicilio", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/cerrajeria-a-domicilio", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
