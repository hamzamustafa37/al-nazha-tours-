import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL, serviceSlugs } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry[] =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])) },
    }));

  return [
    ...page("", 1, "weekly"),
    ...page("/contact", 0.7, "yearly"),
    ...serviceSlugs.flatMap((slug) => page(`/services/${slug}`, slug === "umrah-packages" ? 0.9 : 0.8, "monthly")),
  ];
}
