import type { Locale } from "@/lib/i18n";
import { getContent, whatsappLink, type Package } from "@/lib/site";
import { DestinationArt } from "./Art";
import { ArrowIcon } from "./icons";

export default function PackageCard({ lang, pkg, compact = false }: { lang: Locale; pkg: Package; compact?: boolean }) {
  const c = getContent(lang);
  const t = c.ui.packagesPage;
  const meta = [pkg.days, pkg.from].filter(Boolean).join(" | ") || t.priceOnRequest;
  return (
    <article className={`pkg${compact ? " pkg-compact" : ""}`}>
      <div className="pkg-art"><DestinationArt pkg={pkg} /></div>
      <div className="pkg-body">
        <h3>{pkg.title}</h3>
        <p className="pkg-place">{pkg.place}</p>
        {!compact && <p className="pkg-meta">{meta}</p>}
        {!compact && (
          <a className="btn btn-primary btn-sm" href={whatsappLink(c.ui.wa.package(pkg.title))} target="_blank" rel="noopener">
            {t.details} <ArrowIcon className="flip-rtl" />
          </a>
        )}
      </div>
    </article>
  );
}
