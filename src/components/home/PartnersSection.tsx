import { motion } from "framer-motion";

// Generate simple text-based SVG logos as reliable placeholders
const getPartnerLogo = (name: string) => {
    // Basic SVG structure with company name
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
            <style>
                text { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-weight: 800; }
            </style>
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="black" letter-spacing="-1">${name}</text>
        </svg>
    `.trim();
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const partners = [
    { name: "TCS", logo: getPartnerLogo("TCS") },
    { name: "Infosys", logo: getPartnerLogo("Infosys") },
    { name: "Wipro", logo: getPartnerLogo("Wipro") },
    { name: "HCLTech", logo: getPartnerLogo("HCLTech") },
    { name: "Reliance", logo: getPartnerLogo("Reliance") },
    { name: "Zoho", logo: getPartnerLogo("Zoho") },
    { name: "Tata", logo: getPartnerLogo("Tata") },
    { name: "Tech Mahindra", logo: getPartnerLogo("Tech Mahindra") },
];

const LogoItem = ({ partner }: { partner: { name: string; logo: string } }) => (
    <div className="group/logo relative w-32 md:w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer">
        <img
            src={partner.logo}
            alt={partner.name}
            className="max-w-full max-h-full object-contain brightness-200 invert group-hover/logo:brightness-100 group-hover/logo:invert-0 transition-all duration-500"
            loading="lazy"
        />
    </div>
);

const PartnersSection = () => {
    return (
        <section id="partners" className="relative py-20 bg-slate-950 overflow-hidden border-y border-white/5">
            {/* ─── Background Effects ─── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-slate-950 to-slate-950 opacity-100" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(218, 207, 207, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(216, 205, 205, 0.43) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[24px] font-bold uppercase tracking-[0.3em] text-[#2095F1] mb-2 block"
                    >
                        Trusted by Industry Leaders
                    </motion.span>
                </div>

                {/* ─── Infinite Marquee ─── */}
                <div className="relative w-full">
                    {/* Gradient Masks for fade effect on edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

                    <div className="flex overflow-hidden">
                        {/* Marquee Track - Duplicated for seamless loop */}
                        <motion.div
                            className="flex gap-16 md:gap-32 items-center shrink-0 py-4 pr-16 md:pr-32"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 40, // Slower motion
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            {/* Set 1 */}
                            {partners.map((p, i) => (
                                <LogoItem key={`set1-${i}`} partner={p} />
                            ))}
                            {/* Set 2 (Duplicate) */}
                            {partners.map((p, i) => (
                                <LogoItem key={`set2-${i}`} partner={p} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
