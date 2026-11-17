import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FileText, RefreshCw } from "lucide-react";
import SEO from "./SEO";

// Same paths as the platform's own pages (/legal/terms-and-conditions, /legal/owner-terms-and-conditions ...), read live from the platform backend.
const DOCS = {
    "owner-terms-and-conditions": { key: "owner_terms", label: "Terms & Conditions for Shop Owners" },
    "owner-privacy": { key: "owner_privacy", label: "Privacy Policy for Shop Owners" },
    "terms-and-conditions": { key: "customer_terms", label: "Terms & Conditions for Customers" },
    privacy: { key: "privacy", label: "Privacy Policy for Customers" },
};

const API = String(import.meta.env.VITE_SAAS_API_URL || "").replace(/\/+$/, "");

// "5. Cancellation and refund policy" -> "cancellation-and-refund-policy" (same rule as the platform, so section links match)
const slugOf = (t) => String(t).toLowerCase().replace(/^\d+\.\s*/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// The platform's text format: "# heading", "- bullet", "1. numbered", anything else is a paragraph.
function parseBody(text) {
    const blocks = [];
    let list = null;
    for (const raw of String(text).split("\n")) {
        const line = raw.trim();
        if (!line) { list = null; continue; }
        let m;
        if ((m = line.match(/^#\s+(.*)$/))) { list = null; blocks.push({ type: "h", text: m[1] }); }
        else if ((m = line.match(/^-\s+(.*)$/))) {
            if (!list || list.type !== "ul") { list = { type: "ul", items: [] }; blocks.push(list); }
            list.items.push(m[1]);
        } else if ((m = line.match(/^\d+\.\s+(.*)$/))) {
            if (!list || list.type !== "ol") { list = { type: "ol", items: [] }; blocks.push(list); }
            list.items.push(m[1]);
        } else { list = null; blocks.push({ type: "p", text: line }); }
    }
    return blocks;
}

export default function PlatformLegal() {
    const { doc } = useParams();
    const meta = DOCS[doc];
    const [state, setState] = useState({ status: "loading", data: null, doc });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [doc]);

    useEffect(() => {
        if (!meta || !API) return undefined;
        const controller = new AbortController();
        fetch(`${API}/legal/public/${meta.key}`, { signal: controller.signal, headers: { Accept: "application/json" } })
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
            .then((d) => {
                if (d && d.body) setState({ status: "ready", data: d, doc });
                else throw new Error("empty");
            })
            .catch((e) => { if (e.name !== "AbortError") setState({ status: "error", data: null, doc }); });
        return () => controller.abort();
    }, [meta, attempt, doc]);

    // a hash such as #cancellation-and-refund-policy jumps to that section once the text is there
    useEffect(() => {
        if (state.status !== "ready" || !window.location.hash) return;
        const el = document.getElementById(window.location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [state.status, state.doc]);

    if (!meta) {
        return (
            <div className="container-page py-24 text-center">
                <SEO title="Document not found" />
                <h1 className="text-3xl font-bold">Document not found</h1>
                <Link to="/terms-and-conditions" className="mt-6 inline-flex font-semibold text-brand">Go to Terms &amp; Conditions</Link>
            </div>
        );
    }

    // an answer for another document (the visitor switched pages) counts as still loading
    const current = state.doc === doc ? state : { status: API ? "loading" : "error", data: null };
    const status = !API ? "error" : current.status;
    const blocks = status === "ready" ? parseBody(current.data.body) : [];

    return (
        <div className="animate-page-in pb-20 lg:pb-12">
            <SEO
                title={meta.label}
                description={`${meta.label} for the Vivyaan online ordering platform, operated and managed by Vivyaan Business Systems Pvt. Ltd.`}
                url={`https://www.vivyaanbusinesssystems.com/legal/${doc}`}
            />

            <section className="pt-16 lg:pt-28 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-surface -z-10" />
                <div className="absolute inset-0 bg-dots opacity-30 -z-10" />
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Online Ordering Platform</p>
                    <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-foreground">{current.data?.title || meta.label}</h1>
                </div>
            </section>

            <section className="py-10">
                <div className="container-page max-w-3xl">
                    <div className="mb-8 flex flex-wrap justify-center gap-2 text-sm">
                        {Object.entries(DOCS).map(([slug, d]) => (
                            <Link
                                key={slug}
                                to={`/legal/${slug}`}
                                className={`rounded-full border px-4 py-1.5 font-medium transition ${slug === doc ? "border-brand bg-brand-soft text-brand" : "border-border hover:border-brand hover:text-brand"}`}
                            >
                                {d.label}
                            </Link>
                        ))}
                    </div>

                    <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card">
                        {status === "loading" && (
                            <div className="space-y-3" aria-busy="true">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="h-4 animate-pulse rounded bg-muted" style={{ width: `${95 - (i % 4) * 12}%` }} />
                                ))}
                            </div>
                        )}

                        {status === "error" && (
                            <div className="py-8 text-center">
                                <FileText className="mx-auto h-10 w-10 text-brand" />
                                <p className="mt-4 font-semibold">We couldn't load this document right now.</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Please try again in a moment, or write to us at{" "}
                                    <a href="mailto:support@vivyaanbusinesssystems.com" className="text-brand hover:underline">support@vivyaanbusinesssystems.com</a>.
                                </p>
                                {API && (
                                    <button
                                        type="button"
                                        onClick={() => { setState({ status: "loading", data: null, doc }); setAttempt((n) => n + 1); }}
                                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:border-brand hover:text-brand transition"
                                    >
                                        <RefreshCw className="h-4 w-4" /> Try again
                                    </button>
                                )}
                            </div>
                        )}

                        {status === "ready" && (
                            <article className="text-muted-foreground leading-relaxed">
                                {blocks.map((b, i) => {
                                    if (b.type === "h") return <h2 key={i} id={slugOf(b.text)} className="mt-8 mb-3 text-xl font-bold text-foreground scroll-mt-28 first:mt-0">{b.text}</h2>;
                                    if (b.type === "ul") return <ul key={i} className="my-3 list-disc space-y-1.5 pl-6 marker:text-brand">{b.items.map((t, j) => <li key={j}>{t}</li>)}</ul>;
                                    if (b.type === "ol") return <ol key={i} className="my-3 list-decimal space-y-1.5 pl-6 marker:text-brand">{b.items.map((t, j) => <li key={j}>{t}</li>)}</ol>;
                                    return <p key={i} className="my-3">{b.text}</p>;
                                })}
                            </article>
                        )}
                    </div>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        For the company's own terms and policies, see{" "}
                        <Link to="/terms-and-conditions" className="text-brand font-semibold hover:underline">Terms &amp; Conditions</Link>,{" "}
                        <Link to="/privacy-policy" className="text-brand font-semibold hover:underline">Privacy Policy</Link> and{" "}
                        <Link to="/refund-cancellation-policy" className="text-brand font-semibold hover:underline">Refund &amp; Cancellation Policy</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
