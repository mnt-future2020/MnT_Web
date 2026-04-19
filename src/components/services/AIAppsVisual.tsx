import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Custom AI-Powered Apps - Apps That Think & Adapt
// Floating app wireframes that morph and respond predictively
const AIAppsVisual = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
          </linearGradient>
          <filter id="glow-app">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="phoneClip">
            <rect x="30" y="15" width="40" height="70" rx="4" />
          </clipPath>
        </defs>

        {/* Background particle field */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="0.3"
            fill="hsl(200, 100%, 60%)"
            cx={10 + (i % 10) * 10}
            cy={10 + Math.floor(i / 10) * 80}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              cy: [10 + Math.floor(i / 10) * 80, 10 + Math.floor(i / 10) * 80 - 5, 10 + Math.floor(i / 10) * 80],
            }}
            transition={{
              duration: 2 + (i % 3),
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Main Phone Frame */}
        <motion.g
          initial={{ y: 5 }}
          animate={{ y: [5, 0, 5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Phone body */}
          <rect
            x="30"
            y="15"
            width="40"
            height="70"
            rx="4"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#appGradient)"
            strokeWidth="0.8"
          />
          
          {/* Screen content area */}
          <g clipPath="url(#phoneClip)">
            {/* Dynamic UI blocks that morph */}
            <motion.rect
              x="33"
              y="20"
              width="34"
              height="6"
              rx="1"
              fill="hsl(220, 15%, 92%)"
              animate={{
                height: activeScreen === 0 ? 6 : activeScreen === 1 ? 8 : 5,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Personalization layers */}
            {[0, 1, 2].map((i) => (
              <motion.g key={`layer-${i}`}>
                <motion.rect
                  x="33"
                  y={30 + i * 12}
                  width="34"
                  height="10"
                  rx="1"
                  fill="hsl(220, 15%, 94%)"
                  stroke={activeScreen === i ? "url(#appGradient)" : "transparent"}
                  strokeWidth="0.5"
                  animate={{
                    x: activeScreen === i ? 33 : 34,
                    width: activeScreen === i ? 34 : 32,
                    opacity: activeScreen === i ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Content lines */}
                <motion.rect
                  x="35"
                  y={32 + i * 12}
                  width="16"
                  height="1.5"
                  rx="0.5"
                  fill={activeScreen === i ? "url(#appGradient)" : "hsl(220, 10%, 50%)"}
                  animate={{
                    width: activeScreen === i ? 20 : 16,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.rect
                  x="35"
                  y={35 + i * 12}
                  width="24"
                  height="1"
                  rx="0.5"
                  fill="hsl(220, 10%, 70%)"
                />
              </motion.g>
            ))}

            {/* Active indicator dot */}
            <motion.circle
              cx="64"
              cy={35 + activeScreen * 12}
              r="1.5"
              fill="url(#appGradient)"
              filter="url(#glow-app)"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Bottom nav bar */}
            <rect
              x="33"
              y="75"
              width="34"
              height="7"
              fill="hsl(220, 15%, 92%)"
            />
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`nav-${i}`}
                x={36 + i * 8}
                y="77"
                width="4"
                height="3"
                rx="0.5"
                fill={i === 1 ? "url(#appGradient)" : "hsl(220, 10%, 70%)"}
              />
            ))}
          </g>

          {/* Notch */}
          <rect x="44" y="17" width="12" height="2" rx="1" fill="hsl(220, 15%, 85%)" />
        </motion.g>

        {/* Voice AI waves */}
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`voice-${i}`}
              d={`M 8 ${45 + i * 5} Q 15 ${42 + i * 5} 22 ${45 + i * 5}`}
              stroke="url(#appGradient)"
              strokeWidth="0.5"
              fill="none"
              filter="url(#glow-app)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
          <motion.circle
            cx="15"
            cy="50"
            r="3"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#appGradient)"
            strokeWidth="0.5"
          />
          <text x="15" y="51" textAnchor="middle" fill="hsl(200, 100%, 40%)" fontSize="2.5">🎤</text>
        </motion.g>

        {/* Vision AI eye */}
        <motion.g>
          <motion.circle
            cx="85"
            cy="50"
            r="5"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#appGradient)"
            strokeWidth="0.5"
          />
          <motion.circle
            cx="85"
            cy="50"
            r="2"
            fill="url(#appGradient)"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "85px 50px" }}
          />
          
          {/* Vision scan lines */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={`scan-${i}`}
              x1="78"
              y1={45 + i * 5}
              x2="70"
              y2={45 + i * 5}
              stroke="url(#appGradient)"
              strokeWidth="0.3"
              strokeDasharray="2 1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                x1: [78, 75, 78],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.g>

        {/* Predictive path glow connecting elements */}
        <motion.path
          d="M 22 50 Q 35 30 50 50 Q 65 70 78 50"
          stroke="url(#appGradient)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="3 2"
          filter="url(#glow-app)"
          animate={{
            strokeDashoffset: [0, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* AI Assistance indicator */}
        <motion.g>
          <motion.circle
            cx="50"
            cy="8"
            r="4"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#appGradient)"
            strokeWidth="0.5"
          />
          <motion.text
            x="50"
            y="9.5"
            textAnchor="middle"
            fill="url(#appGradient)"
            fontSize="4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦
          </motion.text>
          
          {/* "Thinking" pulses */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx="50"
              cy="8"
              r="4"
              fill="none"
              stroke="url(#appGradient)"
              strokeWidth="0.3"
              animate={{
                r: [4, 8 + i * 2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.g>

        {/* Bottom label */}
        <text
          x="50"
          y="95"
          textAnchor="middle"
          fill="hsl(200, 100%, 35%)"
          fontSize="2.5"
          fontFamily="monospace"
        >
          ADAPTIVE UI · PROACTIVE ASSISTANCE
        </text>
      </svg>
    </div>
  );
};

export default AIAppsVisual;
