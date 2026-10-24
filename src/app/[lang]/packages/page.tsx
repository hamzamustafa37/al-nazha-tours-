import type { Metadata } from "next";
import PackageCard from "@/components/PackageCard";
import PackageFilter from "@/components/PackageFilter";
import PageHero from "@/components/PageHero";
import { ArrowIcon, SparkIcon } from "@/components/icons";
import { isLocale, languageAlternates, type Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

async function getLang(params: Props["params"]): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getLang(params);
  const t = getContent(lang).ui.packagesPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/packages`, languages: languageAlternates("/packages") },
  };
}

export default async function PackagesPage({ params }: Props) {
  const lang = await getLang(params);
  const c = getContent(lang);
  const t = c.ui.packagesPage;

  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} titleA={t.titleA} titleEm={t.titleEm} text={t.text} crumbs={[{ label: c.ui.nav.packages }]} />

      <section className="section-tight container">
        <PackageFilter labels={t.filters}>
          {c.packages.map((p) => (
            <div key={p.slug} data-region={p.region}>
              <PackageCard lang={lang} pkg={p} />
            </div>
          ))}
        </PackageFilter>

        <div className="banner">
          <SparkIcon className="banner-icon" />
          <div>
            <h3>{t.customTitle}</h3>
            <p>{t.customText}</p>
          </div>
          <a className="btn btn-primary" href={whatsappLink(c.ui.wa.custom)} target="_blank" rel="noopener">
            {t.customCta} <ArrowIcon className="flip-rtl" />
          </a>
        </div>
      </section>
    </>
  );
}
