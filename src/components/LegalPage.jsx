import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SEO from "../pages/SEO";
import Reveal from "./Reveal";

/**
 * Shared layout for policy pages.
 * sections: [{ icon, title, content: string | string[], list?: string[] }]
 */
export default function LegalPage({ seoTitle, seoDescription, seoUrl, eyebrow = "Legal & Compliance", title, intro, updated, sections }) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="animate-page-in pb-20 lg:pb-12">
            <SEO title={seoTitle} description={seoDescription} url={seoUrl} />

            <section className="pt-16 lg:pt-28 pb-16 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-surface -z-10" />
                <div className="absolute inset-0 bg-dots opacity-30 -z-10" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full gradient-brand opacity-10 blur-3xl animate-blob" />
                <div className="container-page max-w-4xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl font-extrabold text-foreground">{title}</h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{intro}</p>
                    <p className="animate-fade-up [animation-delay:300ms] mt-2 text-sm text-muted-foreground/70">Last updated: {updated}</p>
                </div>
            </section>

            <section className="py-10">
                <div className="container-page max-w-4xl flex flex-col gap-6">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        const paragraphs = Array.isArray(section.content) ? section.content : [section.content];
                        return (
                            <Reveal key={idx} delay={60}>
                                <div className="group rounded-3xl border border-border bg-card p-8 sm:p-10 hover:shadow-elegant hover:border-brand/40 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand shrink-0 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{section.title}</h2>
                                    </div>
                                    {paragraphs.map((p, i) => (
                                        <p key={i} className="text-muted-foreground leading-relaxed mt-3 first:mt-0">{p}</p>
                                    ))}
                                    {section.links && (
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {section.links.map((l) => (
                                                <Link
                                                    key={l.to}
                                                    to={l.to}
                                                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand hover:border-brand hover:bg-brand-soft transition"
                                                >
                                                    {l.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    {section.list && (
                                        <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 marker:text-brand">
                                            {section.list.map((li) => <li key={li}>{li}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}

                    <Reveal>
                        <div className="rounded-3xl gradient-brand p-8 sm:p-10 text-brand-foreground">
                            <h2 className="text-xl sm:text-2xl font-bold">Questions about this policy?</h2>
                            <p className="mt-2 text-brand-foreground/80">Vivyaan Business Systems Pvt. Ltd.</p>
                            <ul className="mt-5 space-y-3 text-sm">
                                <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />1157/9 Naya Nagar South, Sirwara Road, Sultanpur, 228001, Uttar Pradesh, India</li>
                                <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-highlight" /><a href="tel:+919151566767" className="hover:underline">+91 91515 66767</a></li>
                                <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-highlight" /><span className="flex flex-col gap-1"><a href="mailto:support@vivyaanbusinesssystems.com" className="hover:underline break-all">support@vivyaanbusinesssystems.com</a><a href="mailto:vivek@vivyaanbusinesssystems.com" className="hover:underline break-all">vivek@vivyaanbusinesssystems.com</a></span></li>
                            </ul>
                            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-highlight text-highlight-foreground px-6 py-2.5 text-sm font-bold hover:scale-[1.03] transition">
                                Contact Us
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
