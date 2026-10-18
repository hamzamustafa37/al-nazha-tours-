import Link from "next/link";
import { ArrowIcon, CheckIcon, PhoneIcon, ServiceIcon, WhatsAppIcon } from "@/components/icons";
import { isLocale, type Locale } from "@/lib/i18n";
import { business, getContent, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang: raw } = await params;
  const lang = (isLocale(raw) ? raw : "en") as Locale;
  const c = getContent(lang);
  const t = c.ui;
  const umrah = c.services[0];

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
      <section className="hero">
        <div className="container">
          <p className="hero-alt" lang={lang === "ar" ? "en" : "ar"}>{c.altName}</p>
          <h1>
            {t.hero.h1a}<em>{t.hero.h1em}</em>{t.hero.h1b}
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={whatsappLink(t.wa.general)} target="_blank" rel="noopener">
              <WhatsAppIcon /> {t.hero.cta}
            </a>
            <a className="btn btn-ghost" href={business.mobileHref}>
              <PhoneIcon /> <span dir="ltr">{business.mobile}</span>
            </a>
          </div>
          <div className="hero-meta">
            {t.hero.meta.map(([strong, rest]) => (
              <span key={strong}><strong>{strong}</strong> {rest}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.servicesSection.eyebrow}</span>
            <h2>{t.servicesSection.title}</h2>
            <p>{t.servicesSection.text}</p>
          </div>
          <div className="grid grid-3">
            {c.services.map((s) => (
              <Link key={s.slug} href={`/${lang}/services/${s.slug}`} className="card">
                <div className="icon"><ServiceIcon slug={s.slug} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="more">{t.servicesSection.more}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature">
            <div>
              <span className="eyebrow">{t.umrahSection.eyebrow}</span>
              <h2>{t.umrahSection.title}</h2>
              <p>{umrah.intro}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={whatsappLink(t.wa.umrah)} target="_blank" rel="noopener">
                  <WhatsAppIcon /> {t.umrahSection.cta}
                </a>
                <Link className="btn btn-ghost" href={`/${lang}/services/${umrah.slug}`}>
                  {t.umrahSection.details} <ArrowIcon className="flip-rtl" />
                </Link>
              </div>
            </div>
            <ul className="checklist">
              {umrah.includes.map((i) => (
                <li key={i}><CheckIcon /> {i}</li>
              ))}
            </ul>
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

      <section className="container">
        <div className="cta">
          <h2>{t.ctaSection.title}</h2>
          <p>{t.ctaSection.text}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={whatsappLink(t.wa.general)} target="_blank" rel="noopener">
              <WhatsAppIcon /> {t.ctaSection.whatsapp}
            </a>
            <Link className="btn btn-ghost" href={`/${lang}/contact`}>{t.ctaSection.visit}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
