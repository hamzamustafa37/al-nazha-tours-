import type { Metadata } from "next";
import { HeroArt } from "@/components/Art";
import PageHero from "@/components/PageHero";
import { ArrowIcon, CheckIcon, EyeIcon, SparkIcon, TargetIcon } from "@/components/icons";
import { isLocale, languageAlternates, type Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

async function getLang(params: Props["params"]): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getLang(params);
  const t = getContent(lang).ui.aboutPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/about`, languages: languageAlternates("/about") },
  };
}

export default async function AboutPage({ params }: Props) {
  const lang = await getLang(params);
  const c = getContent(lang);
  const t = c.ui.aboutPage;
  const a = c.about;

  return (
    <>
      <PageHero lang={lang} eyebrow={t.eyebrow} titleA={t.titleA} titleEm={t.titleEm} text={t.text} crumbs={[{ label: c.ui.nav.about }]} />

      <section className="section-tight container">
        <div className="two-col">
          <div>
            <h2 className="h-section">{a.whoTitle}</h2>
            <p className="prose">{a.whoText}</p>
            <div className="stats">
              {a.stats.map((s) => (
                <div key={s.label}>
                  <SparkIcon />
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mv">
            <div>
              <TargetIcon />
              <div>
                <h3>{a.missionTitle}</h3>
                <p>{a.missionText}</p>
              </div>
            </div>
            <div>
              <EyeIcon />
              <div>
                <h3>{a.visionTitle}</h3>
                <p>{a.visionText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner banner-art">
          <HeroArt id="why" />
          <div className="banner-text">
            <h3>{a.whyTitle}</h3>
            <ul className="checklist">
              {a.why.map((w) => (
                <li key={w}><CheckIcon /> {w}</li>
              ))}
            </ul>
            <a className="btn btn-primary btn-sm" href={whatsappLink(c.ui.wa.general)} target="_blank" rel="noopener">
              {a.whyCta} <ArrowIcon className="flip-rtl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
