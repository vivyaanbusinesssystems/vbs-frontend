export const CATEGORIES = {
    recruitment: {
        label: "Recruitment Services",
        description: "Strategic talent acquisition for permanent and leadership roles."
    },
    staffing: {
        label: "Staffing Services",
        description: "Flexible, scalable workforce and payroll solutions."
    },
    manpower: {
        label: "Manpower Services",
        description: "Dependable blue-collar and operational workforce deployment."
    },
    software: {
        label: "Software Services",
        description: "Digital transformation, web, app, and marketing solutions."
    }
};

export const SERVICES = [
    // ==========================================
    // 1. RECRUITMENT SERVICES
    // ==========================================
    {
        slug: "permanent-recruitment",
        category: "recruitment",
        categoryLabel: "Recruitment Services",
        title: "Permanent Recruitment",
        tagline: "Building your core team for the long term.",
        intro: "We help organizations identify and hire qualified professionals for permanent positions across various functions and industries.",
        includes: [
            "Understanding job requirements and organizational needs",
            "Candidate sourcing through multiple recruitment channels",
            "Resume screening and profile evaluation",
            "Skill and experience assessment",
            "Candidate shortlisting and interview coordination",
            "Client interview scheduling and follow-ups",
            "Offer and salary negotiation support",
            "Joining coordination and post-placement follow-up"
        ],
        valueToClients: "We help reduce hiring time, improve candidate quality, and ensure the right talent is matched with the right opportunity for long-term employment."
    },
    {
        slug: "executive-search",
        category: "recruitment",
        categoryLabel: "Recruitment Services",
        title: "Executive Search",
        tagline: "Identifying senior-level and specialized professionals.",
        intro: "Our Executive Search service focuses on identifying experienced professionals for critical, senior-level, and specialized positions.",
        includes: [
            "Senior management and executive hiring",
            "Confidential leadership searches",
            "Industry-specific talent mapping",
            "Passive candidate identification",
            "Competency and experience evaluation",
            "Executive-level candidate screening",
            "Interview and selection coordination",
            "Offer management and joining support"
        ],
        valueToClients: "Our approach helps organizations access highly experienced professionals who may not be actively looking for new opportunities."
    },
    {
        slug: "leadership-hiring",
        category: "recruitment",
        categoryLabel: "Recruitment Services",
        title: "Leadership Hiring",
        tagline: "Finding leaders to drive business growth.",
        intro: "Strong leadership plays a critical role in business growth. We help organizations identify professionals capable of managing teams, driving strategy, and delivering business results.",
        includes: [
            "CXO and senior management hiring",
            "Department heads and functional leaders",
            "Business and operations leadership",
            "Sales and business development leadership",
            "Technology and IT leadership",
            "Finance and HR leadership",
            "Leadership assessment and candidate evaluation"
        ],
        valueToClients: "We focus on finding leaders who align with the organization's business objectives, culture, and long-term growth strategy."
    },
    {
        slug: "campus-recruitment",
        category: "recruitment",
        categoryLabel: "Recruitment Services",
        title: "Campus Recruitment",
        tagline: "Building a pipeline of emerging talent.",
        intro: "Our Campus Recruitment solutions help organizations build a strong pipeline of fresh and emerging talent from colleges and educational institutions.",
        includes: [
            "Campus hiring strategy",
            "College and institution coordination",
            "Job description and requirement management",
            "Candidate registration and screening",
            "Aptitude and preliminary assessments",
            "Interview coordination",
            "Selection and offer management",
            "Joining and onboarding coordination"
        ],
        valueToClients: "We help companies efficiently hire fresh talent while building a sustainable entry-level workforce for future growth."
    },
    {
        slug: "rpo-services",
        category: "recruitment",
        categoryLabel: "Recruitment Services",
        title: "RPO Services",
        tagline: "Outsourced recruitment process management.",
        intro: "Our Recruitment Process Outsourcing (RPO) solutions allow organizations to outsource part or all of their recruitment activities to an experienced recruitment partner.",
        includes: [
            "Recruitment process management",
            "Dedicated recruitment support",
            "Candidate sourcing and screening",
            "Interview coordination",
            "Recruitment reporting and MIS",
            "Applicant pipeline management",
            "Offer and joining coordination",
            "Recruitment process optimization"
        ],
        valueToClients: "RPO helps organizations improve recruitment efficiency, reduce hiring costs, increase scalability, and maintain a consistent talent pipeline."
    },

    // ==========================================
    // 2. STAFFING SERVICES
    // ==========================================
    {
        slug: "contract-staffing",
        category: "staffing",
        categoryLabel: "Staffing Services",
        title: "Contract Staffing",
        tagline: "Qualified professionals for fixed-term assignments.",
        intro: "Our Contract Staffing solutions provide organizations with qualified professionals for fixed-term or contract-based assignments.",
        includes: [
            "Candidate sourcing and screening",
            "Skill and experience verification",
            "Contract workforce deployment",
            "Documentation and onboarding coordination",
            "Attendance and workforce coordination",
            "Client communication and support",
            "Contract renewal and replacement support"
        ],
        idealFor: "IT projects, seasonal requirements, business expansion, specialized assignments, and temporary workforce needs."
    },
    {
        slug: "temporary-staffing",
        category: "staffing",
        categoryLabel: "Staffing Services",
        title: "Temporary Staffing",
        tagline: "Quick access to short-term manpower.",
        intro: "Our Temporary Staffing solutions help businesses quickly access manpower for short-term and fluctuating workforce requirements.",
        includes: [
            "Short-term workforce deployment",
            "Seasonal staffing",
            "Replacement staffing",
            "Event and project staffing",
            "Workforce scheduling support",
            "Candidate onboarding coordination",
            "Attendance and workforce monitoring",
            "Replacement management"
        ],
        valueToClients: "Businesses can scale their workforce according to operational requirements without making long-term hiring commitments."
    },
    {
        slug: "payroll-staffing",
        category: "staffing",
        categoryLabel: "Staffing Services",
        title: "Payroll Staffing",
        tagline: "Streamlined payroll and workforce administration.",
        intro: "Our Payroll Staffing solutions help organizations manage employees working on their behalf while streamlining payroll and workforce administration.",
        includes: [
            "Employee onboarding",
            "Payroll coordination",
            "Attendance management",
            "Salary processing support",
            "Statutory compliance coordination",
            "Employee documentation",
            "Workforce reporting",
            "Exit and full-and-final coordination"
        ],
        valueToClients: "We help organizations simplify workforce administration while allowing them to focus on their core business operations."
    },
    {
        slug: "project-based-hiring",
        category: "staffing",
        categoryLabel: "Staffing Services",
        title: "Project-Based Hiring",
        tagline: "Skilled professionals for specific, time-bound projects.",
        intro: "Our Project-Based Hiring solutions provide organizations with skilled professionals for specific projects and defined periods.",
        includes: [
            "Project workforce planning",
            "Requirement analysis",
            "Specialized talent sourcing",
            "Technical and functional screening",
            "Rapid candidate deployment",
            "Project-based workforce management",
            "Contract extension and replacement support",
            "Project completion workforce transition"
        ],
        idealFor: "Technology implementations, infrastructure projects, construction, engineering, expansion projects, and other time-bound assignments."
    },

    // ==========================================
    // 3. MANPOWER SERVICES
    // ==========================================
    {
        slug: "blue-collar-staffing",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Blue Collar Staffing",
        tagline: "Dependable workforce solutions.",
        intro: "We provide dependable blue-collar manpower solutions for organizations requiring skilled, semi-skilled, and unskilled workers.",
        includes: [
            "Skilled worker recruitment",
            "Semi-skilled manpower",
            "General workforce deployment",
            "Production workers",
            "Machine operators",
            "Helpers and support staff",
            "Loading and unloading workforce",
            "Workforce replacement and coordination"
        ],
        valueToClients: "We help businesses maintain workforce continuity and meet operational manpower requirements efficiently."
    },
    {
        slug: "industrial-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Industrial Manpower",
        tagline: "Reliable workers for plant and production.",
        intro: "Our Industrial Manpower solutions help manufacturing and industrial organizations source reliable workers. Services include manpower sourcing, screening, deployment, onboarding coordination, and ongoing client support.",
        includes: [
            "Machine operators",
            "Production workers",
            "Technicians and Electricians",
            "Welders and Fitters",
            "Maintenance workers",
            "Helpers and general workers"
        ],
        valueToClients: "Maintain seamless production lines with thoroughly vetted industrial workforce deployments."
    },
    {
        slug: "warehouse-staffing",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Warehouse Staffing",
        tagline: "Manpower for distribution and fulfillment operations.",
        intro: "Efficient warehouse operations require a dependable workforce. We provide manpower solutions for warehouses, distribution centers, and fulfillment operations.",
        includes: [
            "Warehouse associates",
            "Pickers and packers",
            "Loading and unloading staff",
            "Inventory assistants",
            "Material handlers and Forklift operators",
            "Warehouse supervisors",
            "Dispatch and sorting staff"
        ],
        valueToClients: "We help businesses maintain operational efficiency and workforce availability during both regular and peak periods."
    },
    {
        slug: "logistics-staffing",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Logistics Staffing",
        tagline: "Workforce solutions for supply chain operations.",
        intro: "We provide workforce solutions for logistics, transportation, distribution, and supply chain operations.",
        includes: [
            "Delivery and logistics personnel",
            "Loading and unloading workforce",
            "Drivers and transport support",
            "Warehouse personnel",
            "Dispatch staff",
            "Sorting and packing workforce",
            "Inventory and supply chain support",
            "Supervisory manpower"
        ],
        valueToClients: "Our logistics staffing solutions help organizations maintain smooth day-to-day operations and respond quickly to changing workforce requirements."
    },
    {
        slug: "construction-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Construction Manpower",
        tagline: "Workforce for infrastructure and building projects.",
        intro: "Our Construction Manpower solutions help contractors, builders, infrastructure companies, and project organizations meet their workforce requirements with full candidate screening and replacement support.",
        includes: [
            "Skilled construction workers",
            "Semi-skilled workers and General labour",
            "Masons and Carpenters",
            "Electricians and Plumbers",
            "Welders and Helpers",
            "Site support staff"
        ],
        idealFor: "Contractors, builders, infrastructure companies, and large-scale project organizations."
    },
    {
        slug: "retail-field-workforce",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Retail & Field Workforce",
        tagline: "Dedicated staff for retail and on-ground operations.",
        intro: "We provide specialized manpower for retail operations, on-ground sales, and field services to help you maximize customer reach and operational efficiency.",
        includes: [
            "Store executives and Retail supervisors",
            "Sales promoters and Merchandisers",
            "Field executives",
            "Customer-support staff",
            "Delivery and field personnel"
        ],
        valueToClients: "Enhance your customer-facing operations and field reach with presentable, well-trained, and reliable personnel."
    },
    {
        slug: "hospitality-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Hospitality Manpower",
        tagline: "Trained staff for hotels, restaurants, and events.",
        intro: "We supply trained and presentable manpower for the hospitality industry, ensuring your guests receive excellent service and your operations run smoothly.",
        includes: [
            "Hotel and Restaurant staff",
            "Kitchen helpers and Stewards",
            "Housekeeping and Cleaning staff",
            "Waiters and service staff",
            "Front-office support",
            "Banquet and event staff"
        ],
        valueToClients: "Deliver exceptional guest experiences with a dependable, professional workforce scaled to meet your daily or seasonal demands."
    },
    {
        slug: "high-volume-bulk-hiring",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "High-Volume / Bulk Hiring",
        tagline: "Rapid deployment of large-scale workforces.",
        intro: "For clients requiring large numbers of workers, we provide a streamlined, end-to-end bulk hiring process to quickly scale your operational capabilities.",
        includes: [
            "Requirement analysis and customized sourcing strategies",
            "Mass candidate screening and profile evaluation",
            "Comprehensive documentation and compliance verification",
            "Streamlined selection and structured onboarding processes",
            "Rapid workforce deployment to site",
            "Daily attendance tracking and workforce coordination",
            "Continuous replacement support and scalability"
        ],
        idealFor: "New plant setups, peak season demands, large-scale infrastructure projects, logistics hubs, and major corporate events."
    },
    {
        slug: "facility-management-staffing",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Facility Management",
        tagline: "Manpower for daily facility maintenance.",
        intro: "We provide manpower solutions to support the day-to-day facility management and maintenance requirements of commercial and industrial establishments.",
        includes: [
            "Housekeeping and Cleaning staff",
            "Pantry staff and Office boys",
            "Security support personnel",
            "Maintenance personnel",
            "Gardeners and outdoor upkeep staff",
            "Facility supervisors"
        ],
        idealFor: "Corporate offices, commercial buildings, residential complexes, hospitals, educational institutions, hotels, warehouses, and industrial facilities."
    },
    {
        slug: "healthcare-lifesciences-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Healthcare & Lifesciences",
        tagline: "Dedicated workforce for medical and research facilities.",
        intro: "We provide qualified and reliable support staff for hospitals, clinics, pharmaceutical companies, and research laboratories to ensure smooth daily operations.",
        includes: [
            "Hospital support staff and ward boys",
            "Lab technicians and assistants",
            "Pharmacy assistants",
            "Medical data entry operators",
            "Patient care staff",
            "Facility maintenance for healthcare"
        ],
        valueToClients: "Maintain high standards of patient care and facility hygiene with our screened, trained, and dependable healthcare workforce."
    },
    {
        slug: "bfsi-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "BFSI Manpower",
        tagline: "Reliable support for financial institutions.",
        intro: "We supply trained operational and support manpower for banks, insurance companies, and financial service providers to streamline back-office and front-end processes.",
        includes: [
            "Back-office executives and data entry staff",
            "Customer support and telecallers",
            "Document collection and verification agents",
            "Field sales and collection executives",
            "Branch support and office assistants"
        ],
        valueToClients: "Improve your operational efficiency and customer outreach with our vetted and professional BFSI support staff."
    },
    {
        slug: "fmcg-consumer-goods-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "FMCG & Consumer Goods",
        tagline: "Agile workforce for fast-moving retail and supply chains.",
        intro: "We offer scalable manpower solutions tailored to the fast-paced demands of the FMCG and consumer goods sector, covering everything from production to retail.",
        includes: [
            "Production line workers and packers",
            "Warehouse and distribution staff",
            "Field sales representatives",
            "In-store promoters and merchandisers",
            "Delivery and logistics personnel"
        ],
        valueToClients: "Accelerate your supply chain and boost retail visibility with our dedicated FMCG workforce solutions."
    },
    {
        slug: "energy-utilities-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Energy & Utilities",
        tagline: "Skilled personnel for power and utility operations.",
        intro: "We provide skilled and semi-skilled manpower to support the infrastructure, maintenance, and daily operations of the energy and utilities sector.",
        includes: [
            "Plant maintenance technicians",
            "Field service engineers and technicians",
            "Meter readers and collection agents",
            "Safety and site supervisors",
            "General helpers and operational staff"
        ],
        idealFor: "Power plants, renewable energy projects, water treatment facilities, and utility distribution networks."
    },
    {
        slug: "it-ites-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "IT/ITES Manpower",
        tagline: "Operational support for tech and BPO sectors.",
        intro: "We deliver reliable support and facility manpower to keep IT parks, software development centers, and BPO/BPM operations running efficiently 24/7.",
        includes: [
            "BPO/Call center executives",
            "Data entry and back-office operators",
            "IT helpdesk and tech support assistants",
            "Facility and cafeteria management staff",
            "Transport and logistics coordinators for employees"
        ],
        valueToClients: "Focus on your core technological operations while we manage your essential operational and facility workforce needs."
    },
    {
        slug: "automobile-manpower",
        category: "manpower",
        categoryLabel: "Manpower Services",
        title: "Automobile Industry",
        tagline: "Skilled workforce for automotive manufacturing and servicing.",
        intro: "We supply specialized and general manpower for automobile manufacturing plants, assembly lines, dealerships, and service centers.",
        includes: [
            "Assembly line workers",
            "Automotive technicians and mechanics",
            "Quality inspectors",
            "Paint shop and welding personnel",
            "Dealership sales and support staff",
            "Spare parts and inventory assistants"
        ],
        valueToClients: "Keep your production lines moving and service centers operating efficiently with our skilled automotive workforce."
    },

    // ==========================================
    // 4. SOFTWARE SERVICES
    // ==========================================
    {
        slug: "web-design-development",
        category: "software",
        categoryLabel: "Software Services",
        title: "Website Design & Development",
        tagline: "Modern, responsive, and high-performing websites.",
        intro: "We build tailored web experiences that engage users and drive business growth, from corporate portals to complex e-commerce platforms.",
        includes: [
            "Custom UI/UX Design",
            "Frontend and Backend Development",
            "E-commerce Solutions",
            "CMS Integration (WordPress, Custom)",
            "Website Maintenance & Support",
            "Performance Optimization & SEO setup"
        ],
        valueToClients: "Establish a powerful online presence with secure, scalable, and visually compelling web architecture.",
        portfolioLink: "https://ankitwebservices-portfolio.netlify.app"
    },
    {
        slug: "app-development",
        category: "software",
        categoryLabel: "Software Services",
        title: "Mobile App Development",
        tagline: "Native and cross-platform mobile experiences.",
        intro: "Transform your business ideas into highly functional, user-centric mobile applications for iOS and Android.",
        includes: [
            "iOS & Android App Development",
            "Cross-Platform Development (React Native, Flutter)",
            "App UI/UX Design",
            "API Integration & Backend Architecture",
            "App Testing & Quality Assurance",
            "App Store Deployment"
        ],
        valueToClients: "Engage your customers directly on their devices with smooth, intuitive, and secure mobile applications.",
        portfolioLink: "https://ankitwebservices-portfolio.netlify.app"
    },
    {
        slug: "meta-ad-services",
        category: "software",
        categoryLabel: "Software Services",
        title: "Meta Ad Services",
        tagline: "Data-driven performance marketing.",
        intro: "Maximize your ROI and reach your exact target audience through highly optimized Facebook and Instagram advertising campaigns.",
        includes: [
            "Campaign Strategy & Structuring",
            "Audience Targeting & Retargeting",
            "Ad Copywriting & Creative Design",
            "A/B Testing & Optimization",
            "Lead Generation Campaigns",
            "Performance Tracking & Analytics Reporting"
        ],
        valueToClients: "Generate high-quality leads, increase brand awareness, and drive measurable sales growth through strategic ad spend."
    },
    {
        slug: "pr-services",
        category: "software",
        categoryLabel: "Software Services",
        title: "Digital PR Services",
        tagline: "Building and managing your brand reputation.",
        intro: "Enhance your digital footprint and industry authority with strategic public relations and brand management services.",
        includes: [
            "Brand Reputation Management",
            "Digital Press Release Distribution",
            "Media Outreach & Partnerships",
            "Crisis Communication Management",
            "Content Strategy & Thought Leadership",
            "Social Proof & Review Management"
        ],
        valueToClients: "Build lasting trust with your audience, improve search visibility, and establish authority in your industry."
    }
];

export function getServiceBySlug(slug) {
    return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category) {
    return SERVICES.filter((s) => s.category === category);
}

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