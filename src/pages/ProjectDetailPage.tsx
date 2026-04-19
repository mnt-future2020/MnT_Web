import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, Globe,
    Circle, Code2, Target, BarChart3, Database, Layers,
    AlertTriangle, Zap, TrendingUp, ShoppingCart, Smartphone, Timer,
    Server, Cpu, CreditCard, Route, Box, Lock, Cloud, Link as LinkIcon
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/data/portfolioData";

/* ─────────────────────────────────────
   UTILITY COMPONENTS
   ───────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1] as any;

const RevealAnimation = ({ children, direction = "up", delay = 0 }: { children: React.ReactNode; direction?: "up" | "left" | "right"; delay?: number }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 60 : 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        },
        visible: {
            opacity: 1, y: 0, x: 0,
            transition: { duration: 0.9, ease, delay },
        },
    };
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants}>
            {children}
        </motion.div>
    );
};

const SectionLabel = ({ text, light = false }: { text: string; light?: boolean }) => (
    <motion.span
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className={`inline-block text-[11px] font-black uppercase tracking-[0.3em] mb-3 ${light ? "text-primary/70" : "text-primary"}`}
    >
        {text}
    </motion.span>
);

/* Counter that animates on scroll */
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!isInView) return;
        const numericVal = parseInt(value.replace(/[^0-9]/g, ""), 10);
        if (isNaN(numericVal)) { setDisplay(value); return; }
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();
        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            start = Math.round(eased * numericVal);
            setDisplay(String(start));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [isInView, value]);

    return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

