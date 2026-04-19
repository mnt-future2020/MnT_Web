import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Ownership & Copyright",
    content: `All content on this website is owned by Magizh NextGen Technologies (MNT). Users are permitted to access and use this content for personal, non-commercial purposes only. Any reproduction, modification, or distribution of website materials requires prior written consent from MNT.`,
  },
  {
    title: "Trademarks",
    content: `MNT's trademarks, logos, and product names are protected by applicable intellectual property laws. No right or license to use these is granted unless explicitly authorized.`,
  },
  {
    title: "User Conduct",
    content: `Users must adhere to all applicable laws and refrain from:

• Posting illegal, defamatory, or objectionable content
• Impersonating others or misrepresenting affiliations
• Uploading harmful software (viruses, malware)
• Engaging in unauthorized advertising or solicitation.`,
  },
  {
    title: "Content Responsibility",
    content: `By submitting content to the website, users grant MNT a royalty-free, perpetual license to use, modify, and display the content. Users are responsible for ensuring that their submissions do not infringe third-party rights or violate any laws.`,
  },
  {
    title: "Limitation of Liability",
    content: `MNT is not liable for any direct, indirect, or consequential damages resulting from website use. Users agree to use the website at their own risk.`,
  },
  {
    title: "Privacy & Data Protection",
    content: `MNT complies with government regulations on data privacy. Personal information collected through the website is protected and used only for legitimate purposes as outlined in our Privacy Policy.`,
  },
  {
    title: "Account Termination",
    content: `MNT reserves the right to terminate or suspend user accounts for violations of these Terms & Conditions without prior notice.`,
  },
  {
    title: "Governing Law",
    content: `These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Chennai.`,
  },
  {
    title: "Amendments",
    content: `MNT may update these Terms & Conditions without prior notice. Continued use of the website signifies acceptance of the updated terms.`,
  },
];

const TermsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <main ref={containerRef} className="relative bg-slate-50 selection:bg-primary/10 overflow-x-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════
          1 ─ PREMIUM HERO SECTION
          ═══════════════════════════════════════ */}
      <PageHero
        badge="Legal Framework"
        title="Terms of Engagement & Digital Governance"
        titleHighlight="Engagement"
        subtitle="The formal collaborative protocols governing the professional relationship between MNT and our global partners."
        variant="legal"
        centered={true}
      />

      {/* ═══════════════════════════════════════
          2 ─ CONTENT SECTION WITH SIDEBAR
          ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-24">
        {/* Structural Accents */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/2 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-40" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-40" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">

            {/* 2a ─ Sticky Sidebar (Box Table TOC) */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-32 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm space-y-8">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Service Terms</h4>
                  <div className="h-[2px] w-8 bg-primary/20" />
                </div>
                <nav className="flex flex-col gap-4">
                  {sections.map((section, idx) => (
                    <a
                      key={section.title}
                      href={`#term-${idx}`}
                      className="group flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-primary transition-colors py-1"
                    >
                      <span className="text-[10px] tabular-nums font-mono opacity-40 group-hover:opacity-100">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="truncate border-b border-transparent group-hover:border-primary/20 transition-all">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* 2b ─ Main Content Area */}
            <div className="flex-1 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-24 pb-32"
              >
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    id={`term-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative"
                  >
                    {/* Item Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className="relative h-12 w-12 shrink-0 flex items-center justify-center border border-slate-100 rounded-xl">
                        <span className="text-2xl font-display font-bold text-slate-200 absolute inset-0 flex items-center justify-center pointer-events-none">{String(index + 1).padStart(2, '0')}</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary relative z-10" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    {/* Item Content */}
                    <div className="text-slate-500 leading-relaxed whitespace-pre-line font-medium text-lg md:text-xl md:pl-10">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3 ─ FINAL CTA
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-soft-mesh opacity-10" />
        <div className="container-custom relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Ready to initiate a <br />
            <span className="text-[#2095F1] italic">Collaborative Partnership?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our engagement models are designed for long-term scalability and architectural integrity.
          </p>
          <div className="pt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold tracking-widest text-[10px] uppercase hover:scale-105 transition-transform"
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsPage;