import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, ExternalLink, ChevronRight } from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "../lib/services-data";
import EnquiryForm from "../components/EnquiryForm";
import Reveal from "../components/Reveal";
import SEO from "./SEO";
import { SITE_URL } from "../lib/site";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
        // key={slug} replays the entrance animation when moving between services
        <div key={slug} className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title={service.title}
                description={service.intro}
                url={`${SITE_URL}/services/${service.slug}`}
                breadcrumbs={[
                    { name: "Services", url: `${SITE_URL}/services` },
                    { name: service.categoryLabel, url: `${SITE_URL}/services#${service.category}` },
                    { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
                ]}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: service.title,
                    description: service.intro,
                    serviceType: service.categoryLabel,
                    url: `${SITE_URL}/services/${service.slug}`,
                    provider: { "@id": `${SITE_URL}/#organization` },
                    areaServed: { "@type": "Country", name: "India" },
                }}
            />

            {/* Hero */}
            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-20 border-b border-border">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
                <div className="container-page relative max-w-4xl">
                    <nav aria-label="Breadcrumb" className="animate-fade-up text-xs text-muted-foreground mb-5 flex flex-wrap items-center gap-1.5">
                        <Link to="/" className="hover:text-brand">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services" className="hover:text-brand">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to={`/services#${service.category}`} className="hover:text-brand">{service.categoryLabel}</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-foreground font-medium">{service.title}</span>
                    </nav>
                    <p className="animate-fade-up [animation-delay:60ms] text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        {service.categoryLabel}
                    </p>
                    <h1 className="animate-fade-up [animation-delay:120ms] mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        {service.title}
                    </h1>
                    <p className="animate-fade-up [animation-delay:180ms] mt-5 text-xl text-brand font-medium">{service.tagline}</p>
                    <p className="animate-fade-up [animation-delay:240ms] mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        {service.intro}
                    </p>
                    <div className="animate-fade-up [animation-delay:300ms] mt-8 flex flex-wrap gap-3">
                        <a
                            href="#lead-form"
                            className="btn-shine inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:-translate-y-0.5 hover:shadow-2xl transition-all group"
                        >
                            Request Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Live portfolio button (only if the service has one) */}
                        {service.portfolioLink && (
                            <a
                                href={service.portfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold hover:border-brand hover:text-brand shadow-sm hover:-translate-y-0.5 transition-all"
                            >
                                View Live Portfolio <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* What is included */}
            {service.includes && service.includes.length > 0 && (
                <section className="py-20 lg:py-24">
                    <div className="container-page">
                        <Reveal className="max-w-2xl mb-12">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">What is Included</p>
                            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Our {service.title} Services Include:</h2>
                        </Reveal>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.includes.map((item, i) => (
                                <Reveal key={i} delay={(i % 3) * 80} className="h-full">
                                    <div className="group flex h-full gap-4 items-start p-5 rounded-2xl bg-surface border border-border/60 hover:-translate-y-1 hover:border-brand/40 hover:bg-card hover:shadow-card transition-all duration-300">
                                        <CheckCircle2 className="h-6 w-6 shrink-0 text-brand mt-0.5 group-hover:scale-110 transition-transform" />
                                        <p className="text-base text-foreground font-medium leading-relaxed">{item}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Value / ideal for */}
            {(service.valueToClients || service.idealFor) && (
                <section className="py-16 lg:py-20 bg-surface border-y border-border">
                    <div className="container-page max-w-4xl text-center">
                        <Reveal direction="zoom">
                            <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand/10 text-brand mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                                {service.valueToClients ? "Value to Clients" : "Ideal For"}
                            </h2>
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                {service.valueToClients || service.idealFor}
                            </p>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Enquiry form + related services */}
            <section id="lead-form" className="py-20 lg:py-24 bg-background scroll-mt-24">
                <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
                    <Reveal direction="left">
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
                                            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium hover:border-brand hover:bg-brand-soft hover:text-brand hover:-translate-y-0.5 transition-all"
                                        >
                                            {r.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Reveal>
                    <Reveal direction="right">
                        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                            <EnquiryForm
                                defaultService={service.slug}
                                messagePlaceholder="Tell us about your project or hiring need…"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
