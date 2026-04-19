import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    strength?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const MagneticButton = ({
    children,
    strength = 0.3,
    className = "",
    onClick,
    disabled = false,
}: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (disabled) return;

            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            if (isHovered) {
                mouseX.set(distanceX * strength);
                mouseY.set(distanceY * strength);
            }
        };

        const handleMouseLeave = () => {
            mouseX.set(0);
            mouseY.set(0);
            setIsHovered(false);
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
            button.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, strength, isHovered, disabled]);

    return (
        <motion.button
            ref={buttonRef}
            className={`relative inline-flex items-center justify-center overflow-hidden font-semibold transition-all duration-300 ease-out rounded-full ${className}`}
            style={{ x, y }}
            onClick={onClick}
            disabled={disabled}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
        >
            {/* Background Gradient */}
            <motion.div
                className="absolute inset-0 w-full h-full rounded-full bg-[#2095F1]"
                animate={{
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 w-full h-full rounded-full bg-[#2095F1] blur-xl opacity-0"
                animate={{
                    opacity: isHovered ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Ripple Effect Container */}
            <motion.div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0.5 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>

            {/* Particle Trail on Hover */}
            {isHovered && (
                <>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-white/60"
                            style={{
                                left: "50%",
                                top: "50%",
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                x: Math.cos((i * Math.PI) / 4) * 30,
                                y: Math.sin((i * Math.PI) / 4) * 30,
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </>
            )}

            {/* Content */}
            <span className="relative z-10 text-primary-foreground">{children}</span>
        </motion.button>
    );
};

export default MagneticButton;
