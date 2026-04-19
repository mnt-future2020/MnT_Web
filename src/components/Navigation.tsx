import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/mntlogo.webp";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-md border-b border-border/10 shadow-premium"
          : "bg-transparent"
          }`}
      >
        <div className="w-full max-w-enterprise mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20 md:h-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <Link to="/" className="relative z-10 flex items-center">
              <img src={logo} alt="MNT Future" className="h-7 md:h-9 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link
                  to={link.href}
                  className={`relative text-[13px] uppercase tracking-wider font-semibold transition-colors line-reveal ${location.pathname === link.href
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="hidden lg:flex magnetic-btn text-[11px] font-bold uppercase tracking-widest px-8 py-2.5"
            >
              <span>Get Started</span>
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden relative z-10 p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Compact Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-b-3xl border-t border-slate-100 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col py-8 px-8 space-y-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-xl font-bold tracking-tight transition-all ${location.pathname === link.href
                        ? "text-primary translate-x-2"
                        : "text-slate-800 hover:text-primary hover:translate-x-2"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 bg-[#2095F1] text-white rounded-xl flex items-center justify-center font-bold text-sm tracking-widest shadow-lg shadow-primary/20"
                  >
                    GET STARTED
                  </Link>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 opacity-60">
                    Magizh NexGen Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for outside click */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[90] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
