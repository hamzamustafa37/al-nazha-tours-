"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

type Item = { href: string; label: string };

export default function MobileMenu({ items, labels }: { items: Item[]; labels: { menu: string; close: string } }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <button type="button" className="menu-btn" aria-expanded={open} aria-label={open ? labels.close : labels.menu} onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open && (
        <nav className="menu-panel" aria-label={labels.menu}>
          {items.map((i) => (
            <Link key={i.href} href={i.href} aria-current={pathname === i.href ? "page" : undefined}>{i.label}</Link>
          ))}
        </nav>
      )}
    </>
  );
}
