import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { WhatsAppIcon } from "./icons";

export default function Header({ lang }: { lang: Locale }) {
  const c = getContent(lang);
  const t = c.ui.nav;
  const items = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/packages`, label: t.packages },
    { href: `/${lang}/services`, label: t.services },
    { href: `/${lang}/contact`, label: t.contact },
  ];
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="logo" aria-label={`${c.name} — ${t.home}`}>
          <Image src="/logo-light.png" alt={c.name} width={660} height={300} priority />
        </Link>
        <nav className="nav" aria-label="Main">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="hide-sm">{i.label}</Link>
          ))}
          <LanguageSwitcher lang={lang} label={c.ui.switchLabel} />
          <a className="btn btn-primary hide-sm" href={whatsappLink(c.ui.wa.general)} target="_blank" rel="noopener">
            <WhatsAppIcon /> <span>{t.whatsapp}</span>
          </a>
          <MobileMenu items={items} labels={{ menu: t.menu, close: t.close }} />
        </nav>
      </div>
    </header>
  );
}
