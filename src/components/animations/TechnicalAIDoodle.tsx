import { motion } from "framer-motion";

interface TechnicalAIDoodleProps {
    className?: string;
}

const TechnicalAIDoodle = ({ className = "" }: TechnicalAIDoodleProps) => {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Background Layer - Blurred for Depth */}
                <g className="background-layer" opacity="0.3" filter="url(#blur-bg)">
                    {/* Large Neural Network Background */}
                    {[0, 90, 180, 270].map((angle, i) => {
                        const x = 250 + 120 * Math.cos((angle * Math.PI) / 180);
                        const y = 250 + 120 * Math.sin((angle * Math.PI) / 180);

                        return (
                            <motion.circle
                                key={`bg-${i}`}
                                cx={x}
                                cy={y}
                                r="3"
                                fill="hsl(175, 100%, 35%)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                            />
                        );
                    })}
                </g>

                {/* Central AI Bot Outline - Main Focus */}
                <g className="ai-bot" style={{ filter: "drop-shadow(0 0 12px rgba(14, 165, 233, 0.15))" }}>
                    {/* Head */}
                    <motion.circle
                        cx="250"
                        cy="200"
                        r="60"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />

                    {/* Eyes with Glow */}
                    <motion.circle
                        cx="235"
                        cy="195"
                        r="4"
                        fill="hsl(200, 100%, 50%)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 2 }}
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0.6;1"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                    <motion.circle
                        cx="265"
                        cy="195"
                        r="4"
                        fill="hsl(200, 100%, 50%)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.1 }}
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0.6;1"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>

                    {/* Antenna with Pulse */}
                    <motion.line
                        x1="250"
                        y1="140"
                        x2="250"
                        y2="110"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                    />
                    <motion.circle
                        cx="250"
                        cy="105"
                        r="5"
                        fill="hsl(175, 100%, 35%)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: 3 }}
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0.4;1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                </g>

                {/* Enhanced Neural Network Connections - Mid Layer */}
                <g className="neural-network">
                    {/* Center node with pulse */}
                    <motion.circle
                        cx="250"
                        cy="250"
                        r="6"
                        fill="hsl(200, 100%, 50%)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                    >
                        <animate
                            attributeName="r"
                            values="6;8;6"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>

                    {/* Outer nodes with animated connections */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const x = 250 + 85 * Math.cos((angle * Math.PI) / 180);
                        const y = 250 + 85 * Math.sin((angle * Math.PI) / 180);

                        return (
                            <g key={i}>
                                {/* Connection line with pulse */}
                                <motion.line
                                    x1="250"
                                    y1="250"
                                    x2={x}
                                    y2={y}
                                    stroke="hsl(175, 100%, 35%)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.6 }}
                                    transition={{ duration: 1, delay: 1.2 + i * 0.15 }}
                                />

                                {/* Outer node with glow */}
                                <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="5"
                                    fill="hsl(175, 100%, 35%)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.5 + i * 0.15 }}
                                    style={{ filter: "drop-shadow(0 0 6px rgba(45, 212, 191, 0.5))" }}
                                >
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.5;1"
                                        dur={`${3 + i * 0.5}s`}
                                        repeatCount="indefinite"
                                    />
                                </motion.circle>
                            </g>
                        );
                    })}
                </g>

                {/* Code Brackets - Top Right Layer */}
                <g className="code-brackets" transform="translate(380, 80)">
                    <motion.path
                        d="M 0 0 L -10 10 L 0 20"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.path
                        d="M 30 0 L 40 10 L 30 20"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.path
                        d="M 10 10 L 30 10"
                        stroke="hsl(175, 100%, 35%)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    {/* Slash */}
                    <motion.path
                        d="M 25 5 L 15 15"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 1.8 }}
                    />
                </g>

                {/* Cloud Outline - Middle Left */}
                <g className="cloud" transform="translate(70, 220)">
                    <motion.path
                        d="M 20 30 C 10 30 10 20 20 20 C 20 10 35 10 40 17.5 C 45 10 60 10 62.5 20 C 72.5 20 72.5 30 62.5 30 Z"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                    />
                    {/* Upload arrow */}
                    <motion.path
                        d="M 40 22 L 40 35 M 35 27 L 40 22 L 45 27"
                        stroke="hsl(175, 100%, 35%)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    />
                    {/* Data dots */}
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={i}
                            cx={25 + i * 10}
                            cy={25}
                            r="1.5"
                            fill="hsl(175, 100%, 35%)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, delay: 3 + i * 0.3, repeat: Infinity }}
                        />
                    ))}
                </g>

                {/* Automation Gear - Bottom Right */}
                <g className="gear" transform="translate(400, 380)">
                    <motion.circle
                        cx="0"
                        cy="0"
                        r="20"
                        stroke="hsl(175, 100%, 35%)"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, rotate: 360 }}
                        transition={{
                            pathLength: { duration: 1.5, delay: 1.8 },
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                    />
                    {/* Gear teeth */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const x = 22 * Math.cos((angle * Math.PI) / 180);
                        const y = 22 * Math.sin((angle * Math.PI) / 180);
                        const x2 = 26 * Math.cos((angle * Math.PI) / 180);
                        const y2 = 26 * Math.sin((angle * Math.PI) / 180);

                        return (
                            <motion.line
                                key={i}
                                x1={x}
                                y1={y}
                                x2={x2}
                                y2={y2}
                                stroke="hsl(175, 100%, 35%)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{
                                    opacity: { duration: 0.3, delay: 2 + i * 0.1 },
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                                }}
                                style={{ transformOrigin: "0 0" }}
                            />
                        );
                    })}
                </g>

                {/* Data Analytics Chart - Bottom Left */}
                <g className="chart" transform="translate(90, 360)">
                    {[0, 1, 2, 3, 4].map((i) => {
                        const heights = [25, 40, 30, 45, 35];
                        return (
                            <motion.rect
                                key={i}
                                x={i * 12}
                                y={50 - heights[i]}
                                width="8"
                                height={heights[i]}
                                fill="none"
                                stroke="hsl(200, 100%, 50%)"
                                strokeWidth="1.5"
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2.2 + i * 0.2 }}
                                style={{ transformOrigin: "bottom" }}
                            />
                        );
                    })}
                    {/* Axis */}
                    <motion.line
                        x1="0"
                        y1="50"
                        x2="60"
                        y2="50"
                        stroke="hsl(175, 100%, 35%)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                    />
                    {/* Rising trend line */}
                    <motion.path
                        d="M 4 45 L 16 35 L 28 40 L 40 25 L 52 30"
                        stroke="hsl(200, 100%, 50%)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 3.5 }}
                    />
                </g>

                {/* Additional Floating Elements - Top Left */}
                <g className="floating-nodes" transform="translate(100, 100)">
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={i}
                            cx={i * 20}
                            cy={i * 15}
                            r="3"
                            fill="hsl(200, 100%, 50%)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.6, 0], y: [0, -10, 0] }}
                            transition={{ duration: 4, delay: 4 + i * 0.5, repeat: Infinity }}
                        />
                    ))}
                </g>

                {/* Filters */}
                <defs>
                    <filter id="blur-bg">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                    </filter>
                </defs>

                {/* Subtle Floating Animation for entire composition */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,-8; 0,0"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </svg>
        </div>
    );
};

export default TechnicalAIDoodle;
