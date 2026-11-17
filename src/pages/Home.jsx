import { Link } from "react-router-dom";
import {
    Users,
    Briefcase,
    Globe,
    TrendingUp,
    UserCheck,
    HardHat,
    Star,
    Quote,
    Layers,
    Settings,
    CheckCircle,
    Heart,
    ArrowRight,
    Sparkles,
    Code,
    ChevronRight,
    ChevronDown,
    SearchCheck,
    ClipboardList,
    Handshake,
    Rocket,
    MapPin,
    Phone,
    ShieldCheck,
    Store,
    Smartphone,
    LayoutDashboard,
    Bike,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero.jpg";
import SEO from "./SEO";
import { organizationSchema, websiteSchema } from "../lib/site";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { CATEGORIES, SERVICES, INDUSTRIES, getServicesByCategory } from "../lib/services-data";

export default function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                absoluteTitle="Recruitment & Staffing in India | Vivyaan Business Systems"
                description="Recruitment, staffing, manpower and software services for businesses across India. Permanent hiring, contract staffing, bulk manpower and more."
                url="https://www.vivyaanbusinesssystems.com/"
                jsonLd={[organizationSchema, websiteSchema]}
            />
            <Hero />
            <StatsBand />
            <CompanyIntro />
            <CoreServices />
            <PlatformSpotlight />
            <HowWeWork />
            <WhyChooseUs />
            <IndustriesMarquee />
            <PreFooterCTA />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
    return (
        <section className="relative gradient-hero overflow-hidden">
            {/* Decorative animated backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 h-md w-md rounded-full bg-highlight/25 blur-3xl animate-blob [animation-delay:-8s]" />

            <div className="container-page relative grid lg:grid-cols-2 gap-14 pt-10 pb-14 lg:py-24 items-center">
                <div>
                    <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3.5 py-1.5 text-sm font-semibold text-brand shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" /> Vivyaan Business Systems Pvt. Ltd.
                    </span>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                        Empowering Businesses with{" "}
                        <span className="text-gradient-brand">Smart Workforce &amp; Technology Solutions</span>
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Vivyaan Business Systems Pvt. Ltd. is a growing workforce solutions and recruitment company focused on helping businesses find the right talent for their evolving workforce needs.
                    </p>

                    <div className="animate-fade-up [animation-delay:300ms] mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="btn-shine inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:-translate-y-0.5 hover:shadow-2xl transition-all group"
                        >
                            Get a Free Consultation
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all"
                        >
                            Explore Services
                        </Link>
                    </div>

                    <ul className="animate-fade-up [animation-delay:400ms] mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        {["Pan-India coverage", "IT & Non-IT hiring", "Permanent to bulk manpower"].map((t) => (
                            <li key={t} className="inline-flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-brand" /> {t}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="animate-fade-up [animation-delay:250ms] relative">
                    <div className="absolute -inset-4 gradient-brand opacity-10 blur-3xl rounded-[3rem]" />
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-primary">
                        <img
                            src={heroImg}
                            alt="Vivyaan enterprise partnership across staffing and technology"
                            width={1400}
                            height={1100}
                            className="w-full h-auto transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Floating info cards (facts taken from the site's own data) */}
                    <div className="hidden sm:flex absolute -left-6 bottom-10 items-center gap-3 rounded-2xl border border-border bg-background/95 backdrop-blur px-4 py-3 shadow-elegant animate-float">
                        <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-brand-foreground">
                            <Layers className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p className="text-lg font-extrabold text-foreground">{SERVICES.length}+</p>
                            <p className="text-xs text-muted-foreground">Specialised services</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex absolute -right-4 top-8 items-center gap-3 rounded-2xl border border-border bg-background/95 backdrop-blur px-4 py-3 shadow-elegant animate-float-slow">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-highlight text-highlight-foreground">
                            <Globe className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p className="text-lg font-extrabold text-foreground">Pan-India</p>
                            <p className="text-xs text-muted-foreground">Talent reach</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* STATS BAND (all numbers come from the site's own service data)     */
/* ------------------------------------------------------------------ */
function StatsBand() {
    const stats = [
        { value: Object.keys(CATEGORIES).length, suffix: "", label: "Service Lines" },
        { value: SERVICES.length, suffix: "+", label: "Specialised Services" },
        { value: INDUSTRIES.length, suffix: "+", label: "Industries Served" },
        { value: null, text: "Pan-India", label: "Recruitment Reach" },
    ];

    return (
        <section className="relative -mt-6 z-10">
            <div className="container-page">
                <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-elegant">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-card px-6 py-8 text-center hover:bg-brand-soft/50 transition-colors">
                            <p className="text-3xl sm:text-4xl font-extrabold text-brand">
                                {s.value !== null ? <CountUp to={s.value} suffix={s.suffix} /> : s.text}
                            </p>
                            <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* COMPANY INTRO                                                      */
/* ------------------------------------------------------------------ */
function CompanyIntro() {
    const chips = [
        "IT Staffing",
        "Non-IT Staffing",
        "Domestic Staffing",
        "Permanent Recruitment",
        "Contract Staffing",
        "Temporary Staffing",
        "Blue-Collar Manpower Solutions",
    ];

    return (
        <section className="py-20 lg:py-28">
            <div className="container-page grid lg:grid-cols-5 gap-12 items-center">
                <Reveal direction="left" className="lg:col-span-2">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Who We Are</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                        Welcome to Vivyaan Business Systems
                    </h2>
                    <div className="mt-5 h-1 w-16 rounded-full gradient-brand" />
                    <Link
                        to="/about"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand group"
                    >
                        More about us
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Reveal>

                <Reveal direction="right" className="lg:col-span-3">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We provide end-to-end recruitment and staffing solutions across India, supporting businesses in identifying, attracting, evaluating, and deploying the right talent for their workforce requirements.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        At Vivyaan Business Systems, we understand that the right people are at the heart of every successful organization. Our approach combines industry understanding, structured recruitment processes, talent sourcing capabilities, and a strong focus on client requirements to deliver workforce solutions that are efficient, scalable, and business-oriented.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {chips.map((c) => (
                            <span
                                key={c}
                                className="rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand hover:bg-brand hover:text-brand-foreground transition-colors"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* CORE SERVICES - four cards; each opens to show its services        */
/* ------------------------------------------------------------------ */
function CoreServices() {
    // which card is open (one at a time); closed cards all stay the same height, so there are no gaps
    const [openId, setOpenId] = useState(null);

    const categoryConfig = [
        { id: "recruitment", icon: Users },
        { id: "staffing", icon: Briefcase },
        { id: "manpower", icon: HardHat },
        { id: "software", icon: Code },
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-surface border-y border-border overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <div className="container-page relative">
                <Reveal className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Core Expertise</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">End-to-End Business Solutions</h2>
                    <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
                        Four focused service lines, one dependable partner for every stage of your workforce journey.
                    </p>
                </Reveal>

                {/* items-start: an opened card grows by itself and does not stretch its neighbours */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                    {categoryConfig.map((config, i) => {
                        const Icon = config.icon;
                        const meta = CATEGORIES[config.id];
                        const subServices = getServicesByCategory(config.id);
                        const isOpen = openId === config.id;
                        const panelId = `core-services-${config.id}`;

                        return (
                            <Reveal key={config.id} delay={i * 100}>
                                <div className={`group relative rounded-3xl border bg-card p-7 flex flex-col hover:shadow-elegant hover:border-brand/50 transition-all duration-300 ${isOpen ? "border-brand/50 shadow-elegant" : "border-border"}`}>
                                    <span className="absolute right-6 top-6 text-5xl font-extrabold text-brand/5 group-hover:text-brand/10 transition-colors select-none">
                                        0{i + 1}
                                    </span>
                                    <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">{meta.label}</h3>
                                    <p className="text-sm text-muted-foreground mb-5 min-h-15">{meta.description}</p>

                                    <div className="border-t border-border/60 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpenId(isOpen ? null : config.id)}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            className="flex w-full items-center justify-between text-sm font-semibold text-brand hover:brightness-75 transition-all"
                                        >
                                            <span>
                                                {isOpen ? "Hide Services" : "Explore Services"}
                                                <span className="ml-2 rounded-full bg-brand-soft px-2 py-0.5 text-xs font-bold">{subServices.length}</span>
                                            </span>
                                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                        </button>

                                        {/* Collapsible list: animates open/closed; inert keeps hidden links out of tab order */}
                                        <div
                                            id={panelId}
                                            inert={!isOpen}
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <ul className="space-y-1 pb-1">
                                                    {subServices.map((sub) => (
                                                        <li key={sub.slug}>
                                                            <Link
                                                                to={`/services/${sub.slug}`}
                                                                className="group/link flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium text-foreground/80 hover:bg-brand-soft hover:text-brand transition"
                                                            >
                                                                {sub.title}
                                                                <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all shrink-0 ml-2" />
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal className="mt-12 text-center">
                    <Link
                        to="/services"
                        className="btn-shine inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:-translate-y-0.5 transition-all group"
                    >
                        View All Services
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* ONLINE ORDERING PLATFORM SPOTLIGHT                                 */
/* ------------------------------------------------------------------ */
function PlatformSpotlight() {
    const points = [
        { icon: Globe, label: "Ordering website for every shop" },
        { icon: Smartphone, label: "Customer mobile app" },
        { icon: LayoutDashboard, label: "Owner panel with orders, menu & reports" },
        { icon: Bike, label: "Rider app, kitchen & waiter panels" },
    ];

    return (
        <section className="py-20 lg:py-28">
            <div className="container-page">
                <Reveal direction="zoom">
                    <div className="relative overflow-hidden rounded-3xl gradient-brand p-8 sm:p-12 lg:p-16 text-brand-foreground">
                        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-highlight/30 blur-3xl animate-blob" />
                        <div className="absolute inset-0 bg-dots opacity-10" />
                        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                    <Store className="h-3.5 w-3.5" /> SaaS Platform
                                </span>
                                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                                    Online ordering software for restaurants
                                </h2>
                                <p className="mt-5 text-lg text-brand-foreground/80 leading-relaxed">
                                    Give every shop its own ordering website and mobile app, and run orders, riders, money and reports from one place. We provide the software on a monthly plan or prepaid wallet; you keep the profits.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to="/online-ordering-software"
                                        className="btn-shine inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-7 py-3.5 text-sm font-bold shadow-2xl hover:scale-[1.03] transition group"
                                    >
                                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        to="/pricing"
                                        className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
                                    >
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {points.map((p) => {
                                    const Icon = p.icon;
                                    return (
                                        <li key={p.label} className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur px-4 py-4 hover:bg-white/20 transition-colors">
                                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                                                <Icon className="h-5 w-5 text-highlight" />
                                            </span>
                                            <span className="text-sm font-semibold leading-snug">{p.label}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* HOW WE WORK                                                        */
/* ------------------------------------------------------------------ */
function HowWeWork() {
    const steps = [
        {
            icon: ClipboardList,
            title: "Understand Your Need",
            copy: "We start by learning your business, the role or workforce you need, timelines, and the skills that matter most.",
        },
        {
            icon: SearchCheck,
            title: "Source & Screen",
            copy: "We search across multiple channels and screen profiles for skills, experience, and role suitability.",
        },
        {
            icon: Handshake,
            title: "Interview & Select",
            copy: "We shortlist, coordinate interviews, and support offer discussions so decisions move quickly.",
        },
        {
            icon: Rocket,
            title: "Onboard & Support",
            copy: "We coordinate joining and stay in touch after placement, with replacement and follow-up support.",
        },
    ];

    return (
        <section className="py-20 lg:py-28">
            <div className="container-page">
                <Reveal className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Our Process</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">How We Work</h2>
                    <p className="mt-4 text-muted-foreground">
                        A simple, transparent process that keeps you informed from first conversation to first day on the job.
                    </p>
                </Reveal>

                <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* connecting line (desktop) */}
                    <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-9 h-0.5 bg-linear-to-r from-transparent via-brand/30 to-transparent" />
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <Reveal key={s.title} delay={i * 120} className="relative text-center">
                                <div className="relative mx-auto grid h-18 w-18 place-items-center rounded-full border-4 border-background gradient-brand text-brand-foreground shadow-elegant">
                                    <Icon className="h-7 w-7" />
                                    <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-highlight text-[11px] font-extrabold text-highlight-foreground">
                                        {i + 1}
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.copy}</p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* WHY CHOOSE US                                                      */
/* ------------------------------------------------------------------ */
function WhyChooseUs() {
    const items = [
        {
            icon: Layers,
            title: "Comprehensive Staffing Solutions",
            copy: "From IT and Non-IT professionals to blue-collar and frontline workers, we provide diverse recruitment and manpower solutions under one roof."
        },
        {
            icon: Globe,
            title: "Pan-India Recruitment Support",
            copy: "We support organizations with talent acquisition and staffing requirements across multiple locations in India, helping businesses access a wider talent pool."
        },
        {
            icon: Star,
            title: "Quality-Focused Recruitment",
            copy: "Our recruitment process focuses on understanding the client's requirements and identifying candidates based on skills, experience, qualifications, role suitability, and organizational requirements."
        },
        {
            icon: TrendingUp,
            title: "Faster Hiring Support",
            copy: "We understand that vacant positions can impact business operations. Our structured sourcing and screening approach helps organizations address hiring requirements efficiently and reduce recruitment turnaround time."
        },
        {
            icon: Settings,
            title: "Flexible Workforce Solutions",
            copy: "Business requirements can change quickly. We provide flexible solutions including Permanent Recruitment, Contract Staffing, Temporary Staffing, Bulk Hiring, Manpower Supply, and Blue-Collar Staffing."
        },
        {
            icon: Briefcase,
            title: "Industry-Focused Approach",
            copy: "We support recruitment requirements across a wide range of industries, allowing us to understand different business environments, job profiles, skill requirements, and workforce challenges."
        },
        {
            icon: UserCheck,
            title: "Client-Centric Service",
            copy: "Every organization has unique hiring needs. We work closely with our clients to understand their workforce objectives and develop solutions aligned with their business requirements, timelines, and hiring priorities."
        },
        {
            icon: CheckCircle,
            title: "End-to-End Recruitment Support",
            copy: "From candidate sourcing and screening to interview coordination and onboarding support, we help simplify the recruitment process and provide a smoother hiring experience."
        },
        {
            icon: Layers,
            title: "Scalable Hiring Capabilities",
            copy: "Whether you need to hire one specialized professional or a large workforce, our staffing solutions can be adapted according to the size and complexity of your requirement."
        },
        {
            icon: Quote,
            title: "Professional & Transparent Approach",
            copy: "We believe in maintaining professional communication, transparency, accountability, and ethical business practices throughout our engagement with clients and candidates."
        },
        {
            icon: Heart,
            title: "Focus on Long-Term Partnerships",
            copy: "We don't look at recruitment as a one-time transaction. Our objective is to build long-term relationships with clients by consistently delivering dependable workforce solutions."
        },
        {
            icon: Users,
            title: "Talent & Business Connection",
            copy: "We create a strong connection between organizations looking for the right talent and professionals looking for the right opportunities, helping both sides achieve their objectives."
        },
    ];

    return (
        <section className="py-20 lg:py-28 bg-surface border-y border-border">
            <div className="container-page">
                <Reveal className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Why Vivyaan</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Why Choose Vivyaan Business Systems?</h2>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((i, idx) => {
                        const Icon = i.icon;
                        return (
                            <Reveal key={idx} delay={(idx % 3) * 90}>
                                <div className="group h-full flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant transition-all duration-300">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand shrink-0 group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6 transition-all duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-foreground mb-2 leading-tight">{i.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{i.copy}</p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* INDUSTRIES - two counter-scrolling rows                            */
/* ------------------------------------------------------------------ */
function IndustriesMarquee() {
    const half = Math.ceil(INDUSTRIES.length / 2);
    const rowA = INDUSTRIES.slice(0, half);
    const rowB = INDUSTRIES.slice(half);
    const doubled = (arr) => [...arr, ...arr];

    const Pill = ({ children }) => (
        <span className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground/80 whitespace-nowrap shadow-sm hover:border-brand hover:text-brand hover:shadow-elegant transition-all">
            {children}
        </span>
    );

    return (
        <section className="py-20 lg:py-24 overflow-hidden">
            <Reveal className="container-page mb-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries We Serve</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Experience Across Every Sector</h2>
            </Reveal>

            <div className="relative space-y-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
                <div className="marquee-pause">
                    <div className="flex gap-4 animate-marquee w-max">
                        {doubled(rowA).map((ind, i) => <Pill key={`a-${i}`}>{ind}</Pill>)}
                    </div>
                </div>
                <div className="marquee-pause">
                    <div className="flex gap-4 animate-marquee-reverse w-max">
                        {doubled(rowB).map((ind, i) => <Pill key={`b-${i}`}>{ind}</Pill>)}
                    </div>
                </div>
            </div>

            <Reveal className="mt-10 text-center">
                <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-bold text-brand group">
                    Explore all industries
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Reveal>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* CLOSING CTA                                                        */
/* ------------------------------------------------------------------ */
function PreFooterCTA() {
    return (
        <section className="pb-20 lg:pb-8">
            <div className="container-page">
                <Reveal direction="zoom">
                    <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 sm:px-14 sm:py-20 text-center">
                        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/30 blur-3xl animate-blob" />
                        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob [animation-delay:-9s]" />
                        <div className="absolute inset-0 bg-dots opacity-10" />
                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-foreground max-w-3xl mx-auto">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="mt-4 text-brand-foreground/80 max-w-2xl mx-auto text-lg">
                                Whether you need permanent employees, temporary staffing, or comprehensive manpower support, Vivyaan Business Systems Pvt. Ltd. is here to help. Partner with us to build stronger teams, optimise operations, and accelerate business growth.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="btn-shine inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-4 text-base font-bold shadow-2xl hover:scale-[1.03] transition group"
                                >
                                    Let's Build Success Together
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+919151566767"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-brand-foreground hover:bg-white/10 transition"
                                >
                                    <Phone className="h-5 w-5" /> +91 91515 66767
                                </a>
                            </div>
                            <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-foreground/70">
                                <MapPin className="h-4 w-4" /> Sultanpur, Uttar Pradesh, India
                                <span className="mx-2 opacity-40">|</span>
                                <ShieldCheck className="h-4 w-4" /> Professional &amp; transparent engagements
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
