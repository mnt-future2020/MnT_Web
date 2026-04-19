import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolioData";

const BlueprintBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="blueprint-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2095F1" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="1" fill="#2095F1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
            <motion.path
                d="M -100 100 L 1200 1200"
                stroke="#2095F1"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path
                d="M 1200 100 L -100 1200"
                stroke="#2095F1"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            />
        </svg>
    </div>
);

const PortfolioHero = () => {
    return (
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-20 overflow-hidden bg-white">
            <BlueprintBackground />
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        PORTFOLIO
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                        Engineering Digital <br />
                        <span className="text-[#2095F1]">Systems</span> That Scale
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        A curated showcase of enterprise platforms, e-commerce ecosystems, and intelligent automation systems architected by MnT.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-10 py-5 bg-[#2095F1] text-white rounded-full font-bold text-sm tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                        >
                            EXPLORE CASE STUDIES
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PortfolioShowcase = () => {
    return (
        <section id="featured-work" className="py-24 bg-white">
            <div className="container-custom">
                <div className="space-y-16 md:space-y-48">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                        >
                            {/* Project Image */}
                            <div className="flex-1 w-full">
                                <Link to={`/portfolio/${project.id}`} className="block group relative overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex items-center justify-center h-full">
                                            <span className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary/90 transition-colors">View Case Study</span>
                                        </div>
                                    </div> */}
                                </Link>
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                                        {project.name}
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-500 leading-relaxed font-normal">
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Link
                                        to={`/portfolio/${project.id}`}
                                        className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-primary transition-colors group"
                                    >
                                        VIEW CASE STUDY
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white selection:bg-primary/10">
            <Navigation />
            <PortfolioHero />
            <PortfolioShowcase />
            <Footer />
        </main>
    );
};

export default PortfolioPage;
