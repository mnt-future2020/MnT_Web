import { motion } from "framer-motion";

interface TechDoodlesProps {
  variant?: "hero" | "services" | "industries" | "packages" | "about" | "contact" | "legal";
  className?: string;
}

// Animated SVG path component with draw effect
const AnimatedPath = ({
  d,
  delay = 0,
  duration = 2,
  strokeWidth = 1.5,
  className = ""
}: {
  d: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  className?: string;
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke="url(#doodleGradient)"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{
      pathLength: { delay, duration, ease: "easeInOut" },
      opacity: { delay, duration: 0.5 },
    }}
  />
);

// Neural Network Doodle
const NeuralNetworkDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 200 200"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Nodes */}
    <motion.circle cx="30" cy="50" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} />
    <motion.circle cx="30" cy="100" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} />
    <motion.circle cx="30" cy="150" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }} />
    <motion.circle cx="100" cy="75" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} />
    <motion.circle cx="100" cy="125" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} />
    <motion.circle cx="170" cy="100" r="8" fill="none" stroke="url(#doodleGradient)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} />
    {/* Connections */}
    <AnimatedPath d="M38 50 L92 75" delay={0.8} duration={0.5} />
    <AnimatedPath d="M38 50 L92 125" delay={0.9} duration={0.5} />
    <AnimatedPath d="M38 100 L92 75" delay={1.0} duration={0.5} />
    <AnimatedPath d="M38 100 L92 125" delay={1.1} duration={0.5} />
    <AnimatedPath d="M38 150 L92 75" delay={1.2} duration={0.5} />
    <AnimatedPath d="M38 150 L92 125" delay={1.3} duration={0.5} />
    <AnimatedPath d="M108 75 L162 100" delay={1.4} duration={0.5} />
    <AnimatedPath d="M108 125 L162 100" delay={1.5} duration={0.5} />
  </motion.svg>
);

// Code Brackets Doodle
const CodeBracketsDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 150 100"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    <AnimatedPath d="M30 20 L10 50 L30 80" delay={0.2} duration={1} strokeWidth={2} />
    <AnimatedPath d="M120 20 L140 50 L120 80" delay={0.4} duration={1} strokeWidth={2} />
    <AnimatedPath d="M85 15 L65 85" delay={0.6} duration={1} strokeWidth={2} />
  </motion.svg>
);

// Server/Cloud Doodle
const CloudServerDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 180 120"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Cloud */}
    <AnimatedPath d="M40 50 Q20 50 20 35 Q20 20 40 20 Q45 10 60 10 Q80 10 85 25 Q100 20 110 30 Q125 30 125 45 Q125 60 105 60 L40 60 Q25 60 25 50" delay={0.2} duration={1.5} />
    {/* Server lines */}
    <AnimatedPath d="M45 75 L115 75" delay={1.0} duration={0.5} />
    <AnimatedPath d="M45 85 L115 85" delay={1.2} duration={0.5} />
    <AnimatedPath d="M45 95 L115 95" delay={1.4} duration={0.5} />
    {/* Connection dots */}
    <motion.circle cx="50" cy="75" r="2" fill="url(#doodleGradient3)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
    <motion.circle cx="50" cy="85" r="2" fill="url(#doodleGradient3)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />
    <motion.circle cx="50" cy="95" r="2" fill="url(#doodleGradient3)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} />
  </motion.svg>
);

// Circuit/AI Node Doodle
const CircuitDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 200 150"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Main circuit paths */}
    <AnimatedPath d="M20 75 L60 75 L60 40 L100 40" delay={0.2} duration={1} />
    <AnimatedPath d="M60 75 L60 110 L100 110" delay={0.5} duration={1} />
    <AnimatedPath d="M100 40 L100 110" delay={0.8} duration={1} />
    <AnimatedPath d="M100 75 L140 75 L140 40 L180 40" delay={1.0} duration={1} />
    <AnimatedPath d="M140 75 L140 110 L180 110" delay={1.2} duration={1} />
    {/* Nodes */}
    <motion.rect x="95" y="35" width="10" height="10" fill="none" stroke="url(#doodleGradient4)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, type: "spring" }} />
    <motion.rect x="95" y="70" width="10" height="10" fill="none" stroke="url(#doodleGradient4)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} />
    <motion.rect x="95" y="105" width="10" height="10" fill="none" stroke="url(#doodleGradient4)" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, type: "spring" }} />
  </motion.svg>
);

// Data Flow Doodle
const DataFlowDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 180 100"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Flowing waves */}
    <AnimatedPath d="M10 50 Q30 30 50 50 Q70 70 90 50 Q110 30 130 50 Q150 70 170 50" delay={0.2} duration={1.5} strokeWidth={2} />
    <AnimatedPath d="M10 65 Q30 45 50 65 Q70 85 90 65 Q110 45 130 65 Q150 85 170 65" delay={0.5} duration={1.5} />
    <AnimatedPath d="M10 35 Q30 15 50 35 Q70 55 90 35 Q110 15 130 35 Q150 55 170 35" delay={0.8} duration={1.5} />
    {/* Data points */}
    <motion.circle cx="50" cy="50" r="3" fill="url(#doodleGradient5)"
      initial={{ scale: 0 }} animate={{ scale: [0, 1, 0.8, 1] }} transition={{ delay: 2, duration: 0.5 }} />
    <motion.circle cx="90" cy="50" r="3" fill="url(#doodleGradient5)"
      initial={{ scale: 0 }} animate={{ scale: [0, 1, 0.8, 1] }} transition={{ delay: 2.2, duration: 0.5 }} />
    <motion.circle cx="130" cy="50" r="3" fill="url(#doodleGradient5)"
      initial={{ scale: 0 }} animate={{ scale: [0, 1, 0.8, 1] }} transition={{ delay: 2.4, duration: 0.5 }} />
  </motion.svg>
);

