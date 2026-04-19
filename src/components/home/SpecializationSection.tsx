import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Cpu } from "lucide-react";

const features = [
    {
        title: "Elite Expertise",
        desc: "A handpicked team of senior architects and AI specialists focused on high-impact results.",
        icon: Shield,
        color: "primary"
    },
    {
        title: "Scalable Innovation",
        desc: "We build systems designed to evolve, ensuring your technology never becomes a bottleneck.",
        icon: Zap,
        color: "secondary"
    },
    {
        title: "AI-Driven Growth",
        desc: "Leveraging proprietary intelligence models to unlock deep efficiency and new revenue streams.",
        icon: Cpu,
        color: "primary"
    },
    {
        title: "Strategic Resolution",
        desc: "Beyond code, we provide the architectural clarity needed for complex business challenges.",
        icon: TrendingUp,
        color: "secondary"
    }
];

const SpecializationSection = () => {
    return (
        <section id="why-us" className="relative py-20 md:py-24 bg-slate-50/50">
            <div className="max-w-enterprise mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Bold Statements */}
                    <div className="relative">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 block"
                        >
                            Why MnT
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-medium leading-tight text-slate-900 mb-12"
                        >
                            Engineering trust at the <br />
                            <span className="text-[#2095F1] italic">intersection of AI and Art.</span>
                        </motion.h2>

                        <div className="space-y-12">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-${f.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <f.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h4>
                                        <p className="text-slate-500 leading-relaxed max-w-sm">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract representation */}
                    <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px] flex items-center justify-center">
                        {/* Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/5 rounded-full blur-[80px]" />

                        {/* Floating Abstract Shapes */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className={`absolute border border-slate-200 rounded-[40%] opacity-[0.4]`}
                                    style={{
                                        width: (80 - i * 15) + "%",
                                        height: (80 - i * 15) + "%",
                                    }}
                                />
                            ))}

                            {/* Central Core */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="relative z-10 w-32 h-32 rounded-full bg-white shadow-huge flex items-center justify-center border border-slate-100/50 backdrop-blur-sm"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#2095F1] opacity-[0.1] absolute animate-ping" />
                                <Cpu className="w-10 h-10 text-primary" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecializationSection;
