import type { Metadata } from "next";
import Link from "next/link";
import { VisaArt } from "@/components/Art";
import PageHero from "@/components/PageHero";
import { ArrowIcon, ServiceIcon } from "@/components/icons";
import { isLocale, languageAlternates, type Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

async function getLang(params: Props["params"]): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getLang(params);
  const t = getContent(lang).ui.servicesPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/services`, languages: languageAlternates("/services") },
  };
}

export default async function ServicesPage({ params }: Props) {
  const lang = await getLang(params);
  const c = getContent(lang);
  const t = c.ui.servicesPage;
  const visa = c.services.find((s) => s.slug === "visit-visa")!;

  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} titleA={t.titleA} titleEm={t.titleEm} text={t.text} crumbs={[{ label: c.ui.nav.services }]} />

      <section className="section-tight container">
        <h2 className="h-section">{t.listTitle}</h2>
        <div className="grid grid-3">
          {c.services.map((s) => (
            <Link key={s.slug} href={`/${lang}/services/${s.slug}`} className="card">
              <div className="icon"><ServiceIcon slug={s.slug} /></div>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="more">{c.ui.servicesSection.more} <ArrowIcon className="flip-rtl" /></span>
            </Link>
          ))}
        </div>

        <div className="banner banner-art banner-art-start">
          <VisaArt />
          <div className="banner-text">
            <h3>{t.bannerTitle}</h3>
            <p>{t.bannerText}</p>
            <a className="btn btn-primary btn-sm" href={whatsappLink(c.ui.wa.service(visa.title))} target="_blank" rel="noopener">
              {t.bannerCta} <ArrowIcon className="flip-rtl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
