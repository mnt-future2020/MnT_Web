import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        label: "Struggles",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M4 12 L8 8 L12 16 L16 10 L20 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                />
            </svg>
        ),
    },
    {
        id: 2,
        label: "Idea",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </svg>
        ),
    },
    {
        id: 3,
        label: "Design",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.path
                    d="M3 9h18M9 21V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </svg>
        ),
    },
    {
        id: 4,
        label: "Build",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M16 18L22 12L16 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ x: -2, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ x: 2, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </svg>
        ),
    },
    {
        id: 5,
        label: "Deploy",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </svg>
        ),
    },
    {
        id: 6,
        label: "Solve",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 0.8 }}
                />
            </svg>
        ),
    },
    {
        id: 7,
        label: "Growth",
        icon: (isActive: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <motion.path
                    d="M2 20L12 10L16 14L22 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.path
                    d="M22 4H17M22 4V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />
            </svg>
        ),
    },
];

const HeroProcessTimeline = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-4xl mt-12 mb-8 hidden md:block">
            {/* Horizontal Line */}
            <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent top-8 -z-10">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                    animate={{
                        left: ["-10%", "110%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "20%" }}
                />
            </div>

            <div className="flex justify-between items-start w-full relative">
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    return (
                        <div
                            key={step.id}
                            className={`flex flex-col items-center gap-4 transition-all duration-500 ${isActive ? "opacity-100 scale-110" : "opacity-50 scale-100"
                                }`}
                        >
                            {/* Node */}
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-500 bg-white z-10 ${isActive
                                        ? "border-primary shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                                        : "border-slate-200"
                                    }`}
                            >
                                <div
                                    className={`text-primary transition-colors duration-300`}
                                >
                                    {step.icon(isActive)}
                                </div>
                            </div>

                            {/* Label */}
                            <span
                                className={`text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${isActive ? "text-primary " : "text-slate-400"
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Vertical View handled by CSS hidden class above - creates separate structure for mobile if needed or just hides */}
        </div>
    );
};

export const HeroProcessTimelineMobile = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mt-8 md:hidden flex flex-col gap-4 px-4">
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                    <div key={step.id} className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${isActive ? 'border-primary/50 bg-primary/5' : 'border-slate-100 bg-white/50'}`}>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full border ${isActive ? 'border-primary text-primary' : 'border-slate-200 text-slate-400'}`}>
                            {step.icon(isActive)}
                        </div>
                        <span className={`text-xs uppercase tracking-wider font-bold ${isActive ? 'text-primary' : 'text-slate-400'}`}>{step.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default HeroProcessTimeline;
