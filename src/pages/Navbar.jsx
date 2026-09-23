import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    ChevronDown,
    Home,
    Building2,
    Layers,
    Info,
    Phone,
    ArrowRight
} from "lucide-react";
import { CATEGORIES, getServicesByCategory } from "../lib/services-data";
import { cn } from "../lib/utils";
import logo from "../assets/logo.svg";

const NAV = [
    { to: "/", label: "Home", icon: Home },
    { to: "/industries", label: "Industries", icon: Building2 },
    { to: "/services", label: "Services", mega: true, icon: Layers },
    { to: "/about", label: "About Us", icon: Info },
    { to: "/contact", label: "Contact Us", icon: Phone },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    scrolled
                        ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
                        : "bg-background/60 backdrop-blur-md",
                )}
            >
                <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
                    <Link to="/" className="flex items-center shrink-0">
                        <img
                            src={logo}
                            alt="Vivyaan Business Systems Logo"
                            className="h-24 md:h-38 w-auto object-contain"
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV.map((item) => {
                            const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));

                            return item.mega ? (
                                <div
                                    key={item.to}
                                    className="relative"
                                    onMouseEnter={() => setMegaOpen(true)}
                                    onMouseLeave={() => setMegaOpen(false)}
                                >
                                    <Link
                                        to={item.to}
                                        className={cn(
                                            "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
                                            isActive ? "text-brand" : "text-foreground/80 hover:text-brand"
                                        )}
                                    >
                                        {item.label}
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </Link>
                                    {megaOpen && <MegaMenu onNavigate={() => setMegaOpen(false)} />}
                                </div>
                            ) : (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={cn(
                                        "rounded-md px-3 py-2 text-sm font-medium transition",
                                        isActive ? "text-brand" : "text-foreground/80 hover:text-brand"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-elegant hover:opacity-95 transition"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </header>

            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-background/95 backdrop-blur-xl px-2 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                {NAV.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200",
                                isActive ? "text-brand" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "h-5 w-5 transition-transform duration-200",
                                    isActive ? "scale-110 stroke-[2.5px]" : "stroke-2"
                                )}
                            />
                            <span className="text-[10px] font-medium leading-none tracking-tight">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}

function MegaMenu({ onNavigate }) {
    const cats = Object.keys(CATEGORIES);

    return (
        <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 w-150 max-w-[95vw] shadow-2xl origin-top animate-in fade-in zoom-in-95 duration-200 z-50">
            <div className="rounded-3xl border border-border bg-background p-3 flex flex-col gap-2 max-h-[calc(100vh-100px)] overflow-y-auto">

                {/* 2-Column Grid Container */}
                <div className="grid grid-cols-2 gap-2">
                    {cats.map((key) => {
                        const c = CATEGORIES[key];
                        const services = getServicesByCategory(key);
                        const servicesList = services.map(s => s.title).join(" • ");

                        return (
                            <Link
                                key={key}
                                to={`/services#${key}`} // Added hash routing here
                                onClick={onNavigate}
                                className="group flex flex-col px-4 py-4 bg-surface rounded-2xl border border-transparent hover:border-brand/30 hover:shadow-sm transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs uppercase tracking-[0.16em] text-brand font-extrabold">
                                        {c.label}
                                    </h3>
                                    <ArrowRight className="h-3.5 w-3.5 text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>

                                <p className="mt-1.5 text-sm font-medium text-foreground">
                                    {c.description}
                                </p>

                                <p className="mt-auto pt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                    {servicesList}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Footer Button spans full width under the grid */}
                <div className="mt-1 pt-2 pb-1 border-t border-border/50 shrink-0">
                    <Link
                        to="/services"
                        onClick={onNavigate}
                        className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors group"
                    >
                        Explore All Services <ArrowRight className="ml-2 h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}