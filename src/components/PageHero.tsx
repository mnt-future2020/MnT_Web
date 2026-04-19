import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TechDoodles from "./TechDoodles";

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badge?: string;
  variant?: "services" | "industries" | "packages" | "about" | "contact" | "legal";
  centered?: boolean;
}

const PageHero = ({
  title,
  titleHighlight,
  subtitle,
  badge,
  variant = "services",
  centered = false
}: PageHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className={`relative ${centered ? "min-h-[40vh] md:min-h-[50vh] pt-32 pb-20" : "min-h-[70vh] pt-24 pb-32"} flex items-center overflow-hidden bg-white`}
    >
      {/* Structural Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-bold tracking-tighter leading-none text-slate-900">
          {variant.toUpperCase()}
        </span>
      </div>

      {/* Narrative Flow Accents */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/2 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/2 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      {/* Grid Lines - Ultra Thin */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px),
                           linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full">
        <div className={`${centered ? "max-w-4xl mx-auto text-center" : "max-w-4xl"}`}>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: centered ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex items-center gap-4 mb-10 ${centered ? "justify-center" : ""}`}
            >
              {!centered && <div className="h-[1px] w-8 bg-primary" />}
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{badge}</span>
              {centered && <div className="h-[1.5px] w-12 bg-primary/20" />}
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            style={{ y }}
            className={`${centered ? "text-3xl md:text-5xl lg:text-7xl" : "text-4xl md:text-7xl lg:text-9xl"} font-display font-bold text-slate-900 leading-[0.85] tracking-tight mb-12`}
          >
            <div className={`overflow-hidden ${centered ? "flex flex-wrap justify-center gap-x-4" : ""}`}>
              {title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block ${!centered ? "mr-4" : ""} ${titleHighlight && word.toLowerCase() === titleHighlight.toLowerCase() ? "text-[#2095F1]" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className={`text-xl md:text-2xl text-slate-500 leading-relaxed ${centered ? "max-w-3xl mx-auto" : "max-w-2xl"}`}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Decorative Tech Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full z-0 opacity-10 pointer-events-none">
        <TechDoodles variant={variant} />
      </div>
    </section>
  );
};

export default PageHero;
