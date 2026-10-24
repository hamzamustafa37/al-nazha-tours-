import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
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
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.mapQuery)}`;

  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} titleA={t.titleA} titleEm={t.titleEm} text={t.text} crumbs={[{ label: c.ui.nav.contact }]} />

      <section className="section-tight container two-col">
        <div>
          <ul className="contact-list">
            <li>
              <WhatsAppIcon />
              <div>
                <span>{t.mobile}</span>
                <a href={business.mobileHref} dir="ltr">{business.mobile}</a>
              </div>
            </li>
            <li>
              <PhoneIcon />
              <div>
                <span>{t.tel}</span>
                <a href={business.phoneHref} dir="ltr">{business.phone}</a>
              </div>
            </li>
            <li>
              <MailIcon />
              <div>
                <span>{t.email}</span>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </li>
            <li>
              <PinIcon />
              <div>
                <span>{t.office}</span>
                <p>
                  {c.address.street}<br />
                  {c.address.cityLine}<br />
                  {c.address.poBox}
                </p>
              </div>
            </li>
          </ul>
          <div className="map-wrap">
            <iframe className="map" src={mapSrc} title={t.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className="btn btn-navy btn-sm" href={directions} target="_blank" rel="noopener">
              {t.directions} <ArrowIcon className="flip-rtl" />
            </a>
          </div>
        </div>
        <div className="card form-card">
          <h2>{t.formTitle}</h2>
          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
