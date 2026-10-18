"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

// Swaps the locale prefix so visitors stay on the same page.
export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || `/${lang}`;
  const target: Locale = lang === "ar" ? "en" : "ar";
  const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${target}`);

  return (
    <Link href={href} className="lang-switch" hrefLang={target} lang={target}>
      {label}
    </Link>
  );
}
