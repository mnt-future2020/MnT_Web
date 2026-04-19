import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Information Provided Directly by You",
        content: `• Identity Data: Name, company/organization name, email address, phone number, and physical address
• Account Registration Data: Username and password when you register for an account
• Business Information: Details about your business, including other employees, owners, directors, officers, or contractors
• Payment Information: Financial data such as bank account or credit card details, required for processing payments for our products and services
• Recruitment Information: If you apply for a job with us, we may collect your resume, educational qualifications, professional references, and related details
• Communication Data: Information provided when you contact us for support, inquiries, or feedback.`,
      },
      {
        subtitle: "Information Collected Automatically",
        content: `• Usage Data: Information about how you use our Services, including browser type, operating system, IP address, pages visited, and time spent on our websites
• Device Data: Information about the device you use to access our Services, such as device ID, model, and manufacturer
• Cookies and Tracking Technologies: We may use cookies, web beacons, and similar tracking technologies to enhance your experience. Please refer to our Cookie Policy for more details.`,
      },
    ],
  },
  {
    title: "Use of Information",
    content: `We use the information we collect for the following purposes:

• To Provide Services: To deliver and improve our Services, process transactions, and manage your account
• Customer Support: To respond to your inquiries, provide support, and resolve issues
• Marketing: To send promotional emails, newsletters, and updates about our products and services (subject to your consent where required)
• Recruitment: To process job applications and manage recruitment activities
• Compliance and Legal Obligations: To comply with applicable laws, regulations, and legal processes
• Research and Development: To conduct data analysis, improve our Services, and develop new products and features.`,
  },
  {
    title: "Disclosure of Information",
    content: `We may disclose your personal information to third parties in the following circumstances:

• Service Providers: We may share your information with trusted service providers who perform services on our behalf, such as hosting, payment processing, analytics, and marketing
• Business Partners: We may share information with business partners to offer you certain products or services
• Compliance with Laws: We may disclose information if required by law or in response to valid legal requests
• Business Transfers: In the event of a merger, acquisition, or sale of our assets, your information may be transferred to the new entity.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.`,
  },
  {
    title: "Your Rights",
    content: `Under Indian law, you have the following rights concerning your personal information:

• Access and Correction: You may request access to and correction of your personal information
• Withdrawal of Consent: You may withdraw your consent to the processing of your personal information at any time
• Grievance Redressal: You have the right to lodge a complaint with our Grievance Officer if you believe your privacy rights have been violated.

To exercise your rights, please contact us at info@mntfuture.com`,
  },
  {
    title: "Children's Privacy",
    content: `Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete such information.`,
  },
  {
    title: "International Data Transfers",
    content: `If you are accessing our Services from outside India, please be aware that your information may be transferred to, stored, and processed in India. By using our Services, you consent to the transfer of your information to India.`,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically for any updates.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: info@mntfuture.com
Address: 3/501, Subash Street, Muneswaran Nagar, Iyer Bungalow, Madurai - 625014`,
  },
];

const PrivacyPolicyPage = () => {
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
        title="Privacy Architecture & Data Protocols"
        titleHighlight="Privacy"
        subtitle="Our comprehensive framework for the safeguarding and ethical governance of organizational data."
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
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Data Protocols</h4>
                  <div className="h-[2px] w-8 bg-primary/20" />
                </div>
                <nav className="flex flex-col gap-4">
                  {sections.map((section, idx) => (
                    <a
                      key={section.title}
                      href={`#section-${idx}`}
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
                {/* Intro Statement */}
                <div className="relative mb-20">
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-primary/20 pl-8">
                    Magizh Nextgen Technologies Private Limited ("MNT", "our", "us", or "we") is committed to safeguarding your privacy. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you visit or use our Services.
                  </p>
                </div>

                {/* Dynamic Policy Sections (Flowing Layout) */}
                <div className="space-y-32">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      id={`section-${index}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="group relative"
                    >
                      {/* Section Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                        <div className="relative h-12 w-12 shrink-0 flex items-center justify-center border border-slate-100 rounded-xl">
                          <span className="text-2xl font-display font-bold text-slate-200 absolute inset-0 flex items-center justify-center pointer-events-none">{String(index + 1).padStart(2, '0')}</span>
                          <div className="h-1.5 w-1.5 rounded-full bg-primary relative z-10" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                          {section.title}
                        </h2>
                      </div>

                      {/* Section Content */}
                      <div className="relative">
                        {section.subsections ? (
                          <div className="space-y-16">
                            {section.subsections.map((sub, subIndex) => (
                              <div key={subIndex} className="space-y-6">
                                <div className="flex items-center gap-4">
                                  <div className="h-[1px] w-6 bg-primary/30" />
                                  <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                                    {sub.subtitle}
                                  </h3>
                                </div>
                                <div className="text-slate-500 leading-relaxed whitespace-pre-line font-medium text-lg md:text-xl md:pl-10">
                                  {sub.content}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-slate-500 leading-relaxed whitespace-pre-line font-medium text-lg md:text-xl md:pl-10">
                            {section.content}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3 ─ FINAL CONTACT CTA
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-soft-mesh opacity-10" />
        <div className="container-custom relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Have questions about our <br />
            <span className="text-[#2095F1] italic">Data Governance?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our legal compliance team is ready to provide clarity on our architectural protocols and privacy safeguards.
          </p>
          <div className="pt-8">
            <a
              href="mailto:info@mntfuture.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold tracking-widest text-[10px] uppercase hover:scale-105 transition-transform"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;