import { motion } from "framer-motion";

const blogs = [
    {
        title: "The Architecture of Tomorrow: Scaling AI Safely",
        category: "Insights",
        date: "Feb 14, 2026",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80\u0026w=1000\u0026auto=format\u0026fit=crop"
    },
    {
        title: "Why Minimalist Infrastructure is the Key to Agility",
        category: "Strategy",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80\u0026w=1000\u0026auto=format\u0026fit=crop"
    },
    {
        title: "Deciphering Modern Enterprise Ecosystems",
        category: "Technical",
        date: "Feb 08, 2026",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80\u0026w=1000\u0026auto=format\u0026fit=crop"
    }
];

const BlogsSection = () => {
    return (
        <section className="py-20 md:py-24 bg-slate-50/50">
            <div className="max-w-enterprise mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block"
                        >
                            Knowledge Base
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900">
                            Latest from the <span className="text-[#2095F1] italic">Lab.</span>
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-2 hover:text-primary hover:border-primary transition-colors duration-300"
                    >
                        View All Reports
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {blogs.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-8 relative">
                                <motion.img
                                    src={b.image}
                                    alt={b.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                        {b.category}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mb-4 font-bold">{b.date}</p>
                            <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                                {b.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