/* Gradient mesh background */
const GradientMesh = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <motion.div
            animate={{
                x: [0, 80, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.15] blur-[120px] rounded-full bg-primary"
        />
        <motion.div
            animate={{
                x: [0, -60, 0],
                y: [0, 80, 0],
                scale: [1, 1.2, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] opacity-[0.1] blur-[100px] rounded-full bg-secondary"
        />

        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232095F1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#2095F1_1px,transparent_1px),linear-gradient(to_bottom,#2095F1_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
                style={{ left: `${15 + Math.random() * 70}%`, top: `${15 + Math.random() * 70}%` }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 7 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
            />
        ))}
    </div>
);

/* ─────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────── */

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = portfolioProjects.find((p) => p.id === projectId);
    const [activeSection, setActiveSection] = useState("hero");

    const sections = [
        { id: "hero", label: "Hero" },
        { id: "snapshot", label: "Snapshot" },
        { id: "challenge", label: "Challenge" },
        { id: "timeline", label: "Strategy" },
        { id: "features", label: "Features" },
        { id: "tech", label: "Tech Stack" },
        { id: "impact", label: "Impact" },
        { id: "showcase", label: "Showcase" },
        { id: "testimonial", label: "Testimonial" },
        { id: "cta", label: "Start Project" },
    ];

    useEffect(() => { window.scrollTo(0, 0); }, [projectId]);

    useEffect(() => {
        let ticking = false;
        const run = () => {
            const scrollPos = window.scrollY + 300;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && scrollPos >= el.offsetTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
            ticking = false;
        };
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(run);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white font-sans">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-display font-bold text-slate-900 px-4">Project Not Found</h1>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    /* Metric icons — cycle through for each project */
    const metricIcons = [TrendingUp, ShoppingCart, Smartphone, Timer];

    return (
        <main className="min-h-screen bg-white selection:bg-primary/10 font-sans overflow-x-hidden">
            <Navigation />


            {/* ── BACK BUTTON ── */}
            <div className="fixed top-24 left-4 md:left-8 z-50">
                <Link to="/portfolio" className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl text-[10px] font-black text-slate-800 shadow-lg hover:bg-primary hover:border-primary hover:text-white transition-all group">
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                    PORTFOLIO
                </Link>
            </div>

            {/* ═══════════════════════════════════════
               1. HERO — DYNAMIC + ANIMATED
               ═══════════════════════════════════════ */}
            <section id="hero" className="relative min-h-[75vh] pt-32 md:pt-44 pb-12 md:pb-20 flex items-center overflow-hidden bg-white">
                <GradientMesh />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="inline-flex items-center px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.25em]"
                                >
                                    {project.category}
                                </motion.span>
                                <h1 className="text-6xl md:text-7xl font-display font-bold text-slate-900 leading-[0.95] tracking-tighter">
                                    {project.name}
                                </h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl"
                                >
                                    {project.tagline}
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="flex flex-wrap gap-5 pt-4"
                            >
                                <motion.button
                                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(32,149,241,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-[18px] bg-primary text-white rounded-[2rem] font-black text-[12px] tracking-[0.2em] shadow-[0_15px_35px_rgba(32,149,241,0.25)] transition-all flex items-center gap-3"
                                >
                                    REQUEST SIMILAR SOLUTION <ArrowUpRight className="w-5 h-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 60 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.4, ease, delay: 0.2 }}
                            className="relative hidden lg:block w-full"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-[8px] border-white max-w-[800px] w-full ml-auto">
                                    <img src={project.image} alt={project.name} loading="lazy" decoding="async" className="w-full aspect-video object-cover" />
                                </div>
                            </motion.div>
                            {/* Decorative shape */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-12 -right-12 w-48 h-48 border border-primary/20 rounded-full border-dashed -z-10"
                            />

                            {/* Additional abstract elements */}
                            <motion.div
                                animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"
                            />
                            <motion.div
                                animate={{ x: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-20 -right-20 w-64 h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rotate-45 -z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               2. PROJECT SNAPSHOT — STAT CARDS
               ═══════════════════════════════════════ */}
            <section id="snapshot" className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
                        {[
                            { label: "Industry", value: project.snapshot.industry, icon: Globe },
                            { label: "Project Type", value: project.snapshot.projectType, icon: Target },
                            { label: "Duration", value: project.snapshot.duration, icon: Timer },
                            { label: "Platform Type", value: project.snapshot.platform, icon: Smartphone },
                            { label: "Key Result", value: project.snapshot.keyResult, icon: BarChart3 }
                        ].map((stat, i) => (
                            <RevealAnimation key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all group h-full flex flex-col items-center text-center"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                                    <span className="text-base font-display font-bold text-slate-800">{stat.value}</span>
                                </motion.div>
                            </RevealAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               3. CHALLENGE SECTION — VISUAL PAIN POINTS
               ═══════════════════════════════════════ */}
            <section id="challenge" className="py-12 md:py-16 bg-white relative">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <RevealAnimation>
                            <div className="space-y-3">
                                <div className="flex justify-center">
                                    <SectionLabel text="THE BUSINESS CHALLENGE" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-[1.1]">
                                    Breaking through the <br /> <span className="text-primary">Complexity</span>
                                </h2>
                                <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
                                    {project.description}
                                </p>
                            </div>
                        </RevealAnimation>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {project.challenge.painPoints.map((point, i) => (
                            <RevealAnimation key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group h-full p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-primary/20 hover:shadow-[0_30px_60px_rgba(32,149,241,0.1)]"
                                >
                                    <div className="space-y-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                            <AlertTriangle className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-xl font-display font-bold text-slate-900 leading-tight">{point}</h4>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-70">
                                                Critical friction point identified during initial systems audit and stakeholder discovery.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </RevealAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               4. STRATEGY & EXECUTION — TIMELINE
               ═══════════════════════════════════════ */}
            <section id="timeline" className="py-12 md:py-16 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(32,149,241,0.05),transparent_70%)]" />
                <div className="container-custom relative z-10">
                    <div className="mb-20 text-center">
                        <RevealAnimation>
                            <SectionLabel text="STRATEGIC ROADMAP" light />
                            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Execution <span className="text-primary">Process</span></h2>
                        </RevealAnimation>
                    </div>

                    <div className="relative max-w-4xl mx-auto pt-10">
                        {/* Connecting Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

                        <div className="space-y-12">
                            {project.timeline.map((item, i) => (
                                <RevealAnimation key={i} direction={i % 2 === 0 ? "left" : "right"}>
                                    <div className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                        {/* Dot */}
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(32,149,241,0.8)] z-10" />

                                        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                                            <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.phase}</span>
                                                <h4 className="text-2xl font-display font-bold">{item.title}</h4>
                                                <p className={`text-slate-400 text-sm leading-relaxed max-w-xs ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block w-1/2" />
                                    </div>
                                </RevealAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               5. FEATURES SHOWCASE — PREMIUM GRID
               ═══════════════════════════════════════ */}
            <section id="features" className="py-12 md:py-16 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="mb-20 space-y-4">
                        <SectionLabel text="CORE CAPABILITIES" />
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">Technical <span className="text-primary">Excellence</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {project.features.map((feature, i) => (
                            <RevealAnimation key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-white text-primary flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-display font-bold text-slate-900 mb-4">{feature}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Engineered with focus on high-load stability and intuitive user engagement patterns.
                                    </p>
                                </motion.div>
                            </RevealAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               6. TECHNOLOGY STACK — CIRCLE DISPLAY
               ═══════════════════════════════════════ */}
            <section id="tech" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <RevealAnimation>
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <SectionLabel text="TECH STACK" />
                                <h2 className="text-3xl font-display font-bold text-slate-900">Modern Architecture Stack</h2>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                                {project.techStack.map((tech, i) => {
                                    const logoData = {
                                        "Next.js": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
                                        "Tailwind CSS": { type: "img", value: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
                                        "Node.js": { type: "img", value: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
                                        "PostgreSQL": { type: "img", value: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
                                        "Server-Side Rendering": { type: "icon", value: Server },
                                        "Vercel": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
                                        "React": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                                        "react.js": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                                        "mongodb": { type: "img", value: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
                                        "MongoDB": { type: "img", value: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
                                        "Razorpay": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/razorpay.svg" },
                                        "Cloudinary": { type: "img", value: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg" },
                                        "AWS S3": { type: "img", value: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
                                        "REST APIs": { type: "img", value: "https://www.svgrepo.com/show/354272/rest-api.svg" },
                                        "Payment Gateway": { type: "img", value: "https://www.svgrepo.com/show/354394/stripe.svg" },
                                        "Dynamic Routing": { type: "img", value: "https://www.svgrepo.com/show/354262/react-router.svg" },
                                        "Modular Architecture": { type: "img", value: "https://www.svgrepo.com/show/452140/architecture.svg" },
                                        "Full-Stack Architecture": { type: "img", value: "https://www.svgrepo.com/show/452240/layers.svg" },
                                        "Modular ERP Framework": { type: "img", value: "https://www.svgrepo.com/show/452190/cpu.svg" },
                                        "Role-Based Access": { type: "img", value: "https://www.svgrepo.com/show/452102/shield.svg" },
                                        "Database Automation": { type: "img", value: "https://www.svgrepo.com/show/353622/database.svg" },
                                        "Cloud Deployment": { type: "img", value: "https://www.svgrepo.com/show/354113/nextcloud-icon.svg" },
                                        "Radix UI": { type: "img", value: "https://www.svgrepo.com/show/354274/radix-ui.svg" },
                                        "Lucide React": { type: "img", value: "https://lucide.dev/logo.svg" },
                                        "Turbopack": { type: "img", value: "https://turbo.build/favicon-32x32.png" },
                                    }[tech as string] || { type: "icon", value: Code2 };

                                    return (
                                        <RevealAnimation key={i} delay={i * 0.1}>
                                            <motion.div
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="flex flex-col items-center gap-4"
                                            >
                                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-5 group cursor-default hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all">
                                                    {logoData.type === "img" ? (
                                                        <img src={logoData.value as string} alt={tech} loading="lazy" decoding="async" className="w-full h-full object-contain transition-all duration-300" />
                                                    ) : (
                                                        <logoData.value className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors" />
                                                    )}
                                                </div>
                                                <span className="text-[10px] md:text-[11px] font-black text-slate-500 text-center uppercase tracking-wider group-hover:text-primary transition-colors">
                                                    {tech}
                                                </span>
                                            </motion.div>
                                        </RevealAnimation>
                                    );
                                })}
                            </div>
                        </div>
                    </RevealAnimation>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               7. BUSINESS IMPACT — BOLD METRICS
               ═══════════════════════════════════════ */}
            <section id="impact" className="py-14 md:py-16 bg-slate-950 text-white relative overflow-hidden">
                <GradientMesh />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <RevealAnimation>
                            <SectionLabel text="MEASURABLE ROI" light />
                            <h2 className="text-4xl md:text-6xl font-display font-bold">Business <span className="text-primary">Success</span></h2>
                        </RevealAnimation>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {project.metrics.map((metric, i) => {
                            const IconComp = metricIcons[i % metricIcons.length];
                            return (
                                <RevealAnimation key={i} delay={i * 0.1}>
                                    <div className="group text-center space-y-6">
                                        <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
                                            <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">{metric.label}</div>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                                                {metric.desc}
                                            </p>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               8. VISUAL SHOWCASE — MOCKUP / GALLERY
               ═══════════════════════════════════════ */}
            {/* <section id="showcase" className="py-32 md:py-48 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <RevealAnimation>
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <SectionLabel text="PRODUCT VISUALS" />
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">Immersive <span className="text-primary italic">Experience.</span></h2>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[1px] border-slate-200"
                            >
                                <img src={project.mainImage} alt="Main Visual" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </motion.div>
                        </div>
                    </RevealAnimation>
                </div>
            </section> */}

            {/* ═══════════════════════════════════════
               9. TESTIMONIAL SECTION — LARGE QUOTE
               ═══════════════════════════════════════ */}
            <section id="testimonial" className="py-12 md:py-16 bg-white relative">
                <div className="container-custom relative z-10">
                    <RevealAnimation>
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="flex justify-center">
                                <span className="text-[120px] font-display font-black text-primary/10 leading-none h-20 overflow-hidden">“</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-[1.2]">
                                {project.testimonial?.quote || "The solutions provided by MnT have completely transformed our operational efficiency and digital presence."}
                            </h3>
                            <div className="space-y-2">
                                <div className="text-xl font-display font-bold text-slate-800">{project.testimonial?.author || "Project Lead"}</div>
                                <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">{project.testimonial?.role || "Stakeholder"}</div>
                            </div>
                        </div>
                    </RevealAnimation>
                </div>
            </section>

            {/* ═══════════════════════════════════════
               10. FINAL CTA — FULL-WIDTH PREMIUM
               ═══════════════════════════════════════ */}
            <section id="cta" className="relative py-12 md:py-16 bg-slate-950 overflow-hidden">
                {/* Immersive Background Architecture */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Deep Gradient Base */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent_70%)]" />

                    {/* Animated Mesh/Grid Overlay */}
                    <motion.div
                        animate={{
                            opacity: [0.03, 0.08, 0.03],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"
                    />

                    {/* Floating Neural Particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: Math.random() * 0.5
                            }}
                            animate={{
                                y: ["-10%", "110%"],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10
                            }}
                        />
                    ))}

                    {/* Ambient Glowing Orbs */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full" />
                    <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                            Ready to Build a <br />
                            <span className="relative inline-block">
                                <span className="text-[#2095F1] relative z-10">
                                    Scalable Solution?
                                </span>
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full animate-pulse" />
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                            Join industry leaders who trust MnT to architect their most critical digital infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/contact"
                                    className="px-6 py-3.5 md:px-10 md:py-5 bg-[#2095F1] text-white rounded-full font-bold text-xs md:text-sm tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-4 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    TALK TO OUR EXPERTS
                                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProjectDetailPage;
