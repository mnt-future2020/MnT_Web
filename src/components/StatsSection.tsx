import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, value, delay, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="relative flex flex-col items-center py-10"
    >
      {/* Background Large Number */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-slate-50 leading-none select-none z-0">
        {value}{suffix}
      </span>

      <div className="relative z-10 flex flex-col items-center pt-8">
        <div className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-4 tracking-tighter">
          {displayValue}
          <span className="text-primary">{suffix}</span>
        </div>
        <div className="h-[2px] w-12 bg-[#2095F1] mb-4" />
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const stats = [
    { value: 200, suffix: "+", label: "Global Projects" },
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 5, suffix: ".0", label: "Industry Rating" },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden border-y border-slate-50">
      {/* Narrative Flow Visuals */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent z-0" />

      <div className="max-w-enterprise mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-50/50 rounded-full pointer-events-none"
      />
    </section>
  );
};

export default StatsSection;
