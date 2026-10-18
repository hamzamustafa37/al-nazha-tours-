export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dir = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

// hreflang alternates for a path without locale prefix, e.g. "" or "/contact"
export function languageAlternates(path: string) {
  return {
    en: `/en${path}`,
    ar: `/ar${path}`,
    "x-default": `/en${path}`,
  };
}
