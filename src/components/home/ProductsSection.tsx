import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const products = [
    {
        id: "isuite-ai",
        title: "iSuite AI",
        desc: "A unified AI platform designed to orchestrate enterprise intelligence, automate workflows, and power smart business decisions across systems.",
        image: `${import.meta.env.BASE_URL}mntai.webp`,
        tags: ["Core", "AI", "Automation"]
    },
    {
        id: "isuite-crm",
        title: "iSuite CRM",
        desc: "An all-in-one CRM and marketing platform designed to capture leads, automate customer engagement, and streamline sales operations.",
        image: `${import.meta.env.BASE_URL}isuiteio.webp`,
        tags: ["CRM", "Marketing", "Sales"]
    },
    {
        id: "quick-commerce",
        title: "Quick Commerce",
        desc: "A fast and scalable e-commerce solution built for rapid retail operations, enabling seamless online shopping and product discovery.",
        image: `${import.meta.env.BASE_URL}isuitec.webp`,
        tags: ["Retail", "E-commerce", "Scalable"]
    },
    {
        id: "pos-system",
        title: "POS System",
        desc: "A powerful POS solution designed to manage retail sales, inventory tracking, and financial insights from a single smart dashboard.",
        image: `${import.meta.env.BASE_URL}mntpos.webp`,
        tags: ["Sales", "Inventory", "Analytics"]
    },
    {
        id: "mahal-management",
        title: "Mahal Management",
        desc: "A complete venue and event management platform built to streamline bookings, event coordination, and hospitality services.",
        image: `${import.meta.env.BASE_URL}mntmm.webp`,
        tags: ["Venue", "Events", "Hospitality"]
    },
    {
        id: "textile-ecommerce",
        title: "Textile E-Commerce",
        desc: "A modern fashion e-commerce platform designed for textile brands to showcase collections, manage products, and deliver seamless shopping.",
        image: `${import.meta.env.BASE_URL}mntecom.webp`,
        tags: ["Fashion", "Textile", "Storefront"]
    }
];

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate tabs if user hasn't interacted recently
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setIsAutoPlaying(false);
    };

    return (
        <section id="products" className="relative py-4 md:py-8 bg-slate-80 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Header */}
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                        Our Suite
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight px-4 md:px-0">
                        Our Solutions for<br />
                        <span className="text-[#2095F1]">Every Business Need</span>
                    </h2>
                </div>

                {/* Navigation Tabs */}
                <div className="flex md:flex-wrap gap-3 md:gap-4 mb-10 md:mb-16 overflow-x-auto w-[calc(100vw)] -ml-4 md:ml-0 md:w-full pb-4 md:pb-2 pt-2 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory md:justify-center">
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => handleTabClick(index)}
                            className={`shrink-0 snap-center px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[13px] md:text-sm font-bold tracking-wide transition-all duration-300 border whitespace-nowrap ${index === activeTab
                                ? "bg-[#2095F1] text-white border-transparent shadow-[0_4px_12px_rgba(32,149,241,0.25)] md:scale-105"
                                : "bg-white text-slate-500 border-slate-200 hover:border-primary/30 hover:text-primary hover:bg-slate-50"
                                }`}
                        >
                            {product.title}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="min-h-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left Content */}
                            <div className="order-2 lg:order-1 space-y-10 text-center lg:text-left">
                                <div className="relative">
                                    <div className="text-[80px] md:text-[120px] font-bold text-slate-200 leading-none absolute -top-12 lg:-top-20 left-1/2 lg:-left-6 -translate-x-1/2 lg:translate-x-0 -z-10 select-none opacity-50 blur-[0px]">
                                        {String(activeTab + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-4 md:px-0">
                                        {products[activeTab].title}
                                    </h3>
                                    <p className="text-base md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 md:px-0">
                                        {products[activeTab].desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    {products[activeTab].tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest hover:bg-white hover:border-primary/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <a href="/products" className="group relative px-5 py-3 bg-[#2095F1] text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                        Explore Solutions
                                        {/* <div className="px-5 py-3 bg-transparent border border-slate-300 text-slate-600 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4 transition-transform" />
                                        </div> */}
                                    </a>
                                </div>
                            </div>

                            {/* Right Visual */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative aspect-video md:aspect-[16/10] group w-full max-w-xs sm:max-w-sm md:max-w-none">
                                    <div className="h-full w-full rounded-2xl md:rounded-3xl overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-500 z-10" />
                                        <img
                                            src={products[activeTab].image}
                                            alt={products[activeTab].title}
                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>

                                    {/* Subtle ambient glow behind image */}
                                    <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16 md:mt-24">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${activeTab === index ? "w-10 bg-primary" : "w-2 bg-slate-300 hover:bg-primary/50"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
