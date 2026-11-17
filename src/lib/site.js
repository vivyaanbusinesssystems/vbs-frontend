// One place for the company facts used in search-engine data (JSON-LD). Keep in step with the Footer and Contact page.
export const SITE_URL = "https://www.vivyaanbusinesssystems.com";
export const SITE_NAME = "Vivyaan Business Systems Pvt. Ltd.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const LINKEDIN = "https://www.linkedin.com/company/vivyaan-business-systems-private-limited/";

const ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "1157/9 Naya Nagar South, Sirwara Road",
    addressLocality: "Sultanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "228001",
    addressCountry: "IN",
};

// Who we are, for Google (shows in the business panel and helps local search). EmploymentAgency is a schema.org business type.
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "Vivyaan Business Systems",
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: OG_IMAGE,
    description:
        "Recruitment, staffing, manpower and software services for businesses across India, including online ordering software for restaurants.",
    telephone: "+91-9151566767",
    email: "support@vivyaanbusinesssystems.com",
    taxID: "09AAMCV3210G1ZD",
    address: ADDRESS,
    geo: { "@type": "GeoCoordinates", latitude: 26.2646, longitude: 82.0728 },
    areaServed: { "@type": "Country", name: "India" },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "17:00",
        },
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+91-9151566767",
            email: "support@vivyaanbusinesssystems.com",
            areaServed: "IN",
            availableLanguage: ["English"],
        },
    ],
    sameAs: [LINKEDIN],
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Vivyaan Business Systems",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
};
