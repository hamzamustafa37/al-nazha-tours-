import Link from "next/link";
import { HeroArt } from "@/components/Art";
import PackageCard from "@/components/PackageCard";
import SearchBar from "@/components/SearchBar";
import { ArrowIcon, PlaneIcon, ServiceIcon } from "@/components/icons";
import { isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang: raw } = await params;
  const lang = (isLocale(raw) ? raw : "en") as Locale;
  const c = getContent(lang);
  const t = c.ui;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="hero hero-home">
        <HeroArt />
        <div className="container hero-content">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>
            {t.hero.h1a}
            <br />
            <em>{t.hero.h1em}</em>
          </h1>
          <p className="lead">{t.hero.lead}</p>
        </div>
      </section>
      <div className="container search-wrap">
        <SearchBar lang={lang} />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-row">
            <div>
              <h2>{t.home.destTitle}</h2>
              <p>{t.home.destText}</p>
            </div>
            <Link href={`/${lang}/packages`} className="link-more">
              {t.home.viewAll} <ArrowIcon className="flip-rtl" />
            </Link>
          </div>
          <div className="dest-grid">
            {c.packages.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/${lang}/packages`}>
                <PackageCard lang={lang} pkg={p} compact />
              </Link>
            ))}
          </div>

          <div className="tile-grid">
            {c.services.map((s) => (
              <Link key={s.slug} href={`/${lang}/services/${s.slug}`} className="tile">
                <ServiceIcon slug={s.slug} />
                <strong>{s.title}</strong>
                <span>{s.tag}</span>
              </Link>
            ))}
          </div>

          <div className="banner">
            <PlaneIcon className="banner-icon" />
            <div>
              <h3>{t.home.dealTitle}</h3>
              <p>{t.home.dealText}</p>
            </div>
            <Link className="btn btn-primary" href={`/${lang}/packages`}>
              {t.home.dealCta} <ArrowIcon className="flip-rtl" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container two-col">
          <div className="section-head">
            <span className="eyebrow">{t.stepsSection.eyebrow}</span>
            <h2>{t.stepsSection.title}</h2>
            <p>{t.stepsSection.text}</p>
          </div>
          <div className="steps">
            {c.steps.map((s) => (
              <div key={s.title} className="step">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.faqSection.eyebrow}</span>
            <h2>{t.faqSection.title}</h2>
          </div>
          <div className="faq">
            {c.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>
    </>
  );
}
