import { Link } from "react-router-dom";
import {
    Users,
    Briefcase,
    Globe,
    TrendingUp,
    HeadphonesIcon,
    UserCheck,
    HardHat,
    Star,
    Quote,
    Layers,
    Settings,
    CheckCircle,
    Heart,
    ArrowRight,
    Sparkles
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import heroImg from "../assets/hero.jpg";
import SEO from "./SEO";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`transition-opacity duration-700 ease-out pb-20 lg:pb-0 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <SEO
                title="Home"
                description="Vivyaan Business Systems Pvt. Ltd. provides reliable workforce solutions, staffing, and manpower services across India."
                url="https://www.vivyaanbusinesssystems.com/"
            />
            <Hero />
            <CompanyIntro />
            <CoreServices />
            <WhyChooseUs />
            <IndustriesMarquee />
            <Testimonials />
            <PreFooterCTA />
        </div>
    );
}

function Hero() {
    return (
        <section className="relative gradient-hero overflow-hidden">
            <div className="container-page grid lg:grid-cols-2 gap-12 pt-10 pb-10 lg:py-24 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-s font-semibold text-brand">
                        <Sparkles className="h-3.5 w-3.5" /> Vivyaan Business Systems Pvt. Ltd.
                    </span>
                    <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                        Powering Businesses with <span className="text-brand">Exceptional Talent</span>
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Vivyaan Business Systems Private Limited is a growing workforce solutions and recruitment company focused on helping businesses find the right talent for their evolving workforce needs.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition group"
                        >
                            Get a Free Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 gradient-brand opacity-10 blur-3xl rounded-[3rem]" />
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-primary">
                        <img
                            src={heroImg}
                            alt="Vivyaan enterprise partnership across staffing and technology"
                            width={1400}
                            height={1100}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CompanyIntro() {
    return (
        <section className="py-20">
            <div className="container-page max-w-4xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Who We Are</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                    Welcome to Vivyaan Business Systems
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    We provide end-to-end recruitment and staffing solutions across India, supporting businesses in identifying, attracting, evaluating, and deploying the right talent for their workforce requirements. Our services cover IT Staffing, Non-IT Staffing, Domestic Staffing, Permanent Recruitment, Contract Staffing, Temporary Staffing, and Blue-Collar Manpower Solutions.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    At Vivyaan Business Systems, we understand that the right people are at the heart of every successful organization. Our approach combines industry understanding, structured recruitment processes, talent sourcing capabilities, and a strong focus on client requirements to deliver workforce solutions that are efficient, scalable, and business-oriented.
                </p>
            </div>
        </section >
    );
}

function CoreServices() {
    const services = [
        {
            title: "Staffing and Recruitment",
            slug: "staffing-and-recruitment",
            icon: Users,
            copy: "Comprehensive recruitment solutions to help you identify, attract, and deploy the perfect candidates for permanent, contract, and temporary roles.",
        },
        {
            title: "Domestic Staffing",
            slug: "domestic-staffing",
            icon: Briefcase,
            copy: "Skilled professionals and workforce solutions across India for IT, Non-IT, manufacturing, healthcare, and retail.",
        },
        {
            title: "Blue Collar Workforce",
            slug: "blue-collar-workforce",
            icon: HardHat,
            copy: "Supplying reliable skilled manpower including factory workers, machine operators, drivers, security guards, and technicians.",
        },
        {
            title: "Manpower Services",
            slug: "manpower-services",
            icon: UserCheck,
            copy: "Reliable manpower outsourcing and management solutions designed to streamline your daily operations and meet dynamic business demands.",
        }
    ];

    return (
        <section className="py-20 bg-surface">
            <div className="container-page">
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        Our Core Services
                    </p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                        End-to-End Business Solutions
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group rounded-3xl border border-border bg-card p-8 flex flex-col hover:shadow-elegant hover:-translate-y-1 hover:border-brand/40 transition-all cursor-pointer"
                            >
                                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-brand-foreground shadow-elegant mb-6">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed grow">{service.copy}</p>
                                <div className="mt-6 text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <span className="text-lg leading-none">&rarr;</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

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
        <section className="py-20">
            <div className="container-page">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Why Vivyaan</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                        Why Choose Vivyaan Business Systems?
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((i, idx) => {
                        const Icon = i.icon;
                        return (
                            <div
                                key={idx}
                                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-card transition"
                            >
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand shrink-0">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                                        {i.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {i.copy}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function IndustriesMarquee() {
    const industries = [
        "Information Technology (IT)", "Healthcare & Life Sciences", "Manufacturing",
        "Banking & Financial Services", "Retail & E-commerce", "Logistics & Supply Chain",
        "Automobile", "Pharmaceuticals", "Education", "Telecommunications",
        "Engineering", "FMCG", "Hospitality", "Construction", "Energy & Utilities"
    ];
    const list = [...industries, ...industries];

    return (
        <section className="py-16 border-y border-border bg-surface overflow-hidden">
            <div className="container-page mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries We Serve</p>
            </div>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-surface to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-surface to-transparent z-10" />
                <div className="flex gap-4 animate-marquee w-max">
                    {list.map((ind, i) => (
                        <span
                            key={`${ind}-${i}`}
                            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground/80 whitespace-nowrap"
                        >
                            {ind}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const items = [
        {
            quote: "Vivyaan helped us close multiple critical hiring positions quickly with highly qualified candidates. Their professionalism and responsiveness made the entire recruitment process seamless.",
            name: "HR Manager",
            title: "Technology Company",
        },
        {
            quote: "Their tailored manpower solutions significantly improved our daily operations, taking the administrative burden off our shoulders so we could focus on growth.",
            name: "Facility Manager",
            title: "Logistics Enterprise",
        },
        {
            quote: "The team understood our staffing requirements perfectly and consistently delivered quality talent within the expected timelines.",
            name: "Operations Director",
            title: "Manufacturing Firm",
        },
    ];

    const [idx, setIdx] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
    const prevSlide = useCallback(() => setIdx((i) => (i - 1 + items.length) % items.length), [items.length]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let isSwiping = false;
        let startX = 0;

        const handleWheel = (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();

                if (!isSwiping && Math.abs(e.deltaX) > 25) {
                    isSwiping = true;
                    if (e.deltaX > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                    setTimeout(() => { isSwiping = false; }, 600);
                }
            }
        };

        const handleTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        el.addEventListener("touchstart", handleTouchStart, { passive: true });
        el.addEventListener("touchend", handleTouchEnd, { passive: true });

        const timer = setInterval(() => {
            setIdx((i) => (i + 1) % items.length);
        }, 6000);

        return () => {
            el.removeEventListener("wheel", handleWheel);
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchend", handleTouchEnd);
            clearInterval(timer);
        };
    }, [nextSlide, prevSlide, items.length]);

    return (
        <section className="py-20">
            <div className="container-page max-w-4xl">
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Testimonials</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
                </div>
                <div
                    ref={containerRef}
                    className="relative rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card select-none touch-pan-y overscroll-x-none"
                    style={{ WebkitUserSelect: "none" }}
                >
                    <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 text-brand-soft/40 sm:text-brand-soft z-0" />

                    <div className="relative z-10 min-h-55 flex flex-col justify-center cursor-grab active:cursor-grabbing pt-10 sm:pt-0">
                        <p className="text-lg sm:text-xl leading-relaxed text-foreground italic">
                            "{items[idx].quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-3 pointer-events-none">
                            <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-brand-foreground font-bold">
                                {items[idx].name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-foreground">{items[idx].name}</p>
                                <p className="text-xs text-muted-foreground">{items[idx].title}</p>
                            </div>
                            <div className="ml-auto flex text-highlight">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center gap-2 relative z-10">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Testimonial ${i + 1}`}
                                onClick={() => setIdx(i)}
                                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-brand" : "w-2 bg-border"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PreFooterCTA() {
    return (
        <section className="py-20 hidden md:block">
            <div className="container-page">
                <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 sm:px-14 sm:py-20 text-center">
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/30 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-foreground max-w-3xl mx-auto">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="mt-4 text-brand-foreground/80 max-w-2xl mx-auto text-lg">
                            Whether you need permanent employees, temporary staffing, or comprehensive manpower support, Vivyaan Business Systems Pvt. Ltd. is here to help. Partner with us to build stronger teams, optimise operations, and accelerate business growth.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-4 text-base font-bold shadow-2xl hover:scale-[1.02] transition group"
                        >
                            Let's Build Success Together <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}