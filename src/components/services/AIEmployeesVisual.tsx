import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// AI Employees - Autonomous Digital Colleagues
// Multiple AI nodes that activate, execute tasks, and hand off to each other
const AIEmployeesVisual = () => {
  const [activeNode, setActiveNode] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 50, y: 30, label: "Sales AI" },
    { x: 80, y: 50, label: "HR AI" },
    { x: 65, y: 75, label: "Support AI" },
    { x: 35, y: 75, label: "Analytics AI" },
    { x: 20, y: 50, label: "CRM AI" },
  ];

  const systemNodes = [
    { x: 10, y: 20, label: "CRM" },
    { x: 90, y: 20, label: "ERP" },
    { x: 90, y: 80, label: "API" },
    { x: 10, y: 80, label: "Calendar" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background Grid */}
        <defs>
          <pattern id="grid-ai" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(200, 100%, 50%)" strokeWidth="0.1" opacity="0.2" />
          </pattern>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(170, 100%, 42%)" />
          </linearGradient>
          <filter id="glow-ai">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100" height="100" fill="url(#grid-ai)" />

        {/* Connection Lines between AI nodes and systems */}
        {nodes.map((node, i) => (
          <g key={`connections-${i}`}>
            {systemNodes.map((sys, j) => (
              <motion.line
                key={`line-${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={sys.x}
                y2={sys.y}
                stroke="url(#nodeGradient)"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: activeNode === i ? 1 : 0.3,
                  opacity: activeNode === i ? 0.8 : 0.15,
                }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </g>
        ))}

        {/* Central Connection Ring */}
        <motion.circle
          cx="50"
          cy="52"
          r="25"
          fill="none"
          stroke="url(#nodeGradient)"
          strokeWidth="0.5"
          strokeDasharray="4 2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 52px" }}
        />

        {/* System Nodes */}
        {systemNodes.map((sys, i) => (
          <g key={`sys-${i}`}>
            <motion.rect
              x={sys.x - 6}
              y={sys.y - 4}
              width="12"
              height="8"
              rx="1"
              fill="hsl(220, 20%, 97%)"
              stroke="hsl(200, 100%, 45%)"
              strokeWidth="0.5"
              animate={{
                stroke: activeNode === i ? "hsl(170, 100%, 35%)" : "hsl(200, 100%, 45%)",
              }}
            />
            <text
              x={sys.x}
              y={sys.y + 1}
              textAnchor="middle"
              fill="hsl(200, 100%, 35%)"
              fontSize="2"
              fontFamily="monospace"
            >
              {sys.label}
            </text>
          </g>
        ))}

        {/* AI Agent Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Pulse ring when active */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="none"
              stroke="url(#nodeGradient)"
              strokeWidth="0.5"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: activeNode === i ? [1, 2, 2.5] : 1,
                opacity: activeNode === i ? [0.8, 0.3, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: activeNode === i ? Infinity : 0,
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            
            {/* Node core */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="url(#nodeGradient)"
              filter="url(#glow-ai)"
              initial={{ scale: 1 }}
              animate={{
                scale: activeNode === i ? 1.3 : 1,
              }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />

            {/* Inner detail */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="hsl(220, 20%, 97%)"
              animate={{
                opacity: activeNode === i ? 1 : 0.5,
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1"
              fill="url(#nodeGradient)"
              animate={{
                scale: activeNode === i ? [1, 1.5, 1] : 1,
              }}
              transition={{
                duration: 0.8,
                repeat: activeNode === i ? Infinity : 0,
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />

            {/* Label */}
            <text
              x={node.x}
              y={node.y + 9}
              textAnchor="middle"
              fill="hsl(220, 10%, 40%)"
              fontSize="2.5"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Data packets traveling between nodes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`packet-${i}`}
            r="0.8"
            fill="hsl(200, 100%, 70%)"
            filter="url(#glow-ai)"
            initial={{
              cx: nodes[i].x,
              cy: nodes[i].y,
            }}
            animate={{
              cx: [
                nodes[i].x,
                nodes[(i + 1) % 5].x,
              ],
              cy: [
                nodes[i].y,
                nodes[(i + 1) % 5].y,
              ],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Task flow indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={`task-${i}`}
              x={45 + i * 4}
              y="92"
              width="3"
              height="2"
              rx="0.5"
              fill="url(#nodeGradient)"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: ["92", "90", "92"],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.g>
      </svg>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(200, 100%, 50%, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default AIEmployeesVisual;
