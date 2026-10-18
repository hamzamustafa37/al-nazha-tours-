import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import { WhatsAppIcon } from "./icons";

export default function Header({ lang }: { lang: Locale }) {
  const c = getContent(lang);
  const t = c.ui.nav;
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="logo" aria-label={`${c.name} — ${t.home}`}>
          <Image src="/logo.png" alt={c.name} width={660} height={300} priority />
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href={`/${lang}#services`} className="hide-sm">{t.services}</Link>
          <Link href={`/${lang}/services/umrah-packages`} className="hide-sm">{t.umrah}</Link>
          <Link href={`/${lang}/contact`}>{t.contact}</Link>
          <LanguageSwitcher lang={lang} label={c.ui.switchLabel} />
          <a className="btn btn-primary" href={whatsappLink(c.ui.wa.general)} target="_blank" rel="noopener" aria-label={t.whatsapp}>
            <WhatsAppIcon /> <span>{t.whatsapp}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
