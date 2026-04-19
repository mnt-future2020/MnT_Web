import { motion, useTransform, MotionValue } from "framer-motion";

interface StorytellingDoodleProps {
    progress: MotionValue<number>;
}

const StorytellingDoodle = ({ progress }: StorytellingDoodleProps) => {
    // Map progress to scenes
    // Scene 1: Struggle (0 - 0.15)
    // Scene 2: Thinking (0.15 - 0.3)
    // Scene 3: Planning (0.3 - 0.45)
    // Scene 4: Coding (0.45 - 0.6)
    // Scene 5: AI Integration (0.6 - 0.75)
    // Scene 6: Resolution/Success (0.75 - 1.0)

    const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(progress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
    const opacity3 = useTransform(progress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const opacity4 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const opacity5 = useTransform(progress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 1]);

    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-8">
            {/* Container with parallax depth */}
            <motion.div
                style={{ y: useTransform(progress, [0, 1], [0, -50]) }}
                className="relative w-full h-full"
            >
                {/* SCENE 1: Struggle (Broken Chart + Figures) */}
                <motion.svg style={{ opacity: opacity1 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-slate-400">
                    <motion.path
                        d="M40 140 L70 160 L100 130 L130 150 L160 110"
                        stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
                    />
                    <motion.circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    <motion.path d="M95 105 L105 95 M95 95 L105 105" stroke="currentColor" strokeWidth="1" />
                </motion.svg>

                {/* SCENE 2: Thinking (Lightbulb + Strategy) */}
                <motion.svg style={{ opacity: opacity2 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-primary">
                    <motion.path
                        d="M100 60 C80 60 70 80 70 100 C70 130 100 140 100 160 M100 60 C120 60 130 80 130 100 C130 130 100 140 100 160"
                        stroke="currentColor" strokeWidth="2" fill="none"
                    />
                    <motion.path d="M90 170 H110 M95 175 H105" stroke="currentColor" strokeWidth="2" />
                    <motion.circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
                </motion.svg>

                {/* SCENE 3: Planning (Wireframe/Architecture) */}
                <motion.svg style={{ opacity: opacity3 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-secondary">
                    <motion.rect x="40" y="40" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <motion.path d="M40 60 H160 M100 60 V120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <motion.path d="M50 70 H90 M50 80 H80 M50 90 H70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                </motion.svg>

                {/* SCENE 4: Development (Code Brackets) */}
                <motion.svg style={{ opacity: opacity4 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-primary">
                    <motion.path d="M60 70 L40 100 L60 130" stroke="currentColor" strokeWidth="2" fill="none" />
                    <motion.path d="M140 70 L160 100 L140 130" stroke="currentColor" strokeWidth="2" fill="none" />
                    <motion.path d="M110 60 L90 140" stroke="currentColor" strokeWidth="2" fill="none" />
                </motion.svg>

                {/* SCENE 5: AI & Success (Neural Mesh + Growth) */}
                <motion.svg style={{ opacity: opacity5 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#2095F1]">
                    {/* Neural Mesh in background */}
                    <g opacity="0.2">
                        {[...Array(5)].map((_, i) => (
                            <motion.circle key={i} cx={50 + i * 25} cy={100 + Math.sin(i) * 30} r="2" fill="currentColor" />
                        ))}
                        <motion.path d="M50 100 L75 130 L100 70 L125 100 L150 130" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </g>
                    {/* Growth Chart */}
                    <motion.path
                        d="M40 140 C60 130 80 100 100 90 C120 80 140 60 160 40"
                        stroke="url(#enterprise-grad)" strokeWidth="3" fill="none" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                    />
                    <defs>
                        <linearGradient id="enterprise-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#2dd4bf" />
                        </linearGradient>
                    </defs>
                    <motion.circle
                        cx="160" cy="40" r="4" fill="currentColor"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.5 }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default StorytellingDoodle;
