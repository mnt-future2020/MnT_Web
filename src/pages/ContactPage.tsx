import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, ArrowRight, ChevronDown, Download, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const serviceOptions = [
  "AI & Machine Learning",
  "Web Application Development",
  "Mobile App Development",
  "Enterprise Software",
  "UI/UX Design",
  "DevOps & Infrastructure",
  "Others",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We listen, understand your challenges, and identify where intelligent systems create the most impact.",
  },
  {
    num: "02",
    title: "Architecture Blueprint",
    desc: "Our engineers design a tailored roadmap — technology stack, milestones, and measurable outcomes.",
  },
  {
    num: "03",
    title: "Deployment & Scale",
    desc: "We build, test, deploy, and continuously refine — ensuring enterprise-grade reliability at every stage.",
  },
];

/* ──────────────────────────────────────────────
   Animated Background Grid  (hero)
   ────────────────────────────────────────────── */

const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Static thin grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(#2095F1 0.5px, transparent 0.5px), linear-gradient(90deg, #2095F1 0.5px, transparent 0.5px)`,
        backgroundSize: "80px 80px",
      }}
    />
    {/* Animated scan-line */}
    <div className="absolute inset-0">
      <div className="contact-grid-scanline" />
    </div>
  </div>
);

/* ──────────────────────────────────────────────
   Floating Neural Lines (hero decoration)
   ────────────────────────────────────────────── */

const NeuralLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
    viewBox="0 0 1200 600"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M0 300 Q300 200 600 300 T1200 300"
      fill="none"
      stroke="url(#neural-grad)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path
      d="M0 350 Q400 250 700 350 T1200 320"
      fill="none"
      stroke="url(#neural-grad)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
    />
    <defs>
      <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#2dd4bf" />
      </linearGradient>
    </defs>
  </svg>
);

/* ──────────────────────────────────────────────
   Fade-up wrapper
   ────────────────────────────────────────────── */

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


/* ══════════════════════════════════════════════
   CONTACT PAGE
   ══════════════════════════════════════════════ */

