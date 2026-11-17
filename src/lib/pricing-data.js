/**
 * Pricing for the online ordering platform.
 *
 * The Pricing page loads the LIVE plans from the platform backend
 * (GET {VITE_SAAS_API_URL}/public/plans, see lib/usePlans.js). They are exactly what the
 * superadmin sets in More > Plan defaults, so a change there shows on this site within seconds.
 *
 * FALLBACK_PLANS below is only used when the backend cannot be reached (or VITE_SAAS_API_URL is
 * not set). It has the same shape as the API answer and the defaults from the platform's code
 * (backend/src/config/plans.js). If the live prices ever differ, the live ones win.
 *
 * RULES (from the company handoff):
 *  - Never show the setup-fee amount and never call it tentative or negotiable.
 *  - Prices are in rupees and GST is extra.
 *  - The per-order fee is shown only as a range (never the slabs).
 */

// The setup fee is stated only in this form, on every page.
export const SETUP_FEE_STATEMENT =
    "A one-time setup fee will be charged when your shop joins. It is non-refundable.";

// What every plan includes (these do not change by plan).
export const EVERY_PLAN_INCLUDES = [
    "Delivery and pickup, switched on or off by the shop owner",
    "Customer app on website and phone, with an order timeline",
    "Rider Call button for customers",
    "Coupons and tax invoices",
    "Multiple languages",
    "Table booking",
];

export const FALLBACK_PLANS = {
    currency: "INR",
    gstPercent: 18,
    freeDays: 30,
    graceDays: 3,
    partner: { name: "Partner", feeMinRs: 3, feeMaxRs: 15 },
    growth: { name: "Growth", priceRs: 2999 },
    pro: { name: "Pro", priceRs: 4999 },
    monthDiscounts: { 1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 10 },
    includedBranches: 2,
    branchAddonRs: 1499,
    features: [
        { key: "dineIn", label: "Dine-in ordering with QR tables", plans: ["growth", "pro"] },
        { key: "riderLiveMap", label: "Rider live map for customers", plans: ["growth", "pro"] },
        { key: "soundboxVoice", label: "Soundbox voice (app only)", plans: ["growth", "pro"] },
        { key: "services", label: "Services and inquiries", plans: ["growth", "pro"] },
        { key: "loyalty", label: "Loyalty and rewards", plans: ["growth", "pro"] },
        { key: "autoAccept", label: "Auto-accept orders", plans: ["growth", "pro"] },
        { key: "costsProfit", label: "Costs and profit view", plans: ["growth", "pro"] },
        { key: "bulkOrders", label: "Bulk orders", plans: ["pro"] },
        { key: "fullExports", label: "Full exports (customers, orders, items, reports)", plans: ["pro"] },
        { key: "analytics", label: "Business analytics and PDF reports", plans: ["pro"] },
        { key: "customPush", label: "Custom and daily automatic push", plans: ["pro"] },
        { key: "multiBranch", label: "Multi-branch", plans: ["pro"] },
        { key: "customDomain", label: "Custom domain", plans: ["pro"] },
    ],
    limits: {
        riders: { partner: 2, growth: null, pro: null },
        staff: { partner: 0, growth: 5, pro: null },
    },
};
