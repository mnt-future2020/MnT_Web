import poli1 from "@/assets/poli1.webp";
import poli2 from "@/assets/poli2.webp";
import po3 from "@/assets/po3.webp";
import poli4 from "@/assets/poli4.webp";
import poli4_1 from "@/assets/poli4-1.webp";
import poli5 from "@/assets/poli5.webp";

export interface ProjectData {
    id: string;
    name: string;
    title: string;
    tagline: string;
    category: string;
    shortDescription: string;
    description: string;
    overview: string;
    image: string;
    mainImage: string;
    techStack: string[];
    snapshot: {
        industry: string;
        projectType: string;
        duration: string;
        platform: string;
        keyResult: string;
    };
    challenge: {
        requirements: string[];
        painPoints: string[];
    };
    timeline: {
        phase: string;
        title: string;
        desc: string;
    }[];
    approach: string;
    solution: string[];
    features: string[];
    results: string[];
    impact: string;
    ctaText: string;
    metrics: {
        value: string;
        suffix: string;
        prefix: string;
        label: string;
        desc: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    websiteUrl?: string;
}

export const portfolioProjects: ProjectData[] = [
    {
        id: "lia-fashion",
        name: "Lia Fashion",
        title: "Elegant Indian Wear E-commerce Platform",
        tagline: "A modern boutique experience built for style, scale, and seamless shopping.",
        category: "E-Commerce Platform",
        shortDescription: "A modern online boutique engineered for performance, conversion, and scalability.",
        description: "Lia Fashion is an online boutique specializing in contemporary and traditional Indian women's wear. The objective was to create a scalable, stylish, and conversion-focused e-commerce platform that reflects elegance while ensuring performance and usability.",
        overview: "Lia Fashion is an online boutique specializing in contemporary and traditional Indian women's wear. The objective was to create a scalable, stylish, and conversion-focused e-commerce platform that reflects elegance while ensuring performance and usability.",
        image: poli1,
        mainImage: poli1,
        techStack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Razorpay", "Cloudinary"],
        snapshot: {
            industry: "Fashion & Retail",
            projectType: "E-Commerce",
            duration: "120 Days",
            platform: "Web / Mobile",
            keyResult: "45% Boost"
        },
        challenge: {
            requirements: [
                "A scalable online boutique",
                "Seamless shopping experience",
                "High-performance product rendering",
                "Clear product categorization",
                "Mobile-first responsiveness",
                "Conversion-optimized design",
                "Secure checkout & policy transparency"
            ],
            painPoints: [
                "Limited digital presence",
                "Need for organized product categorization",
                "Smooth checkout & user journey",
                "Trust-building through policies & reviews",
                "Mobile-first performance optimization",
                "Scalable product management"
            ]
        },
        timeline: [
            { phase: "Discovery", title: "Market Research", desc: "Analyzing competitor trends and user behavior in fashion retail." },
            { phase: "Planning", title: "Architecture", desc: "Designing a modular system for scalable growth and performance." },
            { phase: "Design", title: "UI/UX Boutique", desc: "Crafting a high-end, visual-first shopping experience." },
            { phase: "Build", title: "Development", desc: "Engineering high-performance rendering and checkout flows." },
            { phase: "Test", title: "Optimization", desc: "Speed tuning and mobile responsiveness verification." },
            { phase: "Deploy", title: "Launch", desc: "Global deployment on Vercel with SEO-ready structure." }
        ],
        approach: "We designed a fast, modern e-commerce platform with clean UX optimized for fashion retail, smart product segmentation, visual-first browsing, and seamless cart and checkout systems.",
        solution: [
            "Clean UX optimized for fashion retail",
            "Smart product segmentation & categorization",
            "Visual-first browsing experience",
            "Seamless cart and checkout system",
            "Policy transparency integration",
            "SEO-friendly structure"
        ],
        features: [
            "Organized Product Categories (Hot Selling, Trending, Premium)",
            "Customer Testimonials Section",
            "Policy Pages (Shipping, Refund, Privacy, Terms)",
            "Optimized Product Filtering",
            "SEO-Friendly Structure",
            "Mobile-Optimized Layout",
            "Secure Checkout Experience"
        ],
        results: [
            "Improved customer trust",
            "Faster product discovery",
            "Higher mobile engagement",
            "Scalable retail foundation"
        ],
        impact: "Lia Fashion now operates a high-converting digital storefront that has significantly expanded their market reach and customer engagement.",
        ctaText: "Launch Your Own Fashion E-commerce Platform",
        metrics: [
            { value: "45", suffix: "%", prefix: "↑ ", label: "Customer Trust", desc: "Improved trust signals through policy transparency and review integration." },
            { value: "3", suffix: "x", prefix: "", label: "Product Discovery", desc: "Smart categorization drove faster and more engaging product browsing." },
            { value: "60", suffix: "%", prefix: "↑ ", label: "Mobile Engagement", desc: "Mobile-first architecture unlocked a massive new audience segment." },
            { value: "2", suffix: "x", prefix: "", label: "Scalable Foundation", desc: "Built for long-term growth with a modular product architecture." }
        ]
    },
    {
        id: "leats",
        name: "Leats Food Corporation",
        title: "Smart Multi-Category Online Retail Platform",
        tagline: "Delivering a seamless shopping experience with optimized performance.",
        category: "E-Commerce Platform",
        shortDescription: "An optimized online commerce platform built for seamless browsing and secure transactions.",
        description: "Leats was developed as a scalable online retail platform focusing on smooth browsing, high conversion, and efficient product management.",
        overview: "Leats was developed as a scalable online retail platform focusing on smooth browsing, high conversion, and efficient product management. The goal was to create a seamless shopping experience that manages growing catalogs while maintaining peak performance.",
        image: poli2,
        mainImage: poli2,
        techStack: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "Razorpay", "AWS S3"],
        snapshot: {
            industry: "Retail & Consumer",
            projectType: "Online Marketplace",
            duration: "45 Days",
            platform: "Web App",
            keyResult: "55% Sales"
        },
        challenge: {
            requirements: [
                "Clean product discovery flow",
                "Optimized payment handling",
                "Performance monitoring",
                "Modular commerce architecture",
                "Scalable product catalog management"
            ],
            painPoints: [
                "Managing growing product catalog",
                "Performance issues on mobile",
                "Low checkout conversions",
                "Inventory control visibility"
            ]
        },
        timeline: [
            { phase: "Strategy", title: "Scale Planning", desc: "Defining the catalog growth roadmap and performance metrics." },
            { phase: "Architecture", title: "API First", desc: "Designing a modular backend to handle multiple product categories." },
            { phase: "UX Design", title: "Discovery Path", desc: "Simplifying the journey from landing to successful checkout." },
            { phase: "Execution", title: "Development", desc: "Implementing smart filtering and optimized payment flows." },
            { phase: "Analysis", title: "Performance", desc: "Auditing page load times and conversion bottlenecks." },
            { phase: "Release", title: "Global Scale", desc: "Deploying a rugged infrastructure capable of handling traffic spikes." },
        ],
        approach: "We designed a conversion-optimized UI with smart filtering, optimized cart flow, responsive product grids, and performance tuning for scalable retail.",
        solution: [
            "Conversion-optimized UI design",
            "Smart filtering & sorting system",
            "Optimized cart flow & checkout",
            "Responsive product grids",
            "Performance tuning & optimization"
        ],
        features: [
            "Category-Based Navigation",
            "Dynamic Product Pages",
            "Optimized Checkout Flow",
            "Secure Payment Integration",
            "Admin Product Management"
        ],
        results: [
            "Improved conversion rates",
            "Reduced bounce rate",
            "Faster browsing experience",
            "Operational efficiency"
        ],
        impact: "Leats achieved a more structured and scalable retail ecosystem, driving higher engagement and sales across all channels.",
        ctaText: "Build Your Online Retail Platform",
        metrics: [
            { value: "35", suffix: "%", prefix: "↑ ", label: "Conversion Rate", desc: "Optimized checkout flow reduced friction and increased completed purchases." },
            { value: "40", suffix: "%", prefix: "↓ ", label: "Bounce Rate", desc: "Improved navigation and product grids kept users engaged longer." },
            { value: "2", suffix: "x", prefix: "", label: "Browsing Speed", desc: "Performance tuning delivered a significantly faster user experience." },
            { value: "50", suffix: "%", prefix: "↑ ", label: "Efficiency", desc: "Admin tools streamlined product and inventory management." }
        ],
        testimonial: {
            quote: "The efficiency of our online operations tripled within months of launching the new platform. A truly transformative partner.",
            author: "Saravanan K",
            role: "CEO, Leats Food Corporation"
        }
    },
    {
        id: "truscomp",
        name: "TrusComp",
        title: "Dynamic Corporate Compliance & Risk Management Platform",
        tagline: "Building credibility, service authority, and structured digital presence for compliance leaders.",
        category: "Corporate Platform",
        shortDescription: "A fully dynamic, content-managed website reflecting credibility and professional authority in compliance.",
        description: "We developed a fully dynamic, content-managed website for TrusComp to reflect credibility, service authority, and a structured digital presence in the compliance sector.",
        overview: "TrusComp focuses on professional compliance management, demanding a trust-centric, professional web experience. We built a structured CMS-driven content system with a modern UI aligned with their brand positioning.",
        image: po3,
        mainImage: po3,
        techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Cloudinary"],
        snapshot: {
            industry: "Compliance & Risk",
            projectType: "Corporate Web",
            duration: "28 Days",
            platform: "Web App",
            keyResult: "3x Leads"
        },
        challenge: {
            requirements: [
                "Structured CMS-driven content system",
                "Modern UI aligned with brand positioning",
                "SEO-optimized structure",
                "Dynamic resource modules",
                "Secure admin panel"
            ],
            painPoints: [
                "Complex service presentation",
                "Frequent content updates needed",
                "SEO optimization requirements",
                "Scalable architecture demands",
                "Compliance-focused branding"
            ]
        },
        timeline: [
            { phase: "Audit", title: "Brand Identity", desc: "Defining core values and positioning for TrusComp." },
            { phase: "Mapping", title: "Information Arch", desc: "Structuring complex service hierarchies for easy navigation." },
            { phase: "Visuals", title: "Premium UI", desc: "Designing trust-centric interfaces with professional aesthetics." },
            { phase: "Engine", title: "CMS Development", desc: "Building a powerful, easy-to-use content management engine." },
            { phase: "Growth", title: "SEO Stacking", desc: "Implementing keywords and content structures for organic visibility." },
            { phase: "Success", title: "Lead Systems", desc: "Integrating CRM and tracking for consistent lead generation." },
        ],
        approach: "MnT built a structured CMS-driven content system with a modern UI aligned to TrusComp's positioning, SEO optimization, and dynamic content modules.",
        solution: [
            "Structured CMS-driven content system",
            "Modern UI aligned with brand positioning",
            "SEO-optimized page structure",
            "Dynamic resource modules",
            "Secure admin panel for content management"
        ],
        features: [
            "Dynamic Service Modules",
            "Admin Content Management",
            "Blog & Resource System",
            "Compliance Updates Section",
            "Mobile Responsive UI",
            "SEO Optimization"
        ],
        results: [
            "Strong brand credibility",
            "Better lead generation",
            "Structured content management",
            "Improved organic visibility"
        ],
        impact: "TrusComp now has an authoritative digital presence that drives trust and generates quality leads consistently.",
        ctaText: "Build Your Professional Corporate Website",
        metrics: [
            { value: "100", suffix: "+", prefix: "", label: "Enterprise Clients", desc: "Trusted by over 100 enterprises for compliance and risk solutions." },
            { value: "12", suffix: "+", prefix: "", label: "Global Markets", desc: "Infrastructure supports diverse compliance standards across regions." },
            { value: "95", suffix: "%", prefix: "", label: "Client Retention", desc: "Consistent value delivery maintains high-quality long-term partnerships." },
            { value: "3", suffix: "x", prefix: "", label: "Lead Generation", desc: "SEO-optimized structure tripled inbound lead acquisition." }
        ],
        testimonial: {
            quote: "The brand authority we now project online is night and day. MnT understood our professional requirements perfectly.",
            author: "Abirami H",
            role: "Sr. BDM, TrusComp"
        }
    },
    {
        id: "elegant-care",
        name: "Elegant Care Services",
        title: "Registered NDIS Support Provider Digital Platform",
        tagline: "Compassionate, person-centered care dedicated to empowering NDIS participants.",
        category: "Healthcare Service Portal",
        shortDescription: "A specialized digital hub for NDIS participants to discover and manage personalized support services.",
        description: "Elegant Care Services is a registered NDIS support provider in Australia. The platform is dedicated to providing compassionate, person-centered care for individuals with disabilities, specializing in Supported Independent Living (SIL) and Positive Behaviour Practice.",
        overview: "The platform serves as both a Service Provider Portal and an Information Hub. It acts as the primary digital touchpoint for NDIS participants to discover services, contact coordinators, and manage their support journey with quality assurance and 24/7 availability.",
        image: poli4,
        mainImage: poli4_1,
        techStack: ["react.js", "Node.js", "mongodb"],
        snapshot: {
            industry: "Healthcare & NDIS",
            projectType: "Service Provider Portal",
            duration: "30 Days",
            platform: "Web App",
            keyResult: "NDIS Registered"
        },
        challenge: {
            requirements: [
                "Detailed NDIS service catalog",
                "Person-centered user experience",
                "24/7 support integration",
                "Feedback and interactive support mechanisms",
                "Highly accessible UI (Radix UI)"
            ],
            painPoints: [
                "Complex NDIS information discovery",
                "Need for consistent care presentation",
                "Mobile accessibility for participants",
                "Transparent service reporting",
                "Integration of diverse care models"
            ]
        },
        timeline: [
            { phase: "Audit", title: "NDIS Regulatory Audit", desc: "Ensuring all digital content meets NDIS compliance standards." },
            { phase: "UX Design", title: "Accessible Pathing", desc: "Designing for diverse accessibility needs using Radix UI primitives." },
            { phase: "Logic", title: "Support Models", desc: "Structuring SIL and Respite service data for clear participant understanding." },
            { phase: "Engine", title: "Next.js Build", desc: "Engineering a fast, SEO-ready platform with Turbopack optimization." },
            { phase: "Integration", title: "Support Portal", desc: "Enabling direct coordination and feedback systems." },
            { phase: "Launch", title: "Community Go-Live", desc: "Deploying the primary digital touchpoint for NDIS participants." },
        ],
        approach: "MnT built a compassionate, person-centered platform optimized for NDIS participants, featuring accessible UI components and detailed service modules for complex care needs.",
        solution: [
            "SIL & Respite service modules",
            "Person-centered UX design",
            "Progressive NDIS service discovery",
            "Feedback & participant engagement tools",
            "Optimized Turbopack build system"
        ],
        features: [
            "Supported Independent Living (SIL)",
            "Positive Behaviour Practice",
            "Respite Accommodation",
            "Domestic Assistance",
            "Community Participation Programs",
            "24/7 Support Coordinator Portal"
        ],
        results: [
            "Registered NDIS provider status",
            "Enhanced participant engagement",
            "Streamlined service discovery",
            "24/7 coordination uptime"
        ],
        impact: "Elegant Care now operates a primary digital hub that empowers NDIS participants to easily discover and manage their support journey with confidence.",
        ctaText: "Explore NDIS Care Solutions",
        websiteUrl: "https://elegantcareservices.com.au",
        metrics: [
            { value: "24", suffix: "/7", prefix: "", label: "Support Availability", desc: "Dedicated support team available around instructions for participants." },
            { value: "100", suffix: "%", prefix: "", label: "NDIS Registered", desc: "Fully compliant and registered Australian NDIS support provider." },
            { value: "50", suffix: "+", prefix: "", label: "Active Participants", desc: "Successfully managing care paths for a growing community of users." },
            { value: "98", suffix: "%", prefix: "", label: "Feedback Rating", desc: "Consistently high ratings for person-centered care delivery." }
        ],
        testimonial: {
            quote: "The brand authority we now project online is night and day. MnT understood our professional requirements perfectly.",
            author: "Ramesh Kumar C",
            role: "CEO, Elegant Care Services"
        }
    },
    {
        id: "civil-erp",
        name: "Civil ERP",
        title: "End-to-End Project & Workforce Management System",
        tagline: "Centralized ERP for civil contractors managing workforce, materials, compliance, and project tracking.",
        category: "ERP System",
        shortDescription: "A centralized ERP platform built to streamline civil project execution and financial oversight.",
        description: "A comprehensive ERP platform built for civil contractors and infrastructure companies to manage workforce, materials, compliance, and project tracking in one centralized system.",
        overview: "A comprehensive ERP platform built for civil contractors and infrastructure companies to manage workforce, materials, compliance, and project tracking in one centralized system. Civil ERP provides end-to-end visibility into civil project lifecycles.",
        image: poli5,
        mainImage: poli5,
        techStack: ["Next.js", "Node.js", "MongoDB"],
        snapshot: {
            industry: "Infrastructure",
            projectType: "Custom ERP Software",
            duration: "120 Days",
            platform: "Enterprise Web",
            keyResult: "48% Reduce Manual Work"
        },
        challenge: {
            requirements: [
                "Real-time project dashboards",
                "Budget tracking & forecasting",
                "Vendor management system",
                "Resource planning modules",
                "Compliance tracking dashboard"
            ],
            painPoints: [
                "Manual project tracking",
                "Payroll mismanagement",
                "Labour compliance risks",
                "Material inventory inefficiencies",
                "Multi-site coordination problems"
            ]
        },
        timeline: [
            { phase: "Audit", title: "Workflow Analysis", desc: "Deep dive into existing manual construction and compliance processes." },
            { phase: "Logic", title: "System Modeling", desc: "Defining complex business rules for payroll and resource allocation." },
            { phase: "Draft", title: "Prototyping", desc: "Designing intuitive dashboards for heavy data management." },
            { phase: "Forge", title: "Full-Stack Build", desc: "Engineering the modular ERP backbone and secure role-based access." },
            { phase: "Refine", title: "UAT & Testing", desc: "Field-testing the system with project managers and site engineers." },
            { phase: "Go-Live", title: "Global Migration", desc: "Migrating legacy data and training teams for system adoption." },
        ],
        approach: "MnT designed a centralized ERP platform with workforce management, payroll automation, material tracking, milestone tracking, and compliance dashboards.",
        solution: [
            "Workforce management modules",
            "Payroll automation system",
            "Material tracking & inventory",
            "Project milestone tracking",
            "Compliance tracking dashboard",
            "Reporting & analytics system"
        ],
        features: [
            "Project Dashboard",
            "Labour Attendance Management",
            "Payroll Automation",
            "Vendor & Inventory Tracking",
            "Statutory Compliance Integration",
            "Reporting & Analytics"
        ],
        results: [
            "Reduced operational errors",
            "Improved cost tracking",
            "Better workforce transparency",
            "Compliance-ready reporting"
        ],
        impact: "Civil ERP has streamlined complex infrastructure projects, providing contractors with the data they need to stay on track and on budget.",
        ctaText: "Build Your Custom ERP Solution",
        metrics: [
            { value: "40", suffix: "%", prefix: "↓ ", label: "Operational Errors", desc: "Automated workflows significantly reduced manual data entry mistakes." },
            { value: "60", suffix: "%", prefix: "↑ ", label: "Cost Visibility", desc: "Real-time budget tracking improved financial oversight across projects." },
            { value: "3", suffix: "x", prefix: "", label: "Workforce Efficiency", desc: "Centralized attendance and payroll systems transformed workforce management." },
            { value: "50", suffix: "%", prefix: "↓ ", label: "Reporting Delays", desc: "Automated reporting replaced manual processes for faster decisions." }
        ],
        testimonial: {
            quote: "This ERP system is the backbone of our operations now. We've eliminated errors that used to cost us thousands every month.",
            author: "Rajeyndran M",
            role: "Project Director, Paarishiv Homes"
        }
    }
];
