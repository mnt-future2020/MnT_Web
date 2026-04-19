import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AICoreVisual from "@/components/about/AICoreVisual";

// Import images for robust production handling
import aboutRobot from "@/assets/aboutbg.webp";
import missionIcon from "@/assets/mision.webp";
import visionIcon from "@/assets/vision.webp";
import valuesIcon from "@/assets/values.webp";
import goalsIcon from "@/assets/goals.webp";

const PHILOSOPHY_ITEMS = [
  { title: "Strategy", description: "Architecting roadmaps for systemic intelligence." },
  { title: "Architecture", description: "Foundational structures that scale without friction." },
  { title: "Automation", description: "The silent efficiency that powers modern industry." },
  { title: "AI Engineering", description: "Edge models purpose-built for enterprise logic." },
  { title: "Enterprise Scale", description: "Ecosystems that grow with global ambition." },
];

const AI_STRATEGIC_ITEMS = [
  {
    id: "mission",
    title: "MISSION",
    label: "OUR MISSION",
    summary: "Strategic transformation through architectural precision.",
    description: "To engineer intelligent digital foundations that empower enterprises to lead with architectural precision and operational excellence. We focus on building resilient systems that solve today's friction and anticipate tomorrow's opportunity.",
    image: missionIcon,
    color: "from-blue-600/90 to-indigo-900/90"
  },
  {
    id: "vision",
    title: "VISION",
    label: "OUR VISION",
    summary: "Setting the benchmark for systemic intelligence.",
    description: "To be the global benchmark for systemic intelligence, where every line of code architected builds a more resilient and scalable future. We envision an enterprise landscape where AI is natively integrated into every architectural layer.",
    image: visionIcon,
    color: "from-teal-600/90 to-emerald-950/90"
  },
  {
    id: "values",
    title: "VALUES",
    label: "OUR VALUES",
    summary: "Integrity, Precision, and Collaborative Growth.",
    description: "Architectural Integrity, Radical Transparency, Engineering Precision, and Collaborative Growth define our core DNA. We believe that true intelligence is built on a foundation of trust and engineering excellence.",
    image: valuesIcon,
    color: "from-sky-600/90 to-blue-900/90"
  },
  {
    id: "goals",
    title: "GOALS",
    label: "OUR GOALS",
    summary: "Accelerating global AI adoption with local expertise.",
    description: "Accelerate global AI adoption through localized engineering expertise and resilient enterprise infrastructure. We aim to deploy 10,000+ intelligent systems across the region by 2030, driving industrial efficiency at scale.",
    image: goalsIcon,
    color: "from-cyan-600/90 to-blue-900/90"
  }
];

const CITIES = [
  { name: "Chennai", delay: 0.1 },
  { name: "Coimbatore", delay: 0.3 },
  { name: "Madurai", delay: 0.5 },
  { name: "Salem", delay: 0.7 },
  { name: "Trichy", delay: 0.9 },
];

// --- Sub-components ---

