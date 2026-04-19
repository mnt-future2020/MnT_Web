import {
    Bot, LineChart, Stethoscope, GraduationCap, Zap, Shield, Network,
    BarChart3, Globe2, Brain, MessageSquare, Database, ArrowRight,
    CheckCircle2, Workflow, Smartphone, ShoppingBag, Search,
    ShoppingCart, Tag, CreditCard, Monitor, Package, RefreshCw,
    FileText, PieChart, Home, Calendar, Users, Shirt, Layers,
    Eye, Star, Lock, Target, BarChart, Mail, Box, Bed, Utensils
} from "lucide-react";
import React from 'react';

export interface ProductDetail {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    features: {
        title: string;
        icon: any;
        description: string;
    }[];
    capabilities: {
        title: string;
        icon: any;
        description: string;
    }[];
    metrics: {
        metric: string;
        label: string;
        description: string;
    }[];
    useCases: {
        industry: string;
        scenario: string;
    }[];
    whyMnT: {
        title: string;
        description: string;
    }[];
}

export const productsData: Record<string, ProductDetail> = {
    "isuite-ai": {
        id: "isuite-ai",
        name: "iSuite AI",
        tagline: "Centralized Intelligence Layer",
        description: "iSuite AI acts as the intelligent brain of your digital ecosystem. It integrates data, automates complex workflows, and enables businesses to operate with precision and efficiency using enterprise-grade AI orchestration.",
        image: `${import.meta.env.BASE_URL}mntai.webp`,
        features: [
            { title: "Neural AI Orchestration", icon: Brain, description: "Unify multiple AI models into a high-performance decision engine." },
            { title: "Autonomous Workflows", icon: Zap, description: "Self-managing processes that adapt to real-time data shifts." },
            { title: "Secure Data Mesh", icon: Shield, description: "Enterprise data remains private and secure within your mesh." },
            { title: "Unified API Integrations", icon: Network, description: "Connect to any legacy or modern application stack seamlessly." },
            { title: "Decision Intelligence", icon: Target, description: "Real-time insights for high-stakes business decisions." },
            { title: "Custom AI Agents", icon: Bot, description: "Deploy specialized agents tailored to your specific operational needs." }
        ],
        capabilities: [
            { title: "Process Automation", icon: Workflow, description: "End-to-end automation of complex business logic." },
            { title: "Cognitive Search", icon: Search, description: "Retrieve deep insights from unstructured enterprise data." },
            { title: "Predictive Analytics", icon: LineChart, description: "Forecast trends and operational outcomes with AI." }
        ],
        metrics: [
            { metric: "85%", label: "Manual Reduction", description: "Automated routine operational tasks." },
            { metric: "5X", label: "Processing Speed", description: "Faster data-to-decision cycles." },
            { metric: "60%", label: "Cost Efficiency", description: "Reduction in operational overhead." },
            { metric: "100%", label: "Data Security", description: "Private-cloud deployment options." }
        ],
        useCases: [
            { industry: "FINANCE", scenario: "Automated risk assessment and fraud detection in real-time." },
            { industry: "LOGISTICS", scenario: "Autonomous supply chain route optimization." },
            { industry: "ENTERPRISE", scenario: "Unified knowledge management and decision support." }
        ],
        whyMnT: [
            { title: "Scalable Logic", description: "Built to handle massive enterprise data volumes." },
            { title: "Privacy First", description: "Your proprietary data never leaves your environment." },
            { title: "Adaptive Engine", description: "AI that learns and improves with your business." }
        ]
    },
    "isuite-crm": {
        id: "isuite-crm",
        name: "iSuite CRM",
        tagline: "Predictive Customer Intelligence",
        description: "iSuite CRM centralizes customer interactions, marketing campaigns, and sales processes into a single platform. Businesses can manage leads, automate follow-ups, and track revenue performance from one intelligent dashboard.",
        image: `${import.meta.env.BASE_URL}isuiteio.webp`,
        features: [
            { title: "Lead Management", icon: Users, description: "Capture and track leads through the entire conversion funnel." },
            { title: "Marketing Automation", icon: Zap, description: "AI-driven outreach across WhatsApp, SMS, and Email." },
            { title: "Omnichannel Sync", icon: Globe2, description: "Unified communication history from all customer touchpoints." },
            { title: "Finance Dashboard", icon: BarChart3, description: "Track sales performance and revenue in real-time." },
            { title: "Workflow Automation", icon: Workflow, description: "Automate follow-ups and repetitive sales tasks." },
            { title: "Customer Support AI", icon: MessageSquare, description: "Resolve queries instantly with trained AI support assistants." }
        ],
        capabilities: [
            { title: "Audience Segmenting", icon: Target, description: "Automatically group customers for precision targeting." },
            { title: "Campaign Analytics", icon: PieChart, description: "Measure ROI across all marketing channels instantly." },
            { title: "Pipeline Forecasting", icon: LineChart, description: "Predict future sales with historical data analysis." }
        ],
        metrics: [
            { metric: "40%", label: "Sales Increase", description: "Higher conversion rates through smart follow-ups." },
            { metric: "75%", label: "Time Saved", description: "Automation of routine administrative CRM tasks." },
            { metric: "50%", label: "Lead Quality", description: "Better lead qualification through AI scoring." },
            { metric: "24/7", label: "Engagement", description: "Automated responses during off-hours." }
        ],
        useCases: [
            { industry: "REAL ESTATE", scenario: "Manage property leads and automate site visit scheduling." },
            { industry: "EDUCATION", scenario: "Track student inquiries and automate enrollment comms." },
            { industry: "RETAIL", scenario: "Hyper-personalized marketing for repeat buyers." }
        ],
        whyMnT: [
            { title: "Unified Brain", description: "One platform for sales, marketing, and support." },
            { title: "AI-Native", description: "Intelligence isn't an add-on, it's the core." },
            { title: "Easy Adoption", description: "Intuitive interface designed for quick team onboarding." }
        ]
    },
    "quick-commerce": {
        id: "quick-commerce",
        name: "Quick Commerce",
        tagline: "Fast & Scalable Digital Retail",
        description: "The Quick Commerce platform enables businesses to launch high-performance online stores with smooth browsing, fast checkout experiences, and real-time product management capabilities designed for modern digital retail.",
        image: `${import.meta.env.BASE_URL}isuitec.webp`,
        features: [
            { title: "Category Browsing", icon: Layers, description: "Seamless navigation through product departments." },
            { title: "Smart Search", icon: Search, description: "Find items quickly with SKU and barcode support." },
            { title: "User Experience", icon: ShoppingCart, description: "Integrated shopping cart and persistent wishlist." },
            { title: "Promotion Engine", icon: Tag, description: "Dynamic discount and bundle management." },
            { title: "Payment Gateway", icon: CreditCard, description: "Support for multiple secure payment methods." },
            { title: "Store Analytics", icon: BarChart, description: "Deep insights into customer behavior and sales trends." }
        ],
        capabilities: [
            { title: "Inventory Sync", icon: RefreshCw, description: "Real-time stock updates across all sales channels." },
            { title: "Order Fulfillment", icon: Package, description: "Streamlined picking and packing workflows." },
            { title: "Store Management", icon: Home, description: "Full control over digital storefront settings." }
        ],
        metrics: [
            { metric: "<2s", label: "Load Time", description: "High-speed browsing for mobile and desktop." },
            { metric: "30%", label: "Cart Recovery", description: "Automated nudges for abandoned checkouts." },
            { metric: "10K+", label: "SKU Support", description: "Scales to handle massive product catalogs." },
            { metric: "99%", label: "Uptime", description: "Reliable shopping experience during peak sales." }
        ],
        useCases: [
            { industry: "GROCERY", scenario: "Hyper-local delivery with real-time stock availability." },
            { industry: "FASHION", scenario: "Instant product discovery and trend-based collections." },
            { industry: "ELECTRONICS", scenario: "Rapid checkout for high-demand item launches." }
        ],
        whyMnT: [
            { title: "Cloud Native", description: "Scales automatically with your traffic spikes." },
            { title: "SEO Optimized", description: "Built for maximum visibility on search engines." },
            { title: "Modular Design", description: "Easily add features as your business grows." }
        ]
    },
    "pos-system": {
        id: "pos-system",
        name: "POS System",
        tagline: "Smart Retail Operations",
        description: "Our POS system simplifies retail operations by integrating sales, inventory, and financial management into a single intuitive interface, helping businesses track performance and optimize daily store operations.",
        image: `${import.meta.env.BASE_URL}mntpos.webp`,
        features: [
            { title: "Sales Analytics", icon: BarChart3, description: "Real-time tracking of store performance." },
            { title: "Inventory Tracking", icon: Box, description: "Automated alerts for low stock and restocks." },
            { title: "Quick Checkout", icon: Monitor, description: "Fast transaction processing for high volume." },
            { title: "Order Management", icon: FileText, description: "Manage returns, exchanges and custom orders." },
            { title: "Financial Reporting", icon: PieChart, description: "Detailed insights into profits and expenses." },
            { title: "Employee Management", icon: Users, description: "Track staff hours, performance, and access levels seamlessly." }
        ],
        capabilities: [
            { title: "Multi-Store Sync", icon: Network, description: "Unify data across different physical locations." },
            { title: "Customer Loyalty", icon: Star, description: "Integrated rewards and membership programs." },
            { title: "Hardware Support", icon: Smartphone, description: "Compatible with scanners, printers and terminals." }
        ],
        metrics: [
            { metric: "Zero", label: "Stockouts", description: "Predictive inventory alerts prevent lost sales." },
            { metric: "50%", label: "Faster Checkout", description: "Reduced wait times for customers." },
            { metric: "100%", label: "Accuracy", description: "Eliminate manual calculation errors." },
            { metric: "Instant", label: "Insights", description: "Daily reports generated automatically." }
        ],
        useCases: [
            { industry: "RETAIL STORES", scenario: "Centralized management of boutique shop operations." },
            { industry: "PHARMACIES", scenario: "Track batch numbers and expiration dates easily." },
            { industry: "RESTAURANTS", scenario: "Manage table orders and kitchen sync." }
        ],
        whyMnT: [
            { title: "Offline Mode", description: "Keep selling even when your internet drops." },
            { title: "Easy UI", description: "Train new staff in minutes, not hours." },
            { title: "Secure Data", description: "Bank-grade encryption for all transactions." }
        ]
    },
    "mahal-management": {
        id: "mahal-management",
        name: "Mahal Management",
        tagline: "Unified Venue Orchestration",
        description: "The Mahal Management platform enables seamless management of event venues, bookings, and hospitality services. It helps event halls and venues efficiently coordinate weddings, corporate events, and large gatherings with ease.",
        image: `${import.meta.env.BASE_URL}mntmm.webp`,
        features: [
            { title: "Booking System", icon: Calendar, description: "Effortless management of hall and room availability." },
            { title: "Event Planning", icon: CheckCircle2, description: "Step-by-step coordination of event requirements." },
            { title: "Accommodation", icon: Bed, description: "Guest and room management for multi-day events." },
            { title: "Catering Sync", icon: Utensils, description: "Coordinate food services and vendor schedules." },
            { title: "Vendor Portal", icon: Users, description: "Collaborate directly with third-party service providers." },
            { title: "Brand Customization", icon: Star, description: "Personalize the venue booking experience with your identity." }
        ],
        capabilities: [
            { title: "Resource Allocation", icon: Layers, description: "Track furniture, lighting, and AV equipment." },
            { title: "Financial Tracking", icon: CreditCard, description: "Manage deposits, installments and final payments." },
            { title: "Guest Concierge", icon: Smartphone, description: "Digital check-ins and requirement tracking." }
        ],
        metrics: [
            { metric: "30%", label: "Booking Growth", description: "More efficient utilization of available dates." },
            { metric: "Zero", label: "Double Bookings", description: "Centralized calendar prevents scheduling errors." },
            { metric: "45%", label: "Ops Savings", description: "Better coordination reduces staff overhead." },
            { metric: "High", label: "Guest Satisfaction", description: "Seamless execution leading to repeat referrals." }
        ],
        useCases: [
            { industry: "CONVENTION CENTERS", scenario: "Manage multiple large-scale events simultaneously." },
            { industry: "WEDDING HALLS", scenario: "Integrated planning from catering to seating charts." },
            { industry: "HOTEL BANQUETS", scenario: "Unified booking with room stays for guests." }
        ],
        whyMnT: [
            { title: "Specialized UI", description: "Designed specifically for the hospitality workflow." },
            { title: "Mobile Friendly", description: "Manage your venue on the go from any device." },
            { title: "Automated Comms", description: "Send reminders to guests and vendors automatically." }
        ]
    },
    "textile-ecommerce": {
        id: "textile-ecommerce",
        name: "Textile E-Commerce",
        tagline: "Fashion-First Digital Storefront",
        description: "The Textile E-Commerce platform enables fashion brands to sell online with powerful catalog management, curated collections, and a seamless shopping experience tailored for modern apparel businesses.",
        image: `${import.meta.env.BASE_URL}mntecom.webp`,
        features: [
            { title: "Dynamic Catalog", icon: Shirt, description: "Showcase thousands of fabrics and designs elegantly." },
            { title: "Curated Collections", icon: Layers, description: "Group products by season, style, or occasion." },
            { title: "Quick View", icon: Eye, description: "Enable shoppers to see details without leaving the list." },
            { title: "Customer Engagement", icon: Star, description: "Integrated reviews and social media sharing." },
            { title: "Secure Checkout", icon: Lock, description: "Encrypted payments for complete buyer confidence." },
            { title: "Inventory Alerts", icon: Zap, description: "Automated notifications before popular designs sell out." }
        ],
        capabilities: [
            { title: "Style Variations", icon: Box, description: "Manage sizes, colors, and fabric types easily." },
            { title: "Analytics Engine", icon: LineChart, description: "Track which designs are trending in real-time." },
            { title: "Newsletter Sync", icon: Mail, description: "Built-in tools to grow and reach your fanbase." }
        ],
        metrics: [
            { metric: "+50%", label: "Browse Duration", description: "Engaging UI keeps fashion shoppers on-site longer." },
            { metric: "25%", label: "Higher AOV", description: "Up-selling and cross-selling via smart suggestions." },
            { metric: "Global", label: "Reach", description: "Built-in support for multiple currencies and languages." },
            { metric: "Speedy", label: "Mobile First", description: "Optimized for the modern smartphone shopper." }
        ],
        useCases: [
            { industry: "BOUTIQUES", scenario: "Transition from local store to global fashion brand." },
            { industry: "FABRIC MILLS", scenario: "Direct-to-consumer sales with complex variations." },
            { industry: "BRAND LABELS", scenario: "Launch seasonal collections with high visual impact." }
        ],
        whyMnT: [
            { title: "Visual Focus", description: "UI that honors your brand's aesthetic and quality." },
            { title: "Agile Updates", description: "Change your storefront look and feel in minutes." },
            { title: "Growth Ready", description: "From first sale to global scale, we've got you covered." }
        ]
    }
};

