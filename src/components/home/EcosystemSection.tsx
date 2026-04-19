import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Bot,
    Zap,
    Smartphone,
    Brain,
    Sparkles,
    ArrowRight,
    Cpu,
    Monitor,
    Database,
    Search,
    MessageSquare,
    Image,
    Type,
    Video,
    Layout,
    Workflow,
    Calendar,
    Users
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/mntlogo.webp";

const services = [
    {
        id: "ai-employees",
        title: "AI Employees & Digital Workforce",
        desc: "Autonomous Digital Colleague",
        longDesc: "Transition from static bots to autonomous digital colleagues managing complex workflows.",
        icon: Users,
        color: "from-blue-500 to-cyan-400",
        visual: "employees"
    },
    {
        id: "smart-automation",
        title: "Smart Business Automation",
        desc: "Intelligent Workflow Engine",
        longDesc: "Bridge the gap between manual effort and digital efficiency with smart workstreams.",
        icon: Zap,
        color: "from-blue-600 to-indigo-500",
        visual: "automation"
    },
    {
        id: "ai-apps",
        title: "Custom AI Web & Mobile Apps",
        desc: "Adaptive Smart App",
        longDesc: "Next-generation digital platforms that adapt with native Voice & Vision AI.",
        icon: Smartphone,
        color: "from-cyan-500 to-blue-400",
        visual: "apps"
    },
    {
        id: "knowledge-base",
        title: "Enterprise Knowledge Base",
        desc: "Centralized AI Brain",
        longDesc: "Transform unstructured data into a centralized, private conversational intelligence.",
        icon: Brain,
        color: "from-indigo-600 to-primary",
        visual: "knowledge"
    },
    {
        id: "generative-ai",
        title: "Generative AI for Branding",
        desc: "Creative AI Engine",
        longDesc: "Elevate your content pipeline with custom-trained brand models and high-fidelity visuals.",
        icon: Sparkles,
        color: "from-primary to-secondary",
        visual: "generative"
    }
];

