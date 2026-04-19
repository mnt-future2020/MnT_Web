import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BinaryBackground = () => {
    const [bits, setBits] = useState<{ id: number; left: string; top: string; duration: number; delay: number; value: string }[]>([]);

    useEffect(() => {
        // Generate a sparse spread of bits
        const bitCount = 12;
        const newBits = Array.from({ length: bitCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 10, // Slow: 10-20s duration
            delay: Math.random() * 5,
            value: Math.random() > 0.5 ? "1" : "0",
        }));
        setBits(newBits);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {bits.map((bit) => (
                <motion.div
                    key={bit.id}
                    className="absolute text-slate-200/10 font-mono text-sm md:text-base font-bold"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: [0, 0.15, 0], // Increased opacity (max 15%)
                        y: [0, -50] // Drift upward
                    }}
                    transition={{
                        duration: bit.duration,
                        repeat: Infinity,
                        delay: bit.delay,
                        ease: "linear",
                    }}
                    style={{
                        left: bit.left,
                        top: bit.top,
                        filter: "blur(0.5px)",
                    }}
                >
                    {bit.value}
                </motion.div>
            ))}
        </div>
    );
};

export default BinaryBackground;
