import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "../lib/site";

const DEFAULT_DESC =
    "Recruitment, staffing, manpower and software services for businesses across India, from Vivyaan Business Systems Pvt. Ltd.";

// Search results cut titles at about 60 characters and descriptions at about 155
const MAX_TITLE = 65;
const MAX_DESC = 155;

function trimDescription(text) {
    const clean = String(text || "").replace(/\s+/g, " ").trim();
    if (clean.length <= MAX_DESC) return clean;
    const cut = clean.slice(0, MAX_DESC - 1);
    return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s.]+$/, "")}…`;
}

// JSON-LD is placed inside a <script>; "<" is escaped so the data can never close the tag early
const ld = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

/**
 * Per-page search and social tags.
 *  title          page name; the company name is added ("About Us | Vivyaan Business Systems Pvt. Ltd.")
 *  absoluteTitle  use instead of title when the whole title is written out (the Home page)
 *  description    shortened automatically to fit search results
 *  url            the page's full address (also the canonical link)
 *  image          share picture (default: the company image)
 *  noindex        keep this page out of search results
 *  breadcrumbs    [{ name, url }] trail after "Home"; when omitted it is Home > this page
 *  jsonLd         extra structured data: one object or an array of objects
 */
export default function SEO({ title, absoluteTitle, description, url, image = OG_IMAGE, noindex = false, breadcrumbs, jsonLd }) {
    let fullTitle = absoluteTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
    if (!absoluteTitle && title && fullTitle.length > MAX_TITLE) fullTitle = `${title} | Vivyaan`;

    const finalDesc = trimDescription(description || DEFAULT_DESC);
    const pageUrl = url || SITE_URL;
    const isHome = pageUrl.replace(/\/+$/, "") === SITE_URL;

    const trail = breadcrumbs || (title && !isHome ? [{ name: title, url: pageUrl }] : []);
    const breadcrumbSchema = trail.length
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{ name: "Home", url: `${SITE_URL}/` }, ...trail].map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.name,
                item: c.url,
            })),
        }
        : null;

    const blocks = [...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []), ...(breadcrumbSchema ? [breadcrumbSchema] : [])];

    return (
        <Helmet>
            {/* Primary tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={finalDesc} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Vivyaan Business Systems" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDesc} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Vivyaan Business Systems: recruitment, staffing, manpower and software services" />

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDesc} />
            <meta name="twitter:image" content={image} />

            {/* Structured data */}
            {blocks.map((b, i) => (
                <script key={i} type="application/ld+json">{ld(b)}</script>
            ))}
        </Helmet>
    );
}
