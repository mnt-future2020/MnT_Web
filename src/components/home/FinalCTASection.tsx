import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[60vh] py-16 md:py-0 flex items-center overflow-hidden bg-slate-900">
            {/* Full-width corporate image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80\u0026w=2000\u0026auto=format\u0026fit=crop"
                    alt="Corporate Building"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="max-w-enterprise mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 md:mb-10 leading-[1.1]"
                    >
                        Ready to architect <br />
                        your next legacy?
                    </motion.h2>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-4 bg-[#2095F1] text-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3"
                            onClick={() => window.location.href = "/contact"}
                        >
                            Start Collaboration
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </motion.button>

                        <p className="text-slate-400 font-medium">
                            Join the world's leading organizations. <br />
                            <span className="text-white">Experience enterprise excellence.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative architectural line */}
            <div className="absolute bottom-0 right-0 w-1/3 h-[2px] bg-[#2095F1] opacity-50" />
        </section>
    );
};

export default FinalCTASection;
