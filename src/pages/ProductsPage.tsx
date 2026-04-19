import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Bot, Zap, Shield, BarChart3, Globe2, Brain,
  MessageSquare, Network, Database, CheckCircle2,
  Layers, Cpu, Activity, Server, ArrowUpRight,
  Stethoscope, GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { productsData } from "@/data/productsData";

// --- Sub-components for Visuals ---

const NeuralIntelligenceFlow = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const nodes = [
    { id: "ai", label: "AI", icon: Bot, x: 15, y: 40 },
    { id: "crm", label: "CRM", icon: MessageSquare, x: 35, y: 65 },
    { id: "data", label: "DATA", icon: Database, x: 55, y: 35 },
    { id: "health", label: "HEALTH", icon: Stethoscope, x: 75, y: 60 },
    { id: "edu", label: "EDU", icon: GraduationCap, x: 92, y: 45 },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Parallax transform for subtle depth
  const px = useTransform(mouseX, [0, 500], [-10, 10]);
  const py = useTransform(mouseY, [0, 500], [-10, 10]);

  return (
    <div
      className="relative w-full aspect-[5] max-w-8xl mx-auto flex items-center justify-center cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* 1️⃣ Base Layer: Background Mesh & Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
        <svg className="w-full h-full text-slate-200" viewBox="0 0 400 300">
          <defs>
            <pattern id="diagonalGrid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
        </svg>
      </div>

      {/* 2️⃣ Mid Layer: Blurred Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 blur-[2px]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 10 45 Q 30 20, 50 50 T 90 45"
          fill="none"
          stroke="rgba(14,165,233,0.2)"
          strokeWidth="0.5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "2 2" }}
        />
      </svg>

      {/* 3️⃣ Main Layer: Neural Flow Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(14,165,233,0.1)" />
            <stop offset="50%" stopColor="rgba(14,165,233,0.5)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.1)" />
          </linearGradient>
        </defs>

        {/* The Main Wire */}
        <motion.path
          d="M 5 45 C 20 45, 30 75, 50 50 C 70 25, 80 50, 95 50"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Traveling Pulse */}
        <motion.path
          d="M 5 45 C 20 45, 30 75, 50 50 C 70 25, 80 50, 95 50"
          fill="none"
          stroke="rgba(14,165,233,0.8)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ strokeDashoffset: [100, 0] }}
          transition={{
            duration: hoveredNode ? 2 : 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ strokeDasharray: "10 90" }}
        />
      </svg>

      {/* 4️⃣ Product Nodes & Parallax Layer */}
      <motion.div style={{ x: px, y: py }} className="absolute inset-0">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              className="absolute pointer-events-auto"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <motion.div
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  y: [0, -3, 0],
                  boxShadow: isHovered ? "0 0 25px rgba(14,165,233,0.3)" : "0 0 10px rgba(0,0,0,0.05)"
                }}
                transition={{
                  scale: { duration: 0.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`relative w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center cursor-pointer transition-colors duration-300 ${isHovered ? 'border-primary' : ''}`}
              >
                <Icon className={`w-5 h-5 ${isHovered ? 'text-primary' : 'text-slate-400'} transition-colors`} />

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -40, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-900 shadow-xl pointer-events-none z-50 shadow-primary/20"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{node.label}</span>
                      <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative Orbit/Ring for Node */}
                {isHovered && (
                  <motion.div
                    layoutId="nodeRing"
                    className="absolute -inset-2 border border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* 5️⃣ Shimmering Data Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            x: [0, 400],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-primary/30 rounded-full blur-[1px]"
          style={{ top: `${20 + Math.random() * 60}%`, left: "-20px" }}
        />
      ))}
    </div>
  );
};

const ProductsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative pt-28 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_70%)]" />

        {/* Floating Keywords */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <div className="grid grid-cols-2 gap-x-64 gap-y-32 text-6xl font-display font-bold">
            <motion.span animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }}>AI</motion.span>
            <motion.span animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>CRM</motion.span>
            <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }}>HEALTH</motion.span>
            <motion.span animate={{ y: [0, 25, 0] }} transition={{ duration: 8, repeat: Infinity }}>EDU</motion.span>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              OUR PRODUCTS
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Intelligent Suite's<br />
              <span className="text-[#2095F1]">Products Built</span> for Scale
            </h1>
            <p className="text-xl text-slate-500 mb-6 max-w-2xl leading-relaxed mx-auto">
              MnT's suite of specialized AI products forms a unified platform for enterprise growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-2">
              <button
                onClick={() => document.getElementById('product-explorer')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-5 bg-[#2095F1] text-white rounded-full font-bold text-sm tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                EXPLORE PRODUCTS
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-5 border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
              >
                REQUEST DEMO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-3xl"
          >
            {/* <NeuralIntelligenceFlow /> */}

            {/* Light Sweep */}
            <motion.div
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductPlatformExplorer = () => {
  const [activeTab, setActiveTab] = useState("isuite-ai");
  const activeProduct = productsData[activeTab];

  return (
    <section id="product-explorer" className="py-12 bg-slate-50/50 relative overflow-hidden">
      {/* Background elements */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Tabs Navigation */}
        <div className="w-full overflow-x-auto scrollbar-hide mb-16 pb-4">
          <div className="flex w-max min-w-full justify-start lg:justify-center gap-2 md:gap-4 px-4 mx-auto">
            {Object.values(productsData).map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`relative px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden shrink-0 ${activeTab === product.id
                  ? "text-white shadow-xl shadow-primary/20"
                  : "text-slate-400 hover:text-primary bg-white border border-slate-100"
                  } `}
              >
              {activeTab === product.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#2095F1] -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {product.name}
            </button>
          ))}
          </div>
        </div>

        {/* Product Detail Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            {/* Top: Description (Left) & Image (Right) */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">PRODUCT FOCUS</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  {activeProduct.name}
                </h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Visual */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/20"
                >
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Accent elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full -z-10" />
              </div>
            </div>

            {/* Bottom: 6 Features Grid (3x2) & Centered CTA */}
            <div className="flex flex-col items-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-6xl">
                {activeProduct.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Link to="/contact" className="group relative px-8 py-4 bg-[#2095F1] text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:-translate-y-1 transition-all duration-300 overflow-hidden text-sm uppercase tracking-widest">
                REQUEST DEMO
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Helper components for icons that might be missing from Lucide
const Library = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /><path d="M2 20h20" />
  </svg>
);

const CoreCapabilities = () => {
  const activeProduct = productsData["isuite-ai"]; // This could also be dynamic per tab

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">PLATFORM ENGINE</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Core <span className="text-[#2095F1]">Capabilities</span></h2>
          <p className="text-slate-500 text-lg">
            Our product ecosystem is powered by a standardized set of high-performance AI engines that ensure consistency and reliability across all Suitor applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeProduct.capabilities.map((capability, i) => {
            const Icon = capability.icon || Library;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{capability.title}</h3>
                <p className="text-slate-500 leading-relaxed">{capability.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative AI Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    </section>
  );
};

const EcosystemVisual = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />

      <div className="container-custom relative z-10 text-center">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">SYSTEM ARCHITECTURE</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-20">Unified Product <span className="text-[#2095F1]">Synergy</span></h2>

        <div className="relative max-w-5xl mx-auto py-20 flex items-center justify-center">
          {/* Central Brain */}
          <div className="relative z-20 group">
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-48 h-48 rounded-[3rem] bg-[#2095F1] flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.4)] border border-white/20"
            >
              <Brain className="w-20 h-20 text-white" />
            </motion.div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl">
              CENTRAL CORE
            </div>
          </div>

          {/* Nodes */}
          {[
            { label: "iSuite AI", icon: Cpu, pos: "top-0 left-1/4" },
            { label: "iSuite CRM", icon: Activity, pos: "top-0 right-1/4" },
            { label: "iSuite Health", icon: Stethoscope, pos: "bottom-0 left-1/4" },
            { label: "iSuite Edu", icon: GraduationCap, pos: "bottom-0 right-1/4" }
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.2) }}
              className={`absolute ${node.pos} flex flex-col items-center gap-4 group`}
            >
              <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all duration-500">
                <node.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">{node.label}</span>
            </motion.div>
          ))}

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(14,165,233,0)" />
                <stop offset="50%" stopColor="rgba(14,165,233,0.5)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0)" />
              </linearGradient>
            </defs>
            {/* We use basic lines for simplicity in this abstract visual */}
            <motion.path
              d="M 250 100 Q 500 200 750 100"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              fill="none"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ strokeDasharray: "10 10" }}
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20 max-w-4xl mx-auto">
          <div>
            <h4 className="text-primary font-bold text-lg mb-2">Integration</h4>
            <p className="text-slate-400 text-sm">Every product connects to the central MnT intelligence core for unified data processing.</p>
          </div>
          <div>
            <h4 className="text-primary font-bold text-lg mb-2">Scalability</h4>
            <p className="text-slate-400 text-sm">Modular architecture allows you to deploy exactly what you need, when you need it.</p>
          </div>
          <div>
            <h4 className="text-primary font-bold text-lg mb-2">Unified Brain</h4>
            <p className="text-slate-400 text-sm">Products share cross-vertical insights to constantly refine their performance models.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductUseCases = () => {
  const allUseCases = Object.values(productsData).flatMap(p => p.useCases.map(uc => ({ ...uc, product: p.name })));

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">REAL WORLD APPLICATIONS</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Industry <span className="text-[#2095F1]">Use Cases</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allUseCases.slice(0, 6).map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 block">{useCase.industry}</span>
              <h4 className="text-sm font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{useCase.product} Implementation</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{useCase.scenario}</p>

              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <div className="w-10 h-1 rounded-full bg-slate-200 group-hover:bg-primary group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const WhyMnTProducts = () => {
//   return (
//     <section className="py-32 bg-white overflow-hidden">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full -z-10" />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="aspect-square rounded-[3rem] bg-slate-900 p-12 relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
//               <div className="h-full w-full flex flex-col justify-between relative z-10">
//                 <div className="space-y-4">
//                   <div className="h-1 w-20 bg-primary rounded-full" />
//                   <h4 className="text-3xl font-display font-bold text-white">The MnT <br />Standard</h4>
//                 </div>
//                 <div className="space-y-6">
//                   {[
//                     "Zero-latency processing",
//                     "End-to-end data encryption",
//                     "Autonomous model updates",
//                     "Universal API connectivity"
//                   ].map((text, i) => (
//                     <div key={i} className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
//                       <CheckCircle2 className="w-5 h-5 text-primary" />
//                       {text}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           <div>
//             <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">DIFFERENTIATION</span>
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12">Engineered for the Enterprise</h2>

//             <div className="space-y-10">
//               {[
//                 { title: "Seamless Integration", desc: "Our products aren't silos. They bridge the gap between legacy systems and next-gen AI effortlessly." },
//                 { title: "Secure Framework", desc: "Built with a security-first architecture that ensures your proprietary data remains private." },
//                 { title: "Scalable Deployment", desc: "Launch modules as needed and scale up to millions of requests without hitting limits." }
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="group"
//                 >
//                   <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
//                   <p className="text-slate-500 leading-relaxed">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative overflow-hidden bg-white selection:bg-primary/10">
      <Navigation />

      {/* 1️⃣ Hero Section */}
      <ProductsHero />

      {/* 2️⃣ & 3️⃣ Product Navigation & Details */}
      <ProductPlatformExplorer />

      {/* 4️⃣ Core Capabilities */}
      <CoreCapabilities />

      {/* 5️⃣ Product Architecture / Ecosystem visual */}
      <EcosystemVisual />

      {/* 6️⃣ Use Cases */}
      <ProductUseCases />

      {/* 7️⃣ Impact Metrics */}
      {/* <ProductImpactMetrics /> */}

      {/* 8️⃣ Why MnT Products */}
      {/* <WhyMnTProducts /> */}

      {/* 9️⃣ Final CTA Section */}
      <section className="relative py-14 md:py-24 bg-slate-950 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.2),transparent_70%)]" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"
          />
          {/* Atmospheric sweep */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12"
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
              Ready to Deploy <span className="text-[#2095F1]">MnT Products</span> Across Your Enterprise?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-6 py-3.5 md:px-8 md:py-5 bg-[#2095F1] text-white rounded-full font-bold text-xs md:text-sm tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-4 group">
                SCHEDULE DEMO
                <ArrowUpRight className="w-4 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              {/* <Link to="/contact" className="px-8 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all flex items-center gap-4 group">
                TALK TO PRODUCT EXPERT
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductsPage;
