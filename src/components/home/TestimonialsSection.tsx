import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { useRef } from "react";
import p1 from "@/assets/p1.webp";
import p2 from "@/assets/p2.webp";
import p4 from "@/assets/p4.webp";


const testimonials = [
    {
        id: 1,
        quote: "MnT didn't just build our app; they architected our future. The AI core they developed reduced our manual effort by 60%.",
        highlight: "completely transformed",
        author: "Priya Venkatesh",
        role: "Chennai",
        image: p1
    },
    {
        id: 2,
        quote: "We are happy that we utilised Magizh NexGen Technologies to create our company website in Australia. All the best for the team and happy to recommend them to others.",
        highlight: "game-changer",
        author: "Chakkaravarthi Balasubramaniyan",
        role: "Australia",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "We've seen a 300% increase in operational efficiency since implementing the new AI-driven workflow engine.",
        highlight: "300% increase",
        author: "Anitha Raj",
        role: "Madurai",
        image: p4
    },
    {
        id: 4,
        quote: "Their team's ability to translate complex business needs into seamless digital experiences is simply outstanding.",
        highlight: "seamless experiences",
        author: "Sanjay Kumar",
        role: "Coimbatore",
        image: p2
    }
];

const TestimonialCard = ({ t, index, isBackground = false }: { t: any, index: number, isBackground?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isBackground ? 0.4 : 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={!isBackground ? { y: -5, transition: { duration: 0.3 } } : {}}
            className={`relative p-8 rounded-2xl bg-white border border-slate-100 shadow-soft transition-all duration-300 ${isBackground ? 'blur-[1px] scale-95 opacity-50 grayscale' : 'hover:shadow-premium hover:border-primary/20 bg-gradient-to-br from-white to-slate-50/50'}`}
        >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-primary/10">
                <Quote className="w-10 h-10 fill-current" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                        <img src={t.image} alt={t.author} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    {!isBackground && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2095F1] rounded-full flex items-center justify-center border-2 border-white">
                            <Quote className="w-2.5 h-2.5 text-white fill-current" />
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="font-display font-bold text-slate-900 leading-tight">{t.author}</h4>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.role}</p>
                </div>
            </div>

            {/* Content */}
            <p className="text-slate-600 leading-relaxed relative z-10">
                "{t.quote.split(t.highlight).map((part: string, i: number, arr: string[]) => (
                    <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                            <span className="relative inline-block px-2 py-0.5 mx-1 rounded-md bg-[#2095F1]/5 text-slate-900 font-semibold border border-primary/10 group-hover:border-primary/20 transition-colors">
                                {t.highlight}
                            </span>
                        )}
                    </span>
                ))}"
            </p>
        </motion.div>
    );
};

const CenterTrustBadge = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 flex flex-col items-center justify-center text-center p-8"
        >
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-premium transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Floating Avatars */}
                <div className="flex justify-center -space-x-4 mb-4">
                    {[
                        p4,
                        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop",
                        p1,
                        p2
                    ].map((img, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                            <img
                                src={img}
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-4xl font-display font-bold text-slate-900">4.9</span>
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                </div>

                <p className="text-sm font-semibold text-slate-500 mb-6">
                    from <span className="text-slate-900">250K+ reviews</span>
                </p>

                <button className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-[#2095F1] text-white text-xs md:text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group/btn">
                    View all testimonials
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section id="testimonials" ref={containerRef} className="relative py-10 md:py-12 bg-slate-50/50 overflow-hidden">
            {/* Background Typography */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    style={{ x: y1, opacity }}
                    className="absolute top-20 left-0 text-[10rem] md:text-[15rem] leading-none font-bold text-slate-200/40 whitespace-nowrap blur-[2px]"
                >
                    TRUSTED
                </motion.div>
                <motion.div
                    style={{ x: y2, opacity }}
                    className="absolute bottom-20 right-0 text-[10rem] md:text-[15rem] leading-none font-bold text-slate-200/40 whitespace-nowrap blur-[2px]"
                >
                    RESULTS
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-6 md:mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block"
                    >
                        Client Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
                    >
                        Trusted by <span className="text-[#2095F1]">Industry Leaders</span>
                    </motion.h2>
                </div>

                {/* 3-Layer Layout */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
                        {/* Column 1 */}
                        <div className="space-y-8 pt-12">
                            <TestimonialCard t={testimonials[0]} index={0} />
                            <TestimonialCard t={testimonials[2]} index={2} isBackground />
                        </div>

                        {/* Column 2 (Center) */}
                        <div className="relative py-12">
                            <CenterTrustBadge />
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-8 pb-12">
                            <TestimonialCard t={testimonials[3]} index={3} isBackground />
                            <TestimonialCard t={testimonials[1]} index={1} />
                        </div>
                    </div>

                    {/* Tablet/Mobile Layout */}
                    <div className="lg:hidden flex flex-col gap-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <TestimonialCard t={testimonials[0]} index={0} />
                            <TestimonialCard t={testimonials[1]} index={1} />
                        </div>

                        <CenterTrustBadge />

                        <div className="grid md:grid-cols-2 gap-6 opacity-80 scale-95 origin-top">
                            <TestimonialCard t={testimonials[2]} index={2} />
                            <TestimonialCard t={testimonials[3]} index={3} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
