import { Moon, Sun } from "lucide-react";

// Light/dark switch. The "dark" class on <html> is set before the first paint by the script in index.html
// (saved choice, else the device setting); this button flips it and remembers the choice.
// Both icons are always rendered and CSS shows the right one, so the prerendered page and the browser agree.
export default function ThemeToggle() {
    const toggle = () => {
        const root = document.documentElement;
        const dark = root.classList.toggle("dark");
        try { localStorage.setItem("vbs-theme", dark ? "dark" : "light"); } catch { /* private mode: the choice just lasts for this visit */ }
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0b1220" : "#ffffff");
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Switch between light and dark mode"
            title="Light / dark mode"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground hover:border-brand hover:text-brand transition-colors"
        >
            <Moon className="h-4.5 w-4.5 dark:hidden" />
            <Sun className="hidden h-4.5 w-4.5 dark:block" />
        </button>
    );
}