const ContactPage = () => {
  const { toast } = useToast();

  /* ── form state ── */
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle hash scrolling on mount
  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => {
        scrollToForm();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("access_key", "361badd9-1942-4385-83ab-b4ab56f260da");
    payload.append("subject", `New consultation request — ${formData.name || "Website"}`);
    payload.append("from_name", "MnT Future Website");
    payload.append("name", formData.name);
    payload.append("company", formData.company);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("service", formData.service);
    payload.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Consultation Requested",
          description: "Our team will reach out to you within 24 hours.",
        });
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({
          title: "Could not send",
          description: data.message || "Please try again or email info@mntfuture.com directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── hero parallax ── */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  /* ── process section ref ── */
  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  /* ── mobile detection ── */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main className="relative overflow-hidden bg-white">
      <Navigation />

      {/* ═══════════════════════════════════════
          1 ─ HERO SECTION
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden"
      >
        {/* Animated grid bg */}
        <AnimatedGrid />

        {/* Radial gradient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(14,165,233,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Neural lines */}
        <NeuralLines />

        {/* Background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
          <span className="text-[20vw] font-bold tracking-tighter leading-none text-slate-900">
            CONTACT
          </span>
        </div>

        {/* Content */}
        <motion.div
          style={{ y: isMobile ? 0 : heroY }}
          className="relative z-10 text-center px-5 max-w-3xl mx-auto"
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-6 bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Contact MnT
            </span>
            <div className="h-[1px] w-6 bg-primary" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.05] tracking-tight mb-5"
          >
            Let's Build{" "}
            <span className="text-[#2095F1]">
              Intelligence
            </span>{" "}
            Together
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your goals — we'll architect the solution.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          2 ─ SPLIT CONTACT SECTION
          ═══════════════════════════════════════ */}
      <section id="contact-form" ref={formRef} className="relative py-2 md:py-12 overflow-hidden">
        {/* Subtle mesh bg */}
        <div className="absolute inset-0 bg-soft-mesh opacity-30" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* ── LEFT PANEL (Conversation) ── */}
            <div className="lg:col-span-2 space-y-10">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
                  Start Your{" "}
                  <span className="text-[#2095F1]">
                    AI Journey
                  </span>
                </h2>
              </FadeUp>

              {/* Content with animated accent line */}
              <div className="flex gap-6">
                {/* Animated vertical accent */}
                <div className="relative w-[2px] flex-shrink-0 rounded-full overflow-hidden hidden md:block">
                  <div className="absolute inset-0 bg-slate-100" />
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-enterprise-gradient"
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                  />
                </div>

                <FadeUp delay={0.15} className="space-y-5">
                  <p className="text-slate-600 leading-relaxed">
                    Whether you're launching an enterprise AI initiative or modernizing legacy systems,
                    our consultants work alongside your team to craft a strategy that delivers
                    measurable results.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    From <strong className="text-slate-800">architecture planning</strong> and{" "}
                    <strong className="text-slate-800">AI deployment strategy</strong> to ongoing{" "}
                    <strong className="text-slate-800">enterprise consultation</strong>, we bring
                    deep technical leadership at every stage.
                  </p>
                </FadeUp>
              </div>

              {/* Contact info */}
              <FadeUp delay={0.3} className="space-y-5 pt-2">
                {[
                  {
                    icon: MapPin,
                    text: "3/501 Subash St, Muneeswarar Nagar, Iyer Bunglow, Madurai, Tamilnadu- 625014",
                    href: "https://maps.app.goo.gl/oAoUaeWL7FxUDrYP8",
                  },
                  {
                    icon: Phone,
                    text: "+91 8925845077",
                    href: "tel:+91 8925845077",
                  },
                  {
                    icon: Phone,
                    text: "+91 8220947113",
                    href: "tel:+91 8220947113",
                  },
                  {
                    icon: Mail,
                    text: "mntfuture@gmail.com",
                    href: "mntfuture@gmail.com",
                  },
                  {
                    icon: Mail,
                    text: "info@mntfuture.com",
                    href: "info@mntfuture.com",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.text}
                      href={item.href}
                      className="flex items-center gap-4 group transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors contact-info-glow">
                        {item.text}
                      </span>
                    </a>
                  );
                })}
              </FadeUp>
            </div>

            {/* ── RIGHT PANEL (Glass Form) ── */}
            <FadeUp delay={0.15} className="lg:col-span-3">
              <div className="contact-glass-form rounded-3xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="contact-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="contact-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="contact-label">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="contact-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="contact-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="contact-label">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 …"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown (Custom) */}
                  <div className="space-y-2">
                    <label className="contact-label">Service Interested In</label>
                    <div className="relative" ref={dropdownRef}>
                      {/* Trigger */}
                      <button
                        type="button"
                        onClick={() => setServiceDropdownOpen((o) => !o)}
                        className="contact-input w-full text-left pr-10 cursor-pointer flex items-center justify-between"
                      >
                        <span className={formData.service ? "text-slate-800" : "text-slate-400"}>
                          {formData.service || "Select a service…"}
                        </span>
                        <motion.span
                          animate={{ rotate: serviceDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                        >
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        </motion.span>
                      </button>

                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {serviceDropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="contact-dropdown-panel absolute left-0 right-0 top-[calc(100%+6px)] z-50 py-1.5 rounded-xl max-h-60 overflow-y-auto"
                          >
                            {serviceOptions.map((s) => {
                              const isSelected = formData.service === s;
                              return (
                                <li key={s}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, service: s });
                                      setServiceDropdownOpen(false);
                                    }}
                                    className={`contact-dropdown-item w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${isSelected
                                      ? "text-primary font-semibold bg-primary/5"
                                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      }`}
                                  >
                                    {isSelected && (
                                      <Check className="w-4 h-4 text-primary shrink-0" />
                                    )}
                                    <span className={isSelected ? "" : "pl-7"}>{s}</span>
                                  </button>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="contact-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your project or goals…"
                      className="contact-input resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="contact-btn-primary group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          "Submitting…"
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </span>
                      {/* shimmer overlay */}
                      <span className="contact-btn-shimmer" />
                    </motion.button>

                    {/* <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="contact-btn-outline group"
                    >
                      <Download className="w-4 h-4 group-hover:text-primary transition-colors" />
                      Download Brochure
                    </motion.button> */}
                  </div>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3 ─ PROCESS PREVIEW
          ═══════════════════════════════════════ */}
      {/* <section ref={processRef} className="relative py-20 md:py-28 overflow-hidden bg-slate-50/60">
        <div className="container-custom relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
              How We{" "}
              <span className="text-[#2095F1] italic">
                Engage
              </span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative"> */}
      {/* Connecting line (desktop) */}
      {/* <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-[1px] z-0">
              <motion.div
                className="h-full bg-[#2095F1] origin-left"
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </div>

            {processSteps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.15} className="relative text-center z-10"> */}
      {/* Big faint number */}
      {/* <span className="text-[100px] md:text-[120px] font-display font-bold leading-none text-slate-100 select-none pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2">
                  {step.num}
                </span> */}

      {/* Step dot */}
      {/* <div className="relative mx-auto mb-8 w-10 h-10 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#2095F1]" />
                </div>

                <h3 className="relative text-lg font-display font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="relative text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════
          4 ─ FIND US (GOOGLE MAP)
          ═══════════════════════════════════════ */}
      <section className="relative py-6 md:py-8 overflow-hidden">
        <div className="container-custom relative z-10">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
              Find Us
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-premium border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5437231750034!2d78.12994398088493!3d9.971867364688386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c7cc2ecaecf3%3A0x5610bd9fc2fe6ea5!2sMagizh%20NexGen%20Technologies!5e0!3m2!1sen!2sin!4v1771907594976!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MnT Office Location"
                className="w-full"
              />
              {/* Gradient accent bar */}
              <div className="h-1.5 bg-[#2095F1]" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5 ─ FINAL CTA
          ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Full gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0c2d48] to-slate-900" />

        {/* Animated gradient wave */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="contact-wave-1" />
          <div className="contact-wave-2" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 0.5px, transparent 0.5px), linear-gradient(90deg, #fff 0.5px, transparent 0.5px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Ready to Architect the{" "}
              <span className="text-[#2095F1] italic">
                Future
              </span>
              ?
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
              Partner with engineers who speak your language and build systems that last.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(14,165,233,0.35)" }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToForm}
              className="contact-btn-primary group px-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="contact-btn-shimmer" />
            </motion.button>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
