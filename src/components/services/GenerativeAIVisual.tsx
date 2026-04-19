import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Generative AI for Branding - Content Engine at Scale
// One idea multiplies into infinite brand assets through diffusion
const GenerativeAIVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const outputs = [
    { x: 75, y: 20, icon: "🖼️", label: "Image" },
    { x: 88, y: 35, icon: "📝", label: "Copy" },
    { x: 92, y: 55, icon: "🎬", label: "Video" },
    { x: 85, y: 75, icon: "📱", label: "Social" },
    { x: 72, y: 85, icon: "📧", label: "Email" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="genGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
          </linearGradient>
          <radialGradient id="diffusionGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(170, 100%, 42%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-gen">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background diffusion noise particles */}
        {[...Array(40)].map((_, i) => (
          <motion.circle
            key={`noise-${i}`}
            r="0.4"
            fill="hsl(200, 100%, 60%)"
            cx={20 + Math.random() * 40}
            cy={20 + Math.random() * 60}
            animate={{
              cx: [20 + Math.random() * 40, 60 + Math.random() * 30],
              cy: [20 + Math.random() * 60, 20 + Math.random() * 60],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Input Idea Core */}
        <motion.g>
          {/* Idea bubble */}
          <motion.circle
            cx="20"
            cy="50"
            r="10"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#genGradient)"
            strokeWidth="1"
            filter="url(#glow-gen)"
          />
          
          {/* Lightbulb/Idea icon */}
          <motion.text
            x="20"
            y="52"
            textAnchor="middle"
            fontSize="8"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "20px 50px" }}
          >
            💡
          </motion.text>

          <text
            x="20"
            y="68"
            textAnchor="middle"
            fill="hsl(200, 100%, 35%)"
            fontSize="2.5"
            fontFamily="monospace"
          >
            ONE IDEA
          </text>
        </motion.g>

        {/* Generative Processing Core */}
        <motion.g>
          {/* Diffusion cloud */}
          <motion.ellipse
            cx="50"
            cy="50"
            rx="18"
            ry="22"
            fill="url(#diffusionGlow)"
            animate={{
              rx: [18, 22, 18],
              ry: [22, 26, 22],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Generation rings */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={`gen-ring-${i}`}
              cx="50"
              cy="50"
              r={8 + i * 5}
              fill="none"
              stroke="url(#genGradient)"
              strokeWidth="0.3"
              strokeDasharray="1 2"
              animate={{
                r: [8 + i * 5, 10 + i * 5, 8 + i * 5],
                opacity: phase >= i ? [0.3, 0.8, 0.3] : 0.2,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Core processor */}
          <motion.polygon
            points="50,42 56,50 50,58 44,50"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#genGradient)"
            strokeWidth="0.8"
            filter="url(#glow-gen)"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />

          {/* Sparkle effects */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180 + (phase * 0.5);
            const x = 50 + Math.cos(angle) * 12;
            const y = 50 + Math.sin(angle) * 12;
            return (
              <motion.text
                key={`spark-${i}`}
                x={x}
                y={y}
                textAnchor="middle"
                fontSize="3"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  repeat: Infinity,
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              >
                ✦
              </motion.text>
            );
          })}
        </motion.g>

        {/* Input flow line */}
        <motion.path
          d="M 30 50 C 35 50, 38 50, 42 50"
          stroke="url(#genGradient)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow-gen)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Output explosion rays */}
        {outputs.map((output, i) => (
          <motion.g key={`output-${i}`}>
            {/* Ray line */}
            <motion.path
              d={`M 58 50 Q ${(58 + output.x) / 2} ${(50 + output.y) / 2 + (i % 2 ? 5 : -5)} ${output.x - 5} ${output.y}`}
              stroke="url(#genGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="2 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 1 ? 1 : 0,
                opacity: phase >= 1 ? 0.8 : 0,
              }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />

            {/* Output node */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                scale: phase >= 2 ? 1 : 0,
              }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <circle
                cx={output.x}
                cy={output.y}
                r="5"
                fill="hsl(220, 20%, 97%)"
                stroke="url(#genGradient)"
                strokeWidth="0.5"
              />
              <text
                x={output.x}
                y={output.y + 1.5}
                textAnchor="middle"
                fontSize="4"
              >
                {output.icon}
              </text>
              <text
                x={output.x}
                y={output.y + 10}
                textAnchor="middle"
                fill="hsl(220, 10%, 45%)"
                fontSize="2"
                fontFamily="monospace"
              >
                {output.label}
              </text>
            </motion.g>

            {/* Multiplication pulse */}
            <motion.circle
              cx={output.x}
              cy={output.y}
              r="5"
              fill="none"
              stroke="url(#genGradient)"
              strokeWidth="0.3"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: phase >= 3 ? [1, 2] : 1,
                opacity: phase >= 3 ? [0.8, 0] : 0,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: phase >= 3 ? Infinity : 0,
                repeatDelay: 1,
              }}
              style={{ transformOrigin: `${output.x}px ${output.y}px` }}
            />
          </motion.g>
        ))}

        {/* Brand consistency lock */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <motion.rect
            x="44"
            y="20"
            width="12"
            height="8"
            rx="1"
            fill="hsl(220, 20%, 97%)"
            stroke="hsl(170, 100%, 35%)"
            strokeWidth="0.5"
          />
          <text
            x="50"
            y="25"
            textAnchor="middle"
            fill="hsl(170, 100%, 60%)"
            fontSize="4"
          >
            🔒
          </text>
          <text
            x="50"
            y="14"
            textAnchor="middle"
            fill="hsl(170, 100%, 50%)"
            fontSize="2"
            fontFamily="monospace"
          >
            BRAND LOCKED
          </text>
        </motion.g>

        {/* Channel distribution arrows */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 3 ? 1 : 0 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.polygon
              key={`arrow-${i}`}
              points={`${85 + i * 3},90 ${87 + i * 3},87 ${89 + i * 3},90`}
              fill="url(#genGradient)"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
          <text
            x="88"
            y="96"
            textAnchor="middle"
            fill="hsl(200, 100%, 35%)"
            fontSize="2"
            fontFamily="monospace"
          >
            MULTI-CHANNEL
          </text>
        </motion.g>

        {/* Bottom label */}
        <text
          x="50"
          y="96"
          textAnchor="middle"
          fill="hsl(200, 100%, 35%)"
          fontSize="2.5"
          fontFamily="monospace"
        >
          ∞ BRAND ASSETS · MINUTES NOT WEEKS
        </text>
      </svg>
    </div>
  );
};

export default GenerativeAIVisual;
