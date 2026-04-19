import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
    return (
        <section id="video" className="relative py-14 md:py-24 bg-slate-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>

            <div className="max-w-enterprise mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 block"
                        >
                            Industry Impact
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-display font-bold leading-tight text-white mb-8"
                        >
                            See how we define the <br />
                            <span className="text-[#2095F1]">future of enterprise</span>
                        </motion.h2>

                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-lg">
                            Through strategic AI integration and bespoke software architecture,
                            we've enabled global organizations to scale 10x faster while
                            reducing operational complexity by 40%.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-5 py-3 bg-[#2095F1] text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            onClick={() => window.location.href = "/contact"}
                        >
                            Read Success Stories
                        </motion.button>
                    </div>

                    {/* Right: Video Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        {/* Thumbnail Image */}
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80\u0026w=2000\u0026auto=format\u0026fit=crop"
                            alt="Corporate Success"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300"
                            >
                                <Play className="w-8 h-8 text-white fill-white" />
                            </motion.div>
                        </div>

                        {/* Micro-label */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Watch Case Study</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
