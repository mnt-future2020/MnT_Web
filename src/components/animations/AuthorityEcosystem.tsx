import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Cloud, BarChart3, Settings, Link2 } from "lucide-react";
import logo from "@/assets/mntlogo.webp";

const AuthorityEcosystem = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const services = [
        { Icon: Shield, label: "Security", angle: 0, delay: 0 },
        { Icon: Cloud, label: "Cloud", angle: 72, delay: 0.5 },
        { Icon: BarChart3, label: "Analytics", angle: 144, delay: 1 },
        { Icon: Settings, label: "Automation", angle: 216, delay: 1.5 },
        { Icon: Link2, label: "Integration", angle: 288, delay: 2 },
    ];

    return (
        <motion.div
            ref={containerRef}
            style={{ y, opacity }}
            className="relative w-full aspect-square flex items-center justify-center max-w-[500px] mx-auto"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />

            {/* Central Core */}
            <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                {/* Logo Glow Pulse */}
                <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* The Logo */}
                <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center p-6 bg-white rounded-full shadow-premium"
                    animate={{
                        y: [-2, 2, -2],
                        scale: [1, 1.03, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <img
                        src={logo}
                        alt="MnT Logo"
                        className="w-full h-auto object-contain transition-transform duration-300"
                        style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.05))" }}
                    />
                </motion.div>
            </div>

            {/* Orbiting Elements SVG Layer */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 500 500">
                <defs>
                    <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(215, 100%, 45%)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="hsl(175, 100%, 35%)" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Main Animated Ring */}
                <motion.circle
                    cx="250"
                    cy="250"
                    r="120"
                    stroke="url(#orbit-gradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Rotating Dashed Ring */}
                <motion.circle
                    cx="250"
                    cy="250"
                    r="140"
                    stroke="currentColor"
                    className="text-primary/20"
                    strokeWidth="1"
                    strokeDasharray="5,15"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ transformOrigin: "center" }}
                />

                {/* Connection Lines & Data Flow */}
                {services.map((service, i) => {
                    const angleRad = (service.angle * Math.PI) / 180;
                    const x2 = 250 + 120 * Math.cos(angleRad);
                    const y2 = 250 + 120 * Math.sin(angleRad);

                    return (
                        <g key={`data-flow-${i}`}>
                            {/* Static Path */}
                            <motion.line
                                x1="250"
                                y1="250"
                                x2={x2}
                                y2={y2}
                                stroke="currentColor"
                                className="text-primary/10"
                                strokeWidth="0.5"
                            />

                            {/* Flowing Pulse */}
                            <motion.circle
                                r="2"
                                fill="hsl(175, 100%, 35%)"
                                filter="url(#glow)"
                            >
                                <animateMotion
                                    dur={`${3 + Math.random() * 2}s`}
                                    repeatCount="indefinite"
                                    path={`M 250 250 L ${x2} ${y2}`}
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0;1;0"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </motion.circle>
                        </g>
                    );
                })}
            </svg>

            {/* Service Nodes (HTML Layer for Icons) */}
            <div className="absolute inset-0">
                {services.map((service, i) => {
                    const angleRad = (service.angle * Math.PI) / 180;
                    const radius = 120;
                    const x = 50 + (radius / 5) * Math.cos(angleRad); // Percent based positioning
                    const y = 50 + (radius / 5) * Math.sin(angleRad);

                    const Icon = service.Icon;

                    return (
                        <motion.div
                            key={service.label}
                            className="absolute"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={{
                                y: [-3, 3, -3],
                                rotate: [0, 2, 0, -2, 0],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: service.delay,
                            }}
                        >
                            <div className="group relative flex flex-col items-center">
                                <div className="p-3 bg-white rounded-xl border border-border/40 shadow-premium text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <span className="absolute -bottom-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {service.label}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-secondary rounded-full"
                    initial={{
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200,
                        opacity: 0
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1.2, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}
        </motion.div>
    );
};

export default AuthorityEcosystem;
