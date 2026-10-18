import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { isLocale, languageAlternates, type Locale } from "@/lib/i18n";
import { business, getContent } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

async function getLang(params: Props["params"]): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getLang(params);
  const t = getContent(lang).ui.contactPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/contact`, languages: languageAlternates("/contact") },
  };
}

export default async function ContactPage({ params }: Props) {
  const lang = await getLang(params);
  const c = getContent(lang);
  const t = c.ui.contactPage;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&hl=${lang}&output=embed`;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
        </div>
      </section>

      <section className="container two-col">
        <div>
          <dl className="info-list">
            <div><dt>{t.mobile}</dt><dd><a href={business.mobileHref} dir="ltr">{business.mobile}</a></dd></div>
            <div><dt>{t.tel}</dt><dd><a href={business.phoneHref} dir="ltr">{business.phone}</a></dd></div>
            <div><dt>{t.email}</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
            <div>
              <dt>{t.office}</dt>
              <dd>
                {c.address.street}<br />
                {c.address.cityLine}<br />
                {c.address.poBox}
              </dd>
            </div>
          </dl>
          <iframe className="map" src={mapSrc} title={t.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="card">
          <h2 style={{ fontSize: 24, marginBottom: 20 }}>{t.formTitle}</h2>
          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
