import { Truck, Mail, Clock, MapPin, PackageX, Headphones } from "lucide-react";
import LegalPage from "../components/LegalPage";

export default function ShippingDelivery() {
    const sections = [
        {
            icon: PackageX,
            title: "1. Nature of Our Services",
            content: "Vivyaan Business Systems Pvt. Ltd. provides recruitment, staffing, manpower and software services. These are service-based offerings. We do not sell or ship physical goods, so no shipping charges, couriers or tracking numbers are involved."
        },
        {
            icon: Truck,
            title: "2. How Services Are Delivered",
            content: "Depending on the engagement, our services are delivered in one or more of the following ways:",
            list: [
                "Recruitment: shortlisted candidate profiles and interview coordination shared by email or call.",
                "Staffing and manpower: deployment of agreed personnel at the client's location or project site.",
                "Software services: project deliverables, access, and updates shared digitally, by email or through the agreed project channel.",
                "Online ordering platform: your shop's website, owner panel and apps are made available online once your shop joins, with login details sent by email, SMS or app."
            ]
        },
        {
            icon: Clock,
            title: "3. Delivery Timelines",
            content: "Timelines depend on the nature and scale of each requirement and are confirmed in the proposal, agreement or kick-off discussion for that engagement. We work to meet the agreed timelines and will inform you promptly if anything is likely to change them."
        },
        {
            icon: MapPin,
            title: "4. Service Areas",
            content: "We support clients across India. Availability of specific personnel or services at a particular location is confirmed when the requirement is discussed."
        },
        {
            icon: Mail,
            title: "5. Digital Communication",
            content: "Because our deliverables are digital or service-based, proposals, invoices, and documents are sent to the email address you provide. Please make sure your contact details are accurate and notify us of any changes."
        },
        {
            icon: Headphones,
            title: "6. Questions About Delivery",
            content: "If you have a question about the progress or delivery of your engagement, contact us at support@vivyaanbusinesssystems.com or +91 91515 66767 (Monday to Friday, 10:00 AM to 5:00 PM IST)."
        }
    ];

    return (
        <LegalPage
            seoTitle="Shipping & Delivery Policy"
            seoDescription="Shipping and delivery policy for the recruitment, staffing, manpower and software services of Vivyaan Business Systems Pvt. Ltd."
            seoUrl="https://www.vivyaanbusinesssystems.com/shipping-delivery-policy"
            title="Shipping & Delivery Policy"
            intro="We provide services, not physical products. Here is how our services are delivered to you."
            updated="17 November 2026"
            sections={sections}
        />
    );
}
