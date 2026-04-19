import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight, Brain, Workflow, Lightbulb, Cpu, Network, Layers } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

/* ─── Feature Highlights ─── */
const features = [
    { icon: Brain, title: "AI Strategy & Architecture", desc: "End-to-end intelligent system design" },
    { icon: Workflow, title: "Enterprise Automation", desc: "Streamlined ops with smart workflows" },
    { icon: Lightbulb, title: "Intelligent Product Engineering", desc: "AI-first product development" },
];

/* ─── Floating Decorative Icon ─── */
const FloatingIcon = ({
    icon: Icon,
    className,
    delay = 0,
}: {
    icon: React.ElementType;
    className: string;
    delay?: number;
}) => (
    <motion.div
        className={`absolute hidden lg:flex items-center justify-center w-11 h-11 rounded-xl bg-primary/[0.06] border border-primary/[0.08] text-primary/40 ${className}`}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
        <Icon className="w-5 h-5" />
    </motion.div>
);

/* ─── HD AI Illustration ─── */
const AI_ILLUSTRATION = `${import.meta.env.BASE_URL}about.webp`;



/* ─── Main Section ─── */
const AuthoritySection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

    return (
        <section id="authority" className="relative py-12 md:py-14 lg:py-18 overflow-hidden" ref={ref}>
            {/* Soft radial glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-card/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px]" />

            {/* Large faded background text */}
            <motion.div
                style={{ x: bgX }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none hidden lg:block"
            >
                <div className="font-display font-bold text-[10rem] leading-none text-foreground/[0.02] whitespace-nowrap tracking-tight">
                    INTELLIGENCE &nbsp; ARCHITECTURE &nbsp; AI SYSTEMS
                </div>
            </motion.div>

            {/* Floating decorative icons */}
            <FloatingIcon icon={Cpu} className="top-40 left-[8%]" delay={0} />
            <FloatingIcon icon={Network} className="top-32 right-[10%]" delay={1.5} />
            <FloatingIcon icon={Layers} className="bottom-28 left-[12%]" delay={0.8} />

            <div className="relative z-0 container-custom px-6 md:px-12 lg:px-32">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
                    {/* ── Left: Illustration ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-first"
                    >
                        <div className="relative group">
                            {/* Soft glow behind image */}
                            <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06] blur-2xl" />
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={AI_ILLUSTRATION}
                                    alt="AI-powered intelligent systems visualization"
                                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5 block">
                            Our Authority
                        </span>

                        <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-display font-bold leading-[1.15] mb-6">
                            We Architect the Future of{" "}
                            <span className="text-gradient">Intelligent Systems</span>
                        </h2>

                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
                            At MnT, we transform enterprises through AI-driven digital ecosystems —
                            from intelligent automation to scalable architectures that power the next
                            generation of business innovation.
                        </p>

                        {/* Feature highlights */}
                        <div className="space-y-4 mb-10">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                                        <f.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-display font-semibold leading-snug">{f.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/5 transition-all duration-300"
                            >
                                Discover Our Story <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuthoritySection;
