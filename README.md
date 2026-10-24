# Al Nazha Tours — website

Minimal bilingual (English / Arabic) Next.js site for Al Nazha Tours, Khorfakkan.

- English: `/en/...`  ·  Arabic (RTL): `/ar/...`  ·  `/` redirects to `/en`
- The header language switch keeps visitors on the same page

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content
All business details, services, FAQs and UI text (both languages) live in `src/lib/site.ts` — the `en` and `ar` objects mirror each other.
Packages (`packages`) show "Price on request" until you fill in their `days` / `from` fields. Destination and hero images are SVG illustrations; to use photos, put them in `public/destinations/` and set a package's `image`.
Set `SITE_URL` there to the real domain before going live (used for canonical URLs, sitemap, Open Graph and schema).

## SEO built in
- Per-page titles, descriptions, canonical URLs, Open Graph in both languages
- `hreflang` alternates (en / ar / x-default) on every page and in the sitemap
- JSON-LD: TravelAgency (local business), Service + Breadcrumb per service page, FAQPage
- `/sitemap.xml` and `/robots.txt` generated automatically
- All pages statically pre-rendered

## After launch
- Create a Google Business Profile for the Khorfakkan office and link it to the site
- Submit the sitemap in Google Search Console
- Add real photos and customer reviews (Google reviews) when available
