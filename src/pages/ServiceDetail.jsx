import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, ExternalLink } from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "../lib/services-data";
import LeadForm from "../pages/LeadForm";
import SEO from "./SEO";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, [slug]);

    if (!service) {
        return (
            <div className="container-page py-24 text-center">
                <SEO title="Service Not Found" />
                <h1 className="text-3xl font-bold">Service not found</h1>
                <Link to="/services" className="mt-6 inline-flex text-brand font-semibold">
                    Browse all services
                </Link>
            </div>
        );
    }

    const related = getServicesByCategory(service.category)
        .filter((s) => s.slug !== service.slug)
        .slice(0, 4);

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <SEO
                title={service.title}
                description={service.intro}
                url={`https://www.vivyaanbusinesssystems.com/services/${service.slug}`}
            />

            {/* Hero Section */}
            <section className="gradient-hero pt-16 lg:pt-28 pb-16 lg:pb-20 border-b border-border">
                <div className="container-page max-w-4xl">
                    <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                        <Link to="/" className="hover:text-brand">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-brand">Services</Link>
                        <span>/</span>
                        <span className="text-foreground">{service.title}</span>
                    </nav>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        {service.categoryLabel}
                    </p>
                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        {service.title}
                    </h1>
                    <p className="mt-5 text-xl text-brand font-medium">{service.tagline}</p>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        {service.intro}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#lead-form"
                            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-90 transition"
                        >
                            Request Consultation <ArrowRight className="h-4 w-4" />
                        </a>

                        {/* Live Portfolio Button (Only renders if it exists in data) */}
                        {service.portfolioLink && (
                            <a
                                href={service.portfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand shadow-sm transition"
                            >
                                View Live Portfolio <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Service Inclusions / Core Activities */}
            <section className="py-20">
                <div className="container-page">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">What is Included</p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Our {service.title} Services Include:</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                        {service.includes && service.includes.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-surface border border-border/50">
                                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand mt-0.5" />
                                <p className="text-base text-foreground font-medium leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value / Ideal For Highlights Block */}
            {(service.valueToClients || service.idealFor) && (
                <section className="py-16 bg-surface border-y border-border">
                    <div className="container-page max-w-4xl text-center">
                        <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand/10 text-brand mb-6">
                            <Target className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            {service.valueToClients ? "Value to Clients" : "Ideal For"}
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            {service.valueToClients || service.idealFor}
                        </p>
                    </div>
                </section>
            )}

            {/* Contact / Lead Form & Related Services */}
            <section id="lead-form" className="py-20 bg-background">
                <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                            Start a conversation
                        </p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
                            Tell us about your {service.title.toLowerCase()} needs
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            A solutions specialist will reach out within one business day with a tailored proposal and next steps.
                        </p>

                        {related.length > 0 && (
                            <div className="mt-12">
                                <p className="text-sm font-bold text-foreground mb-4">Other {service.categoryLabel}</p>
                                <div className="flex flex-wrap gap-2">
                                    {related.map((r) => (
                                        <Link
                                            key={r.slug}
                                            to={`/services/${r.slug}`}
                                            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand transition"
                                        >
                                            {r.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                        <LeadForm defaultService={service.slug} />
                    </div>
                </div>
            </section>
        </div>
    );
}