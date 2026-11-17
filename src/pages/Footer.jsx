import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SERVICES, CATEGORIES } from "../lib/services-data";

// Custom SVG icon (Lucide removed its brand icons)
const Linkedin = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const LEGAL_LINKS = [
    { to: "/terms-and-conditions", label: "Terms & Conditions" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/refund-cancellation-policy", label: "Refund & Cancellation Policy" },
    { to: "/shipping-delivery-policy", label: "Shipping & Delivery Policy" },
    { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
    const categoryKeys = Object.keys(CATEGORIES);
    const coreServices = SERVICES.slice(0, 6);

    return (
        // pb-24 on mobile keeps the content clear of the fixed bottom tab bar
        <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden pb-24 lg:pb-0">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-highlight to-transparent" />
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

            <div className="container-page relative py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
                {/* Brand */}
                <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-highlight text-highlight-foreground">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p className="text-lg font-bold">Vivyaan</p>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">
                                Business Systems
                            </p>
                        </div>
                    </div>
                    <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
                        Your strategic bridge for enterprise talent, technology, and operations —
                        enabling companies to scale with confidence.
                    </p>
                    <a
                        href="https://www.linkedin.com/company/vivyaan-business-systems-private-limited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vivyaan Business Systems on LinkedIn"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-highlight hover:text-highlight-foreground transition group"
                    >
                        <Linkedin className="h-4 w-4" /> Follow on LinkedIn
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition" />
                    </a>
                </div>

                {/* Company + Legal */}
                <div className="lg:col-span-2">
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Company</h4>
                    <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
                        <li><Link to="/" className="hover:text-highlight hover:pl-1 transition-all">Home</Link></li>
                        <li><Link to="/about" className="hover:text-highlight hover:pl-1 transition-all">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-highlight hover:pl-1 transition-all">Services</Link></li>
                        <li><Link to="/industries" className="hover:text-highlight hover:pl-1 transition-all">Industries</Link></li>
                        <li><Link to="/online-ordering-software" className="hover:text-highlight hover:pl-1 transition-all">Online Ordering Software</Link></li>
                        <li><Link to="/pricing" className="hover:text-highlight hover:pl-1 transition-all">Pricing</Link></li>
                        <li><Link to="/contact" className="hover:text-highlight hover:pl-1 transition-all">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="lg:col-span-3">
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Services</h4>
                    <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
                        {categoryKeys.map((key) => (
                            <li key={key}>
                                <Link to={`/services#${key}`} className="hover:text-highlight hover:pl-1 transition-all">
                                    {CATEGORIES[key].label}
                                </Link>
                            </li>
                        ))}
                        {coreServices.slice(0, 2).map((s) => (
                            <li key={s.slug} className="hidden lg:block">
                                <Link to={`/services/${s.slug}`} className="hover:text-highlight hover:pl-1 transition-all">
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="lg:col-span-3">
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Contact</h4>
                    <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
                        <li className="flex gap-3">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <span>1157/9 Naya Nagar South, Sirwara Road, Sultanpur, 228001, Uttar Pradesh, India</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <a href="tel:+919151566767" className="hover:text-highlight transition">+91 91515 66767</a>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <span className="flex flex-col gap-1">
                                <a href="mailto:support@vivyaanbusinesssystems.com" className="hover:text-highlight transition break-all">support@vivyaanbusinesssystems.com</a>
                                <a href="mailto:vivek@vivyaanbusinesssystems.com" className="hover:text-highlight transition break-all">vivek@vivyaanbusinesssystems.com</a>
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-highlight" />
                            <span>Mon – Fri, 10:00 AM – 5:00 PM (IST)</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Legal strip: all required policy links, on every page */}
            <div className="relative border-t border-white/10">
                <div className="container-page py-6 flex flex-col gap-5 text-xs text-primary-foreground/60">
                    <nav aria-label="Legal" className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
                        {LEGAL_LINKS.map((l) => (
                            <Link key={l.to + l.label} to={l.to} className="hover:text-highlight transition">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
                        <p>© {new Date().getFullYear()} Vivyaan Business Systems Pvt. Ltd. All rights reserved.</p>
                        <p>GSTIN: 09AAMCV3210G1ZD</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
