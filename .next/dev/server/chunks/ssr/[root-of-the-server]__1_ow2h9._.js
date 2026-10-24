module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/BottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BottomNav({ lang }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContent"])(lang).ui.nav;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || `/${lang}`;
    const items = [
        {
            href: `/${lang}`,
            label: t.home,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeIcon"]
        },
        {
            href: `/${lang}/packages`,
            label: t.packages,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuitcaseIcon"]
        },
        {
            href: `/${lang}/services`,
            label: t.services,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridIcon"]
        },
        {
            href: `/${lang}/contact`,
            label: t.contact,
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MailIcon"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bottom-nav",
        "aria-label": "Quick",
        children: items.map(({ href, label, Icon })=>{
            const active = href === `/${lang}` ? pathname === href : pathname.startsWith(href);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: active ? "active" : "",
                "aria-current": active ? "page" : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                        fileName: "[project]/src/components/BottomNav.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/BottomNav.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                ]
            }, href, true, {
                fileName: "[project]/src/components/BottomNav.tsx",
                lineNumber: 24,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/BottomNav.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LanguageSwitcher({ lang, label }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || `/${lang}`;
    const target = lang === "ar" ? "en" : "ar";
    const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${target}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "lang-switch",
        hrefLang: target,
        lang: target,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MobileMenu({ items, labels }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setOpen(false), [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "menu-btn",
                "aria-expanded": open,
                "aria-label": open ? labels.close : labels.menu,
                onClick: ()=>setOpen(!open),
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/MobileMenu.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/MobileMenu.tsx",
                    lineNumber: 18,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileMenu.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "menu-panel",
                "aria-label": labels.menu,
                children: items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: i.href,
                        "aria-current": pathname === i.href ? "page" : undefined,
                        children: i.label
                    }, i.href, false, {
                        fileName: "[project]/src/components/MobileMenu.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MobileMenu.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileMenu.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowIcon",
    ()=>ArrowIcon,
    "CalendarIcon",
    ()=>CalendarIcon,
    "CheckIcon",
    ()=>CheckIcon,
    "CloseIcon",
    ()=>CloseIcon,
    "EyeIcon",
    ()=>EyeIcon,
    "GridIcon",
    ()=>GridIcon,
    "HomeIcon",
    ()=>HomeIcon,
    "MailIcon",
    ()=>MailIcon,
    "MenuIcon",
    ()=>MenuIcon,
    "PhoneIcon",
    ()=>PhoneIcon,
    "PinIcon",
    ()=>PinIcon,
    "PlaneIcon",
    ()=>PlaneIcon,
    "SearchIcon",
    ()=>SearchIcon,
    "ServiceIcon",
    ()=>ServiceIcon,
    "SparkIcon",
    ()=>SparkIcon,
    "SuitcaseIcon",
    ()=>SuitcaseIcon,
    "TargetIcon",
    ()=>TargetIcon,
    "WhatsAppIcon",
    ()=>WhatsAppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const WhatsAppIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const CheckIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ArrowIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const PhoneIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    "umrah-packages": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M12 5V2"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 27,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "visit-visa": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    "air-tickets": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 29,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "hotel-booking": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20V8M22 20v-6a3 3 0 0 0-3-3H10v9M2 16h20"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 30,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
    "holiday-tours": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 31,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    "travel-insurance": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ServiceIcon = ({ slug })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        "aria-hidden": "true",
        children: serviceIcons[slug]
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const icon = (d)=>{
    const C = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...base,
            "aria-hidden": "true",
            ...p,
            children: d
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 40,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0));
    return C;
};
const HomeIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M3 10.5 12 3l9 7.5M5 9v12h5v-6h4v6h5V9"
}, void 0, false, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 44,
    columnNumber: 30
}, ("TURBOPACK compile-time value", void 0)));
const SuitcaseIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "7",
            width: "18",
            height: "13",
            rx: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 45,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 45,
            columnNumber: 86
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 45,
    columnNumber: 34
}, ("TURBOPACK compile-time value", void 0)));
const GridIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 46,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 46,
            columnNumber: 82
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 46,
            columnNumber: 133
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 46,
            columnNumber: 184
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 46,
    columnNumber: 30
}, ("TURBOPACK compile-time value", void 0)));
const MailIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "5",
            width: "18",
            height: "14",
            rx: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 47,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m3 7 9 6 9-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 47,
            columnNumber: 82
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 47,
    columnNumber: 30
}, ("TURBOPACK compile-time value", void 0)));
const PinIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 48,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "10",
            r: "2.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 48,
            columnNumber: 93
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 48,
    columnNumber: 29
}, ("TURBOPACK compile-time value", void 0)));
const SearchIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "11",
            cy: "11",
            r: "7"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 49,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m20 20-3.5-3.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 49,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 49,
    columnNumber: 32
}, ("TURBOPACK compile-time value", void 0)));
const CalendarIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "5",
            width: "18",
            height: "16",
            rx: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 50,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 10h18M8 3v4M16 3v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 50,
            columnNumber: 86
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 50,
    columnNumber: 34
}, ("TURBOPACK compile-time value", void 0)));
const TargetIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 51,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 51,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 51,
            columnNumber: 98
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 51,
    columnNumber: 32
}, ("TURBOPACK compile-time value", void 0)));
const EyeIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 52,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 52,
            columnNumber: 92
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 52,
    columnNumber: 29
}, ("TURBOPACK compile-time value", void 0)));
const MenuIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M4 7h16M4 12h16M4 17h16"
}, void 0, false, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 53,
    columnNumber: 30
}, ("TURBOPACK compile-time value", void 0)));
const CloseIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M6 6l12 12M18 6 6 18"
}, void 0, false, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 54,
    columnNumber: 31
}, ("TURBOPACK compile-time value", void 0)));
const PlaneIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
}, void 0, false, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 55,
    columnNumber: 31
}, ("TURBOPACK compile-time value", void 0)));
const SparkIcon = icon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
}, void 0, false, {
    fileName: "[project]/src/components/icons.tsx",
    lineNumber: 56,
    columnNumber: 31
}, ("TURBOPACK compile-time value", void 0)));
}),
"[project]/src/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
            tag: "Visa, flights & hotels",
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
            tag: "Hassle-free process",
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
            tag: "Best fares",
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
            tag: "Global network",
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
            tag: "Group & individual",
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
            tag: "Stay protected",
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
    packages: [
        {
            slug: "umrah",
            region: "international",
            art: "domes",
            title: "Umrah Package",
            place: "Makkah & Madinah",
            short: "Visa, flights, hotels near the Haram and transport in one package."
        },
        {
            slug: "turkey",
            region: "international",
            art: "mosque",
            title: "Turkey",
            place: "Istanbul & Bursa",
            short: "Historic mosques, the Bosphorus and Turkish hospitality."
        },
        {
            slug: "malaysia",
            region: "international",
            art: "twin",
            title: "Malaysia",
            place: "Kuala Lumpur & Langkawi",
            short: "City lights, rainforests and island beaches in one trip."
        },
        {
            slug: "georgia",
            region: "international",
            art: "mountains",
            title: "Georgia",
            place: "Tbilisi & Gudauri",
            short: "Mountain views, old towns and cool weather — a short flight away."
        },
        {
            slug: "dubai",
            region: "domestic",
            art: "towers",
            title: "Dubai City Tour",
            place: "Dubai, UAE",
            short: "Burj Khalifa, Dubai Mall, the Creek and the old souks."
        },
        {
            slug: "abu-dhabi",
            region: "domestic",
            art: "domes",
            title: "Abu Dhabi Tour",
            place: "Abu Dhabi, UAE",
            short: "Sheikh Zayed Grand Mosque, the Corniche and Qasr Al Watan."
        },
        {
            slug: "desert-safari",
            region: "domestic",
            art: "desert",
            title: "Desert Safari",
            place: "Sharjah & Dubai deserts",
            short: "Dune drive, camel ride and dinner under the stars."
        }
    ],
    about: {
        whoTitle: "Who we are",
        whoText: "Al Nazha Tours is a travel agency on Cinema Road in Khorfakkan, Sharjah. We arrange Umrah packages, visit visas, air tickets, hotel bookings, travel insurance and holidays for individuals, families and groups — with a local team you can call, message or visit.",
        // Replace with real figures (years in business, travellers served) when available.
        stats: [
            {
                value: "6",
                label: "Travel services"
            },
            {
                value: "2",
                label: "Languages — English & Arabic"
            },
            {
                value: "1",
                label: "Office in Khorfakkan"
            }
        ],
        missionTitle: "Our mission",
        missionText: "To make every trip simple, safe and well organised — from the first enquiry to the flight home.",
        visionTitle: "Our vision",
        visionText: "To be the travel agency families on the East Coast trust first, known for honest prices and personal service.",
        whyTitle: "Why choose us?",
        why: [
            "Clear prices, no hidden fees",
            "One team for visa, ticket and hotel",
            "Reachable on WhatsApp throughout your trip"
        ],
        whyCta: "Get a quote"
    },
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
            home: "Home",
            about: "About",
            packages: "Packages",
            services: "Services",
            contact: "Contact",
            whatsapp: "WhatsApp",
            menu: "Menu",
            close: "Close menu"
        },
        switchLabel: "العربية",
        hero: {
            eyebrow: "Explore the world",
            h1a: "Your Journey",
            h1em: "Our Priority",
            lead: "Umrah | Visas | Flights | Hotels | Holidays"
        },
        search: {
            from: "From",
            fromPh: "Departure city",
            to: "To",
            toPh: "Destination",
            date: "Travel date",
            submit: "Search",
            msg: "Hello Al Nazha Tours, I'd like a quote."
        },
        home: {
            destTitle: "Popular destinations",
            destText: "Hand-picked trips our travellers love",
            viewAll: "View all",
            dealTitle: "Special travel deals",
            dealText: "Make your next trip unforgettable — ask about this month's offers.",
            dealCta: "View packages"
        },
        servicesSection: {
            eyebrow: "Services",
            title: "Everything your trip needs, in one place.",
            text: "One team for your visa, ticket, hotel and insurance — no running between offices.",
            more: "Learn more"
        },
        aboutPage: {
            metaTitle: "About Us — Travel Agency in Khorfakkan, Sharjah",
            metaDescription: "Al Nazha Tours is a local travel agency on Cinema Road, Khorfakkan, arranging Umrah, visas, flights, hotels and holidays.",
            eyebrow: "About us",
            titleA: "Your Trusted Travel",
            titleEm: "Partner",
            text: "Turning your travel plans into reality"
        },
        packagesPage: {
            metaTitle: "Travel Packages — Umrah, Turkey, Malaysia & UAE Tours",
            metaDescription: "Umrah packages, holidays abroad and UAE tours from Al Nazha Tours, Khorfakkan. Ask on WhatsApp for dates and prices.",
            eyebrow: "Travel packages",
            titleA: "Explore Our",
            titleEm: "Packages",
            text: "Hand-picked packages for unforgettable journeys",
            filters: {
                all: "All",
                international: "International",
                domestic: "Domestic"
            },
            details: "View details",
            priceOnRequest: "Price on request",
            customTitle: "Custom packages",
            customText: "Tailor-made trips for your special moments.",
            customCta: "Enquire now"
        },
        servicesPage: {
            metaTitle: "Our Services — Umrah, Visas, Air Tickets, Hotels & Insurance",
            metaDescription: "Umrah packages, visit visas, air tickets, hotel booking, holiday tours and travel insurance from Al Nazha Tours in Khorfakkan, Sharjah.",
            eyebrow: "Our services",
            titleA: "Travel Made",
            titleEm: "Easy",
            text: "Complete travel solutions under one roof",
            listTitle: "Our services",
            bannerTitle: "Visa assistance",
            bannerText: "Get your visa with ease — we check your documents and follow up for you.",
            bannerCta: "Apply now"
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
            eyebrow: "Contact us",
            titleA: "Get In",
            titleEm: "Touch",
            text: "We're here to help you plan your next journey",
            directions: "Get directions",
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
            explore: "Explore",
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
            package: (title)=>`Hello Al Nazha Tours, I'd like details and prices for the ${title} package.`,
            custom: "Hello Al Nazha Tours, I'd like a custom travel package.",
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
            tag: "تأشيرة وطيران وفنادق",
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
            tag: "إجراءات بلا متاعب",
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
            tag: "أفضل الأسعار",
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
            tag: "شبكة عالمية",
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
            tag: "للأفراد والمجموعات",
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
            tag: "سافر بأمان",
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
    packages: [
        {
            slug: "umrah",
            region: "international",
            art: "domes",
            title: "باقة العمرة",
            place: "مكة المكرمة والمدينة المنورة",
            short: "التأشيرة والطيران وفنادق قريبة من الحرم والمواصلات في باقة واحدة."
        },
        {
            slug: "turkey",
            region: "international",
            art: "mosque",
            title: "تركيا",
            place: "إسطنبول وبورصة",
            short: "مساجد تاريخية ومضيق البوسفور وكرم الضيافة التركية."
        },
        {
            slug: "malaysia",
            region: "international",
            art: "twin",
            title: "ماليزيا",
            place: "كوالالمبور ولنكاوي",
            short: "أضواء المدينة والغابات المطيرة والشواطئ في رحلة واحدة."
        },
        {
            slug: "georgia",
            region: "international",
            art: "mountains",
            title: "جورجيا",
            place: "تبليسي وغوداوري",
            short: "إطلالات جبلية ومدن عريقة وأجواء معتدلة — على بعد رحلة قصيرة."
        },
        {
            slug: "dubai",
            region: "domestic",
            art: "towers",
            title: "جولة في دبي",
            place: "دبي، الإمارات",
            short: "برج خليفة ودبي مول والخور والأسواق القديمة."
        },
        {
            slug: "abu-dhabi",
            region: "domestic",
            art: "domes",
            title: "جولة في أبوظبي",
            place: "أبوظبي، الإمارات",
            short: "جامع الشيخ زايد الكبير والكورنيش وقصر الوطن."
        },
        {
            slug: "desert-safari",
            region: "domestic",
            art: "desert",
            title: "رحلة السفاري",
            place: "صحراء الشارقة ودبي",
            short: "تطعيس فوق الكثبان وركوب الجمال وعشاء تحت النجوم."
        }
    ],
    about: {
        whoTitle: "من نحن",
        whoText: "النزهة للسياحة وكالة سفر في شارع السينما بخورفكان، الشارقة. نرتب باقات العمرة وتأشيرات الزيارة وتذاكر الطيران وحجز الفنادق وتأمين السفر والعطلات للأفراد والعائلات والمجموعات — مع فريق محلي يمكنك الاتصال به أو مراسلته أو زيارته.",
        stats: [
            {
                value: "6",
                label: "خدمات سفر"
            },
            {
                value: "2",
                label: "لغتان — العربية والإنجليزية"
            },
            {
                value: "1",
                label: "مكتب في خورفكان"
            }
        ],
        missionTitle: "رسالتنا",
        missionText: "أن نجعل كل رحلة بسيطة وآمنة ومنظمة — من أول استفسار حتى رحلة العودة.",
        visionTitle: "رؤيتنا",
        visionText: "أن نكون وكالة السفر الأولى التي تثق بها عائلات الساحل الشرقي، بأسعار صادقة وخدمة شخصية.",
        whyTitle: "لماذا تختارنا؟",
        why: [
            "أسعار واضحة دون رسوم خفية",
            "فريق واحد للتأشيرة والتذكرة والفندق",
            "متاحون عبر واتساب طوال رحلتك"
        ],
        whyCta: "اطلب عرض سعر"
    },
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
            home: "الرئيسية",
            about: "من نحن",
            packages: "الباقات",
            services: "خدماتنا",
            contact: "اتصل بنا",
            whatsapp: "واتساب",
            menu: "القائمة",
            close: "إغلاق القائمة"
        },
        switchLabel: "English",
        hero: {
            eyebrow: "اكتشف العالم",
            h1a: "رحلتك",
            h1em: "أولويتنا",
            lead: "عمرة | تأشيرات | طيران | فنادق | عطلات"
        },
        search: {
            from: "من",
            fromPh: "مدينة المغادرة",
            to: "إلى",
            toPh: "الوجهة",
            date: "تاريخ السفر",
            submit: "ابحث",
            msg: "مرحباً النزهة للسياحة، أود الحصول على عرض سعر."
        },
        home: {
            destTitle: "وجهات مميزة",
            destText: "رحلات مختارة يحبها مسافرونا",
            viewAll: "عرض الكل",
            dealTitle: "عروض سفر خاصة",
            dealText: "اجعل رحلتك القادمة لا تُنسى — اسأل عن عروض هذا الشهر.",
            dealCta: "تصفح الباقات"
        },
        servicesSection: {
            eyebrow: "خدماتنا",
            title: "كل ما تحتاجه رحلتك في مكان واحد.",
            text: "فريق واحد لتأشيرتك وتذكرتك وفندقك وتأمينك — دون التنقل بين المكاتب.",
            more: "اعرف المزيد"
        },
        aboutPage: {
            metaTitle: "من نحن — وكالة سفر في خورفكان، الشارقة",
            metaDescription: "النزهة للسياحة وكالة سفر محلية في شارع السينما، خورفكان، ترتب العمرة والتأشيرات والطيران والفنادق والعطلات.",
            eyebrow: "من نحن",
            titleA: "شريكك الموثوق",
            titleEm: "في السفر",
            text: "نحوّل خطط سفرك إلى واقع"
        },
        packagesPage: {
            metaTitle: "باقات السفر — العمرة وتركيا وماليزيا وجولات الإمارات",
            metaDescription: "باقات عمرة وعطلات خارجية وجولات داخل الإمارات من النزهة للسياحة، خورفكان. اسألنا عبر واتساب عن المواعيد والأسعار.",
            eyebrow: "باقات السفر",
            titleA: "اكتشف",
            titleEm: "باقاتنا",
            text: "باقات مختارة لرحلات لا تُنسى",
            filters: {
                all: "الكل",
                international: "دولية",
                domestic: "داخلية"
            },
            details: "عرض التفاصيل",
            priceOnRequest: "السعر عند الطلب",
            customTitle: "باقات حسب الطلب",
            customText: "رحلات مصممة خصيصاً للحظاتك المميزة.",
            customCta: "استفسر الآن"
        },
        servicesPage: {
            metaTitle: "خدماتنا — العمرة والتأشيرات وتذاكر الطيران والفنادق والتأمين",
            metaDescription: "باقات العمرة وتأشيرات الزيارة وتذاكر الطيران وحجز الفنادق والرحلات السياحية وتأمين السفر من النزهة للسياحة في خورفكان، الشارقة.",
            eyebrow: "خدماتنا",
            titleA: "السفر",
            titleEm: "أسهل",
            text: "حلول سفر متكاملة تحت سقف واحد",
            listTitle: "خدماتنا",
            bannerTitle: "خدمات التأشيرات",
            bannerText: "احصل على تأشيرتك بسهولة — نراجع مستنداتك ونتابع الطلب عنك.",
            bannerCta: "قدّم الآن"
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
            titleA: "تواصل",
            titleEm: "معنا",
            text: "نحن هنا لمساعدتك في التخطيط لرحلتك القادمة",
            directions: "احصل على الاتجاهات",
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
            explore: "تصفح",
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
            package: (title)=>`مرحباً النزهة للسياحة، أود معرفة تفاصيل وأسعار باقة ${title}.`,
            custom: "مرحباً النزهة للسياحة، أود باقة سفر حسب الطلب.",
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1_ow2h9._.js.map