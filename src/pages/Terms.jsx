import { CheckCircle, FileText, AlertCircle, Scale, Briefcase, Cpu, Wallet, CalendarClock, Trash2, Globe } from "lucide-react";
import LegalPage from "../components/LegalPage";

export default function Terms() {
    const sections = [
        {
            icon: CheckCircle,
            title: "1. Acceptance of Terms",
            content: "By accessing and using the Vivyaan Business Systems Pvt. Ltd. website and services, you accept and agree to be bound by these terms. If you do not agree, please do not use our website or services."
        },
        {
            icon: Briefcase,
            title: "2. Our Services",
            content: "Vivyaan Business Systems Pvt. Ltd. (\"Vivyaan\", \"we\", \"us\") is a business-to-business company. We provide recruitment, staffing, manpower and software services, including an online ordering platform (software as a service) for restaurants. The specific scope, fees and timelines of each engagement are set out in the proposal, agreement or plan chosen by the client."
        },
        {
            icon: Cpu,
            title: "3. Online Ordering Platform: Who Does What",
            content: [
                "The online ordering platform is operated and managed by Vivyaan. Vivyaan Business Systems Pvt. Ltd. is the business and compliance owner of the platform and uses technology provided by an independent developer.",
                "Vivyaan provides software. It is not an e-commerce marketplace, a payment aggregator, or a food business operator. Vivyaan does not sell food, does not employ riders, and does not receive, hold or settle customers' payments.",
                "Each shop owner is responsible for their own licences and registrations (such as FSSAI), taxes, customer disputes and refunds. Customers pay the shop directly, through the shop's own payment account, by cash on delivery, or by UPI at the table."
            ]
        },
        {
            icon: Wallet,
            title: "4. Plans, Fees and Wallets",
            content: [
                "Plans, per-order fees and prepaid SMS packs are published on our Pricing page, in Indian Rupees, with GST extra. Monthly plans are paid in advance. A one-time setup fee is charged when a shop joins and is non-refundable.",
                "The Partner plan uses a prepaid order-fee wallet and the SMS service uses a separate prepaid SMS wallet. If the order-fee wallet is empty, new orders cannot be taken until it is topped up. If the SMS wallet is empty, customers cannot receive login codes.",
                "Refunds are governed by our Refund & Cancellation Policy."
            ]
        },
        {
            icon: CalendarClock,
            title: "5. When a Plan Ends",
            content: "When a plan ends, the shop receives a 3-day grace period, with notice by app and SMS. If no plan is chosen in that time, the shop moves automatically to the Partner plan and its website stays online."
        },
        {
            icon: Trash2,
            title: "6. Closing and Deleting a Shop",
            content: "Vivyaan may close a shop, in which case its website shows that it is closed. A closed shop can be deleted permanently only 30 days after it was closed. When a shop is deleted, its customer data is erased. Records of money and tax, such as plan payments and invoices, wallet and SMS records, online payments, refunds and disputes, are kept for as long as the law requires, and no longer point to any individual person. Orders themselves are erased."
        },
        {
            icon: Globe,
            title: "7. Websites, Apps and Custom Domains",
            content: "A shop's own domain name belongs to the shop. Each shop's mobile app is published under the shop's own Google Play account. We plan to offer a custom domain on request for Pro plan shops. The domain would belong to the shop, and we make no promise about timing or SSL certificates."
        },
        {
            icon: FileText,
            title: "8. Intellectual Property",
            content: "The content, design, graphics and other materials on our website and platform are protected by applicable copyright, trademark and other proprietary rights. Copying, redistributing or publishing them without permission is prohibited."
        },
        {
            icon: AlertCircle,
            title: "9. Disclaimer of Warranties",
            content: "Our website and services are provided \"as is\". Vivyaan makes no representations or warranties, express or implied, about the website or the information and materials on it, except where stated in a signed agreement."
        },
        {
            icon: Scale,
            title: "10. Limitation of Liability",
            content: "Vivyaan will not be liable for any indirect, special or consequential loss arising from the use of our website or services, to the extent permitted by law."
        },
        {
            icon: FileText,
            title: "11. Platform Documents for Shop Owners and Customers",
            content: "The online ordering platform has its own full terms and privacy policies for shop owners and for customers. They are shown here exactly as they appear in the platform, so they are always up to date.",
            links: [
                { to: "/legal/owner-terms", label: "Terms for Shop Owners" },
                { to: "/legal/owner-privacy", label: "Privacy for Shop Owners" },
                { to: "/legal/terms", label: "Terms for Customers" },
                { to: "/legal/privacy", label: "Privacy for Customers" },
            ],
        }
    ];

    return (
        <LegalPage
            seoTitle="Terms of Service"
            seoDescription="Terms of Service for the recruitment, staffing, manpower and software services, including the online ordering platform, of Vivyaan Business Systems Pvt. Ltd."
            seoUrl="https://www.vivyaanbusinesssystems.com/terms-of-service"
            title="Terms of Service"
            intro="Please read these terms carefully before using our website and services. They explain your rights, your responsibilities, and how our services work."
            updated="17 November 2026"
            sections={sections}
        />
    );
}
