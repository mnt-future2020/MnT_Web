import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AIBotCharacterProps {
  size?: number;
  expression?: "idle" | "talking" | "pointing" | "celebrating";
  className?: string;
  autoAnimate?: boolean;
}

const AIBotCharacter = ({
  size = 200,
  expression = "idle",
  className = "",
  autoAnimate = true,
}: AIBotCharacterProps) => {
  const [currentExpression, setCurrentExpression] = useState(expression);

  useEffect(() => {
    if (autoAnimate) {
      const interval = setInterval(() => {
        const expressions: typeof expression[] = ["idle", "talking", "pointing"];
        const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];
        setCurrentExpression(randomExpression);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoAnimate]);

  useEffect(() => {
    setCurrentExpression(expression);
  }, [expression]);

  const mouthVariants = {
    idle: { d: "M85 115 Q100 120 115 115" },
    talking: {
      d: [
        "M85 115 L115 115",
        "M85 118 Q100 112 115 118",
        "M85 115 L115 115",
      ],
      transition: { duration: 0.4, repeat: Infinity }
    },
    celebrating: { d: "M80 115 Q100 125 120 115" },
    pointing: { d: "M85 115 Q100 120 115 115" }
  };

  const eyeVariants = {
    talking: { scaleY: [1, 0.2, 1], transition: { duration: 0.3, repeat: Infinity, repeatDelay: 0.2 } },
    idle: { scaleY: 1 }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glow Effect */}
      <defs>
        <radialGradient id="botGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
        </linearGradient>
      </defs>

      {/* Glow Background */}
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="url(#botGlow)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Body - Geometric Shape */}
      <motion.g
        animate={{
          y: currentExpression === "idle" ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Body */}
        <motion.path
          d="M100 40 L140 70 L140 130 L100 160 L60 130 L60 70 Z"
          fill="url(#botGradient)"
          stroke="hsl(200, 100%, 60%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Inner Hexagon */}
        <motion.path
          d="M100 60 L125 77 L125 113 L100 130 L75 113 L75 77 Z"
          fill="none"
          stroke="hsl(200, 100%, 70%)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />

        {/* Eyes */}
        <motion.g>
          {/* Left Eye */}
          <motion.circle
            cx="85"
            cy="90"
            r="8"
            fill="hsl(200, 100%, 70%)"
            variants={eyeVariants}
            initial={{ scaleY: 1 }}
            animate={currentExpression === "talking" ? "talking" : "idle"}
          />
          {/* Right Eye */}
          <motion.circle
            cx="115"
            cy="90"
            r="8"
            fill="hsl(200, 100%, 70%)"
            variants={eyeVariants}
            initial={{ scaleY: 1 }}
            animate={currentExpression === "talking" ? "talking" : "idle"}
          />
          {/* Eye Glow */}
          <motion.circle
            cx="85"
            cy="90"
            r="12"
            fill="hsl(200, 100%, 70%)"
            opacity="0.3"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="115"
            cy="90"
            r="12"
            fill="hsl(200, 100%, 70%)"
            opacity="0.3"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.g>

        {/* Mouth/Expression Line */}
        <motion.path
          d="M85 115 Q100 120 115 115"
          stroke="hsl(200, 100%, 70%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial="idle"
          variants={mouthVariants}
          animate={currentExpression}
        />

        {/* Core/Heart */}
        <motion.circle
          cx="100"
          cy="100"
          r="4"
          fill="hsl(180, 100%, 50%)"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Antenna */}
        <motion.g>
          <motion.line
            x1="100"
            y1="40"
            x2="100"
            y2="20"
            stroke="hsl(200, 100%, 60%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.circle
            cx="100"
            cy="15"
            r="5"
            fill="hsl(180, 100%, 50%)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* Pointing Arm (conditional) */}
        {currentExpression === "pointing" && (
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <motion.path
              d="M140 100 L180 80"
              stroke="hsl(200, 100%, 60%)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ d: "M140 100 L180 80" }}
              animate={{
                d: ["M140 100 L180 80", "M140 100 L185 75", "M140 100 L180 80"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="180"
              cy="80"
              r="4"
              fill="hsl(180, 100%, 50%)"
              initial={{ cx: 180, cy: 80 }}
              animate={{
                cx: [180, 185, 180],
                cy: [80, 75, 80],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        )}

        {/* Celebration Particles */}
        {currentExpression === "celebrating" && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx="100"
                cy="100"
                r="3"
                fill={i % 2 === 0 ? "hsl(200, 100%, 60%)" : "hsl(180, 100%, 50%)"}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.cos((i * Math.PI) / 3) * 40],
                  y: [0, Math.sin((i * Math.PI) / 3) * 40],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </>
        )}
      </motion.g>

      {/* Orbiting Particles */}
      {[...Array(3)].map((_, i) => (
        <circle
          key={`orbit-${i}`}
          cx="100"
          cy="100"
          r="2"
          fill="hsl(200, 100%, 70%)"
          opacity="0.6"
          className="animate-[orbit_8s_linear_infinite]"
          style={{
            animationDuration: `${8 + i * 2}s`,
            transformOrigin: "center",
          }}
        />
      ))}
    </motion.svg>
  );
};

export default AIBotCharacter;
