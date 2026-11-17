import { useEffect, useState } from "react";
import { FALLBACK_PLANS } from "./pricing-data";

// Address of the platform backend's API, including /api, for example https://your-app.onrender.com/api
// Set it as VITE_SAAS_API_URL in the frontend environment. Without it the page shows FALLBACK_PLANS.
const API = String(import.meta.env.VITE_SAAS_API_URL || "").replace(/\/+$/, "");

// Only accept an answer that really looks like the plans (a wrong page or an error object must never replace the prices).
function looksValid(d) {
    return (
        d &&
        typeof d === "object" &&
        typeof d.growth?.priceRs === "number" &&
        typeof d.pro?.priceRs === "number" &&
        typeof d.partner?.feeMinRs === "number" &&
        typeof d.partner?.feeMaxRs === "number" &&
        Array.isArray(d.features) &&
        d.limits &&
        d.monthDiscounts
    );
}

/** The plans for the Pricing page: live from the platform when reachable, otherwise the built-in defaults. */
export function usePlans() {
    const [plans, setPlans] = useState(FALLBACK_PLANS);
    const [live, setLive] = useState(false);

    useEffect(() => {
        if (!API) return undefined;
        const controller = new AbortController();
        fetch(`${API}/public/plans`, { signal: controller.signal, headers: { Accept: "application/json" } })
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
            .then((d) => {
                if (looksValid(d)) {
                    setPlans(d);
                    setLive(true);
                }
            })
            .catch(() => { /* keep the built-in defaults */ });
        return () => controller.abort();
    }, []);

    return { plans, live };
}
