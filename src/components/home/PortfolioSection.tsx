import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import { portfolioProjects } from "@/data/portfolioData";

const PortfolioCard = ({ project, index }: { project: typeof portfolioProjects[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(32,149,241,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            onClick={() => window.location.href = `/portfolio/${project.id}`}
        >
            <div className="relative overflow-hidden aspect-[4/3] w-full p-3 md:p-4 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-t-3xl">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm relative ring-1 ring-slate-200/50 group-hover:ring-primary/20 transition-all duration-500">
                    <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>

            <div className="flex flex-col flex-grow px-5 md:px-6 pb-6 pt-5">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1.5 rounded-full text-[9px] font-bold bg-[#2095F1]/10 text-[#2095F1] uppercase tracking-wider backdrop-blur-sm transition-colors group-hover:bg-[#2095F1]/20">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#2095F1] transition-colors duration-300">
                    {project.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                </p>
            </div>
        </motion.div>
    );
};

/* ─── AI Grid Background (faint abstract grid) plus Mesh ─── */
const BackgroundEffects = () => (
    <>
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="portfolio-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#portfolio-grid)" className="text-[#2095F1]" />
            </svg>
        </div>

        {/* Subtle moving gradient mesh */}
        <motion.div
            animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }}
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, rgba(32,149,241,0.08) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(32,149,241,0.06) 0%, transparent 40%)",
                backgroundSize: "200% 200%"
            }}
        />
    </>
);

/* ─── Main Section ─── */
const PortfolioSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // using Math.ceil for precision issues with sub-pixels
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
        }
    };

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        updateScrollState();
        window.addEventListener("resize", updateScrollState);
        return () => window.removeEventListener("resize", updateScrollState);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    /* Background typography parallax */
    const bgX1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -80]);
    const bgX2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 60]);
    const bgX3 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -40]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.35, 0.35, 0.15]);

    /* Carousel stagger animation variants */
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
            scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
            scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-10 md:py-18 overflow-hidden bg-white"
        >
            <BackgroundEffects />

            {/* Background Typography */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    style={{ x: bgX1, opacity: bgOpacity }}
                    className="absolute top-16 -left-10 text-[8rem] md:text-[14rem] leading-none font-bold text-slate-300/25 whitespace-nowrap blur-[1px]"
                >
                    PORTFOLIO
                </motion.div>
                <motion.div
                    style={{ x: bgX2, opacity: bgOpacity }}
                    className="absolute top-1/2 -translate-y-1/2 -right-20 text-[7rem] md:text-[12rem] leading-none font-bold text-slate-300/20 whitespace-nowrap blur-[3px]"
                >
                    CASE STUDIES
                </motion.div>
                <motion.div
                    style={{ x: bgX3, opacity: bgOpacity }}
                    className="absolute bottom-16 left-10 text-[6rem] md:text-[10rem] leading-none font-bold text-slate-300/15 whitespace-nowrap blur-[2px]"
                >
                    AI PRODUCTS
                </motion.div>
            </div>

            <div className="container-custom relative z-10 w-full">
                {/* ─── Section Header ─── */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-5"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2095F1]/20 bg-[#2095F1]/10 text-[#2095F1] text-[10px] font-bold tracking-widest uppercase">
                            MnT PROJECTS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight"
                    >
                        Explore our featured <br className="hidden md:block" />
                        <span className="text-[#2095F1]">digital products</span>
                    </motion.h2>
                </div>

                {/* ─── Projects Carousel ─── */}
                <div className="relative group/scroll w-full mb-9">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="w-full relative"
                    >
                        <div
                            ref={scrollContainerRef}
                            onScroll={updateScrollState}
                            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide scroll-smooth relative"
                        >
                            {portfolioProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="flex-none w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[400px] snap-center shrink-0"
                                >
                                    <PortfolioCard project={project} index={index} />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation visual hints/arrows */}
                    {canScrollLeft && (
                        <div className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleScrollLeft}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl hover:shadow-2xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#2095F1] transition-all"
                            >
                                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </motion.button>
                        </div>
                    )}

                    {canScrollRight && (
                        <div className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleScrollRight}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl hover:shadow-2xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#2095F1] transition-all"
                            >
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                            </motion.button>
                        </div>
                    )}
                </div>

                {/* ─── Bottom CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-6 md:mt-10"
                >
                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-4 rounded-full bg-[#2095F1] text-white font-bold text-xs md:text-sm tracking-widest hover:bg-[#1b84d6] hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(32,149,241,0.5)] transition-all duration-300 group"
                    >
                        VIEW ALL PROJECTS
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
