import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "No Refund Policy",
    content: `At Magizh Nextgen Technologies, we reserve the right not to offer refunds for any services. All service details will be clearly outlined in the contract, allowing clients to make necessary amendments before signing. Once a contract is signed, we invest resources to fulfill the agreed services and therefore cannot issue refunds.

Our projects require significant resources to achieve milestones. We prioritize quality and invest time and effort into developing project concepts.

While we strive to achieve the best possible outcomes, we cannot guarantee specific Google rankings, as search engine algorithms are outside our control.`,
  },
  {
    title: "Information We Collect",
    content: `Personal Information: We collect personal information such as your name, billing address, payment details, and transaction data when you use our payment gateway.

Non-Personal Information: We may collect non-personal information such as your IP address, browser type, and transaction analytics.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to process payments, verify transactions, and prevent fraud. Your information may also be used for customer support and to enhance the security of our services.`,
  },
  {
    title: "Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your experience and maintain security during the payment process.

You can control your cookie preferences through your browser settings, but disabling cookies may affect the functionality of the payment gateway.`,
  },
  {
    title: "Data Sharing and Disclosure",
    content: `We do not sell or rent your personal information to third parties.

We may share your information with third-party financial institutions, fraud detection services, and regulatory authorities as necessary for processing payments and complying with legal obligations.

We implement encryption and other security measures to protect your personal and payment information during transmission and storage.

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, update, or delete your personal information.

You can contact us to exercise any of these rights.`,
  },
  {
    title: "Third-Party Services",
    content: `Our payment gateway integrates with third-party financial institutions and services. These third parties may have their own privacy policies that govern the handling of your information.`,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.`,
  },
];

const PaymentPolicyPage = () => {
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
        title="Fiscal Excellence & Transactional Ethics"
        titleHighlight="Ethics"
        subtitle="Our institutional procedures for secure, transparent, and efficient financial interactions."
        variant="legal"
        centered={true}
      />

      {/* ═══════════════════════════════════════
          2 ─ CONTENT SECTION WITH SIDEBAR
          ═══════════════════════════════════════ */}
      <section className="relative py-10 md:py-18">
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
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Payment Framework</h4>
                  <div className="h-[2px] w-8 bg-primary/20" />
                </div>
                <nav className="flex flex-col gap-4">
                  {sections.map((section, idx) => (
                    <a
                      key={section.title}
                      href={`#payment-${idx}`}
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
                className="space-y-16 pb-14"
              >
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    id={`payment-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative"
                  >
                    {/* Item Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <div className="relative h-12 w-12 shrink-0 flex items-center justify-center border border-slate-100 rounded-xl">
                        <span className="text-2xl font-display font-bold text-slate-200 absolute inset-0 flex items-center justify-center pointer-events-none">{String(index + 1).padStart(2, '0')}</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-primary relative z-10" />
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
            Seamless <br />
            <span className="text-[#2095F1]">Transactional Engineering</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our payment protocols prioritize security, efficiency, and full architectural transparency.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="px-5 py-4 bg-[#2095F1] text-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3"
            >
              Contact Support
            </a>
            {/* <a
              href="mailto:info@mntfuture.com"
              className="inline-flex items-center gap-3 px-10 py-5 border border-white/20 text-white rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-white/5 transition-colors"
            >
              Email Finance Team
            </a> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PaymentPolicyPage;