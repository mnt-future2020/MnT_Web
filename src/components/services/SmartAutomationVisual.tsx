import { motion } from "framer-motion";

// Smart Business Automation - Manual to Smart Workflow Transformation
// Messy lines transform into clean, automated paths
const SmartAutomationVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="autoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
          </linearGradient>
          <filter id="glow-auto">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background subtle grid */}
        <pattern id="grid-auto" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(200, 100%, 50%)" strokeWidth="0.05" opacity="0.3" />
        </pattern>
        <rect width="100" height="100" fill="url(#grid-auto)" />

        {/* CHAOS ZONE - Left side messy lines that dissolve */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Chaotic broken paths */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={`chaos-${i}`}
              d={`M ${5 + i * 3} ${20 + i * 12} 
                  Q ${10 + i * 2} ${25 + i * 8} ${8 + i * 4} ${35 + i * 6}
                  L ${15 + i * 2} ${30 + i * 10}`}
              stroke="hsl(0, 0%, 40%)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="2 1"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0.8, 0.3, 0.8]
              }}
              transition={{ 
                duration: 3, 
                delay: i * 0.4, 
                repeat: Infinity 
              }}
            />
          ))}

          {/* Scattered document icons */}
          {[
            { x: 8, y: 25, rot: -15 },
            { x: 15, y: 45, rot: 20 },
            { x: 10, y: 65, rot: -10 },
          ].map((doc, i) => (
            <motion.g
              key={`doc-${i}`}
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: [0.5, 0.2, 0.5],
                x: [0, -2, 0],
              }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            >
              <rect
                x={doc.x}
                y={doc.y}
                width="6"
                height="8"
                rx="0.5"
                fill="hsl(220, 15%, 94%)"
                stroke="hsl(220, 10%, 60%)"
                strokeWidth="0.3"
                transform={`rotate(${doc.rot} ${doc.x + 3} ${doc.y + 4})`}
              />
              <line
                x1={doc.x + 1.5}
                y1={doc.y + 2}
                x2={doc.x + 4.5}
                y2={doc.y + 2}
                stroke="hsl(0, 0%, 50%)"
                strokeWidth="0.3"
                transform={`rotate(${doc.rot} ${doc.x + 3} ${doc.y + 4})`}
              />
              <line
                x1={doc.x + 1.5}
                y1={doc.y + 4}
                x2={doc.x + 4.5}
                y2={doc.y + 4}
                stroke="hsl(0, 0%, 50%)"
                strokeWidth="0.3"
                transform={`rotate(${doc.rot} ${doc.x + 3} ${doc.y + 4})`}
              />
            </motion.g>
          ))}
        </motion.g>

        {/* CENTER - Transformation Zone */}
        <motion.g>
          {/* Transformation funnel/processor */}
          <motion.path
            d="M 35 30 L 45 40 L 45 60 L 35 70 L 35 30"
            fill="hsl(220, 20%, 97%)"
            stroke="url(#autoGradient)"
            strokeWidth="0.5"
            filter="url(#glow-auto)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Processing particles */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.circle
              key={`particle-${i}`}
              r="0.8"
              fill="hsl(200, 100%, 70%)"
              filter="url(#glow-auto)"
              initial={{ cx: 25, cy: 30 + i * 8 }}
              animate={{
                cx: [25, 40, 55],
                cy: [30 + i * 8, 50, 30 + i * 8],
                opacity: [1, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.4,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Center core glow */}
          <motion.circle
            cx="40"
            cy="50"
            r="8"
            fill="none"
            stroke="url(#autoGradient)"
            strokeWidth="0.5"
            animate={{
              r: [8, 10, 8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* ORDER ZONE - Right side clean automated flows */}
        <motion.g>
          {/* Clean workflow paths */}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`flow-${i}`}
              d={`M 55 ${35 + i * 15} 
                  C 65 ${35 + i * 15}, 70 ${35 + i * 15}, 75 ${35 + i * 15}
                  L 90 ${35 + i * 15}`}
              stroke="url(#autoGradient)"
              strokeWidth="0.8"
              fill="none"
              filter="url(#glow-auto)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5 + i * 0.3, 
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}

          {/* Data packets on clean paths */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`data-${i}`}
              r="1.2"
              fill="hsl(170, 100%, 50%)"
              filter="url(#glow-auto)"
              animate={{
                cx: [55, 72.5, 90],
                cy: [35 + i * 15, 35 + i * 15, 35 + i * 15],
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Connected system boxes */}
          {[
            { x: 85, y: 32, label: "CRM" },
            { x: 85, y: 47, label: "ERP" },
            { x: 85, y: 62, label: "BI" },
          ].map((box, i) => (
            <motion.g key={`box-${i}`}>
              <motion.rect
                x={box.x}
                y={box.y}
                width="12"
                height="8"
                rx="1"
                fill="hsl(220, 20%, 97%)"
                stroke="url(#autoGradient)"
                strokeWidth="0.5"
                animate={{
                  strokeWidth: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
              <text
                x={box.x + 6}
                y={box.y + 5}
                textAnchor="middle"
                fill="hsl(200, 100%, 35%)"
                fontSize="2.5"
                fontFamily="monospace"
              >
                {box.label}
              </text>
            </motion.g>
          ))}
        </motion.g>

        {/* Transformation arrow indicator */}
        <motion.g
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <polygon
            points="47,48 53,50 47,52"
            fill="url(#autoGradient)"
            filter="url(#glow-auto)"
          />
        </motion.g>

        {/* Bottom stats indicator */}
        <motion.g>
          <text
            x="50"
            y="88"
            textAnchor="middle"
            fill="hsl(200, 100%, 35%)"
            fontSize="3"
            fontFamily="monospace"
          >
            80% BANDWIDTH RECLAIMED
          </text>
          <motion.rect
            x="25"
            y="92"
            width="50"
            height="2"
            rx="1"
            fill="hsl(220, 15%, 90%)"
          />
          <motion.rect
            x="25"
            y="92"
            width="50"
            height="2"
            rx="1"
            fill="url(#autoGradient)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.8 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.g>
      </svg>

      {/* Ambient effects */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(170, 100%, 42%, 0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default SmartAutomationVisual;
