import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, X, Sparkles } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-20 right-0 w-80 enterprise-block p-6 soft-glow border-primary/20 bg-white/90"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 leading-none mb-1">MnT Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>

                        <div className="bg-slate-50/50 rounded-xl p-4 mb-4 border border-slate-100">
                            <p className="text-[13px] text-slate-600 leading-relaxed italic">
                                "Hello! I am your enterprise AI concierge. How can I assist with your
                                digital transformation today?"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <button className="text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-2 group">
                                <Sparkles className="w-3.5 h-3.5" />
                                Analyze my project scope
                            </button>
                            <button className="text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5" />
                                Speak to an expert
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative group w-14 h-14 rounded-2xl bg-white shadow-premium border border-border/20 flex items-center justify-center soft-glow overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? (
                    <X className="w-6 h-6 text-slate-600 relative z-10" />
                ) : (
                    <div className="relative z-10 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary"
                        />
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