const ConnectionLine = ({ angle, isActive, isHovered }: { angle: number, isActive: boolean, isHovered: boolean }) => {
    return (
        <div
            className="absolute top-1/2 left-1/2 w-[300px] h-[2px] origin-left pointer-events-none z-0 hidden xl:block"
            style={{ transform: `rotate(${angle}deg)` }}
        >
            <div className="relative w-full h-full">
                {/* Base Line */}
                <div className="absolute inset-0 bg-slate-200/50" />

                {/* Animated Stroke */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className={`absolute inset-0 origin-left bg-gradient-to-r from-primary/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100 bg-primary/60' : 'opacity-50'}`}
                />

                {/* Pulsing Particle */}
                {isActive && (
                    <motion.div
                        animate={{ x: [0, 300], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary blur-[2px]"
                    />
                )}
            </div>
        </div>
    );
};

const CapabilityNode = ({
    service,
    angle,
    index,
    isActive,
    onHover,
    onLeave,
    isHovered,
    isAnyHovered
}: any) => {
    const Icon = service.icon;

    // Calculate position based on radial layout
    // Increased radius to 350px for better breathing room on desktop
    const x = Math.cos(angle * Math.PI / 180) * 350;
    const y = Math.sin(angle * Math.PI / 180) * 350;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isActive ? (isAnyHovered && !isHovered ? 0.3 : 1) : 0,
                scale: isActive ? (isHovered ? 1.05 : 1) : 0,
                x,
                y
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            onMouseEnter={() => onHover(service.id)}
            onMouseLeave={onLeave}
        >
            <div className="relative group cursor-pointer">
                {/* Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`} />

                {/* Node Body - SaaS Style Card */}
                <div className="relative w-56 h-56 rounded-2xl bg-white shadow-soft border border-slate-100 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-premium overflow-hidden">
                    {/* Visual Representation (Mini) */}
                    <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl group-hover:scale-110 transition-transform duration-500`} />
                        <Icon className={`w-7 h-7 text-slate-800 transition-colors duration-500 ${isHovered ? 'text-primary' : ''}`} />

                        {/* Micro-animations based on service type */}
                        {service.visual === "employees" && (
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 w-4 h-4 rounded bg-blue-100 flex items-center justify-center border border-blue-200"
                                >
                                    <Calendar className="w-2 h-2 text-blue-500" />
                                </motion.div>
                            </div>
                        )}

                        {service.visual === "automation" && (isActive && (
                            <motion.div
                                className="absolute inset-0 border-2 border-primary/20 rounded-2xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        ))}

                        {service.visual === "apps" && (
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-full h-full border border-primary/10 rounded-2xl"
                                />
                            </div>
                        )}
                    </div>

                    <h4 className="text-lg font-medium text-slate-900 mb-2 leading-[1.4]">{service.title}</h4>
                    <p className="text-[12px] text-slate-400 font-semibold tracking-wider uppercase opacity-80">{service.desc}</p>

                    {/* Information on Hover */}
                    <div className={`mt-3 overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-sm text-slate-500 leading-[1.6] mb-3">
                            {service.longDesc}
                        </p>
                        <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-primary uppercase tracking-widest">
                            Initialize <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const EcosystemSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="ecosystem"
            ref={containerRef}
            className="relative py-24 md:py-32 overflow-hidden bg-white"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: "60px 60px"
                    }}
                />

                {/* Radial Shadows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/[0.015] rounded-full blur-[150px]" />

                {/* Animated Background Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.1]">
                    <pattern id="binary-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                        <text x="10" y="20" className="text-[8px] fill-slate-900 font-mono">0101</text>
                        <text x="50" y="60" className="text-[8px] fill-slate-900 font-mono">1100</text>
                        <text x="20" y="80" className="text-[8px] fill-slate-900 font-mono">0011</text>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#binary-pattern)" />
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
                {/* Section Header */}
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-[40px] font-display font-semibold text-slate-900 mb-6 tracking-tight">
                            MnT AI Capability <span className="text-primary italic font-serif">Ecosystem</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary/20 mx-auto rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute inset-0 bg-[#2095F1]"
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed"
                    >
                        One Intelligence Layer. Five Strategic Execution Engines.
                    </motion.p>
                </div>

                {/* The Ecosystem Map */}
                <div className="relative min-h-[600px] md:min-h-[850px] flex items-center justify-center">
                    {(!isMobile && !isTablet) ? (
                        /* Desktop: Radial Architecture with Grid Precision */
                        <div className="relative w-full h-full flex items-center justify-center min-h-[850px]">
                            {/* Central Core - Perfectly Centered */}
                            <div className="relative z-30 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-premium flex items-center justify-center p-8 border border-slate-100"
                                >
                                    {/* Rotating Stroke - Thinner */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-full"
                                    />

                                    {/* Glowing Pulse */}
                                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />

                                    <img src={logo} alt="MnT Core" className="relative z-10 w-auto h-10 md:h-12" />

                                    {/* Orbiting Particles */}
                                    <div className="absolute inset-0">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0"
                                            >
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Capability Nodes & Lines - Symmetrical Placement */}
                            {services.map((service, i) => {
                                const angle = -90 + (i * 72); // Starting from top (0 deg is right, so -90 is top)
                                return (
                                    <div key={service.id}>
                                        <div
                                            className="absolute top-1/2 left-1/2 w-[350px] h-[1px] origin-left pointer-events-none z-0"
                                            style={{ transform: `rotate(${angle}deg)` }}
                                        >
                                            <div className="relative w-full h-full">
                                                <div className="absolute inset-0 bg-slate-100/80" />
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: isInView ? 1 : 0 }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                    className={`absolute inset-0 origin-left bg-gradient-to-r from-primary/30 to-transparent transition-opacity duration-300 ${hoveredNode === service.id ? 'opacity-100 bg-primary/50' : 'opacity-40'}`}
                                                />
                                            </div>
                                        </div>
                                        <CapabilityNode
                                            service={service}
                                            angle={angle}
                                            index={i}
                                            isActive={isInView}
                                            onHover={setHoveredNode}
                                            onLeave={() => setHoveredNode(null)}
                                            isHovered={hoveredNode === service.id}
                                            isAnyHovered={hoveredNode !== null}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : isTablet ? (
                        /* Tablet: High-Grid 2-Column Precision */
                        <div className="w-full">
                            <div className="grid grid-cols-2 gap-8 lg:gap-12">
                                {services.map((service, i) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-8 rounded-2xl bg-white shadow-soft border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-premium min-h-[280px] justify-center ${i === 4 ? 'col-span-2 md:col-span-1 md:col-start-1 md:mx-auto' : ''}`}
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                                            <service.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-medium text-slate-900 mb-3">{service.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{service.longDesc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Mobile: Stacked Premium SaaS Cards */
                        <div className="w-full space-y-8">
                            {services.map((service, i) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white shadow-soft border border-slate-100 flex flex-col items-start text-left"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">{service.title}</h4>
                                    <p className="text-base text-slate-500 leading-relaxed">{service.longDesc}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section End CTA */}
                <div className="mt-32 text-center pb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-10 italic font-medium">
                            "Intelligence is not a feature. It is <span className="text-primary font-bold">infrastructure</span>."
                        </h3>

                        <Link to="/contact">
                            <button className="group relative px-10 py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-xl hover:bg-primary transition-all duration-500 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3 text-lg">
                                    Architect Your AI Future <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
