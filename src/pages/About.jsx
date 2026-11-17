import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
    Target, Eye, Heart, Award, Users, Globe2,
    Shield, Lightbulb, CheckCircle, ArrowRight, Layers, Store
} from "lucide-react";
import SEO from "./SEO";
import Reveal from "../components/Reveal";

export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    const values = [
        { icon: Shield, title: "Integrity", copy: "We operate with honesty, transparency, and professionalism." },
        { icon: Heart, title: "Customer First", copy: "Our clients' success is our highest priority." },
        { icon: Lightbulb, title: "Innovation", copy: "We continuously embrace new ideas and sourcing strategies." },
        { icon: Award, title: "Quality Excellence", copy: "We deliver candidates and services that exceed expectations." },
        { icon: Users, title: "Collaboration", copy: "We believe in teamwork and long-term partnerships." },
        { icon: CheckCircle, title: "Commitment", copy: "We are dedicated to achieving measurable hiring outcomes." },
    ];

    const missionPoints = [
        "Deliver exceptional recruitment and staffing solutions across industries.",
        "Connect businesses with the right talent to improve operational performance.",
        "Help organizations build reliable and scalable workforces for sustained growth.",
        "Create lasting partnerships through transparency, quality, and reliability.",
        "Contribute to business success by providing end-to-end manpower and recruitment services."
    ];

    const hiringSteps = [
        { step: "01", title: "Understanding Requirements", desc: "Thoroughly assessing job roles, required skills, budget, and company culture." },
        { step: "02", title: "Talent Sourcing", desc: "Leveraging job portals, internal databases, networks, and direct headhunting." },
        { step: "03", title: "Candidate Screening", desc: "Careful review of qualifications, expertise, and overall suitability." },
        { step: "04", title: "Initial Assessment", desc: "Preliminary interviews evaluating technical knowledge and behavioural fit." },
        { step: "05", title: "Interview Coordination", desc: "Scheduling and managing smooth communication between candidates and clients." },
        { step: "06", title: "Selection & Offers", desc: "Assisting with salary negotiations, documentation, and seamless onboarding." },
        { step: "07", title: "Background Verification", desc: "Facilitating employment, education, and reference checks when required." },
        { step: "08", title: "Post-Placement Support", desc: "Maintaining regular follow-ups to ensure a smooth transition and long-term satisfaction." }
    ];

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title="About Us"
                description="Learn about Vivyaan Business Systems' mission, vision, and core values. We are a trusted partner for enterprise talent, staffing, and workforce solutions."
                url="https://www.vivyaanbusinesssystems.com/about"
            />

            {/* Hero */}
            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
                <div className="pointer-events-none absolute -bottom-40 -right-24 h-md w-md rounded-full bg-highlight/25 blur-3xl animate-blob [animation-delay:-8s]" />
                <div className="container-page relative max-w-4xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">About Us</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Powering Businesses with <span className="text-gradient-brand">Exceptional Talent</span>
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Vivyaan Business Systems Pvt. Ltd. is a growing workforce solutions and recruitment company focused on helping businesses find the right talent for their evolving workforce needs.
                    </p>
                </div>
            </section>

            {/* Trusted partner + vision + mission */}
            <section className="py-20 lg:py-28">
                <div className="container-page max-w-6xl">
                    <Reveal className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold">A Trusted Partner for Growth</h2>
                        <div className="mx-auto mt-4 h-1 w-16 rounded-full gradient-brand" />
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Our integrated approach focuses on understanding your unique hiring needs and delivering reliable workforce solutions to improve efficiency and enable sustainable growth. Whether businesses require permanent recruitment, temporary staffing, blue-collar manpower, or comprehensive domestic staffing, we act as a trusted long-term partner dedicated to delivering exceptional talent and measurable results.
                        </p>
                    </Reveal>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Reveal direction="left">
                            <div className="relative h-full overflow-hidden rounded-3xl border border-brand/20 bg-linear-to-br from-brand/5 to-transparent p-10 sm:p-12 shadow-sm hover:shadow-elegant transition-shadow">
                                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-highlight text-highlight-foreground shadow-sm">
                                            <Eye className="h-7 w-7" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                                    </div>
                                    <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                                        To become one of India's most trusted business solutions companies by empowering organizations
                                        with innovative workforce and talent solutions that create
                                        long-term business value.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal direction="right">
                            <div className="relative h-full overflow-hidden rounded-3xl border border-brand/20 bg-linear-to-bl from-brand/5 to-transparent p-10 sm:p-12 shadow-sm hover:shadow-elegant transition-shadow">
                                <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant">
                                            <Target className="h-7 w-7" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {missionPoints.map((point, index) => (
                                            <li key={index} className="flex gap-4 items-start">
                                                <div className="mt-1 shrink-0 grid h-6 w-6 place-items-center rounded-full bg-brand/20">
                                                    <CheckCircle className="h-4 w-4 text-brand" />
                                                </div>
                                                <span className="text-base text-foreground/80 leading-relaxed font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Hiring process */}
            <section className="py-20 lg:py-28 bg-surface border-y border-border">
                <div className="container-page">
                    <Reveal className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">How We Work</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Our Hiring Process</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            A structured, transparent, and efficient methodology designed to connect the right talent
                            with the right opportunities, ensuring speed and quality for both clients and candidates.
                        </p>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hiringSteps.map((s, i) => (
                            <Reveal key={i} delay={(i % 4) * 90} className="h-full">
                                <div className="relative h-full rounded-3xl border border-border bg-card p-8 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                                    <div className="absolute -right-4 -top-6 text-[80px] font-extrabold text-brand/5 group-hover:text-brand/15 transition-colors pointer-events-none select-none">
                                        {s.step}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3 pr-6">{s.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="mt-12">
                        <div className="rounded-2xl bg-brand-soft p-6 sm:p-8 text-center max-w-4xl mx-auto border border-brand/20">
                            <p className="text-brand font-semibold text-lg">
                                "Our commitment is to deliver skilled professionals who contribute to your business growth while helping candidates build rewarding careers."
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Core values */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Core Values</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What we stand for</h2>
                        <p className="mt-4 text-muted-foreground">
                            Built on a foundation of quality, integrity, and customer satisfaction.
                        </p>
                    </Reveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <Reveal key={v.title} delay={(i % 3) * 90} className="h-full">
                                    <div className="group h-full rounded-2xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant transition-all duration-300">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand mb-6 group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6 transition-all">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold">{v.title}</h3>
                                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Business highlights */}
            <section className="py-20 bg-surface border-y border-border">
                <div className="container-page">
                    <Reveal direction="zoom">
                        <div className="relative overflow-hidden rounded-3xl gradient-brand text-brand-foreground p-10 sm:p-14 grid md:grid-cols-3 gap-10 lg:gap-16">
                            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/25 blur-3xl animate-blob" />
                            <div className="relative text-center md:text-left">
                                <Globe2 className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                                <p className="mt-6 text-2xl font-bold">Growing Network</p>
                                <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                    Expanding partnerships with startups, SMEs, and enterprises across multiple industries.
                                </p>
                            </div>
                            <div className="relative text-center md:text-left">
                                <Layers className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                                <p className="mt-6 text-2xl font-bold">Multi-Service</p>
                                <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                    End-to-end solutions combining Permanent Recruitment, Temporary Staffing, and Comprehensive Manpower under one roof.
                                </p>
                            </div>
                            <div className="relative text-center md:text-left">
                                <Award className="h-12 w-12 text-highlight mx-auto md:mx-0" />
                                <p className="mt-6 text-2xl font-bold">Quality Driven</p>
                                <p className="mt-3 text-brand-foreground/80 leading-relaxed">
                                    Unwavering commitment to operational excellence, transparency, and timely delivery.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Technology / software */}
            <section className="py-20 lg:py-24">
                <div className="container-page max-w-5xl">
                    <Reveal>
                        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card md:flex-row md:items-center md:justify-between hover:border-brand/40 transition-colors">
                            <div className="flex items-start gap-5">
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant">
                                    <Store className="h-7 w-7" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Our SaaS Platform for Shops</h2>
                                    <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">
                                        We run a software-as-a-service (SaaS) platform that gives every shop its own ordering website and mobile app, with the tools to run orders, riders and reports, on a monthly plan or a prepaid wallet. We also provide recruitment, staffing and manpower services.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="/online-ordering-software"
                                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-brand hover:border-brand hover:bg-brand-soft transition group"
                            >
                                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-20 lg:pb-8">
                <div className="container-page text-center">
                    <Reveal>
                        <h2 className="text-3xl sm:text-4xl font-bold">Ready to partner with us?</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experience the difference of a strategic partner dedicated to your long-term success.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-3.5 text-sm font-bold text-brand-foreground shadow-elegant hover:-translate-y-0.5 hover:shadow-2xl transition-all group"
                        >
                            Talk to our team <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
