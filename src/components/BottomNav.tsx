"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/site";
import { GridIcon, HomeIcon, MailIcon, SuitcaseIcon } from "./icons";

// App-style tab bar shown on phones only.
export default function BottomNav({ lang }: { lang: Locale }) {
  const t = getContent(lang).ui.nav;
  const pathname = usePathname() || `/${lang}`;
  const items = [
    { href: `/${lang}`, label: t.home, Icon: HomeIcon },
    { href: `/${lang}/packages`, label: t.packages, Icon: SuitcaseIcon },
    { href: `/${lang}/services`, label: t.services, Icon: GridIcon },
    { href: `/${lang}/contact`, label: t.contact, Icon: MailIcon },
  ];
  return (
    <nav className="bottom-nav" aria-label="Quick">
      {items.map(({ href, label, Icon }) => {
        const active = href === `/${lang}` ? pathname === href : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
            <Icon />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
