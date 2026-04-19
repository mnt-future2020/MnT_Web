import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Enterprise Knowledge Base - Private Company Brain
// Documents flow into a core brain, queries retrieve cited answers
const KnowledgeBaseVisual = () => {
  const [queryActive, setQueryActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueryActive((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const documents = [
    { x: 15, y: 20, rot: -10, type: "PDF" },
    { x: 10, y: 40, rot: 5, type: "XLS" },
    { x: 18, y: 60, rot: -5, type: "DOC" },
    { x: 12, y: 80, rot: 8, type: "TXT" },
    { x: 85, y: 25, rot: 10, type: "PPT" },
    { x: 88, y: 50, rot: -8, type: "CSV" },
    { x: 82, y: 75, rot: 3, type: "PDF" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(200, 100%, 50%)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-brain">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background neural network pattern */}
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={`neural-${i}`}
            x1={30 + (i % 5) * 10}
            y1={30 + Math.floor(i / 5) * 15}
            x2={35 + (i % 4) * 8}
            y2={35 + Math.floor(i / 4) * 12}
            stroke="hsl(200, 100%, 50%)"
            strokeWidth="0.1"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Document icons floating in */}
        {documents.map((doc, i) => (
          <motion.g key={`doc-${i}`}>
            {/* Document path to center */}
            <motion.path
              d={`M ${doc.x} ${doc.y} Q 50 ${doc.y} 50 50`}
              stroke="url(#brainGradient)"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            {/* Document icon */}
            <motion.g
              initial={{ x: 0, y: 0, opacity: 0.8 }}
              animate={{
                x: [0, (50 - doc.x) * 0.7, 0],
                y: [0, (50 - doc.y) * 0.7, 0],
                opacity: [0.8, 0, 0.8],
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <rect
                x={doc.x - 3}
                y={doc.y - 4}
                width="6"
                height="8"
                rx="0.5"
                fill="hsl(220, 20%, 97%)"
                stroke="url(#brainGradient)"
                strokeWidth="0.4"
                transform={`rotate(${doc.rot} ${doc.x} ${doc.y})`}
              />
              <text
                x={doc.x}
                y={doc.y + 1}
                textAnchor="middle"
                fill="hsl(200, 100%, 35%)"
                fontSize="2"
                fontFamily="monospace"
                transform={`rotate(${doc.rot} ${doc.x} ${doc.y})`}
              >
                {doc.type}
              </text>
            </motion.g>
          </motion.g>
        ))}

        {/* Central Brain Core */}
        <motion.g>
          {/* Outer glow */}
          <motion.circle
            cx="50"
            cy="50"
            r="18"
            fill="url(#coreGlow)"
            animate={{
              r: [18, 22, 18],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Brain rings */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`ring-${i}`}
              cx="50"
              cy="50"
              r={10 + i * 4}
              fill="none"
              stroke="url(#brainGradient)"
              strokeWidth="0.5"
              strokeDasharray={`${3 + i} ${2 + i}`}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "50px 50px" }}
            />
          ))}

          {/* Core brain icon */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#brainGradient)"
            strokeWidth="1"
            filter="url(#glow-brain)"
          />
          
          {/* Brain symbol */}
          <motion.path
            d="M 46 48 Q 48 45 50 48 Q 52 51 54 48 M 46 52 Q 48 49 50 52 Q 52 55 54 52"
            stroke="url(#brainGradient)"
            strokeWidth="0.8"
            fill="none"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Neural nodes */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = 50 + Math.cos(angle) * 6;
            const y = 50 + Math.sin(angle) * 6;
            return (
              <motion.circle
                key={`node-${i}`}
                cx={x}
                cy={y}
                r="1"
                fill="url(#brainGradient)"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            );
          })}
        </motion.g>

        {/* Query and Response Animation */}
        <motion.g>
          {/* Query pulse */}
          <motion.circle
            cx="50"
            cy="90"
            r="3"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#brainGradient)"
            strokeWidth="0.5"
          />
          <motion.text
            x="50"
            y="91"
            textAnchor="middle"
            fill="hsl(200, 100%, 35%)"
            fontSize="3"
          >
            ?
          </motion.text>

          {/* Query line to brain */}
          <motion.path
            d="M 50 87 L 50 68"
            stroke="url(#brainGradient)"
            strokeWidth="0.8"
            fill="none"
            filter="url(#glow-brain)"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: queryActive ? [0, 1] : 0,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Answer returning */}
          <motion.circle
            r="1.5"
            fill="hsl(170, 100%, 50%)"
            filter="url(#glow-brain)"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={{
              cy: queryActive ? [50, 85] : 50,
              opacity: queryActive ? [0, 1, 1] : 0,
            }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Citation indicators */}
          {queryActive && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.g key={`cite-${i}`}>
                  <motion.rect
                    x={35 + i * 12}
                    y="75"
                    width="8"
                    height="5"
                    rx="0.5"
                    fill="hsl(220, 20%, 97%)"
                    stroke="hsl(170, 100%, 42%)"
                    strokeWidth="0.3"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 75 }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                  />
                  <motion.text
                    x={39 + i * 12}
                    y="78.5"
                    textAnchor="middle"
                    fill="hsl(170, 100%, 60%)"
                    fontSize="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 + i * 0.2 }}
                  >
                    [{i + 1}]
                  </motion.text>
                </motion.g>
              ))}
            </motion.g>
          )}
        </motion.g>

        {/* Vector nodes visualization */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 50 + Math.cos(angle) * 25;
          const y = 50 + Math.sin(angle) * 25;
          return (
            <motion.circle
              key={`vec-${i}`}
              cx={x}
              cy={y}
              r="0.8"
              fill="hsl(200, 100%, 60%)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
              }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
          );
        })}

        {/* Status text */}
        <text
          x="50"
          y="6"
          textAnchor="middle"
          fill="hsl(200, 100%, 35%)"
          fontSize="2.5"
          fontFamily="monospace"
        >
          KNOWLEDGE RETRIEVAL {"<"}1s
        </text>
      </svg>
    </div>
  );
};

export default KnowledgeBaseVisual;
