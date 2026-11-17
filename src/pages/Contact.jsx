import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import SEO from "./SEO";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="overflow-x-hidden animate-page-in pb-20 lg:pb-0">
            <SEO
                title="Contact Us"
                description="Get in touch with Vivyaan Business Systems. Send us an enquiry, call our team, or visit our Head Office in Sultanpur."
                url="https://www.vivyaanbusinesssystems.com/contact"
            />

            <section className="relative gradient-hero overflow-hidden pt-16 lg:pt-28 pb-16 lg:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full gradient-brand opacity-15 blur-3xl animate-blob" />
                <div className="container-page relative max-w-3xl text-center">
                    <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-brand">Contact</p>
                    <h1 className="animate-fade-up [animation-delay:100ms] mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Get in Touch</h1>
                    <p className="animate-fade-up [animation-delay:200ms] mt-5 text-lg text-muted-foreground">
                        Whether you're scaling a team, launching a product, or streamlining operations —
                        we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-12 sm:py-20">
                <div className="container-page grid lg:grid-cols-5 gap-8 lg:gap-10 min-w-0">
                    <div className="lg:col-span-2 min-w-0 space-y-4 sm:space-y-5">
                        <Reveal direction="left">
                            <ContactCard icon={MapPin} title="Head Office">
                                1157/9 Naya Nagar South<br />Sirwara Road, Sultanpur, 228001<br />Uttar Pradesh, India
                            </ContactCard>
                        </Reveal>
                        <Reveal direction="left" delay={80}>
                            <ContactCard icon={Phone} title="Phone">
                                <a href="tel:+919151566767" className="hover:text-brand">+91 91515 66767</a>
                            </ContactCard>
                        </Reveal>
                        <Reveal direction="left" delay={160}>
                            <ContactCard icon={Mail} title="Email">
                                <a href="mailto:support@vivyaanbusinesssystems.com" className="hover:text-brand break-all">support@vivyaanbusinesssystems.com</a>
                                <br />
                                <a href="mailto:vivek@vivyaanbusinesssystems.com" className="hover:text-brand break-all">vivek@vivyaanbusinesssystems.com</a>
                            </ContactCard>
                        </Reveal>
                        <Reveal direction="left" delay={240}>
                            <ContactCard icon={Clock} title="Business Hours">
                                Mon – Fri: 10:00 AM – 5:00 PM IST
                            </ContactCard>
                        </Reveal>
                        <Reveal direction="left" delay={320}>
                            <ContactCard icon={ShieldCheck} title="Grievance Officer">
                                Vivek Dubey, Grievance Officer<br />
                                Vivyaan Business Systems Pvt. Ltd.<br />
                                <a href="mailto:vivek@vivyaanbusinesssystems.com" className="hover:text-brand break-all">vivek@vivyaanbusinesssystems.com</a>
                                <span className="mt-2 block">
                                    We acknowledge complaints within 24 hours and aim to resolve them within 15 days.
                                </span>
                            </ContactCard>
                        </Reveal>
                        <p className="px-1 text-sm text-muted-foreground">GSTIN: 09AAMCV3210G1ZD</p>

                        <Reveal>
                            <div className="w-full min-w-0 h-62.5 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-card relative bg-muted">
                                <iframe
                                    title="Vivyaan Business Systems Location"
                                    scrolling="no"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=26.2646,82.0728&z=15&output=embed"
                                    className="w-full h-full block grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=26.2646,82.0728"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-background/90 backdrop-blur border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-brand shadow-sm hover:bg-brand hover:text-brand-foreground transition"
                                    >
                                        View Larger Map
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal direction="right" className="lg:col-span-3 min-w-0">
                        <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-card lg:sticky lg:top-28">
                            <h2 className="text-xl sm:text-2xl font-bold">Send us an enquiry</h2>
                            <p className="mt-2 mb-6 text-sm text-muted-foreground">
                                Fill in the details and a solutions specialist will respond within 1 business day.
                            </p>
                            <EnquiryForm />
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

function ContactCard({ icon: Icon, title, children }) {
    return (
        <div className="flex w-full overflow-hidden gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-brand/40 hover:shadow-card hover:-translate-y-0.5 transition-all">
            <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
                <h3 className="font-bold text-foreground text-sm sm:text-base">{title}</h3>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed wrap-break-word">{children}</div>
            </div>
        </div>
    );
}
