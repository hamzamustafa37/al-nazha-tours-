import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { isLocale, languageAlternates, locales } from "@/lib/i18n";
import { SITE_URL, business, getContent, serviceSlugs, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => serviceSlugs.map((slug) => ({ lang, slug })));
}

async function resolve(params: Props["params"]) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return null;
  const c = getContent(lang);
  const s = c.services.find((x) => x.slug === slug);
  return s ? { lang, c, s } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  const { lang, c, s } = r;
  const path = `/services/${s.slug}`;
  const title = `${s.title} ${c.ui.servicePage.titleSuffix}`;
  return {
    title,
    description: `${s.short} ${c.name} — ${c.address.cityLine} · ${business.mobile}`,
    keywords: s.keywords,
    alternates: { canonical: `/${lang}${path}`, languages: languageAlternates(path) },
    openGraph: { title: `${title} | ${c.name}`, description: s.short, url: `/${lang}${path}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const r = await resolve(params);
  if (!r) notFound();
  const { lang, c, s } = r;
  const t = c.ui.servicePage;
  const url = `${SITE_URL}/${lang}/services/${s.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.intro,
      serviceType: s.title,
      inLanguage: lang,
      areaServed: "United Arab Emirates",
      provider: { "@id": `${SITE_URL}/#agency` },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: `${SITE_URL}/${lang}` },
        { "@type": "ListItem", position: 2, name: s.title, item: url },
      ],
    },
  ];

  const others = c.services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>{t.home}</Link> / <span>{s.title}</span>
          </nav>
          <h1>{s.title}</h1>
          <p>{s.intro}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={whatsappLink(c.ui.wa.service(s.title))} target="_blank" rel="noopener">
              <WhatsAppIcon /> {t.enquire}
            </a>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container two-col">
          <div>
            <span className="eyebrow">{t.includedEyebrow}</span>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,34px)", marginBottom: 28 }}>{t.includedTitle}</h2>
            <ul className="checklist">
              {s.includes.map((i) => (
                <li key={i}><CheckIcon /> {i}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 20 }}>{t.quoteTitle}</h3>
            <ContactForm lang={lang} defaultService={s.title} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.moreEyebrow}</span>
            <h2>{t.moreTitle}</h2>
          </div>
          <div className="grid grid-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/${lang}/services/${o.slug}`} className="card">
                <h3>{o.title}</h3>
                <p>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
