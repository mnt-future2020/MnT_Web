import { motion } from "framer-motion";

interface AnimatedPathProps {
    d: string;
    className?: string;
    strokeWidth?: number;
    duration?: number;
    delay?: number;
    repeat?: boolean;
    color?: string;
}

const AnimatedPath = ({
    d,
    className = "",
    strokeWidth = 2,
    duration = 2,
    delay = 0,
    repeat = false,
    color = "hsl(200, 100%, 50%)",
}: AnimatedPathProps) => {
    return (
        <motion.svg
            className={`absolute ${className}`}
            style={{ overflow: "visible" }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <motion.path
                d={d}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    pathLength: { duration, delay, ease: "easeInOut" },
                    opacity: { duration: 0.3, delay },
                    repeat: repeat ? Infinity : 0,
                }}
            />
        </motion.svg>
    );
};

export default AnimatedPath;
