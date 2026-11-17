import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
    ArrowRight, Globe, Smartphone, LayoutDashboard, Bike, ChefHat, BellRing,
    Store, UtensilsCrossed, CheckCircle, Wallet, Banknote, QrCode, ShieldCheck,
    Rocket, ClipboardList, Share2, ShoppingBag,
} from "lucide-react";
import SEO from "./SEO";
import Reveal from "../components/Reveal";

const FEATURES = [
    {
        icon: Globe,
        title: "Your Own Ordering Website",
        copy: "Every shop gets its own customer ordering website, so customers can browse your menu and order online in a few taps.",
    },
    {
        icon: Smartphone,
        title: "Customer Mobile App",
        copy: "A mobile app for your shop, published under your own Google Play account, so your brand stays front and centre.",
    },
    {
        icon: LayoutDashboard,
        title: "Owner Panel",
        copy: "Manage orders, your menu, riders, money and reports from one simple panel.",
    },
    {
        icon: Bike,
        title: "Rider App",
        copy: "Assign deliveries to your own riders and let them manage their orders from their phones.",
    },
    {
        icon: ChefHat,
        title: "Kitchen & Waiter Panels",
        copy: "Orders reach your kitchen and floor staff instantly, so service stays quick and organised.",
    },
    {
        icon: BellRing,
        title: "Notifications That Reach Everyone",
        copy: "Order updates by app notification, SMS and email, so customers and staff always know what is happening.",
    },
];

const STEPS = [
    { icon: ClipboardList, title: "Join", copy: "Tell us about your shop and choose the plan that fits you." },
    { icon: UtensilsCrossed, title: "Set Up Your Menu", copy: "Add your items, prices and photos from the owner panel." },
    { icon: Share2, title: "Share Your Shop Site", copy: "Your shop gets its own website address that you can share with customers." },
    { icon: ShoppingBag, title: "Receive Orders", copy: "Orders arrive in your panel, ready for your kitchen, staff and riders." },
];

const PAYMENT_WAYS = [
    { icon: Wallet, title: "Online payment", copy: "Customers pay through your shop's own Razorpay account." },
    { icon: Banknote, title: "Cash on delivery", copy: "Collect cash at the door as you do today." },
    { icon: QrCode, title: "UPI at the table", copy: "Dine-in guests can pay by UPI at the table." },
];

export default function OnlineOrdering() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title="Online Ordering Software for Restaurants"
                description="Online ordering software (SaaS) for restaurants: a customer ordering website and mobile app, owner panel, rider app, kitchen and waiter panels, and notifications."
                url="https://www.vivyaanbusinesssystems.com/online-ordering-software"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: "Online ordering software for restaurants",
                    description:
                        "Online ordering software (SaaS) for restaurants: a customer ordering website and mobile app, owner panel, rider app, kitchen and waiter panels, and notifications.",
                    applicationCategory: "BusinessApplication",
                    operatingSystem: "Web, Android",
                    url: "https://www.vivyaanbusinesssystems.com/online-ordering-software",
                    provider: { "@id": "https://www.vivyaanbusinesssystems.com/#organization" },
                }}
            />

            {/* Hero */}
            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
                <div className="container-page relative max-w-4xl text-center">
                    <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3.5 py-1.5 text-sm font-semibold text-brand">
                        <Store className="h-3.5 w-3.5" /> Software Services
                    </span>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                        Online ordering software for{" "}
                        <span className="text-gradient-brand">restaurants</span>
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Vivyaan Business Systems provides online ordering software (SaaS) that gives every shop its own customer ordering website and mobile app, plus the tools to run orders, menu, riders, money and reports. We provide the software; you keep the profits.
                    </p>
                    <div className="animate-fade-up [animation-delay:300ms] mt-8 flex flex-wrap justify-center gap-3">
                        <Link
                            to="/pricing"
                            className="btn-shine inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:-translate-y-0.5 transition-all group"
                        >
                            See Pricing <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-3.5 text-sm font-semibold hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all"
                        >
                            Talk to Our Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* What you get */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">What You Get</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Everything a Shop Needs to Take Orders Online</h2>
                    </Reveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <Reveal key={f.title} delay={(i % 3) * 90}>
                                    <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant transition-all duration-300">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand mb-5 group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6 transition-all">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-bold">{f.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.copy}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 lg:py-28 bg-surface border-y border-border">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">How It Works</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Up and Running in Four Steps</h2>
                    </Reveal>
                    <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                        <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-9 h-0.5 bg-linear-to-r from-transparent via-brand/30 to-transparent" />
                        {STEPS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <Reveal key={s.title} delay={i * 120} className="relative text-center">
                                    <div className="relative mx-auto grid h-18 w-18 place-items-center rounded-full border-4 border-surface gradient-brand text-brand-foreground shadow-elegant">
                                        <Icon className="h-7 w-7" />
                                        <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-highlight text-[11px] font-extrabold text-highlight-foreground">{i + 1}</span>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.copy}</p>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Payments: customers pay the shop directly */}
            <section className="py-20 lg:py-28">
                <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
                    <Reveal direction="left">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">How Payments Work</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">Customers Pay Your Shop Directly</h2>
                        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                            Money from your customers goes straight to you, through your shop's own Razorpay account, as cash on delivery, or by UPI at the table. Vivyaan never receives or holds your customers' food payments.
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            What you pay Vivyaan is for the software: your plan, per-order fees on the Partner plan, and prepaid SMS. See the <Link to="/pricing" className="text-brand font-semibold hover:underline">pricing page</Link> for details.
                        </p>
                    </Reveal>
                    <Reveal direction="right" className="grid gap-4">
                        {PAYMENT_WAYS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-brand/40 hover:shadow-card transition-all">
                                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-brand text-brand-foreground">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{p.title}</h3>
                                        <p className="text-sm text-muted-foreground">{p.copy}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </Reveal>
                </div>
            </section>

            {/* Good to know */}
            <section className="pb-20 lg:pb-28">
                <div className="container-page max-w-4xl">
                    <Reveal>
                        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Good to Know</h2>
                            </div>
                            <ul className="space-y-3 text-muted-foreground leading-relaxed">
                                {[
                                    "Vivyaan provides software. It is not a marketplace, a payment aggregator, or a food business.",
                                    "Vivyaan does not sell food, employ riders, or receive, hold or settle customers' payments.",
                                    "Each shop is responsible for its own food licences (such as FSSAI), taxes, customer disputes and refunds.",
                                    "Each shop's website belongs to that shop, and each shop's mobile app is published under the shop's own Google Play account.",
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm text-muted-foreground">
                                Read our <Link to="/terms-of-service" className="text-brand font-semibold hover:underline">Terms &amp; Conditions</Link> and <Link to="/refund-cancellation-policy" className="text-brand font-semibold hover:underline">Refund &amp; Cancellation Policy</Link> for the full details.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-20 lg:pb-8">
                <div className="container-page">
                    <Reveal direction="zoom">
                        <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 sm:px-14 sm:py-16 text-center">
                            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/30 blur-3xl animate-blob" />
                            <div className="relative">
                                <Rocket className="mx-auto h-10 w-10 text-highlight" />
                                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-brand-foreground">Ready to take your shop online?</h2>
                                <p className="mt-3 text-brand-foreground/80 max-w-xl mx-auto">Tell us about your shop and we'll help you get started.</p>
                                <Link
                                    to="/contact"
                                    className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-highlight text-highlight-foreground px-8 py-4 font-bold shadow-2xl hover:scale-[1.03] transition group"
                                >
                                    Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
