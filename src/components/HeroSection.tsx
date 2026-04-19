import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import HeroStoryTimeline from "./HeroStoryTimeline";
import MagneticButton from "./animations/MagneticButton";
import BinaryBackground from "./animations/BinaryBackground";
import MouseTraceGlow from "./animations/MouseTraceGlow";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pt-20 md:pt-32 lg:pt-40"
    >
      {/* Background Typography - Faded */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h2
          className="text-[clamp(120px,20vw,280px)] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary/[0.04] to-secondary/[0.04] select-none blur-[0.5px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          TRANSFORM
        </h2>
      </div>

      {/* Interactive Background Elements */}
      <BinaryBackground />
      <MouseTraceGlow />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `
linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
    `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08), transparent 60%)",
          }}
        />
      </div>

      {/* Subtle Mesh Gradient Animation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
      </div>

      {/* Main Content Container - Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="flex flex-col items-center text-center w-full"
        >
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span>Digital Transformation Partners</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-[1.1] md:mb-6 max-w-5xl mx-auto"
          >
            Transform Your Ideas Into{" "}
            <span className="text-[#2095F1]">
              Digital Reality
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-slate-600 mb-2 max-w-2xl mx-auto leading-relaxed"
          >
            We architect and build premium digital solutions that streamline operations,
            enhance user experiences, and drive sustainable business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-0"
          >
            <Link to="/contact">
              <button className="group relative px-5 py-3 bg-[#2095F1] text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(32,149,241,0.39)] hover:shadow-[0_6px_20px_rgba(32,149,241,0.23)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#2095F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <Link to="/services">
              <button className="px-5 py-3 bg-transparent border border-slate-300 text-slate-600 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                Explore Ecosystem
              </button>
            </Link>
          </motion.div>

          {/* Process Timeline - Full Width */}
          <div className="w-full">
            <HeroStoryTimeline />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
