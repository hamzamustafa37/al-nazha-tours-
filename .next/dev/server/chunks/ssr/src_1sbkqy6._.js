module.exports = [
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LangLayout,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].map((lang)=>({
            lang
        }));
}
async function generateMetadata({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(lang)) return {};
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContent"])(lang);
    return {
        metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]),
        title: {
            default: `${c.name} | ${c.tagline}`,
            template: `%s | ${c.name}`
        },
        description: c.description,
        keywords: c.keywords,
        alternates: {
            canonical: `/${lang}`,
            languages: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageAlternates"])("")
        },
        openGraph: {
            type: "website",
            locale: lang === "ar" ? "ar_AE" : "en_AE",
            alternateLocale: lang === "ar" ? "en_AE" : "ar_AE",
            siteName: c.name,
            url: `/${lang}`,
            title: `${c.name} — ${c.tagline}`,
            description: c.description,
            images: [
                {
                    url: "/logo.png",
                    width: 660,
                    height: 300,
                    alt: c.name
                }
            ]
        },
        twitter: {
            card: "summary_large_image"
        },
        robots: {
            index: true,
            follow: true
        }
    };
}
const viewport = {
    themeColor: "#ffffff"
};
async function LangLayout({ children, params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContent"])(lang);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]}/#agency`,
        name: c.name,
        alternateName: c.altName,
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]}/${lang}`,
        logo: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]}/logo.png`,
        image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]}/logo.png`,
        description: c.description,
        telephone: "+97192383055",
        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].email,
        inLanguage: lang,
        address: {
            "@type": "PostalAddress",
            streetAddress: c.address.street,
            addressLocality: lang === "ar" ? "خورفكان" : "Khorfakkan",
            addressRegion: lang === "ar" ? "الشارقة" : "Sharjah",
            postOfficeBoxNumber: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].poBox,
            addressCountry: "AE"
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+971503674950",
                contactType: "customer service",
                availableLanguage: [
                    "English",
                    "Arabic"
                ]
            }
        ],
        areaServed: [
            "Khorfakkan",
            "Sharjah",
            "Fujairah",
            "United Arab Emirates"
        ],
        makesOffer: c.services.map((s)=>({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]}/${lang}/services/${s.slug}`
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: lang,
        dir: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dir"])(lang),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    lang: lang
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    lang: lang
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "wa-float",
                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(c.ui.wa.general),
                    target: "_blank",
                    rel: "noopener",
                    "aria-label": c.ui.wa.floatLabel,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {}, void 0, false, {
                        fileName: "[project]/src/app/[lang]/layout.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/layout.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[lang]/layout.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/layout.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
function Footer({ lang }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContent"])(lang);
    const t = c.ui.footer;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: c.name,
                                    width: 154,
                                    height: 70
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about",
                                    children: t.about
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t.services
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: c.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/services/${s.slug}`,
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 21,
                                                columnNumber: 34
                                            }, this)
                                        }, s.slug, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t.contact
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].phoneHref,
                                                children: [
                                                    t.tel,
                                                    ": ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        dir: "ltr",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].mobileHref,
                                                children: [
                                                    t.mobile,
                                                    ": ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        dir: "ltr",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].mobile
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].email}`,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                c.address.street,
                                                lang === "ar" ? "، " : ", ",
                                                c.address.cityLine
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: c.address.poBox
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                c.name,
                                ". ",
                                t.rights
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: c.altName
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Header({ lang }) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContent"])(lang);
    const t = c.ui.nav;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container header-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}`,
                    className: "logo",
                    "aria-label": `${c.name} — ${t.home}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: c.name,
                        width: 660,
                        height: 300,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "nav",
                    "aria-label": "Main",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}#services`,
                            className: "hide-sm",
                            children: t.services
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}/services/umrah-packages`,
                            className: "hide-sm",
                            children: t.umrah
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}/contact`,
                            children: t.contact
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            lang: lang,
                            label: c.ui.switchLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn btn-primary",
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(c.ui.wa.general),
                            target: "_blank",
                            rel: "noopener",
                            "aria-label": t.whatsapp,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t.whatsapp
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 23,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LanguageSwitcher.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LanguageSwitcher.tsx", "default");
}),
"[project]/src/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LanguageSwitcher.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LanguageSwitcher.tsx <module evaluation>", "default");
}),
"[project]/src/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/icons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowIcon",
    ()=>ArrowIcon,
    "CheckIcon",
    ()=>CheckIcon,
    "PhoneIcon",
    ()=>PhoneIcon,
    "ServiceIcon",
    ()=>ServiceIcon,
    "WhatsAppIcon",
    ()=>WhatsAppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const WhatsAppIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43a9.37 9.37 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.65l6.04-1.58a11.33 11.33 0 0 0 5.4 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 8,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CheckIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 6 9 17l-5-5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 13,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ArrowIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14M13 6l6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 17,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PhoneIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const serviceIcons = {
    "umrah-packages": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M12 5V2"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 27,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "visit-visa": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "3",
                width: "16",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 17h8"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 28,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    "air-tickets": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 29,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "hotel-booking": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20V8M22 20v-6a3 3 0 0 0-3-3H10v9M2 16h20"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 30,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "11.5",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 30,
                columnNumber: 78
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 30,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "holiday-tours": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 31,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 31,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 31,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "travel-insurance": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 81
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 32,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0))
};
const ServiceIcon = ({ slug })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        children: serviceIcons[slug]
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "dir",
    ()=>dir,
    "isLocale",
    ()=>isLocale,
    "languageAlternates",
    ()=>languageAlternates,
    "locales",
    ()=>locales
]);
const locales = [
    "en",
    "ar"
];
const defaultLocale = "en";
function isLocale(value) {
    return locales.includes(value);
}
const dir = (lang)=>lang === "ar" ? "rtl" : "ltr";
function languageAlternates(path) {
    return {
        en: `/en${path}`,
        ar: `/ar${path}`,
        "x-default": `/en${path}`
    };
}
}),
"[project]/src/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Single source of truth for business details and content (English + Arabic).
// Update SITE_URL once the domain is live — it drives canonical URLs, sitemap and Open Graph.
__turbopack_context__.s([
    "SITE_URL",
    ()=>SITE_URL,
    "business",
    ()=>business,
    "getContent",
    ()=>getContent,
    "serviceSlugs",
    ()=>serviceSlugs,
    "whatsappLink",
    ()=>whatsappLink
]);
const SITE_URL = "https://alnazhatours.com";
const business = {
    nameEn: "Al Nazha Tours",
    nameAr: "النزهة للسياحة",
    phone: "09 238 3055",
    phoneHref: "tel:+97192383055",
    mobile: "050 367 4950",
    mobileHref: "tel:+971503674950",
    whatsapp: "971503674950",
    email: "alnazhatours@gmail.com",
    poBox: "10500",
    mapQuery: "Cinema Road, Khorfakkan, Sharjah, UAE"
};
function whatsappLink(message) {
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
const en = {
    name: "Al Nazha Tours",
    altName: "النزهة للسياحة",
    tagline: "Umrah, visas, flights & tours from Khorfakkan",
    description: "Al Nazha Tours is a travel agency in Khorfakkan, Sharjah offering Umrah packages, UAE & international visit visas, air tickets, hotel booking, travel insurance and holiday tours across the UAE.",
    keywords: [
        "travel agency Khorfakkan",
        "Umrah package UAE",
        "UAE visit visa",
        "air tickets Sharjah",
        "Al Nazha Tours"
    ],
    address: {
        street: "Opp. Hassan Trading, Cinema Road",
        cityLine: "Khorfakkan, Sharjah, UAE",
        poBox: `P.O. Box ${business.poBox}`
    },
    services: [
        {
            slug: "umrah-packages",
            title: "Umrah Packages",
            short: "Visa, flights, hotels near the Haram and transport — arranged as one package.",
            intro: "Perform Umrah with peace of mind. We handle the Umrah visa, return flights from the UAE, hotels in Makkah and Madinah, and ground transport, so you can focus on worship.",
            includes: [
                "Umrah visa processing",
                "Return flights from Sharjah, Dubai or Abu Dhabi",
                "Hotels in Makkah & Madinah close to the Haram",
                "Airport and intercity transport",
                "Family and group packages",
                "Ziyarat tours on request"
            ],
            keywords: [
                "Umrah package from UAE",
                "Umrah from Sharjah",
                "Umrah Khorfakkan"
            ]
        },
        {
            slug: "visit-visa",
            title: "Visit Visas",
            short: "UAE visit visas and tourist visas for popular destinations worldwide.",
            intro: "Whether you are bringing family to the UAE or travelling abroad, we prepare your application, check your documents and keep you updated until the visa is issued.",
            includes: [
                "UAE 30 and 60 day visit visas",
                "Tourist visas for GCC, Asia & Europe",
                "Document checklist and form filling",
                "Visa status follow-up"
            ],
            keywords: [
                "UAE visit visa Sharjah",
                "tourist visa Khorfakkan"
            ]
        },
        {
            slug: "air-tickets",
            title: "Air Tickets",
            short: "Competitive fares on all major airlines, one-way, return and multi-city.",
            intro: "We compare fares across major airlines to find the best price and timing for your trip — from quick hops within the GCC to long-haul family travel.",
            includes: [
                "All major airlines",
                "One-way, return & multi-city",
                "Group and family bookings",
                "Date changes and re-issues"
            ],
            keywords: [
                "air tickets Khorfakkan",
                "cheap flights Sharjah"
            ]
        },
        {
            slug: "hotel-booking",
            title: "Hotel Booking",
            short: "Hotels worldwide, including Makkah & Madinah, at agency rates.",
            intro: "From hotels steps from the Haram to beach resorts, we book stays that match your budget and itinerary.",
            includes: [
                "Makkah & Madinah hotels",
                "City and resort hotels worldwide",
                "Family rooms and suites",
                "Confirmed vouchers"
            ],
            keywords: [
                "hotel booking Makkah",
                "hotel booking UAE"
            ]
        },
        {
            slug: "holiday-tours",
            title: "Holiday Tours",
            short: "Tailored holiday packages abroad and tours within the UAE.",
            intro: "Let us plan your next holiday — flights, hotels, transfers and sightseeing combined into a single, easy itinerary.",
            includes: [
                "International holiday packages",
                "UAE city tours & desert safaris",
                "Honeymoon and family trips",
                "Custom itineraries"
            ],
            keywords: [
                "holiday packages UAE",
                "tour packages Sharjah"
            ]
        },
        {
            slug: "travel-insurance",
            title: "Travel Insurance",
            short: "Cover for medical emergencies, delays and lost baggage.",
            intro: "Travel with confidence. We arrange travel insurance that meets visa requirements and protects you on the road.",
            includes: [
                "Schengen-compliant policies",
                "Medical and emergency cover",
                "Trip delay and cancellation",
                "Single trip and annual plans"
            ],
            keywords: [
                "travel insurance UAE",
                "Schengen insurance Sharjah"
            ]
        }
    ],
    steps: [
        {
            title: "Tell us your plan",
            text: "Message us on WhatsApp or visit our Khorfakkan office."
        },
        {
            title: "Get a clear quote",
            text: "We share options and a transparent price — no hidden fees."
        },
        {
            title: "Travel stress-free",
            text: "We handle bookings and paperwork and stay reachable throughout."
        }
    ],
    faqs: [
        {
            q: "Where is Al Nazha Tours located?",
            a: "Our office is on Cinema Road, opposite Hassan Trading, in Khorfakkan, Sharjah, UAE."
        },
        {
            q: "How long does an Umrah visa take?",
            a: "Processing times vary by season. Contact us with your travel dates and we will advise on the current timeline."
        },
        {
            q: "Can I book over WhatsApp?",
            a: "Yes. Send us your requirements on WhatsApp at 050 367 4950 and we will reply with options and a quote."
        },
        {
            q: "Do you arrange visas for family members visiting the UAE?",
            a: "Yes, we process UAE visit visas for family and friends. We will share the document checklist when you get in touch."
        }
    ],
    ui: {
        nav: {
            services: "Services",
            umrah: "Umrah",
            contact: "Contact",
            whatsapp: "WhatsApp",
            home: "home"
        },
        switchLabel: "العربية",
        hero: {
            h1a: "Travel made simple, ",
            h1em: "from Khorfakkan",
            h1b: " to the world.",
            lead: "Umrah packages, visit visas, air tickets and holidays — planned by a local team you can call, message or visit.",
            cta: "Get a free quote",
            meta: [
                [
                    "Umrah",
                    "packages"
                ],
                [
                    "Visas",
                    "UAE & worldwide"
                ],
                [
                    "Flights",
                    "all major airlines"
                ],
                [
                    "Office",
                    "Cinema Road, Khorfakkan"
                ]
            ]
        },
        servicesSection: {
            eyebrow: "Services",
            title: "Everything your trip needs, in one place.",
            text: "One team for your visa, ticket, hotel and insurance — no running between offices.",
            more: "Learn more →"
        },
        umrahSection: {
            eyebrow: "Umrah",
            title: "Your Umrah, carefully arranged.",
            cta: "Ask about Umrah",
            details: "Details"
        },
        stepsSection: {
            eyebrow: "How it works",
            title: "Three steps to your trip.",
            text: "Simple, personal service — the way a neighbourhood travel agency should be."
        },
        faqSection: {
            eyebrow: "FAQ",
            title: "Common questions"
        },
        ctaSection: {
            title: "Planning a trip?",
            text: "Send us your dates and destination — we'll come back with options and a clear price.",
            whatsapp: "Chat on WhatsApp",
            visit: "Visit our office"
        },
        servicePage: {
            home: "Home",
            titleSuffix: "in Khorfakkan, Sharjah",
            enquire: "Enquire on WhatsApp",
            includedEyebrow: "What's included",
            includedTitle: "How we help",
            quoteTitle: "Request a quote",
            moreEyebrow: "More services",
            moreTitle: "We can also help with"
        },
        contactPage: {
            metaTitle: "Contact Us — Travel Agency on Cinema Road, Khorfakkan",
            metaDescription: "Visit Al Nazha Tours on Cinema Road, Khorfakkan, Sharjah, or call 050 367 4950. WhatsApp us for Umrah, visas, flights and tours.",
            eyebrow: "Contact",
            title: "Let's plan your journey.",
            text: "Message us on WhatsApp, give us a call, or drop by our office in Khorfakkan.",
            mobile: "Mobile & WhatsApp",
            tel: "Telephone",
            email: "Email",
            office: "Office",
            formTitle: "Send an enquiry",
            mapTitle: "Al Nazha Tours location map"
        },
        form: {
            name: "Full name",
            service: "Service",
            general: "General enquiry",
            date: "Travel date",
            travellers: "Travellers",
            message: "Message",
            placeholder: "Tell us about your trip",
            submit: "Send on WhatsApp",
            note: "Opens WhatsApp with your details filled in — just press send.",
            msgHello: "Hello Al Nazha Tours,",
            msgName: "Name",
            msgService: "Service",
            msgDate: "Travel date",
            msgTravellers: "Travellers"
        },
        footer: {
            about: "Your local travel partner in Khorfakkan for Umrah, visas, flights and holidays.",
            services: "Services",
            contact: "Contact",
            tel: "Tel",
            mobile: "Mobile",
            rights: "All rights reserved."
        },
        wa: {
            general: "Hello Al Nazha Tours, I'd like to enquire about",
            umrah: "Hello Al Nazha Tours, I'd like an Umrah package quote.",
            service: (title)=>`Hello Al Nazha Tours, I'd like to enquire about ${title}.`,
            floatLabel: "Chat with us on WhatsApp"
        },
        notFound: {
            title: "Page not found",
            text: "The page you're looking for doesn't exist.",
            back: "Back to home"
        }
    }
};
const ar = {
    name: "النزهة للسياحة",
    altName: "Al Nazha Tours",
    tagline: "عمرة وتأشيرات وطيران ورحلات سياحية من خورفكان",
    description: "النزهة للسياحة وكالة سفر في خورفكان، الشارقة، تقدم باقات العمرة وتأشيرات الزيارة للإمارات ودول العالم وتذاكر الطيران وحجز الفنادق وتأمين السفر والرحلات السياحية في جميع أنحاء الإمارات.",
    keywords: [
        "وكالة سفر خورفكان",
        "باقات عمرة الإمارات",
        "تأشيرة زيارة الإمارات",
        "تذاكر طيران الشارقة",
        "النزهة للسياحة"
    ],
    address: {
        street: "مقابل حسن للتجارة، شارع السينما",
        cityLine: "خورفكان، الشارقة، الإمارات العربية المتحدة",
        poBox: `ص.ب ${business.poBox}`
    },
    services: [
        {
            slug: "umrah-packages",
            title: "باقات العمرة",
            short: "التأشيرة والطيران والفنادق القريبة من الحرم والمواصلات — في باقة واحدة.",
            intro: "أدِّ العمرة بطمأنينة. نتولى تأشيرة العمرة، ورحلات الطيران ذهاباً وإياباً من الإمارات، والفنادق في مكة المكرمة والمدينة المنورة، والمواصلات، لتتفرغ للعبادة.",
            includes: [
                "إصدار تأشيرة العمرة",
                "طيران ذهاب وعودة من الشارقة أو دبي أو أبوظبي",
                "فنادق في مكة والمدينة قريبة من الحرم",
                "التنقل من المطار وبين المدن",
                "باقات للعائلات والمجموعات",
                "جولات الزيارات عند الطلب"
            ],
            keywords: [
                "باقات عمرة من الإمارات",
                "عمرة من الشارقة",
                "عمرة خورفكان"
            ]
        },
        {
            slug: "visit-visa",
            title: "تأشيرات الزيارة",
            short: "تأشيرات زيارة للإمارات وتأشيرات سياحية لأشهر الوجهات حول العالم.",
            intro: "سواء كنت تستقدم عائلتك إلى الإمارات أو تسافر إلى الخارج، نجهز طلبك ونراجع مستنداتك ونطلعك على كل جديد حتى صدور التأشيرة.",
            includes: [
                "تأشيرات زيارة الإمارات لمدة 30 و60 يوماً",
                "تأشيرات سياحية لدول الخليج وآسيا وأوروبا",
                "قائمة المستندات وتعبئة النماذج",
                "متابعة حالة التأشيرة"
            ],
            keywords: [
                "تأشيرة زيارة الإمارات الشارقة",
                "تأشيرة سياحية خورفكان"
            ]
        },
        {
            slug: "air-tickets",
            title: "تذاكر الطيران",
            short: "أسعار تنافسية على جميع شركات الطيران الكبرى، ذهاب فقط أو ذهاب وعودة أو وجهات متعددة.",
            intro: "نقارن الأسعار بين شركات الطيران الكبرى لنجد لك أفضل سعر وتوقيت — من الرحلات القصيرة داخل الخليج إلى رحلات العائلة الطويلة.",
            includes: [
                "جميع شركات الطيران الكبرى",
                "ذهاب فقط، ذهاب وعودة، ووجهات متعددة",
                "حجوزات المجموعات والعائلات",
                "تغيير المواعيد وإعادة إصدار التذاكر"
            ],
            keywords: [
                "تذاكر طيران خورفكان",
                "رحلات طيران رخيصة الشارقة"
            ]
        },
        {
            slug: "hotel-booking",
            title: "حجز الفنادق",
            short: "فنادق حول العالم، بما فيها مكة والمدينة، بأسعار الوكالات.",
            intro: "من الفنادق القريبة من الحرم إلى المنتجعات الشاطئية، نحجز لك إقامة تناسب ميزانيتك وبرنامج رحلتك.",
            includes: [
                "فنادق مكة المكرمة والمدينة المنورة",
                "فنادق ومنتجعات حول العالم",
                "غرف عائلية وأجنحة",
                "قسائم حجز مؤكدة"
            ],
            keywords: [
                "حجز فنادق مكة",
                "حجز فنادق الإمارات"
            ]
        },
        {
            slug: "holiday-tours",
            title: "الرحلات السياحية",
            short: "باقات عطلات مصممة لك في الخارج وجولات داخل الإمارات.",
            intro: "دعنا نخطط لعطلتك القادمة — الطيران والفنادق والتنقلات والجولات السياحية في برنامج واحد سهل.",
            includes: [
                "باقات عطلات دولية",
                "جولات في مدن الإمارات ورحلات السفاري",
                "رحلات شهر العسل والعائلات",
                "برامج حسب الطلب"
            ],
            keywords: [
                "باقات سياحية الإمارات",
                "رحلات سياحية الشارقة"
            ]
        },
        {
            slug: "travel-insurance",
            title: "تأمين السفر",
            short: "تغطية للطوارئ الطبية وتأخير الرحلات وفقدان الأمتعة.",
            intro: "سافر بثقة. نوفر لك تأمين سفر يلبي متطلبات التأشيرة ويحميك طوال رحلتك.",
            includes: [
                "وثائق متوافقة مع متطلبات شنغن",
                "تغطية طبية وطارئة",
                "تأخير الرحلة وإلغاؤها",
                "خطط لرحلة واحدة أو سنوية"
            ],
            keywords: [
                "تأمين سفر الإمارات",
                "تأمين شنغن الشارقة"
            ]
        }
    ],
    steps: [
        {
            title: "أخبرنا بخطتك",
            text: "راسلنا عبر واتساب أو زر مكتبنا في خورفكان."
        },
        {
            title: "احصل على عرض سعر واضح",
            text: "نرسل لك الخيارات وسعراً شفافاً دون رسوم خفية."
        },
        {
            title: "سافر براحة بال",
            text: "نتولى الحجوزات والأوراق ونبقى على تواصل معك طوال الرحلة."
        }
    ],
    faqs: [
        {
            q: "أين يقع مكتب النزهة للسياحة؟",
            a: "يقع مكتبنا في شارع السينما، مقابل حسن للتجارة، في خورفكان، الشارقة، الإمارات العربية المتحدة."
        },
        {
            q: "كم تستغرق تأشيرة العمرة؟",
            a: "تختلف مدة الإصدار حسب الموسم. تواصل معنا بمواعيد سفرك وسنخبرك بالمدة الحالية."
        },
        {
            q: "هل يمكنني الحجز عبر واتساب؟",
            a: "نعم. أرسل لنا طلبك عبر واتساب على الرقم 050 367 4950 وسنرد عليك بالخيارات وعرض السعر."
        },
        {
            q: "هل تصدرون تأشيرات زيارة لأفراد العائلة القادمين إلى الإمارات؟",
            a: "نعم، نصدر تأشيرات زيارة الإمارات للأهل والأصدقاء، وسنرسل لك قائمة المستندات المطلوبة عند تواصلك معنا."
        }
    ],
    ui: {
        nav: {
            services: "خدماتنا",
            umrah: "العمرة",
            contact: "اتصل بنا",
            whatsapp: "واتساب",
            home: "الرئيسية"
        },
        switchLabel: "English",
        hero: {
            h1a: "السفر أسهل، ",
            h1em: "من خورفكان",
            h1b: " إلى العالم.",
            lead: "باقات عمرة، تأشيرات زيارة، تذاكر طيران وعطلات — يخطط لها فريق محلي يمكنك الاتصال به أو مراسلته أو زيارته.",
            cta: "اطلب عرض سعر مجاني",
            meta: [
                [
                    "العمرة",
                    "باقات متكاملة"
                ],
                [
                    "التأشيرات",
                    "للإمارات والعالم"
                ],
                [
                    "الطيران",
                    "جميع شركات الطيران"
                ],
                [
                    "المكتب",
                    "شارع السينما، خورفكان"
                ]
            ]
        },
        servicesSection: {
            eyebrow: "خدماتنا",
            title: "كل ما تحتاجه رحلتك في مكان واحد.",
            text: "فريق واحد لتأشيرتك وتذكرتك وفندقك وتأمينك — دون التنقل بين المكاتب.",
            more: "اعرف المزيد ←"
        },
        umrahSection: {
            eyebrow: "العمرة",
            title: "عمرتك، بترتيب متقن.",
            cta: "استفسر عن العمرة",
            details: "التفاصيل"
        },
        stepsSection: {
            eyebrow: "كيف نعمل",
            title: "ثلاث خطوات إلى رحلتك.",
            text: "خدمة بسيطة وشخصية — كما ينبغي أن تكون وكالة السفر القريبة منك."
        },
        faqSection: {
            eyebrow: "الأسئلة الشائعة",
            title: "أسئلة متكررة"
        },
        ctaSection: {
            title: "تخطط لرحلة؟",
            text: "أرسل لنا مواعيدك ووجهتك — وسنعود إليك بالخيارات وسعر واضح.",
            whatsapp: "تواصل عبر واتساب",
            visit: "زر مكتبنا"
        },
        servicePage: {
            home: "الرئيسية",
            titleSuffix: "في خورفكان، الشارقة",
            enquire: "استفسر عبر واتساب",
            includedEyebrow: "ما تشمله الخدمة",
            includedTitle: "كيف نساعدك",
            quoteTitle: "اطلب عرض سعر",
            moreEyebrow: "خدمات أخرى",
            moreTitle: "يمكننا أيضاً مساعدتك في"
        },
        contactPage: {
            metaTitle: "اتصل بنا — وكالة سفر في شارع السينما، خورفكان",
            metaDescription: "زر النزهة للسياحة في شارع السينما، خورفكان، الشارقة، أو اتصل على 050 367 4950. راسلنا عبر واتساب للعمرة والتأشيرات والطيران والرحلات.",
            eyebrow: "اتصل بنا",
            title: "لنخطط لرحلتك معاً.",
            text: "راسلنا عبر واتساب، أو اتصل بنا، أو زر مكتبنا في خورفكان.",
            mobile: "الجوال وواتساب",
            tel: "الهاتف",
            email: "البريد الإلكتروني",
            office: "المكتب",
            formTitle: "أرسل استفسارك",
            mapTitle: "خريطة موقع النزهة للسياحة"
        },
        form: {
            name: "الاسم الكامل",
            service: "الخدمة",
            general: "استفسار عام",
            date: "تاريخ السفر",
            travellers: "عدد المسافرين",
            message: "الرسالة",
            placeholder: "أخبرنا عن رحلتك",
            submit: "أرسل عبر واتساب",
            note: "يفتح واتساب ببياناتك جاهزة — فقط اضغط إرسال.",
            msgHello: "مرحباً النزهة للسياحة،",
            msgName: "الاسم",
            msgService: "الخدمة",
            msgDate: "تاريخ السفر",
            msgTravellers: "عدد المسافرين"
        },
        footer: {
            about: "شريكك المحلي في خورفكان للعمرة والتأشيرات والطيران والعطلات.",
            services: "خدماتنا",
            contact: "تواصل معنا",
            tel: "هاتف",
            mobile: "جوال",
            rights: "جميع الحقوق محفوظة."
        },
        wa: {
            general: "مرحباً النزهة للسياحة، أود الاستفسار عن",
            umrah: "مرحباً النزهة للسياحة، أود الحصول على عرض سعر لباقة عمرة.",
            service: (title)=>`مرحباً النزهة للسياحة، أود الاستفسار عن ${title}.`,
            floatLabel: "تواصل معنا عبر واتساب"
        },
        notFound: {
            title: "الصفحة غير موجودة",
            text: "الصفحة التي تبحث عنها غير موجودة.",
            back: "العودة إلى الرئيسية"
        }
    }
};
const content = {
    en,
    ar
};
function getContent(lang) {
    return content[lang];
}
const serviceSlugs = en.services.map((s)=>s.slug);
}),
];

//# sourceMappingURL=src_1sbkqy6._.js.map