import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/mntlogo.webp";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Employees & Digital Workforce", href: "/services/ai-employees" },
    { name: "Smart Business Automation", href: "/services/smart-automation" },
    { name: "AI-Powered Web & Mobile Apps", href: "/services/ai-apps" },
    { name: "Enterprise Knowledge Base", href: "/services/knowledge-base" },
    { name: "Generative AI for Marketing", href: "/services/generative-ai" },
  ],
  industries: [
    { name: "iSuite AI", href: "https://www.isuite.ai/" },
    { name: "iSuite CRM", href: "https://www.isuite.io/" },
    { name: "iSchool", href: "/products" },
    { name: "iHospital", href: "/products" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/mntfuture/", label: "Facebook" },

  { icon: Instagram, href: "https://www.instagram.com/mnt_future", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/mntfuture/", label: "LinkedIn" },
];

const policyLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Payment Policy", href: "/payment-policy" },
];

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-border/20 pt-10 pb-6 overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-8"
            >
              <Link to="/">
                <img src={logo} alt="MNT Future" className="h-9 w-auto" />
              </Link>
            </motion.div>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
              We design and engineer bespoke digital experiences that empower enterprises
              to lead in the age of intelligence.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl border border-border/40 bg-white shadow-premium flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-500 hover:text-primary transition-all duration-300 text-[15px] inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-500 hover:text-primary transition-all duration-300 text-[15px] inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 mb-4">Ecosystem</h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-500 hover:text-primary transition-all duration-300 text-[15px] inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/20 flex flex-col lg:flex-row items-center justify-between gap-2">
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Magizh NexGen Technologies. Redefining Digital Possibility.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {policyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-slate-400 hover:text-primary transition-colors font-medium border-b border-transparent hover:border-primary/30"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
