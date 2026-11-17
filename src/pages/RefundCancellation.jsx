import { Receipt, XCircle, RotateCcw, CreditCard, FileSignature, Headphones, Store } from "lucide-react";
import LegalPage from "../components/LegalPage";

export default function RefundCancellation() {
    const sections = [
        {
            icon: FileSignature,
            title: "1. Scope of this Policy",
            content: "This Refund and Cancellation Policy applies to the recruitment, staffing, manpower and software services provided by Vivyaan Business Systems Pvt. Ltd. (\"Vivyaan\", \"we\", \"us\") to business clients, including our online ordering platform for restaurants. Our services are business-to-business (B2B) services, and fees are agreed in writing with each client through a proposal, service agreement, purchase order or invoice."
        },
        {
            icon: Receipt,
            title: "2. Fees and Invoices",
            content: "The fees, billing cycle and payment terms for each engagement are set out in the applicable proposal, agreement or invoice. Fees are quoted in Indian Rupees and are exclusive of GST and other applicable taxes unless stated otherwise. Services are billed as agreed for the engagement, such as per placement, per deployed resource, per project or per milestone."
        },
        {
            icon: XCircle,
            title: "3. Cancellation of Services",
            content: "A client may request cancellation of an engagement or requirement by giving written notice to Vivyaan. Cancellation terms, including any notice period, are those stated in the signed agreement or proposal for that engagement.",
            list: [
                "Fees for work already carried out, resources already deployed, candidates already presented or services already delivered up to the date of cancellation remain payable.",
                "Where an agreement is cancelled by either party, outstanding invoices for services delivered up to that date must be settled in line with the agreed payment terms."
            ]
        },
        {
            icon: CreditCard,
            title: "4. Refund Policy",
            content: "Because our services involve time, effort and resources committed from the start of an engagement, payments made to Vivyaan are generally non-refundable once the service has begun, except in the cases below.",
            list: [
                "A payment was taken twice, or was taken by mistake.",
                "A payment was taken but was not credited against your invoice or account.",
                "A refund or adjustment is specifically provided for in your signed agreement."
            ]
        },
        {
            icon: Store,
            title: "5. Online Ordering Platform Payments",
            content: [
                "For our online ordering platform, all payments made to Vivyaan are non-refundable. This covers plan fees, prepaid months, extra shops, order-fee wallet and SMS top-ups, per-order fees, and the one-time setup fee.",
                "The only exceptions are a payment that was taken twice or by mistake, or a payment that was taken but not credited. These are returned as described below.",
                "Customers of a shop pay the shop directly, not Vivyaan. Refunds for food or goods are therefore the responsibility of the shop, and not of Vivyaan."
            ]
        },
        {
            icon: RotateCcw,
            title: "6. How Approved Refunds Are Made",
            content: [
                "Approved refunds are returned to the original payment method, and never to a different account. Refunds are normally completed within 5 to 7 working days from the date of approval, depending on your bank or payment provider.",
                "Any goodwill refund, credit or adjustment is given at Vivyaan's sole discretion and does not create a right to future refunds."
            ]
        },
        {
            icon: Headphones,
            title: "7. How to Request a Refund or Cancellation",
            content: "To request a cancellation or report a payment issue, write to us at support@vivyaanbusinesssystems.com or call +91 91515 66767 (Monday to Friday, 10:00 AM to 5:00 PM IST). Please include your company name, the invoice or agreement reference, and the reason for your request so that we can review it promptly."
        }
    ];

    return (
        <LegalPage
            seoTitle="Refund & Cancellation Policy"
            seoDescription="Refund and cancellation policy for recruitment, staffing, manpower and software services from Vivyaan Business Systems Pvt. Ltd."
            seoUrl="https://www.vivyaanbusinesssystems.com/refund-cancellation-policy"
            title="Refund & Cancellation Policy"
            intro="How cancellations, payments and refunds work for our business clients, explained clearly and fairly."
            updated="17 November 2026"
            sections={sections}
        />
    );
}
