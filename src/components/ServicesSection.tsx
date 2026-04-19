import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Bot, Workflow, Smartphone, Database, Sparkles, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

const services = [
  {
    id: "ai-employees",
    icon: Bot,
    title: "AI Employees & Digital Workforce",
    description: "Autonomous agents for Sales, HR & Customer Success",
    side: "left",
    color: "bg-blue-50/50",
    iconColor: "text-blue-500",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    id: "smart-automation",
    icon: Workflow,
    title: "Smart Business Automation",
    description: "Intelligent, self-healing enterprise workflows",
    side: "left",
    color: "bg-indigo-50/50",
    iconColor: "text-indigo-500",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
  },
  {
    id: "ai-apps",
    icon: Smartphone,
    title: "Custom AI Web & Mobile Apps",
    description: "Next-gen platforms with Voice AI & Computer Vision",
    side: "left",
    color: "bg-slate-50/50",
    iconColor: "text-slate-600",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(71,85,105,0.3)]",
  },
  {
    id: "knowledge-ai",
    icon: Database,
    title: "Enterprise Knowledge AI",
    description: "Private, secure data brains for your organization",
    side: "right",
    color: "bg-sky-50/50",
    iconColor: "text-sky-500",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]",
  },
  {
    id: "generative-ai",
    icon: Sparkles,
    title: "Generative AI for Marketing",
    description: "High-fidelity content pipelines and brand models",
    side: "right",
    color: "bg-emerald-50/50",
    iconColor: "text-emerald-500",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
  },
];

const ServiceItem = ({ service, index, isInView }: { service: typeof services[0], index: number, isInView: boolean }) => {
  const Icon = service.icon;
  const isLeft = service.side === "left";
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-row md:items-center gap-4 md:gap-6 cursor-pointer p-3 md:p-4 rounded-2xl transition-all duration-300 text-left ${isLeft ? "md:text-left" : "md:flex-row-reverse md:text-right"}`}
    >
      {/* Icon Circle */}
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${service.color} border border-slate-100/50 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${service.glowColor} group-hover:scale-110 md:group-hover:-translate-y-1 mt-1 md:mt-0`}>
        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${service.iconColor} transition-all duration-300 group-hover:scale-110`} />
      </div>

      <div className="flex-1 space-y-1.5 md:space-y-2">
        <h3 className={`font-display font-bold text-lg transition-colors duration-300 ${isHovered ? "text-primary" : "text-slate-900"}`}>
          {service.title}
          {/* Underline animation */}
          <div className="relative h-0.5 mt-1 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
              className={`absolute inset-0 bg-primary/40 origin-${isLeft ? "left" : "right"}`}
              transition={{ duration: 0.3 }}
            />
          </div>
        </h3>

        <p className="text-sm text-slate-500 max-w-[240px] leading-relaxed">
          {service.description}
        </p>

        {/* Read More Button */}
        <div className="h-10 flex items-center">
          <AnimatePresence>
            {(isHovered || isMobile) && (
              <motion.div
                initial={isMobile ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 5, x: isLeft ? -10 : 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 5, x: isLeft ? -10 : 10 }}
                transition={{ duration: 0.2 }}
                className={`${isLeft ? "mr-auto" : "ml-auto"}`}
              >
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-[#2095F1] text-white text-[10px] font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const RobotVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 🟦 Ambient Glow Layers */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-3/4 h-3/4 bg-primary/20 rounded-full blur-[100px] -z-10"
      />

      {/* 🟦 HD Robot Image */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-[480px] aspect-square flex items-center justify-center group"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}robomnt.webp`}
            alt="Futuristic AI Robot"
            className="w-[98%] h-[98%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          />

          {/* Floating UI Elements Around Robot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-primary/10 rounded-full scale-110"
          />

        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const robotY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-12 md:py-20 bg-white overflow-hidden"
    >
      {/* 🟦 Background Architecture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f1f5f9_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.05] mb-6"
          >
            Intelligent Solutions <br />
            <span className="text-[#2095F1]">Built for the Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            We deploy autonomous solutions that learn, adapt, and scale <br className="hidden md:block" />
            with your business objectives.
          </motion.p>
        </div>


        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Side Items */}
          <div className="lg:col-span-4 space-y-4 md:space-y-8 lg:space-y-12">
            {services.filter(s => s.side === "left").map((service, i) => (
              <ServiceItem key={service.id} service={service} index={i} isInView={isInView} />
            ))}
          </div>

          {/* Center Robot Visual */}
          <motion.div
            style={{ y: robotY }}
            className="lg:col-span-4 h-[280px] md:h-[400px] lg:h-[600px] flex items-center justify-center px-4"
          >
            <RobotVisual />
          </motion.div>

          {/* Right Side Items */}
          <div className="lg:col-span-4 space-y-4 md:space-y-8 lg:space-y-12">
            {services.filter(s => s.side === "right").map((service, i) => (
              <ServiceItem key={service.id} service={service} index={i + 3} isInView={isInView} />
            ))}

            {/* CTA/More Link (to balance for 6th item if desired, or just extra space) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 lg:flex-row-reverse lg:text-right"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group cursor-pointer hover:bg-primary hover:text-white transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
              <Link to="/services" className="group">
                <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">
                  Explore Full Stack
                </h3>
                <p className="text-sm text-slate-500">
                  Custom AI implementations
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
