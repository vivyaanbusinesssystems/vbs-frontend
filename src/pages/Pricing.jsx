import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Check, Minus, Info, Wallet, MessageSquare, Gift, Store } from "lucide-react";
import SEO from "./SEO";
import Reveal from "../components/Reveal";
import { usePlans } from "../lib/usePlans";
import { SETUP_FEE_STATEMENT, EVERY_PLAN_INCLUDES } from "../lib/pricing-data";

const PLAN_IDS = ["partner", "growth", "pro"];

const rupees = (n) => `Rs ${Number(n).toLocaleString("en-IN")}`;
// null = unlimited, 0 = none, a number = "up to n"
const limitText = (v) => (v === null ? "Unlimited" : v === 0 ? "None" : `Up to ${v}`);

export default function Pricing() {
    const { plans: p } = usePlans();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    const discounts = Object.entries(p.monthDiscounts || {})
        .filter(([, pct]) => pct > 0)
        .map(([months, pct]) => `${months} months: save ${pct}%`)
        .join("  ·  ");
    const shopsIncluded = (p.includedBranches ?? 0) + 1;

    const cards = [
        {
            id: "partner",
            name: p.partner.name,
            tagline: "No monthly fee. Pay only when you get orders.",
            price: `${rupees(p.partner.feeMinRs)} – ${rupees(p.partner.feeMaxRs)}`,
            unit: "per completed order",
            detail: "The fee depends on the order value and is taken from your prepaid order-fee wallet.",
            bullets: [
                "No monthly plan fee",
                "Fees are deducted from a prepaid wallet that you top up",
                "If the wallet runs out, new orders pause until you top up",
                `Riders: ${limitText(p.limits.riders.partner).toLowerCase()}`,
            ],
        },
        {
            id: "growth",
            name: p.growth.name,
            tagline: "A fixed monthly plan for shops with steady orders.",
            price: rupees(p.growth.priceRs),
            unit: "per month + GST",
            detail: "Paid in advance for 1 to 6 months.",
            featured: true,
            bullets: [
                discounts && `Pay for more months and save: ${discounts}`,
                p.freeDays > 0 && `${p.freeDays}-day free period for every new shop`,
                `Riders: ${limitText(p.limits.riders.growth).toLowerCase()}`,
                `Kitchen and waiter logins: ${limitText(p.limits.staff.growth).toLowerCase()}`,
            ],
        },
        {
            id: "pro",
            name: p.pro.name,
            tagline: "For growing businesses with more than one shop.",
            price: rupees(p.pro.priceRs),
            unit: "per month + GST",
            detail: "Paid in advance for 1 to 6 months.",
            bullets: [
                discounts && `Pay for more months and save: ${discounts}`,
                p.freeDays > 0 && `${p.freeDays}-day free period for every new shop`,
                `${shopsIncluded} shops included; each extra shop ${rupees(p.branchAddonRs)} per month`,
                `Riders: ${limitText(p.limits.riders.pro).toLowerCase()}`,
                `Kitchen and waiter logins: ${limitText(p.limits.staff.pro).toLowerCase()}`,
            ],
        },
    ];

    // comparison rows: the two numeric limits first, then every plan feature (kitchen/waiter logins are shown as a number instead)
    const featureRows = p.features.filter((f) => f.key !== "staffLogins");
    const hasCustomDomain = featureRows.some((f) => f.key === "customDomain");

    return (
        <div className="animate-page-in pb-20 lg:pb-0">
            <SEO
                title="Pricing"
                description="Simple, public pricing for Vivyaan's online ordering software for restaurants. Partner, Growth and Pro plans, in rupees, GST extra."
                url="https://www.vivyaanbusinesssystems.com/pricing"
            />

            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="container-page relative max-w-3xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">Pricing</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Simple, <span className="text-gradient-brand">Transparent</span> Pricing
                    </h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-5 text-lg text-muted-foreground">
                        For our online ordering software for restaurants. Choose a plan that fits how your restaurant works.
                    </p>
                    <p className="animate-fade-up [animation-delay:300ms] mt-3 text-sm text-muted-foreground/80">
                        All prices are in Indian Rupees (INR). GST ({p.gstPercent}%) is added extra.
                    </p>
                </div>
            </section>

            {/* Plan cards */}
            <section className="py-16 lg:py-24">
                <div className="container-page grid gap-6 lg:grid-cols-3 items-stretch">
                    {cards.map((plan, i) => (
                        <Reveal key={plan.id} delay={i * 100} className="h-full">
                            <div
                                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant ${plan.featured
                                    ? "border-brand bg-card shadow-elegant ring-1 ring-brand/30"
                                    : "border-border bg-card"
                                    }`}
                            >
                                {plan.featured && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-highlight px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-highlight-foreground shadow">
                                        Popular
                                    </span>
                                )}
                                <h2 className="text-2xl font-extrabold">{plan.name}</h2>
                                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                                <div className="mt-6">
                                    <p className="text-4xl font-extrabold text-brand">{plan.price}</p>
                                    <p className="mt-1 text-sm font-semibold text-foreground/70">{plan.unit}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">{plan.detail}</p>
                                </div>

                                <ul className="mt-6 mb-8 space-y-3 border-t border-border pt-6">
                                    {plan.bullets.filter(Boolean).map((b) => (
                                        <li key={b} className="flex gap-3 text-sm text-foreground/80">
                                            <Check className="h-5 w-5 shrink-0 text-brand" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`btn-shine mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all group ${plan.featured
                                        ? "gradient-brand text-brand-foreground shadow-elegant hover:-translate-y-0.5"
                                        : "border border-border hover:border-brand hover:text-brand"
                                        }`}
                                >
                                    Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="container-page mt-10">
                    <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
                        <Info className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                        <p>{SETUP_FEE_STATEMENT}</p>
                    </div>
                </Reveal>
            </section>

            {/* Comparison table */}
            <section className="py-16 lg:py-20 bg-surface border-y border-border">
                <div className="container-page max-w-5xl">
                    <Reveal className="text-center max-w-2xl mx-auto mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Compare Plans</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What Each Plan Includes</h2>
                    </Reveal>

                    <Reveal>
                        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-card">
                            <table className="w-full min-w-150 text-left text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-brand-soft/50">
                                        <th className="px-5 py-4 font-bold">Feature</th>
                                        {PLAN_IDS.map((id) => (
                                            <th key={id} className="px-5 py-4 text-center font-bold">{p[id].name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-surface/60">
                                        <td className="px-5 py-3.5 font-medium">Riders</td>
                                        {PLAN_IDS.map((id) => (
                                            <td key={id} className="px-5 py-3.5 text-center text-muted-foreground">{limitText(p.limits.riders[id])}</td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-surface/60">
                                        <td className="px-5 py-3.5 font-medium">Kitchen and waiter logins</td>
                                        {PLAN_IDS.map((id) => (
                                            <td key={id} className="px-5 py-3.5 text-center text-muted-foreground">{limitText(p.limits.staff[id])}</td>
                                        ))}
                                    </tr>
                                    {featureRows.map((f) => (
                                        <tr key={f.key} className="hover:bg-surface/60">
                                            <td className="px-5 py-3.5 font-medium">{f.label}</td>
                                            {PLAN_IDS.map((id) => {
                                                const has = f.plans.includes(id);
                                                return (
                                                    <td key={id} className="px-5 py-3.5 text-center">
                                                        {!has ? (
                                                            <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
                                                        ) : (
                                                            <Check className="mx-auto h-5 w-5 text-brand" aria-label="Included" />
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>

                    {hasCustomDomain && (
                        <p className="mt-4 text-xs text-muted-foreground">
                            Custom domain: available on request for Pro shops. The domain belongs to the shop.
                        </p>
                    )}

                    <Reveal className="mt-12">
                        <div className="rounded-3xl border border-border bg-card p-8">
                            <h3 className="text-lg font-bold">Included in every plan</h3>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                {EVERY_PLAN_INCLUDES.map((t) => (
                                    <li key={t} className="flex gap-3 text-sm text-foreground/80">
                                        <Check className="h-5 w-5 shrink-0 text-brand" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Extras */}
            <section className="py-16 lg:py-20">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Good to Know</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Add-ons and Extras</h2>
                    </Reveal>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: Store,
                                title: "Extra shops (Pro add-on)",
                                copy: `Pro includes ${shopsIncluded} shops. Each extra shop is ${rupees(p.branchAddonRs)} per month + GST.`,
                            },
                            {
                                icon: MessageSquare,
                                title: "Prepaid SMS packs",
                                copy: "SMS is used for customer login codes and service messages. Top up your SMS wallet with any amount you choose, whenever you need.",
                            },
                            {
                                icon: Gift,
                                title: "Free period for a new shop",
                                copy: p.freeDays > 0
                                    ? `Every new shop gets a ${p.freeDays}-day free period to try the platform before a plan starts.`
                                    : "Ask us about a free trial period for new shops.",
                            },
                        ].map((e, i) => {
                            const Icon = e.icon;
                            return (
                                <Reveal key={e.title} delay={i * 100}>
                                    <div className="h-full rounded-2xl border border-border bg-card p-7 hover:border-brand/40 hover:shadow-card transition-all">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand mb-5">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-bold">{e.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.copy}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Wallets + plan end */}
            <section className="pb-16 lg:pb-24">
                <div className="container-page max-w-4xl grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-3xl border border-border bg-card p-8">
                            <Wallet className="h-8 w-8 text-brand" />
                            <h3 className="mt-4 text-xl font-bold">Two Separate Wallets</h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                The Partner order-fee wallet pays the per-order fee on the Partner plan. If it runs out, new orders pause until you top up. The SMS wallet pays for customer login codes and messages. If it runs out, customers cannot receive login codes.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="h-full rounded-3xl border border-border bg-card p-8">
                            <Info className="h-8 w-8 text-brand" />
                            <h3 className="mt-4 text-xl font-bold">When a Plan Ends</h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                You get a {p.graceDays}-day grace period, with notice by app and SMS. If you don't choose a plan, your shop moves automatically to the Partner plan and your website stays online.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal className="container-page mt-10 text-center">
                    <p className="text-sm text-muted-foreground">
                        Payments to Vivyaan are covered by our{" "}
                        <Link to="/refund-cancellation-policy" className="text-brand font-semibold hover:underline">Refund &amp; Cancellation Policy</Link>.
                        {" "}Questions? <Link to="/contact" className="text-brand font-semibold hover:underline">Contact us</Link>.
                    </p>
                </Reveal>
            </section>
        </div>
    );
}
