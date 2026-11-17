import { Eye, Shield, Lock, Users, Cookie, Clock, UserCheck, Mail } from "lucide-react";
import LegalPage from "../components/LegalPage";

export default function Privacy() {
    const sections = [
        {
            icon: Eye,
            title: "1. Information We Collect",
            content: "We collect information you give us directly, for example when you send an enquiry, ask for information, sign up for our services or contact us. This may include your name, company, email address, phone number and the details of your requirement."
        },
        {
            icon: Shield,
            title: "2. How We Use Your Information",
            content: "We use your information to respond to your enquiries, provide and improve our services, communicate with you, and keep our website and platform secure. We do not sell your personal information."
        },
        {
            icon: Users,
            title: "3. Customer Data on Shop Websites",
            content: [
                "Our online ordering platform lets shops take orders from their own customers on the shop's website and mobile app. For the data of those customers, the shop and Vivyaan are joint data fiduciaries under the Digital Personal Data Protection Act, 2023.",
                "The shop decides why customer data is collected: to take and deliver the customer's order. Vivyaan decides how the platform is run and secured: login codes, security and abuse prevention, and service messages.",
                "Customers are kept separately for each shop, and are not combined across shops.",
                "The independent developer of the platform has only limited technical access to the servers, to run and repair the service, and is bound by confidentiality."
            ]
        },
        {
            icon: Cookie,
            title: "4. Cookies and Browser Storage",
            content: "Shop websites keep a customer's login and cart in the browser, using local storage and essential cookies, so the service works. This essential storage does not need a cookie banner. Push notifications and location access are optional, and are used only if the customer allows them."
        },
        {
            icon: Lock,
            title: "5. Data Security",
            content: "We use appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure."
        },
        {
            icon: Clock,
            title: "6. How Long We Keep Data",
            content: "We keep personal information only as long as needed for the purposes above. Records of orders and money, such as invoices, payments and refunds, are kept for as long as the law requires. When a shop is deleted, its customer data is erased, and the money and tax records that remain no longer point to any individual person."
        },
        {
            icon: UserCheck,
            title: "7. Your Rights and Grievances",
            content: [
                "You may ask to access, correct or erase your personal information, and may raise a complaint about how it is handled.",
                "Grievance Officer: Vivek Dubey, Vivyaan Business Systems Pvt. Ltd., vivek@vivyaanbusinesssystems.com. We acknowledge a complaint within 24 hours and aim to resolve it within 15 days."
            ]
        },
        {
            icon: Mail,
            title: "8. Contact Us",
            content: "For any question about this Privacy Policy, write to support@vivyaanbusinesssystems.com or vivek@vivyaanbusinesssystems.com, or call +91 91515 66767."
        },
        {
            icon: Shield,
            title: "9. Platform Privacy Policies",
            content: "The online ordering platform has its own full privacy policies for shop owners and for customers. They are shown here exactly as they appear in the platform, so they are always up to date.",
            links: [
                { to: "/legal/owner-privacy", label: "Privacy for Shop Owners" },
                { to: "/legal/privacy", label: "Privacy for Customers" },
            ],
        }
    ];

    return (
        <LegalPage
            seoTitle="Privacy Policy"
            seoDescription="How Vivyaan Business Systems Pvt. Ltd. collects, uses and protects personal information, including customer data on shop websites."
            seoUrl="https://www.vivyaanbusinesssystems.com/privacy-policy"
            title="Privacy Policy"
            intro="Your privacy matters to us. This policy explains how Vivyaan Business Systems Pvt. Ltd. collects, uses and protects your information."
            updated="17 November 2026"
            sections={sections}
        />
    );
}
