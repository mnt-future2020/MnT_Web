import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
    className?: string;
    showDots?: boolean;
    sections?: string[];
}

const ScrollProgress = ({
    className = "",
    showDots = true,
    sections = [],
}: ScrollProgressProps) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        let ticking = false;
        const run = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
            setScrollProgress(progress);

            if (sections.length > 0) {
                const sectionElements = sections.map((id) => document.getElementById(id));
                const currentSection = sectionElements.findIndex((el) => {
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
                });
                if (currentSection !== -1) {
                    setActiveSection(currentSection);
                }
            }
            ticking = false;
        };
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(run);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        run(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (index: number) => {
        const element = document.getElementById(sections[index]);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className={`fixed top-0 left-0 right-0 h-1 bg-[#2095F1] z-50 origin-left ${className}`}
                style={{
                    scaleX: scrollProgress / 100,
                }}
                initial={{ scaleX: 0 }}
            />

            {/* Section Dots */}
            {showDots && sections.length > 0 && (
                <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
                    {sections.map((section, index) => (
                        <motion.button
                            key={section}
                            onClick={() => scrollToSection(index)}
                            className="group relative"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Scroll to ${section}`}
                        >
                            {/* Dot */}
                            <motion.div
                                className={`w-3 h-3 rounded-full border-2 transition-colors ${activeSection === index
                                    ? "border-primary bg-primary"
                                    : "border-muted-foreground/30 bg-transparent"
                                    }`}
                                animate={{
                                    scale: activeSection === index ? 1.2 : 1,
                                }}
                            />

                            {/* Glow Effect */}
                            {activeSection === index && (
                                <motion.div
                                    className="absolute inset-0 w-3 h-3 rounded-full bg-primary blur-md"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}

                            {/* Tooltip */}
                            <motion.div
                                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-card border border-border text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                initial={{ x: 10 }}
                                whileHover={{ x: 0 }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </motion.div>
                        </motion.button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ScrollProgress;
