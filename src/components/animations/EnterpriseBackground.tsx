import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EnterpriseBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Skip mouse-tracking on touch devices / small screens
        const isCoarse = window.matchMedia("(hover: none), (max-width: 1024px)").matches;
        if (isCoarse) return;

        let rafId = 0;
        let pendingX = 0;
        let pendingY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            pendingX = (e.clientX / window.innerWidth) * 20;
            pendingY = (e.clientY / window.innerHeight) * 20;
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                setMousePosition({ x: pendingX, y: pendingY });
                rafId = 0;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
            {/* 1. Very Soft Animated Mesh Gradient */}
            <div className="absolute inset-0 opacity-[0.4]">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-secondary/10 blur-[100px]"
                />
            </div>

            {/* 2. Faint Neural Grid Texture */}
            <div className="absolute inset-0 opacity-[0.02]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="neural-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                            <path d="M1 1 L60 1 M1 1 L1 60" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#neural-pattern)" />
                </svg>
            </div>

            {/* 3. Radial Glow behind content */}
            <motion.div
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-60"
            />

            {/* 4. Gentle Moving Light Particles */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.3
                        }}
                        animate={{
                            y: ["-10%", "110%"],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10,
                        }}
                        className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
                    />
                ))}
            </div>

            {/* 5. Depth Layering (Vignette) */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
        </div>
    );
};

export default EnterpriseBackground;
