// Used only at build time by scripts/prerender.mjs: renders a page to plain HTML so crawlers and
// scanners that do not run JavaScript still see the real content. The browser then takes over (hydrates).
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { prerender } from "react-dom/static";
import { AppRoutes } from "./App";

async function streamToString(stream) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let out = "";
    for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        out += decoder.decode(value, { stream: true });
    }
    return out + decoder.decode();
}

/** Returns { html, head }: the page markup and its <title>/<meta>/<link> tags. */
export async function render(url) {
    const helmetContext = {};
    // prerender() waits for every lazy page and Suspense boundary, so the finished page is returned
    // progressiveChunkSize: without it React moves any large section into a hidden block that only JavaScript can
    // swap in (the visitor would see the loading spinner first). A huge size keeps every page's content inline.
    const { prelude } = await prerender(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
                <AppRoutes />
            </StaticRouter>
        </HelmetProvider>,
        { progressiveChunkSize: 1e9 }
    );
    const html = await streamToString(prelude);

    const h = helmetContext.helmet || {};
    const head = [h.title, h.priority, h.meta, h.link, h.script, h.style]
        .map((part) => (part ? part.toString() : ""))
        .join("");
    return { html, head };
}
