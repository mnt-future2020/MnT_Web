import { Bot, Workflow, Smartphone, Database, Sparkles, Shield, Zap, BarChart3, Globe2, Brain, MessageSquare, Network, Code, Layout, Play, ArrowRight } from "lucide-react";
import React from 'react';

export interface ServiceDetail {
    id: string;
    name: string;
    summary: string;
    heroImage: string;
    description: {
        overview: string;
        howItWorks: string;
        designedFor: string;
    };
    challenges: {
        title: string;
        icon: any;
        description: string;
    }[];
    deliverables: {
        title: string;
        icon: any;
        description: string;
    }[];
    benefits: {
        metric: string;
        label: string;
        description: string;
    }[];
    useCases?: {
        industry: string;
        scenario: string;
        image?: string;
    }[];
    whyMnT: {
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const servicesData: Record<string, ServiceDetail> = {
    "ai-employees": {
        id: "ai-employees",
        name: "AI Employees & Digital Workforce",
        summary: "Deploy autonomous AI agents that act as full-time team members for Sales, HR, and Support.",
        heroImage: "/infrastructure.webp", // Using existing infrastructure image for now, can be updated
        description: {
            overview: "Our AI Employees are not just chatbots; they are autonomous agents capable of executing complex workflows, making decisions based on your business logic, and integrating with your existing toolstack.",
            howItWorks: "We build custom neural models trained on your specific company data and processes. These agents operate 24/7, handling repetitive tasks with human-level accuracy while constantly learning from new interactions.",
            designedFor: "Designed for scaling enterprises that need to increase operational capacity without a proportional increase in headcount."
        },
        challenges: [
            { title: "High Operational Costs", icon: Database, description: "Scaling human-intensive departments like support or basic sales outreach is prohibitively expensive." },
            { title: "Training Time & Turnover", icon: Shield, description: "Traditional hiring requires months of training, only to lose institutional knowledge when employees leave." },
            { title: "Inconsistent Performance", icon: BarChart3, description: "Human errors and fatigue lead to variable output quality in data entry or routine customer interactions." },
            { title: "Limited Availability", icon: Globe2, description: "Standard business hours limit your ability to capture global leads and support international customers." }
        ],
        deliverables: [
            { title: "AI Agent Architecture", icon: Bot, description: "Custom-built agents designed for specific roles (Sales, HR, Support)." },
            { title: "Process Mapping", icon: Workflow, description: "End-to-end automation of existing human-led workflows." },
            { title: "Data Integration", icon: Database, description: "Seamless connection to your CRM, ERP, and communication tools." },
            { title: "Continuous Optimization", icon: Zap, description: "Regular model updates and performance tuning based on real-world output." }
        ],
        benefits: [
            { metric: "70%", label: "Efficiency Gain", description: "Reduction in time spent on routine administrative tasks." },
            { metric: "24/7", label: "Availability", description: "Constant operation across all global timezones." },
            { metric: "4X", label: "Productivity", description: "Increase in lead processing and support resolution capacity." },
            { metric: "Zero", label: "Training Lag", description: "Instant deployment of institutional knowledge to every agent." }
        ],
        whyMnT: [
            { title: "Enterprise-Grade Security", description: "We implement multi-layer security protocols to ensure your data remains private and compliant." },
            { title: "Bespoke Model Training", description: "We don't use generic wrappers; our agents are purpose-built for your specific business requirements." },
            { title: "Seamless Hybrid Teams", description: "Agents are designed to hand over complex issues to humans, ensuring a professional customer experience." }
        ],
        faqs: [
            { question: "How long does implementation take?", answer: "A typical deployment takes 4-6 weeks from initial assessment to full production." },
            { question: "Can the AI handle non-standard requests?", answer: "Yes, our agents are equipped with 'safeguarded reasoning' to escalate complex scenarios to human supervisors." },
            { question: "Is our data secure?", answer: "Absolutely. We offer private cloud deployments where your proprietary data never leaves your environment." }
        ]
    },
    "smart-automation": {
        id: "smart-automation",
        name: "Smart Business Automation",
        summary: "Self-healing enterprise workflows that adapt to changing business conditions in real-time.",
        heroImage: "/infrastructure.webp",
        description: {
            overview: "Smart Business Automation (SBA) moves beyond rigid RPA. It uses machine learning to understand context, identify bottlenecks, and self-correct workflow errors without human intervention.",
            howItWorks: "We layer an intelligent coordination engine over your existing software ecosystem. This engine monitors data streams and triggers automated actions based on predicted outcomes rather than just static triggers.",
            designedFor: "Operational leaders managing complex, high-volume processes that require intelligent decision-making at every step."
        },
        challenges: [
            { title: "Fragile Automations", icon: Zap, description: "Traditional RPA breaks when UI elements change or minor data inconsistencies occur." },
            { title: "Hidden Inefficiencies", icon: BarChart3, description: "Difficulty identifying exactly where processes are slowing down in a complex organization." },
            { title: "Manual Data Silos", icon: Database, description: "Employees spend hours moving data between systems that don't naturally communicate." },
            { title: "Slow Response Times", icon: Globe2, description: "Manual approvals and data processing create significant delays in customer fulfillment." }
        ],
        deliverables: [
            { title: "Self-Healing Workflows", icon: Workflow, description: "Automations that detect errors and automatically adjust to fix them." },
            { title: "Centralized Orchestration", icon: Layout, description: "One dashboard to monitor and manage all cross-departmental automations." },
            { title: "Predictive Monitoring", icon: BarChart3, description: "AI that alerts you to potential process failures before they happen." },
            { title: "System Bridges", icon: Network, description: "Custom connectors for legacy systems and modern API-driven tools." }
        ],
        benefits: [
            { metric: "60%", label: "Process Speed", description: "Increase in end-to-end completion speed for complex business tasks." },
            { metric: "99.9%", label: "Accuracy", description: "Elimination of human error in data entry and repetitive calculations." },
            { metric: "30%", label: "Cost Saving", description: "Reduction in direct operational costs within the first six months." },
            { metric: "Real-time", label: "Intelligence", description: "Instant feedback on process health and performance metrics." }
        ],
        whyMnT: [
            { title: "Context-Aware AI", description: "Our systems understand the 'why' behind a process, not just the 'what', making them more resilient." },
            { title: "No-Code Flexibility", description: "While built on complex ML, we provide intuitive interfaces for your team to adjust business rules." },
            { title: "Scalable Infrastructure", description: "Our architecture grows with your business, handling millions of requests without latency." }
        ],
        faqs: [
            { question: "Does this replace our current software?", answer: "No, SBA enhances your current stack by bridging gaps and automating the data flow between them." },
            { question: "How complex is the integration?", answer: "We handle the entire integration layer, requiring minimal time from your internal IT team." },
            { question: "What happens if a process fails?", answer: "The system's self-healing logic attempts a fix; if unsuccessful, it immediately flags a human specialist with detailed diagnostics." }
        ]
    },
    "ai-apps": {
        id: "ai-apps",
        name: "Custom AI Web & Mobile Apps",
        summary: "Future-proof applications integrated with Voice AI, Computer Vision, and Predictive Analytics.",
        heroImage: "/infrastructure.webp",
        description: {
            overview: "We develop high-performance web and mobile products that have AI at their core. These aren't standard apps with an API tacked on; they are built to process intelligence natively.",
            howItWorks: "Using a combination of edge computing and cloud-based ML, we provide real-time features like gesture control, biometric authentication, and personalized user experiences.",
            designedFor: "Product innovators wanting to launch game-changing digital experiences that lead the market."
        },
        challenges: [
            { title: "Outdated UX", icon: Smartphone, description: "Generic apps feel static and fail to engage users accustomed to intelligent experiences." },
            { title: "Scaling Intelligence", icon: Zap, description: "Difficulty implementing AI features that work smoothly on mobile devices without draining battery." },
            { title: "Data Privacy Concerns", icon: Shield, description: "Users are increasingly wary of how their personal data is processed by AI applications." },
            { title: "Vendor Lock-in", icon: Database, description: "Reliance on expensive, closed AI platforms that don't allow for custom model ownership." }
        ],
        deliverables: [
            { title: "AI-Native App Design", icon: Smartphone, description: "UX/UI designed specifically for AI-driven user interactions." },
            { title: "Edge AI Integration", icon: Zap, description: "On-device processing for speed, offline capability, and enhanced privacy." },
            { title: "Multi-modal Interface", icon: MessageSquare, description: "Support for voice, text, and visual inputs within a single application." },
            { title: "Performance Tuning", icon: BarChart3, description: "Optimization for low latency and high reliability across all devices." }
        ],
        benefits: [
            { metric: "2X", label: "Engagement", description: "Increase in user session length due to personalized AI content." },
            { metric: "Zero", label: "Latency", description: "Immediate response times for AI-powered mobile features." },
            { metric: "75%", label: "Faster Launch", description: "Reduced time-to-market using our proprietary AI app frameworks." },
            { metric: "100%", label: "Ownership", description: "You own the custom models and the data infrastructure behind them." }
        ],
        whyMnT: [
            { title: "User-Centric AI", description: "We focus on solving real user problems with AI, not just adding tech for tech's sake." },
            { title: "Cross-Platform Mastery", description: "We build unified AI experiences that work perfectly across Web, iOS, and Android." },
            { title: "Future-Proof Tech Stack", description: "We use modular architectures that allow for easy swapping of AI models as technology evolves." }
        ],
        faqs: [
            { question: "Do you build for both iOS and Android?", answer: "Yes, we specialize in cross-platform development (React Native/Flutter) with native AI modules." },
            { question: "Can you add AI to our existing app?", answer: "Absolutely. We offer AI augmentation services to modernize legacy applications." },
            { question: "How do you handle offline AI?", answer: "We deploy optimized models directly to the user's device for critical offline functionality." }
        ]
    },
    "knowledge-ai": {
        id: "knowledge-ai",
        name: "Enterprise Knowledge AI",
        summary: "Transform unstructured data into a secure, searchable Smart Brain for your entire organization.",
        heroImage: "/infrastructure.webp",
        description: {
            overview: "Knowledge AI (K-AI) indexes all your internal documentation—from PDFs and Slack logs to legal contracts—allowing employees to get instant, accurate answers.",
            howItWorks: "We use advanced Retrieval-Augmented Generation (RAG) and Vector Databases to ensure the AI remains grounded in your facts, preventing 'hallucinations' common in public models.",
            designedFor: "Organizations with vast amounts of internal data that is difficult to search or synthesize effectively."
        },
        challenges: [
            { title: "Institutional Amnesia", icon: Brain, description: "Valuable insights are buried in old folders or lost when experienced staff retire." },
            { title: "Information Overload", icon: Database, description: "Employees spend up to 20% of their time just looking for information." },
            { title: "Data Leaks", icon: Shield, description: "Staff using public AI tools (like ChatGPT) with sensitive company data poses a major security risk." },
            { title: "Inaccurate Research", icon: BarChart3, description: "Internal searches often pull outdated versions of documents, leading to costly mistakes." }
        ],
        deliverables: [
            { title: "Custom Knowledge Graph", icon: Network, description: "A structured relational map of your company's information." },
            { title: "Secure Chat Interface", icon: MessageSquare, description: "Intuitive 'Ask Me Anything' UI for employees to query data." },
            { title: "Automated Synthesis", icon: Brain, description: "AI that can summarize thousands of pages into a single one-page executive brief." },
            { title: "Compliance Layer", icon: Shield, description: "Role-based access controls to ensure sensitive info stays with authorized personnel." }
        ],
        benefits: [
            { metric: "90%", label: "Search Speed", description: "Reduction in time required to find specific internal data points." },
            { metric: "100%", label: "Accuracy", description: "Grounded RAG architecture ensures zero hallucinations the AI only uses your facts." },
            { metric: "Zero", label: "External Leaks", description: "Private infrastructure keeps your data within your firewall at all times." },
            { metric: "Save", label: "Days", description: "Research tasks that took days now take seconds with instant AI synthesis." }
        ],
        whyMnT: [
            { title: "Zero-Trust Architecture", description: "We design your data brain with the highest levels of security and auditability." },
            { title: "Hyper-Specific Indexing", description: "Our AI understands your industry's niche terminology and context." },
            { title: "Rapid ROI", description: "Most organizations see measurable productivity gains within the first 30 days of deployment." }
        ],
        faqs: [
            { question: "What file formats do you support?", answer: "We support over 200 formats including PDF, Word, Excel, scanned images (OCR), and audio/video files." },
            { question: "How do you ensure the AI doesn't reveal secret info?", answer: "We implement dynamic ACLs (Access Control Lists) that mirror your existing permission structures." },
            { question: "Can it integrate with Slack/Teams?", answer: "Yes, we provide direct integrations so your team can query the knowledge base from their preferred tools." }
        ]
    },
    "generative-ai": {
        id: "generative-ai",
        name: "Generative AI for Marketing",
        summary: "High-fidelity content pipelines that produce brand-aligned visuals, video, and copy at scale.",
        heroImage: "/infrastructure.webp",
        description: {
            overview: "Generative AI (GenAI) for Marketing allows you to produce months' worth of high-quality, on-brand creative content in a matter of minutes.",
            howItWorks: "We fine-tune open-source models (like Stable Diffusion or Llama) on your specific brand guidelines, tone of voice, and previous successful campaigns.",
            designedFor: "Marketing teams needing to scale personalized content across multiple channels without exploding their budget."
        },
        challenges: [
            { title: "Content Bottlenecks", icon: Sparkles, description: "Creative teams spend too much time on repetitive production tasks instead of strategy." },
            { title: "Creative Burnout", icon: Zap, description: "The need for constant 'always-on' social content leads to a decline in quality." },
            { title: "Brand Inconsistency", icon: Shield, description: "Different teams or agencies produce content that feels disconnected from the core brand." },
            { title: "Expensive Production", icon: BarChart3, description: "Traditional photo shoots and video production are too slow and costly for modern marketing." }
        ],
        deliverables: [
            { title: "Brand-Tuned Models", icon: Brain, description: "AI that 'knows' your logo, color palette, and visual style perfectly." },
            { title: "Automated Content Pipeline", icon: Workflow, description: "One-click generation of social posts, ad variants, and email headers." },
            { title: "Personalized Video AI", icon: Play, description: "Scale one video shoot into thousands of personalized messages for customers." },
            { title: "Tone-of-Voice Engines", icon: MessageSquare, description: "Copywriting AI trained specifically on your brand's unique character." }
        ],
        benefits: [
            { metric: "10X", label: "Content Volume", description: "Increase in creative output without increasing team size." },
            { metric: "80%", label: "Lower Cost", description: "Reduction in average cost per creative asset produced." },
            { metric: "Instant", label: "Personalization", description: "Dynamic creative optimization based on real-time user data." },
            { metric: "Always", label: "On-Brand", description: "Automated guardrails ensure every piece of content meets brand standards." }
        ],
        whyMnT: [
            { title: "Creative Stewardship", description: "We view AI as a tool to empower creators, not replace them." },
            { title: "Quality Guarantee", description: "We use advanced upscaling and refinement techniques for professional, print-ready output." },
            { title: "Ethical AI Practices", description: "We only use data you have rights to, ensuring full commercial safety for your assets." }
        ],
        faqs: [
            { question: "Is the content copyrightable?", answer: "Yes, by fine-tuning models on your data and using them within a human-steered workflow, you maintain ownership." },
            { question: "Will it look like 'AI content'?", answer: "Not at all. Our brand-tuning process ensures the output is indistinguishable from human-designed assets." },
            { question: "How do we train the model?", answer: "We take your existing brand assets and campaign history to create a unique 'Creative Fingerprint' for the AI." }
        ]
    }
};