// 1. Hero Parallax
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.05, 0]);

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden bg-white">
      <motion.div style={{ scale: bgScale, opacity: bgOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none mb-16 mx-auto">
        <span className="text-[20vw] font-black text-slate-900 select-none tracking-tighter">INTELLIGENCE</span>
      </motion.div>
      <div className="container-custom relative z-10">
        <motion.div style={{ y: textY }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">MnT Future</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Lets Build Future <br /> <span className="text-[#2095F1]">Intelligence Together</span></h2>
            <p className="text-slate-400 text-lg">A journey through the architectural layers of digital transformation</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <button className="px-7 py-5 bg-[#2095F1] text-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
                Start Your Journey
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

// 2. Architectural Flow
const ArchitecturalFlow = () => {
  return (
    <section className="relative py-24 md:py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="space-y-32 md:space-y-48">
          {PHILOSOPHY_ITEMS.map((item, i) => (
            <FlowItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlowItem = ({ item, index }: { item: typeof PHILOSOPHY_ITEMS[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="relative flex-1 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute text-[25vw] md:text-[20vw] font-black text-white select-none leading-none tracking-tighter blur-sm"
        >
          0{index + 1}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-3xl flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-enterprise-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />
          <span className="text-4xl md:text-6xl font-display font-bold text-white shadow-glow-white">0{index + 1}</span>
          <div className="absolute top-[110%] left-1/2 w-px h-24 md:h-32 bg-gradient-to-b from-white/20 to-transparent hidden md:block" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, x: isEven ? 30 : -30 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
          {item.title}
        </h3>
        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
          {item.description}
        </p>
        <Link to="/contact">
          <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-primary font-bold tracking-widest uppercase text-xs">
            <span>Explore Layers</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

// 3. Who We Are
const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative pt-16 pb-16 md:pt-18 md:pb-18 overflow-hidden bg-slate-900 selection:bg-primary/20">
      {/* Dark gradient theme layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0c2d48] to-slate-900" />

      {/* Background wave animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="contact-wave-1 !opacity-10" />
        <div className="contact-wave-2 !opacity-10" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 0.5px, transparent 0.5px), linear-gradient(90deg, #fff 0.5px, transparent 0.5px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">WHO WE ARE</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-tighter">
                Engineering Intelligent
                <span className="text-[#2095F1]"> Ecosystems</span> for Enterprise Growth
              </h2>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                MnT stands at the intersection of architectural precision and artificial intelligence. We are not just service providers; we are strategic transformation partners for organizations ready to scale beyond conventional limits.
              </p>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                By deep-mapping the unique enterprise landscape of Tamil Nadu with global engineering standards, we build resilient digital foundations that don't just solve today's friction—they anticipate tomorrow's opportunity.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-[2px] bg-primary/40" />
              <span className="text-white/60 font-bold tracking-widest uppercase text-[10px]">Long-term Strategic Intelligence</span>
            </motion.div>
          </motion.div>

          {/* AI Powered Visionary Core */}
          <div className="relative flex justify-center items-center h-full min-h-[500px]">
            <AICoreVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Visionary Experience Section (Scroll Driven)
const VisionaryExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const items = [
    {
      title: "Mission",
      text: "To engineer intelligent digital foundations that empower enterprises to lead with architectural precision and operational excellence. We focus on building resilient systems that solve today's friction and anticipate tomorrow's opportunity."
    },
    {
      title: "Vision",
      text: "To be the global benchmark for systemic intelligence, where every line of code architected builds a more resilient and scalable future. We envision an enterprise landscape where AI is natively integrated into every architectural layer."
    },
    {
      title: "Goals",
      text: "Accelerate global AI adoption through localized engineering expertise and resilient enterprise infrastructure. We aim to deploy 10,000+ intelligent systems across the region by 2030."
    },
    {
      title: "Values",
      text: "Architectural Integrity, Radical Transparency, Engineering Precision, and Collaborative Growth define our core DNA. We believe that true intelligence is built on a foundation of trust."
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center">
        {/* Background Layer: Grid + Spotlight */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
              backgroundSize: '80px 80px'
            }}
          />
          {/* Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80" />
          {/* Spotlight behind robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-[0.09] blur-[120px] rounded-full" />
        </div>

        {/* Content Layers: Centered and above the robot */}
        <div className="relative z-50 flex-1 flex flex-col items-center justify-start w-full max-w-4xl px-6 md:px-14 text-center pt-[12vh] md:pt-[15vh]">
          {AI_STRATEGIC_ITEMS.map((item, index) => {
            const start = index / AI_STRATEGIC_ITEMS.length;
            const end = (index + 1) / AI_STRATEGIC_ITEMS.length;

            // Only Opacity for fade transition
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.9, 1, 1, 0.9]);

            return (
              <motion.div
                key={item.id}
                style={{ opacity, scale }}
                className="absolute w-full px-6 flex flex-col items-center"
              >
                {/* Section Image */}
                <div className="relative mb-6 md:mb-10 group">
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 md:w-32 md:h-32 object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                  />
                </div>

                <h2 className="text-[12vw] md:text-[6rem] font-display font-bold text-white mb-4 md:mb-6 tracking-tighter leading-none">
                  {item.title}
                </h2>
                <p className="text-base md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Foreground Layer: Robot pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 flex flex-col items-center">
          <div className="relative w-full max-w-4xl flex flex-col items-center pb-6 md:pb-0">
            {/* Robot Image */}
            <motion.img
              src={aboutRobot}
              alt="AI Core"
              className="w-[240px] md:w-[480px] mb-[-15px] md:mb-[-40px] drop-shadow-[0_0_80px_rgba(255,255,255,0.15)] relative z-10"
              style={{
                filter: "drop-shadow(0 0 30px rgba(0,0,0,0.5))"
              }}
            />
            {/* Stone Base CSS Alternative */}
            <div className="w-[70%] md:w-[60%] h-10 md:h-20 relative">
              {/* Stone Top */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#333] to-[#111] rounded-[50%] scale-y-[0.3] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-white/10" />
              {/* Stone Glow/Spotlight on top */}
              <div className="absolute inset-0 bg-white opacity-[0.05] rounded-[50%] scale-y-[0.2] blur-md translate-y-[-10px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <main className="relative bg-white selection:bg-mnt-blue/10">
      <Navigation />
      <HeroSection />

      {/* 2. WHO WE ARE */}
      <WhoWeAre />

      {/* 3. Visionary Experience (Mission, Vision, Goals, Values) */}
      <VisionaryExperience />

      {/* 4. Architectural Flow */}
      <ArchitecturalFlow />

      {/* 5. Founder’s Perspective (Founder & Visionary) */}
      <section className="relative py-14 md:py-32 bg-white border-y border-slate-50">
        <div className="container-custom">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 text-[15vw] text-slate-100/50 leading-none select-none font-black italic -translate-x-12 -translate-y-12">“</div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 text-center space-y-12 px-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-[1.3] italic">“True digital transformation doesn’t happen at the surface. It’s won in the <span className="text-[#2095F1]">architectural foundation, where logic meets vision </span>to create something truly unshakeable.”</h2>
              <div className="space-y-4">
                <div className="w-12 h-0.5 bg-primary mx-auto" />
                <div className="text-slate-900 font-bold tracking-widest uppercase text-sm">Udhayaseelan Renganathan</div>
                <div className="text-xs text-primary font-bold uppercase tracking-widest">Founder & Visionary</div>
              </div>
            </motion.div>
            <div className="absolute bottom-0 right-0 text-[15vw] text-slate-100/50 leading-none select-none font-black italic translate-x-12 translate-y-12">”</div>
          </div>
        </div>
      </section>

      {/* 6. Final Transformation CTA */}
      <section className="relative py-24 md:py-32 bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.2),transparent_70%)]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter leading-tight">Let’s Engineer the <br /> <span className="text-[#2095F1]">Future</span> Together.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact#contact-form" className="px-5 py-4 bg-[#2095F1] text-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">BOOK A STRATEGY CALL</Link>
              <Link to="/services" className="px-5 py-3 bg-transparent border border-slate-300 text-slate-300 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">EXPLORE SERVICES</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
