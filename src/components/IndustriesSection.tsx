import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Industry-specific doodle components
const FinanceDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blockchain chain */}
    <motion.rect x="20" y="80" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
    <motion.rect x="70" y="80" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
    <motion.rect x="120" y="80" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
    <motion.rect x="170" y="80" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
    <motion.path d="M50 95 L70 95" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} />
    <motion.path d="M100 95 L120 95" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} />
    <motion.path d="M150 95 L170 95" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.4 }} />
    {/* Graph line */}
    <motion.path d="M30 160 L60 140 L90 150 L120 120 L150 130 L180 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.6 }} />
    <motion.circle cx="180" cy="100" r="4" fill="currentColor"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 3 }} />
  </svg>
);

const HealthcareDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pulse wave */}
    <motion.path d="M10 100 L40 100 L50 70 L60 130 L70 60 L80 140 L90 100 L190 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.3 }} />
    {/* AI scan circle */}
    <motion.circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} />
    <motion.circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.5 }} />
    {/* Cross */}
    <motion.path d="M95 85 L95 115 M85 100 L115 100" stroke="currentColor" strokeWidth="2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2 }} />
  </svg>
);

const EducationDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neural learning network */}
    <motion.circle cx="100" cy="40" r="12" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
    <motion.circle cx="50" cy="100" r="12" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
    <motion.circle cx="150" cy="100" r="12" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
    <motion.circle cx="70" cy="160" r="12" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
    <motion.circle cx="130" cy="160" r="12" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
    {/* Connections */}
    <motion.path d="M100 52 L60 88 M100 52 L140 88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />
    <motion.path d="M55 112 L65 148 M145 112 L135 148" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.4 }} />
    <motion.path d="M62 100 L138 100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.6 }} />
    <motion.path d="M82 160 L118 160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }} />
  </svg>
);

const RetailDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shopping flow */}
    <motion.rect x="30" y="60" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
    <motion.path d="M35 75 L65 75 M35 85 L55 85 M35 95 L50 95" stroke="currentColor" strokeWidth="1"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
    <motion.path d="M70 85 L100 85 M90 80 L100 85 L90 90" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
    {/* Cart */}
    <motion.path d="M110 70 L120 70 L135 100 L160 100 M145 100 L145 110 M125 100 L125 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.5 }} />
    {/* Data lines */}
    <motion.path d="M50 130 C50 150, 150 150, 150 130" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 2 }} />
  </svg>
);

const ManufacturingDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Robotic arm */}
    <motion.path d="M40 160 L40 100 L80 80 L120 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
    <motion.circle cx="120" cy="100" r="8" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1 }} />
    {/* Gears */}
    <motion.circle cx="160" cy="60" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.5 }} />
    <motion.circle cx="160" cy="60" r="8" stroke="currentColor" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.8 }} />
    {/* Assembly line */}
    <motion.path d="M30 170 L170 170" stroke="currentColor" strokeWidth="2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2 }} />
    <motion.rect x="60" y="155" width="20" height="15" stroke="currentColor" strokeWidth="1"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 2.3 }} />
    <motion.rect x="100" y="155" width="20" height="15" stroke="currentColor" strokeWidth="1"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 2.5 }} />
  </svg>
);

const LogisticsDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Route map */}
    <motion.path d="M30 150 Q80 100, 100 120 T170 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.3 }} />
    {/* Location pins */}
    <motion.circle cx="30" cy="150" r="6" stroke="currentColor" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0 }} />
    <motion.circle cx="100" cy="120" r="4" stroke="currentColor" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} />
    <motion.circle cx="170" cy="80" r="6" stroke="currentColor" strokeWidth="1.5"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2 }} />
    {/* Tracking signals */}
    <motion.circle cx="170" cy="80" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: [0, 0.5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2.5 }} />
    <motion.circle cx="170" cy="80" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"
      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: [0, 0.3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2.7 }} />
  </svg>
);

const industries = [
  {
    id: "finance",
    title: "Finance & Banking",
    description: "Secure and efficient solutions with blockchain integration and AI-powered fraud detection for modern financial services.",
    Doodle: FinanceDoodle,
    features: ["Blockchain Integration", "AI Fraud Detection", "Real-time Analytics", "Secure Transactions"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant applications with EHR integration, telehealth solutions, and AI-powered diagnostics.",
    Doodle: HealthcareDoodle,
    features: ["HIPAA Compliance", "EHR Integration", "Telehealth Solutions", "AI Diagnostics"],
  },
  {
    id: "education",
    title: "Education",
    description: "Interactive learning management systems with virtual classrooms and adaptive learning powered by AI.",
    Doodle: EducationDoodle,
    features: ["Interactive LMS", "Virtual Classrooms", "Adaptive Learning", "Student Analytics"],
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Engaging shopping experiences with headless commerce architecture and AI-powered recommendations.",
    Doodle: RetailDoodle,
    features: ["Headless Commerce", "AI Recommendations", "Omnichannel Experience", "Inventory AI"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Streamlined operations with IoT integration, predictive maintenance, and smart factory automation.",
    Doodle: ManufacturingDoodle,
    features: ["IoT Integration", "Predictive Maintenance", "Smart Automation", "Quality Control AI"],
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Real-time fleet management with route optimization and end-to-end supply chain visibility.",
    Doodle: LogisticsDoodle,
    features: ["Fleet Management", "Route Optimization", "Supply Chain Visibility", "Real-time Tracking"],
  },
];

const IndustriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];
  const ActiveDoodle = activeIndustry.Doodle;

  const yScroll = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative bg-white py-32 overflow-hidden">
      {/* Narrative Flow Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Diagonal Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-slate-50 skew-y-3 origin-bottom-right" />

      <div className="relative z-10 max-w-enterprise mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Navigation Story */}
          <div className="lg:col-span-5 space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 leading-[0.8] mb-12">
                Unified <br />
                <span className="text-[#2095F1]">Ecosystems</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed max-w-md">
                We engineer bespoke intelligence for the world's most critical industries,
                bridging the gap between legacy operations and future possibilities.
              </p>
            </motion.div>

            <div className="space-y-4">
              {industries.map((industry, i) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveIndex(i)}
                  className="group block text-left w-full"
                >
                  <div className="flex items-center gap-6 py-2">
                    <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === activeIndex ? "text-primary" : "text-slate-300"}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-2xl md:text-3xl font-display font-bold transition-all duration-500 ${i === activeIndex ? "text-slate-900 translate-x-4" : "text-slate-300 group-hover:text-slate-400 group-hover:translate-x-2"}`}>
                      {industry.title}
                    </span>
                  </div>
                  {i === activeIndex && (
                    <motion.div
                      layoutId="active-line"
                      className="h-[1px] bg-[#2095F1] w-48 mt-2"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Immersive Display */}
          <div className="lg:col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square md:aspect-[16/10] overflow-hidden rounded-[40px] shadow-premium bg-white border border-slate-100"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="industry-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0L0 0 0 40" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#industry-pattern)" />
                  </svg>
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="max-w-md">
                      <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Core Advantage</h4>
                      <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                        {activeIndustry.description}
                      </p>
                    </div>
                    <div className="w-24 h-24 text-primary/10">
                      <ActiveDoodle className="w-full h-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {activeIndustry.features.map((feature, i) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Graphic Layer */}
                <motion.div
                  style={{ y: yScroll }}
                  className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] text-primary/5 pointer-events-none"
                >
                  <ActiveDoodle className="w-full h-full" />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <Link
              to="/industries"
              className="mt-12 group flex items-center justify-end gap-6"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Complete Industry Analysis</span>
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-all">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