// Blockchain Doodle
const BlockchainDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 200 80"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Blocks */}
    <motion.rect x="10" y="20" width="40" height="40" rx="5" fill="none" stroke="url(#doodleGradient6)" strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} />
    <motion.rect x="80" y="20" width="40" height="40" rx="5" fill="none" stroke="url(#doodleGradient6)" strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} />
    <motion.rect x="150" y="20" width="40" height="40" rx="5" fill="none" stroke="url(#doodleGradient6)" strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} />
    {/* Chain links */}
    <AnimatedPath d="M50 40 L80 40" delay={0.8} duration={0.5} strokeWidth={2} />
    <AnimatedPath d="M120 40 L150 40" delay={1.0} duration={0.5} strokeWidth={2} />
    {/* Inner details */}
    <AnimatedPath d="M20 30 L40 30" delay={1.2} duration={0.3} />
    <AnimatedPath d="M20 40 L40 40" delay={1.3} duration={0.3} />
    <AnimatedPath d="M20 50 L40 50" delay={1.4} duration={0.3} />
  </motion.svg>
);

// Pulse/Healthcare Doodle
const PulseDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 200 80"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    <AnimatedPath
      d="M10 40 L40 40 L50 20 L60 60 L70 30 L80 50 L90 40 L120 40 L130 15 L140 65 L150 25 L160 55 L170 40 L190 40"
      delay={0.2}
      duration={2}
      strokeWidth={2}
    />
  </motion.svg>
);

// Learning/Education Doodle
const LearningPathDoodle = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 180 120"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <defs>
      <linearGradient id="doodleGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
        <stop offset="100%" stopColor="hsl(220, 100%, 60%)" />
      </linearGradient>
    </defs>
    {/* Brain/mind outline */}
    <AnimatedPath d="M90 20 Q60 20 50 40 Q40 60 50 80 Q60 100 90 100 Q120 100 130 80 Q140 60 130 40 Q120 20 90 20" delay={0.2} duration={1.5} />
    {/* Neural pathways inside */}
    <AnimatedPath d="M70 50 Q90 40 110 50" delay={1.0} duration={0.5} />
    <AnimatedPath d="M65 65 Q90 55 115 65" delay={1.2} duration={0.5} />
    <AnimatedPath d="M70 80 Q90 70 110 80" delay={1.4} duration={0.5} />
    {/* Connection nodes */}
    <motion.circle cx="70" cy="50" r="3" fill="url(#doodleGradient8)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
    <motion.circle cx="110" cy="50" r="3" fill="url(#doodleGradient8)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />
    <motion.circle cx="90" cy="65" r="3" fill="url(#doodleGradient8)"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} />
  </motion.svg>
);

const TechDoodles = ({ variant = "hero", className = "" }: TechDoodlesProps) => {
  const doodleConfigs = {
    hero: (
      <>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <NeuralNetworkDoodle className="w-48 h-48 top-20 left-10 opacity-30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <CodeBracketsDoodle className="w-32 h-24 top-40 right-20 opacity-25" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <CloudServerDoodle className="w-40 h-32 bottom-40 left-20 opacity-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitDoodle className="w-44 h-36 bottom-32 right-10 opacity-25" />
        </motion.div>
      </>
    ),
    services: (
      <>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitDoodle className="w-56 h-44 top-10 right-5 opacity-30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CloudServerDoodle className="w-48 h-36 bottom-20 left-10 opacity-25" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <DataFlowDoodle className="w-40 h-24 top-1/2 left-5 opacity-20" />
        </motion.div>
      </>
    ),
    industries: (
      <>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <BlockchainDoodle className="w-52 h-24 top-20 left-10 opacity-30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <PulseDoodle className="w-48 h-20 top-32 right-10 opacity-25" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <LearningPathDoodle className="w-44 h-32 bottom-20 right-20 opacity-20" />
        </motion.div>
      </>
    ),
    packages: (
      <>
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <DataFlowDoodle className="w-56 h-32 top-10 left-5 opacity-25" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <NeuralNetworkDoodle className="w-44 h-44 bottom-10 right-10 opacity-20" />
        </motion.div>
      </>
    ),
    about: (
      <>
        <motion.div
          animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <LearningPathDoodle className="w-48 h-36 top-20 right-10 opacity-25" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitDoodle className="w-40 h-32 bottom-20 left-10 opacity-20" />
        </motion.div>
      </>
    ),
    contact: (
      <>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <DataFlowDoodle className="w-52 h-28 top-10 right-10 opacity-30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CodeBracketsDoodle className="w-36 h-28 bottom-20 left-10 opacity-20" />
        </motion.div>
      </>
    ),
    legal: (
      <>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitDoodle className="w-48 h-36 top-10 right-10 opacity-15" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <CodeBracketsDoodle className="w-32 h-24 bottom-10 left-10 opacity-15" />
        </motion.div>
      </>
    ),
  };

  return (
    <div className={`pointer-events-none ${className}`}>
      {doodleConfigs[variant]}
    </div>
  );
};

export default TechDoodles;
