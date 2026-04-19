import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For Small Businesses & Startups",
    price: "25,000",
    originalPrice: "35,000",
    currency: "₹",
    features: [
      "Responsive Web Application",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "Mobile-Friendly Design",
      "3 Months Support",
      "1 Revision Round",
    ],
    popular: false,
    gradient: "from-slate-600 to-slate-800",
    delivery: "2-3 weeks",
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "For Growing Businesses",
    price: "75,000",
    originalPrice: "100,000",
    currency: "₹",
    features: [
      "Custom Web + Mobile App",
      "Up to 15 Pages",
      "Payment Gateway Integration",
      "Admin Panel & Dashboard",
      "Advanced SEO",
      "6 Months Support",
      "3 Revision Rounds",
      "API Integrations",
    ],
    popular: true,
    gradient: "from-primary to-secondary",
    delivery: "4-6 weeks",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Complete Solution for Large Businesses",
    price: "150,000",
    originalPrice: "200,000",
    currency: "₹",
    features: [
      "Custom Web + Mobile + Desktop App",
      "Unlimited Pages",
      "Cloud Infrastructure Setup",
      "Advanced Security Features",
      "Custom API Development",
      "12 Months Support",
      "Unlimited Revisions",
      "Dedicated Account Manager",
      "Priority Support",
    ],
    popular: false,
    gradient: "from-amber-500 to-orange-600",
    delivery: "8-12 weeks",
  },
];

const PackagesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="relative py-32 overflow-hidden bg-slate-50" ref={containerRef}>
      {/* Narrative Flow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/2 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-enterprise mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 block mb-4">Pricing & Investment</span>
          <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 leading-[0.8] mb-10">
            Engineered for <br />
            <span className="text-[#2095F1] italic">Scale</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl">
            Predictable investment plans designed for enterprises at every stage
            of their digital transformation journey.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {packages.map((pkg, index) => {
            const isPopular = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative group h-full`}
              >
                <div
                  className={`relative h-full enterprise-block md:p-12 border-slate-200/60 bg-white/70 backdrop-blur-md overflow-hidden flex flex-col`}
                >
                  {isPopular && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2095F1]" />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-display font-bold text-slate-900">{pkg.name}</h3>
                        {isPopular && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg">Preferred</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 font-medium">{pkg.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-12">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-display font-bold text-slate-900">{pkg.currency}{pkg.price}</span>
                        <span className="text-slate-400 text-sm font-medium">/ deployment</span>
                      </div>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-slate-300 line-through text-sm font-medium">
                          {pkg.currency}{pkg.originalPrice}
                        </span>
                        <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">
                          Save {Math.round((1 - parseInt(pkg.price.replace(',', '')) / parseInt(pkg.originalPrice.replace(',', ''))) * 100)}%
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-5 mb-12 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-4">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-slate-500 font-medium text-[15px]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ y: -4, boxShadow: "0 20px 40px -20px hsla(215, 100%, 50%, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300
                        ${isPopular
                          ? 'bg-slate-900 text-white shadow-premium hover:bg-primary'
                          : 'border-2 border-slate-100 text-slate-900 hover:border-primary/20 hover:bg-primary/5'}`}
                    >
                      Initialize Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-16 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-sm">
            <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">Bespoke Architecture</h4>
            <p className="text-slate-500">
              For complex ecosystems and unique enterprise requirements,
              we engineer custom, ground-up solutions.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="px-10 py-5 rounded-2xl bg-white border border-slate-100 shadow-premium text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center gap-4 group"
            >
              Consult an Architect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
