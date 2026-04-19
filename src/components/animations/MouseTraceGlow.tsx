import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseTraceGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [enabled, setEnabled] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Disable on touch / small screens — saves a mousemove listener + 600px blurred layer
        const isCoarse = window.matchMedia("(hover: none), (max-width: 1024px)").matches;
        if (isCoarse) return;
        setEnabled(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!enabled) return null;

    return (
        <motion.div
            style={{
                left: springX,
                top: springY,
            }}
            className="fixed pointer-events-none z-[1] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"
        />
    );
};

export default MouseTraceGlow;
