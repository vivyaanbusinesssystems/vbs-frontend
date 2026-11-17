import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Users, Briefcase, HardHat, Code, Store, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { CATEGORIES, getServicesByCategory } from "../lib/services-data";
import SEO from "./SEO";
import Reveal from "../components/Reveal";

const CATEGORY_ICONS = { recruitment: Users, staffing: Briefcase, manpower: HardHat, software: Code };

export default function Services() {
    const cats = Object.keys(CATEGORIES);
    const location = useLocation();

    // Scroll to the requested category (#hash), or to the top
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const timer = setTimeout(() => {
                const element = document.getElementById(id);
                if (!element) return;
                const yOffset = -100; // account for the sticky navbar
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }, 100);
            return () => clearTimeout(timer);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.hash]);

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title="Our Services"
                description="Explore Vivyaan Business Systems' full-spectrum solutions across workforce staffing, recruitment, and software services."
                url="https://www.vivyaanbusinesssystems.com/services"
            />

            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
                <div className="container-page relative max-w-3xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Services</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl font-extrabold">
                        Comprehensive solutions across recruitment, staffing, and software.
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-5 text-lg text-muted-foreground">
                        Specialized service lines designed to meet your evolving business needs — delivered by a single accountable partner.
                    </p>
                </div>
            </section>

            {/* Sticky category jump bar */}
            <div className="sticky top-18 z-30 border-y border-border bg-background/90 backdrop-blur-lg">
                <div className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
                    {cats.map((key) => {
                        const Icon = CATEGORY_ICONS[key] || Sparkles;
                        return (
                            <a
                                key={key}
                                href={`#${key}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(key);
                                    if (el) {
                                        const y = el.getBoundingClientRect().top + window.pageYOffset - 130;
                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
                                }}
                                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/80 hover:border-brand hover:bg-brand-soft hover:text-brand transition"
                            >
                                <Icon className="h-4 w-4" /> {CATEGORIES[key].label}
                            </a>
                        );
                    })}
                </div>
            </div>

            {cats.map((catKey, ci) => {
                const meta = CATEGORIES[catKey];
                const items = getServicesByCategory(catKey);
                const Icon = CATEGORY_ICONS[catKey] || Sparkles;

                return (
                    <section
                        key={catKey}
                        id={catKey}
                        className={`py-16 lg:py-20 scroll-mt-32 ${ci % 2 === 1 ? "bg-surface border-y border-border" : ""}`}
                    >
                        <div className="container-page">
                            <Reveal className="mb-10 flex items-start gap-5 max-w-3xl">
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{meta.label}</h2>
                                    <p className="mt-2 text-lg text-muted-foreground">{meta.description}</p>
                                </div>
                            </Reveal>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((s, i) => (
                                    <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
                                        <Link
                                            to={`/services/${s.slug}`}
                                            className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                                        >
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                                                {s.categoryLabel}
                                            </p>
                                            <h3 className="mt-2 text-lg font-bold group-hover:text-brand transition-colors">{s.title}</h3>
                                            <p className="mt-2 text-sm text-muted-foreground mb-4 grow">{s.intro}</p>

                                            <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand pt-4 border-t border-border/50">
                                                Explore Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                                            </span>
                                        </Link>
                                    </Reveal>
                                ))}
                            </div>

                            {/* Online ordering platform callout, shown with Software Services */}
                            {catKey === "software" && (
                                <Reveal className="mt-10">
                                    <div className="relative overflow-hidden rounded-3xl gradient-brand p-8 sm:p-10 text-brand-foreground">
                                        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-highlight/30 blur-3xl animate-blob" />
                                        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                            <div className="max-w-2xl">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                                    <Store className="h-3.5 w-3.5" /> Our Software Product
                                                </span>
                                                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold">Online Ordering Software for Restaurants</h3>
                                                <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                                    A customer ordering website and mobile app for every shop, plus an owner panel, rider app, and kitchen and waiter panels. We provide the software; you keep the profits.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-3 shrink-0">
                                                <Link to="/online-ordering-software" className="btn-shine inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-6 py-3 text-sm font-bold hover:scale-[1.03] transition group">
                                                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                                <Link to="/pricing" className="inline-flex items-center rounded-full border border-brand-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-brand-foreground/10 transition">
                                                    View Pricing
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
