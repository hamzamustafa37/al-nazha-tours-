import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { business, getContent } from "@/lib/site";

export default function Footer({ lang }: { lang: Locale }) {
  const c = getContent(lang);
  const t = c.ui.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image src="/logo.png" alt={c.name} width={154} height={70} />
            <p className="about">{t.about}</p>
          </div>
          <div>
            <h4>{t.services}</h4>
            <ul>
              {c.services.map((s) => (
                <li key={s.slug}><Link href={`/${lang}/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.contact}</h4>
            <ul>
              <li><a href={business.phoneHref}>{t.tel}: <span dir="ltr">{business.phone}</span></a></li>
              <li><a href={business.mobileHref}>{t.mobile}: <span dir="ltr">{business.mobile}</span></a></li>
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>{c.address.street}{lang === "ar" ? "، " : ", "}{c.address.cityLine}</li>
              <li>{c.address.poBox}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {c.name}. {t.rights}</span>
          <span>{c.altName}</span>
        </div>
      </div>
    </footer>
  );
}
