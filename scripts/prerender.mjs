// Build-time prerender. Run by `npm run build` after the browser build and the server build:
//   vite build                                              -> dist/            (what visitors' browsers load)
//   vite build --ssr src/entry-server.jsx --outDir dist-ssr -> dist-ssr/        (renders pages to HTML)
//   node scripts/prerender.mjs                              -> writes dist/<route>/index.html for every page
// Each page then contains its real text, headings, links and meta tags without needing JavaScript, which is
// what search engines and payment-gateway scanners read. Visitors' browsers hydrate it into the normal app.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SERVICES } from "../src/lib/services-data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// Pages that are fully static. (The /legal/* pages load their text from the platform in the browser, so they are
// left to the normal app; the host serves index.html for them.)
const STATIC_ROUTES = [
    "/",
    "/about",
    "/services",
    "/industries",
    "/contact",
    "/online-ordering-software",
    "/pricing",
    "/terms-and-conditions",
    "/privacy-policy",
    "/refund-cancellation-policy",
    "/shipping-delivery-policy",
];
const routes = [...STATIC_ROUTES, ...SERVICES.map((s) => `/services/${s.slug}`)];

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

// The page's own title/description/social tags (from react-helmet) replace the generic ones in the template.
const stripped = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+(?:name="description"|property="og:[^"]+"|name="twitter:[^"]+")[\s\S]*?\/>/gi, "");

if (!stripped.includes('<div id="root"></div>')) {
    throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

let written = 0;
for (const url of routes) {
    const { html, head } = await render(url);
    if (!html || html.length < 500) throw new Error(`prerender: ${url} produced almost no HTML`);
    // A pending Suspense boundary (<!--$?-->) or a leftover loading spinner means the page content was NOT inlined.
    if (html.includes("<!--$?-->") || html.includes('<template id="B:') || html.includes("animate-spin")) {
        throw new Error(`prerender: ${url} still contains a loading placeholder instead of the finished page`);
    }

    const page = stripped
        .replace("</head>", `${head}\n</head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const file = url === "/" ? path.join(dist, "index.html") : path.join(dist, url.slice(1), "index.html");
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, page);
    written++;
}

// sitemap.xml lists every page (including all service pages), rebuilt on each build so it never goes stale
const SITE = "https://www.vivyaanbusinesssystems.com";
const priorityOf = (u) =>
    u === "/" ? "1.0"
    : ["/services", "/contact", "/online-ordering-software", "/pricing"].includes(u) ? "0.9"
    : ["/about", "/industries"].includes(u) ? "0.8"
    : u.startsWith("/services/") ? "0.7"
    : "0.3"; // policy pages
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((u) => `  <url>
    <loc>${SITE}${u === "/" ? "/" : u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priorityOf(u)}</priority>
  </url>`).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${written} pages and wrote sitemap.xml (${routes.length} URLs) into dist/`);
