import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
    HeartPulse, ShoppingBag, Factory, Truck, Radio, Zap,
    GraduationCap, HardHat, Landmark, Server, Car, Pill,
    Cog, ShoppingCart, BedDouble, ArrowRight
} from "lucide-react";
import SEO from "./SEO";
import Reveal from "../components/Reveal";

// Matches the client's "Industries We Serve" list
const INDUSTRY_DATA = [
    {
        title: "Information Technology (IT)",
        description: "End-to-end digital transformation, cloud infrastructure management, and robust cybersecurity solutions.",
        icon: Server
    },
    {
        title: "Healthcare & Life Sciences",
        description: "HIPAA-compliant platforms, telehealth integrations, and data systems improving patient care and clinical efficiency.",
        icon: HeartPulse
    },
    {
        title: "Manufacturing",
        description: "Industry 4.0 integration, IoT monitoring, and production automation for modern, high-efficiency factories.",
        icon: Factory
    },
    {
        title: "Banking & Financial Services",
        description: "Secure, compliant financial technology solutions to optimize transactions, data analysis, and risk management.",
        icon: Landmark
    },
    {
        title: "Retail & E-commerce",
        description: "Omnichannel retail solutions, inventory management, and digital storefronts built for personalized customer experiences.",
        icon: ShoppingBag
    },
    {
        title: "Logistics & Supply Chain",
        description: "Advanced routing, real-time fleet tracking, and warehouse management software to keep supply chains moving.",
        icon: Truck
    },
    {
        title: "Automobile",
        description: "Smart manufacturing IT, dealership management systems, and connected vehicle technology solutions.",
        icon: Car
    },
    {
        title: "Pharmaceuticals",
        description: "Compliance tracking, supply chain visibility, and data management for research and drug distribution.",
        icon: Pill
    },
    {
        title: "Education",
        description: "Scalable EdTech platforms and learning management systems that empower educators and engage students.",
        icon: GraduationCap
    },
    {
        title: "Telecommunications",
        description: "Scalable infrastructure, billing software, and operational support systems for high-demand communication networks.",
        icon: Radio
    },
    {
        title: "Engineering",
        description: "Custom software and project management tools supporting complex engineering and design workflows.",
        icon: Cog
    },
    {
        title: "FMCG",
        description: "High-volume inventory tracking, distribution network optimization, and consumer data analytics.",
        icon: ShoppingCart
    },
    {
        title: "Hospitality",
        description: "Dynamic booking engines, property management systems, and guest experience platforms for seamless operations.",
        icon: BedDouble
    },
    {
        title: "Construction",
        description: "Project management, resource allocation, and safety compliance tools for on-time, on-budget builds.",
        icon: HardHat
    },
    {
        title: "Energy & Utilities",
        description: "Smart grid technologies, monitoring dashboards, and resource management systems for a sustainable future.",
        icon: Zap
    }
];

export default function Industries() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title="Industries We Serve"
                description="Vivyaan Business Systems provides domain expertise across IT, Healthcare, Manufacturing, Banking, Retail, and more."
                url="https://www.vivyaanbusinesssystems.com/industries"
            />

            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-highlight/25 blur-3xl animate-blob" />
                <div className="container-page relative max-w-3xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">Industries We Serve</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Domain expertise across every sector we serve.
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-5 text-lg text-muted-foreground">
                        Our teams bring lived experience of the regulations, workflows, and technology stacks
                        unique to each industry.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {INDUSTRY_DATA.map((ind, i) => {
                        const Icon = ind.icon;
                        return (
                            <Reveal key={ind.title} delay={(i % 3) * 80} className="h-full">
                                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-brand-foreground mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold">{ind.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground grow leading-relaxed">
                                        {ind.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <section className="pb-16">
                <div className="container-page">
                    <Reveal direction="zoom">
                        <div className="relative overflow-hidden rounded-3xl gradient-brand text-brand-foreground p-8 sm:p-12 text-center">
                            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-highlight/30 blur-3xl animate-blob" />
                            <div className="relative">
                                <h2 className="text-2xl sm:text-3xl font-bold">Don't see your industry?</h2>
                                <p className="mt-3 text-brand-foreground/80 max-w-xl mx-auto">
                                    We've likely worked in your space — let's have a conversation.
                                </p>
                                <Link
                                    to="/contact"
                                    className="btn-shine mt-6 inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-3.5 font-bold hover:scale-[1.03] transition group"
                                >
                                    Talk to us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
