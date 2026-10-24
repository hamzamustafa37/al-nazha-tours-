import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site";
import { HeroArt } from "./Art";

type Props = {
  lang: Locale;
  eyebrow: string;
  titleA: string;
  titleEm?: string;
  text: string;
  // Trail after "Home"; the last item is the current page.
  crumbs: { label: string; href?: string }[];
  children?: React.ReactNode;
};

export default function PageHero({ lang, eyebrow, titleA, titleEm, text, crumbs, children }: Props) {
  const t = getContent(lang).ui.nav;
  return (
    <>
      <section className="hero hero-inner">
        <HeroArt />
        <div className="container hero-content">
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {titleA} {titleEm && <em>{titleEm}</em>}
          </h1>
          <p className="lead">{text}</p>
          {children}
        </div>
      </section>
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`/${lang}`}>{t.home}</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="sep" aria-hidden="true">›</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </>
  );
}
