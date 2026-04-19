import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Bot, Workflow, Smartphone, Database, Sparkles,
  ArrowUpRight, Play, Zap, Shield, BarChart3,
  Globe2, Brain, MessageSquare, Network, Code, Layout
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Cinematic Visual Components (To be used in the sections)
import AIEmployeesVisual from "@/components/services/AIEmployeesVisual";
import SmartAutomationVisual from "@/components/services/SmartAutomationVisual";
import AIAppsVisual from "@/components/services/AIAppsVisual";
import KnowledgeBaseVisual from "@/components/services/KnowledgeBaseVisual";
import GenerativeAIVisual from "@/components/services/GenerativeAIVisual";


const ServicesHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for Background Typography
  const textX1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse Parallax for Doodles
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative pt-8 pb-8 md:pt-8 md:pb-8 overflow-hidden bg-white min-h-[70vh] flex items-center"
    >
      {/* 🟦 Background Visual Layer System */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Underlying Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" />

        {/* 2. Layered Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -40, 40, 0], y: [0, 50, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[120px]"
          />
        </div>

        {/* 3. Background Typography (Parallax) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 opacity-[0.03]">
          <motion.div style={{ x: textX1 }} className="text-[10vw] font-display font-bold whitespace-nowrap">
            DIGITAL WORKFORCE
          </motion.div>
          {/* <motion.div style={{ x: textX2 }} className="text-[10vw] font-display font-bold whitespace-nowrap">
            NEXT-GEN ARCHITECTURE
          </motion.div> */}
        </div>

        {/* 4. Binary Particles */}
        <div className="absolute inset-0 flex flex-wrap gap-12 p-8 overflow-hidden justify-around content-around opacity-[0.06]">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="text-[10px] font-mono text-slate-400"
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
            >
              {i % 2 === 0 ? "0" : "1"}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 🟦 Interactive Layer: Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {[
          { IconNode: Brain, top: "20%", left: "15%", delay: 0 },
          { IconNode: Workflow, top: "25%", right: "12%", delay: 0.5 },
          { IconNode: MessageSquare, bottom: "35%", left: "12%", delay: 1 },
          { IconNode: Network, bottom: "30%", right: "15%", delay: 1.5 },
          { IconNode: Code, top: "45%", left: "18%", delay: 2 },
          { IconNode: Layout, bottom: "40%", right: "20%", delay: 2.5 },
        ].map((doodle, i) => (
          <motion.div
            key={i}
            style={{
              top: doodle.top,
              left: doodle.left,
              right: doodle.right,
              x: springX,
              y: springY
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.8 + doodle.delay },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: doodle.delay },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: doodle.delay }
            }}
            className="absolute p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-100 shadow-xl shadow-primary/5"
          >
            <doodle.IconNode className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* 🟦 Content Layer */}
      <div className="container-custom relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            Our Services
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.05] mb-8 max-w-5xl"
          >
            <span className="text-[#2095F1]">AI-Powered</span> <br />
            Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            From AI employees to smart automation, we deliver next-generation <br className="hidden md:block" />
            technology solutions that transform your business operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <button className="px-5 py-4 bg-[#2095F1] text-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
                Start Your Journey
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="px-5 py-3 bg-transparent border border-slate-300 text-slate-600 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                View Case Studies
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


const ProcessWorkflow = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Animated Dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Our Delivery Model</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">How We Deploy <br /> <span className="text-[#2095F1]">Intelligence</span></h2>
          <p className="text-slate-400 text-lg">We use a proprietary four-phase framework to ensure every AI implementation is stable, scalable, and secure.</p>
        </div>

        {/* Workflow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Define", icon: Play, desc: "Strategy and outcome mapping" },
            { title: "Architect", icon: Shield, desc: "Neural logic and data core" },
            { title: "Integrate", icon: Zap, desc: "Workflow and API bonding" },
            { title: "Optimize", icon: BarChart3, desc: "Post-deployment tuning" }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 relative group-hover:bg-primary/20 transition-all duration-500">
                <step.icon className="w-8 h-8 text-primary" />
                {/* Pulsing glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>

              {/* Connector line (desktop) */}
              {i < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Extract the numeric part and unit
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) return;

    const target = parseInt(numericMatch[0], 10);
    const unit = value.replace(numericMatch[0], "");

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function (easeOutExpo)
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentVal = Math.floor(easedProgress * target);
      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return (
    <span ref={nodeRef}>
      {displayValue === 0 && !isInView ? "0" : displayValue}
      {value.replace(value.match(/(\d+)/)?.[0] || "", "")}
    </span>
  );
};

const IndustryImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-12 bg-white overflow-hidden"
    >
      {/* 🟦 Background Architecture */}
      <div className="absolute inset-0 z-0">
        {/* Animated Background Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-32 opacity-[0.03] select-none pointer-events-none">
          <motion.div style={{ x: textX1 }} className="text-[10vw] font-display font-bold whitespace-nowrap blur-[2px]">
            IMPACT PERFORMANCE
          </motion.div>
          <motion.div style={{ x: textX2 }} className="text-[10vw] font-display font-bold whitespace-nowrap blur-[2px]">
            SCALE INTELLIGENCE
          </motion.div>
        </div>

        {/* Faint Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f1f5f9_1.5px,transparent_1.5px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content + Metrics */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">The MnT Advantage</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Real <span className="text-[#2095F1]">Impact.</span> <br />
                Measured.
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full mt-4"
                />
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-2 max-w-xl leading-relaxed">
                Our solutions are engineered for high-stakes environments where
                reliability and performance are the only metrics that matter.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {[
                  { val: "80%", label: "Manual Reduction" },
                  { val: "4X", label: "Productivity Boost" },
                  { val: "60%", label: "Decision Speed" },
                  { val: "24/7", label: "Workforce Uptime" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    className="p-8 rounded-3xl bg-slate-50/50 backdrop-blur-sm border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all group"
                  >
                    <div className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      <Counter value={stat.val} />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: HD Visual Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square md:aspect-4/5 group"
            >
              {/* Parallax Image Component */}
              <motion.img
                src={`${import.meta.env.BASE_URL}mnt.webp`}
                alt="AI Enterprise Infrastructure"
                className="absolute inset-0 w-full h-full object-cover scale-110 rounded-[2rem] shadow-sm"
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [-20, 20])
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


const servicesExplorerData = [
  {
    id: "ai-employees-explorer",
    icon: Bot,
    title: "AI Employees & Digital Workforce",
    short: "Autonomous AI agents for Sales, HR & Support",
    description: "Develop sophisticated AI Employees that operate as functional members of your team — handling queries, outreach, and internal operations autonomously.",
    technologies: ["Autonomous Agents", "LLM Logic", "CRM/ERP Integration"],
    Visual: AIEmployeesVisual,
  },
  {
    id: "smart-automation-explorer",
    icon: Workflow,
    title: "Smart Business Automation",
    short: "Transform legacy ops into intelligent workflows",
    description: "Transform legacy operations into Smart Workflows with AI for email routing, invoice reconciliation, data sync, and cross-platform orchestration.",
    technologies: ["IDP", "Advanced RPA", "Cross-platform Sync"],
    Visual: SmartAutomationVisual,
  },
  {
    id: "ai-apps-explorer",
    icon: Smartphone,
    title: "AI-Powered Web & Mobile Apps",
    short: "Next-gen platforms with Voice AI & Computer Vision",
    description: "Build next-gen platforms with Voice AI, Computer Vision, Hyper-Personalization engines, and predictive analytics built right in.",
    technologies: ["Predictive Analytics", "ML Models", "Voice AI"],
    Visual: AIAppsVisual,
  },
  {
    id: "knowledge-base-explorer",
    icon: Database,
    title: "Enterprise Knowledge Base",
    short: "Transform unstructured data into a Smart Brain",
    description: "Transform unstructured data into a centralized Smart Brain. Chat with your documents, search intelligently, and extract insights securely.",
    technologies: ["RAG", "Vector Databases", "Private AI"],
    Visual: KnowledgeBaseVisual,
  },
  {
    id: "generative-ai-explorer",
    icon: Sparkles,
    title: "Generative AI for Marketing",
    short: "Automate your content pipeline with AI",
    description: "Automate your content pipeline with high-fidelity visuals, ad copy, personalized video content, and brand-trained AI models.",
    technologies: ["Diffusion Models", "Multi-modal AI", "Brand Training"],
    Visual: GenerativeAIVisual,
  },
];

const MigratedServicesExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  const ActiveVisual = servicesExplorerData[activeService].Visual;

  return (
    <section className="relative py-24 md:py-12 overflow-hidden bg-white" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-4"
        >
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
            Digital <span className="text-[#2095F1]">Intelligence</span> Solutions
          </h2>
          <p className="text-slate-500 text-lg">
            Explore how our specialized AI verticals integrate to form a cohesive digital strategy for your enterprise.
          </p>
        </motion.div>

        {/* Interactive service explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Service tabs */}
          <div className="space-y-6">
            {servicesExplorerData.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setActiveService(index)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-400 ${isActive
                    ? "bg-white border border-primary/20 shadow-2xl shadow-primary/5"
                    : "hover:bg-slate-50 border border-transparent"
                    }`}
                >
                  {isActive && (
                    <motion.div layoutId="service-indicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-full bg-primary" />
                  )}
                  <div className="flex items-start gap-5 pl-2">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100 text-slate-400"
                      }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-display font-bold text-lg transition-colors ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">{service.short}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — Active service detail */}
          <div className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative p-10 md:p-14 rounded-[3rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden h-full flex flex-col justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02]" />
                <div className="relative z-10">
                  {/* Rich animated visual */}
                  <div className="w-full max-w-sm mx-auto mb-10">
                    <ActiveVisual />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    {servicesExplorerData[activeService].title}
                  </h3>
                  <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                    {servicesExplorerData[activeService].description}
                  </p>

                  {/* Removed Tech tags for cleaner UI */}

                  <Link to={`/services/${servicesExplorerData[activeService].id.replace('-explorer', '')}`} className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <main className="relative bg-white selection:bg-primary/10">
      <Navigation />

      <ServicesHero />

      <MigratedServicesExplorer />


      <ProcessWorkflow />

      <IndustryImpact />

      {/* Full-Width Final CTA Section */}
      <section className="relative py-14 md:py-20 bg-slate-950 overflow-hidden">
        {/* Immersive Background Architecture */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Deep Gradient Base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent_70%)]" />

          {/* Animated Mesh/Grid Overlay */}
          <motion.div
            animate={{
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"
          />

          {/* Floating Neural Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5
              }}
              animate={{
                y: ["-10%", "110%"],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}

          {/* Ambient Glowing Orbs */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Deploy Your <br />
              <span className="relative inline-block">
                <span className="text-[#2095F1] relative z-10">
                  AI Workforce?
                </span>
                <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full animate-pulse" />
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Join the forward-thinking organizations scaling their operations with bespoke MnT intelligence architectural solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 md:px-10 md:py-5 bg-[#2095F1] text-white rounded-full font-bold text-xs md:text-sm tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                SCHEDULE CONSULTATION
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </motion.button>

              {/* <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm tracking-widest transition-all"
              >
                DOWNLOAD SERVICE BROCHURE
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
