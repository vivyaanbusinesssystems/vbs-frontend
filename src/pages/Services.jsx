import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { CATEGORIES, getServicesByCategory } from "../lib/services-data";
import SEO from "./SEO";

export default function Services() {
    const cats = Object.keys(CATEGORIES);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Handle scroll to top OR scroll to hash section
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Slight delay ensures the DOM is painted before calculating position
                setTimeout(() => {
                    const yOffset = -100; // Account for the fixed sticky navbar
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    setIsVisible(true);
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <SEO
                title="Our Services"
                description="Explore Vivyaan Business Systems' full-spectrum solutions across workforce staffing, recruitment, and software services."
                url="https://www.vivyaanbusinesssystems.com/services"
            />

            <section className="gradient-hero pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="container-page max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Services</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">
                        Comprehensive solutions across recruitment, staffing, and software.
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Specialized service lines designed to meet your evolving business needs — delivered by a single accountable partner.
                    </p>
                </div>
            </section>

            {cats.map((catKey) => {
                const meta = CATEGORIES[catKey];
                const items = getServicesByCategory(catKey);

                return (
                    // Added id={catKey} here so the browser knows where to scroll
                    <section key={catKey} id={catKey} className="py-16 border-t border-border first:border-none scroll-mt-24">
                        <div className="container-page">
                            <div className="mb-10 max-w-2xl">
                                <h2 className="text-3xl font-bold">{meta.label}</h2>
                                <p className="mt-3 text-lg text-muted-foreground">{meta.description}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((s) => (
                                    <Link
                                        key={s.slug}
                                        to={`/services/${s.slug}`}
                                        className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-elegant hover:-translate-y-1 transition-all flex flex-col h-full"
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                                            {s.categoryLabel}
                                        </p>
                                        <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground mb-4 grow">{s.intro}</p>

                                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand pt-4 border-t border-border/50">
                                            Explore Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}