export const CATEGORIES = {
    workforce: {
        label: "Workforce & Talent",
        description: "Comprehensive Staffing & Manpower Solutions"
    }
};

export const SERVICES = [
    {
        slug: "staffing-and-recruitment",
        category: "workforce",
        categoryLabel: "Staffing",
        title: "Staffing and Recruitment",
        tagline: "Connecting businesses with top-tier talent.",
        intro: "Comprehensive recruitment solutions to help you identify, attract, and deploy the perfect candidates for permanent, contract, and temporary roles.",
        subServices: [
            { title: "Permanent Recruitment", description: "Finding long-term team members aligned with your company culture and goals." },
            { title: "Contract Staffing", description: "Flexible hiring solutions for project-based, seasonal, or short-term requirements." },
            { title: "Executive Search", description: "Targeted headhunting to find leaders and specialists for critical organizational roles." },
            { title: "Bulk Hiring", description: "Scaling your workforce efficiently and quickly for large-scale operational needs." }
        ],
        tagsLabel: "Expertise",
        tags: ["Permanent Roles", "Contract Staffing", "Leadership Hiring", "Bulk Recruitment"],
        benefits: [
            "Access to a vast, pre-screened talent pool",
            "Reduced time-to-hire and cost-per-hire",
            "Dedicated recruitment specialists",
            "End-to-end interview and onboarding coordination"
        ]
    },
    {
        slug: "domestic-staffing",
        category: "workforce",
        categoryLabel: "Staffing",
        title: "Domestic Staffing",
        tagline: "Skilled professionals across India.",
        intro: "Skilled professionals and workforce solutions across India covering critical sectors like IT, Non-IT, manufacturing, healthcare, and retail.",
        subServices: [
            { title: "IT & Tech Staffing", description: "Supplying technical experts and engineers for your IT infrastructure." },
            { title: "Healthcare Staffing", description: "Qualified professionals and support staff for medical and healthcare facilities." },
            { title: "Manufacturing Talent", description: "Skilled resources for production, assembly, and operational efficiency." },
            { title: "Retail & Sales Staff", description: "Energetic and customer-focused personnel to drive your retail operations." }
        ],
        tagsLabel: "Industries",
        tags: ["Healthcare", "Manufacturing", "Retail", "Information Technology"],
        benefits: [
            "Pan-India talent sourcing network",
            "Industry-specific staffing expertise",
            "Compliance with local employment regulations",
            "Scalable staffing models for fluctuating demands"
        ]
    },
    {
        slug: "blue-collar-workforce",
        category: "workforce",
        categoryLabel: "Manpower",
        title: "Blue Collar Workforce",
        tagline: "Reliable ground-level personnel.",
        intro: "Supplying reliable skilled and semi-skilled manpower including factory workers, machine operators, drivers, security guards, and technicians.",
        subServices: [
            { title: "Factory & Plant Workers", description: "Dependable manpower to keep continuous production lines running smoothly." },
            { title: "Machine Operators", description: "Trained and certified operators for various industrial and heavy machineries." },
            { title: "Logistics & Delivery", description: "Drivers, dispatchers, and supply chain personnel to keep goods moving." },
            { title: "Security Personnel", description: "Vigilant and trained guards to ensure facility safety and perimeter security." }
        ],
        tagsLabel: "Roles",
        tags: ["Factory Workers", "Technicians", "Drivers", "Security Guards"],
        benefits: [
            "Thorough background and identity verification",
            "Quick deployment of large-scale teams",
            "Continuous attendance and performance tracking",
            "Replacement guarantees to minimize operational downtime"
        ]
    },
    {
        slug: "manpower-services",
        category: "workforce",
        categoryLabel: "Manpower",
        title: "Manpower Services",
        tagline: "Streamlining your daily operations.",
        intro: "Reliable manpower outsourcing and management solutions designed to streamline your daily operations and meet dynamic business demands.",
        subServices: [
            { title: "Facility Management", description: "Dedicated personnel for housekeeping, maintenance, and overall facility upkeep." },
            { title: "Administrative Support", description: "Reliable office assistants, front-desk executives, and data entry clerks." },
            { title: "Event Manpower", description: "Temporary and energetic staff for corporate events, product launches, and exhibitions." },
            { title: "Warehouse Staff", description: "Loaders, packers, and inventory management personnel for smooth logistics." }
        ],
        tagsLabel: "Capabilities",
        tags: ["Facility Management", "Admin Support", "Warehouse Ops", "Event Staff"],
        benefits: [
            "Eliminate HR and administrative burdens",
            "Pay-as-you-use flexibility for temporary needs",
            "Dedicated account managers for seamless operations",
            "Strict adherence to statutory and labor laws"
        ]
    }
];

export const INDUSTRIES = [
    "Information Technology (IT)",
    "Healthcare & Life Sciences",
    "Manufacturing",
    "Banking & Financial Services",
    "Retail & E-commerce",
    "Logistics & Supply Chain",
    "Automobile",
    "Pharmaceuticals",
    "Education",
    "Telecommunications",
    "Engineering",
    "FMCG",
    "Hospitality",
    "Construction",
    "Energy & Utilities"
];

export function getServiceBySlug(slug) {
    return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category) {
    return SERVICES.filter((s) => s.category === category);
}