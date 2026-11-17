import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

/**
 * Fades/slides its children in the first time they scroll into view.
 * direction: "up" (default) | "left" | "right" | "zoom"
 *
 * The "hidden until revealed" look only applies when JavaScript is running (see `html.js .reveal` in App.css),
 * so the prerendered HTML and crawlers that do not run scripts always see the full content.
 */
export default function Reveal({ children, delay = 0, direction = "up", className, as: Tag = "div", ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        // Without IntersectionObserver support, simply show the content.
        if (typeof IntersectionObserver === "undefined") {
            const raf = requestAnimationFrame(() => setVisible(true));
            return () => cancelAnimationFrame(raf);
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={{ "--reveal-delay": `${delay}ms` }}
            className={cn(
                "reveal",
                direction === "left" && "reveal-left",
                direction === "right" && "reveal-right",
                direction === "zoom" && "reveal-zoom",
                visible && "is-visible",
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
}
