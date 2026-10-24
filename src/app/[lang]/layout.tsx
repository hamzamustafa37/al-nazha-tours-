import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cairo, Poppins } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/icons";
import { dir, isLocale, languageAlternates, locales } from "@/lib/i18n";
import { SITE_URL, business, getContent, whatsappLink } from "@/lib/site";
import "../globals.css";

const sans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const arabic = Cairo({ subsets: ["arabic"], weight: ["400", "600", "700"], variable: "--font-arabic" });

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${c.name} | ${c.tagline}`,
      template: `%s | ${c.name}`,
    },
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: `/${lang}`, languages: languageAlternates("") },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_AE" : "en_AE",
      alternateLocale: lang === "ar" ? "en_AE" : "ar_AE",
      siteName: c.name,
      url: `/${lang}`,
      title: `${c.name} — ${c.tagline}`,
      description: c.description,
      images: [{ url: "/logo.png", width: 660, height: 300, alt: c.name }],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = { themeColor: "#1e3a8a" };

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getContent(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#agency`,
    name: c.name,
    alternateName: c.altName,
    url: `${SITE_URL}/${lang}`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: c.description,
    telephone: "+97192383055",
    email: business.email,
    inLanguage: lang,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address.street,
      addressLocality: lang === "ar" ? "خورفكان" : "Khorfakkan",
      addressRegion: lang === "ar" ? "الشارقة" : "Sharjah",
      postOfficeBoxNumber: business.poBox,
      addressCountry: "AE",
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+971503674950", contactType: "customer service", availableLanguage: ["English", "Arabic"] },
    ],
    areaServed: ["Khorfakkan", "Sharjah", "Fujairah", "United Arab Emirates"],
    makesOffer: c.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/${lang}/services/${s.slug}` },
    })),
  };

  return (
    <html lang={lang} dir={dir(lang)} className={`${sans.variable} ${arabic.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <BottomNav lang={lang} />
        <a className="wa-float" href={whatsappLink(c.ui.wa.general)} target="_blank" rel="noopener" aria-label={c.ui.wa.floatLabel}>
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
