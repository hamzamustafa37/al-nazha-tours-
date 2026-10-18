"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/site";

export default function NotFound() {
  const lang = usePathname()?.startsWith("/ar") ? "ar" : "en";
  const t = getContent(lang).ui.notFound;
  return (
    <section className="page-head">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>{t.title}</h1>
        <p>{t.text}</p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href={`/${lang}`}>{t.back}</Link>
        </div>
      </div>
    </section>
  );
}
