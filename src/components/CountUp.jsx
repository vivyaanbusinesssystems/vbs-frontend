import { useEffect, useRef } from "react";

// Show the final number straight away when motion is reduced or unsupported.
function shouldSkipAnimation() {
    return (
        typeof IntersectionObserver === "undefined" ||
        (typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
    );
}

/**
 * Counts from 0 to `to` once, when scrolled into view.
 * The markup always contains the final number (so prerendered HTML and crawlers see the real value);
 * the animation only changes the text in the browser.
 */
export default function CountUp({ to, suffix = "", duration = 1600 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || shouldSkipAnimation()) return undefined;

        const write = (n) => { el.textContent = `${n}${suffix}`; };
        write(0);

        let raf;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const start = performance.now();
            const tick = (now) => {
                const t = Math.min((now - start) / duration, 1);
                write(Math.round(to * (1 - Math.pow(1 - t, 3))));
                if (t < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
        }, { threshold: 0.4 });
        io.observe(el);

        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
            write(to); // never leave a half-counted number behind (for example in StrictMode)
        };
    }, [to, suffix, duration]);

    return <span ref={ref}>{`${to}${suffix}`}</span>;
}
