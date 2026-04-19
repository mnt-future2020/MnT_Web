import { useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    ArrowRight, ArrowUpRight, ChevronDown, CheckCircle2,
    Bot, Workflow, Smartphone, Database, Sparkles, Shield,
    Zap, BarChart3, Globe2, Brain, MessageSquare, Network,
    Code, Layout, Play, Plus, Minus
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Visual Components (Reusing from ServicesPage)
import AIEmployeesVisual from "@/components/services/AIEmployeesVisual";
import SmartAutomationVisual from "@/components/services/SmartAutomationVisual";
import AIAppsVisual from "@/components/services/AIAppsVisual";
import KnowledgeBaseVisual from "@/components/services/KnowledgeBaseVisual";
import GenerativeAIVisual from "@/components/services/GenerativeAIVisual";
import { useState } from "react";

const visualMap: Record<string, React.FC> = {
    "ai-employees": AIEmployeesVisual,
    "smart-automation": SmartAutomationVisual,
    "ai-apps": AIAppsVisual,
    "knowledge-ai": KnowledgeBaseVisual,
    "generative-ai": GenerativeAIVisual,
};

const SectionHeading = ({ sub, title, center = false }: { sub: string, title: string, center?: boolean }) => (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
        <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
        >
            {sub}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight"
        >
            {title}
        </motion.h2>
    </div>
);

const ServiceDetailPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();
    const data = serviceId ? servicesData[serviceId] : null;

    useEffect(() => {
        if (!data && serviceId) {
            navigate("/services");
        }
        window.scrollTo(0, 0);
    }, [data, serviceId, navigate]);

    if (!data) return null;

    const Visual = visualMap[data.id] || AIEmployeesVisual;

    return (
        <main className="bg-white selection:bg-primary/10">
            <Navigation />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-28 pb-18 md:pt-24 md:pb-22 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_70%)]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                                SERVICE
                            </span>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
                                {data.name}
                            </h1>
                            <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                                {data.summary}
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Link to="/contact">
                                    <button className="px-10 py-5 bg-[#2095F1] text-white rounded-full font-bold text-sm tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                                        SCHEDULE CONSULTATION
                                    </button>
                                </Link>
                                {/* <button className="px-10 py-5 border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3">
                                    DOWNLOAD BROCHURE <BarChart3 className="w-4 h-4" />
                                </button> */}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative aspect-square md:aspect-4/3 flex items-center justify-center"
                        >
                            <div className="relative w-full max-w-lg">
                                <Visual />
                                {/* Ambient glow */}
                                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Detailed Description */}
            <section className="py-20 bg-slate-50/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-slate lg:prose-xl max-w-none"
                        >
                            <h2 className="text-3xl text-primary font-bold mb-6">Overview</h2>
                            <p className="text-slate-600 text-primary leading-relaxed text-lg">
                                {data.description.overview}
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl text-primary font-display font-bold  mb-4">How it works</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {data.description.howItWorks}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl text-primary font-display font-bold mb-4">Designed For</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {data.description.designedFor}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Challenges We Address */}
            <section className="py-24">
                <div className="container-custom">
                    <SectionHeading sub="ALIGNMENT" title="Challenges We Address" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {data.challenges.map((challenge, i) => {
                            const Icon = challenge.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex gap-6"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed">
                                            {challenge.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4️⃣ What We Deliver */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">FRAMEWORK</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">What We <span className="text-[#2095F1]">Deliver</span> </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.deliverables.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Business Impact */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <SectionHeading sub="VALUE" title="Business Impact" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 text-center relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#2095F1] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <h3 className="text-5xl font-display font-bold text-primary mb-2">
                                    {benefit.metric}
                                </h3>
                                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">{benefit.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Use Cases */}
            {data.useCases && (
                <section className="py-20 bg-slate-50">
                    <div className="container-custom">
                        <SectionHeading sub="VALIDATED" title="Industry Use Cases" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {data.useCases.map((useCase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
                                >
                                    <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[#2095F1] opacity-5 group-hover:opacity-10 transition-opacity" />
                                        <BarChart3 className="w-12 h-12 text-slate-300 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="p-8">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 block">{useCase.industry}</span>
                                        <p className="text-slate-700 font-medium leading-relaxed">{useCase.scenario}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7️⃣ Why Choose MnT */}
            <section className="py-20 overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeading sub="DIFFERENTIATION" title="Why Choose MnT" />
                            <div className="space-y-8">
                                {data.whyMnT.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-500 leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full -z-10" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative group w-full max-w-lg mx-auto"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}robomnt2.webp`}
                                        className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <SectionHeading sub="CLARITY" title="Frequently Asked Questions" center />
                    <div className="max-w-3xl mx-auto space-y-4">
                        {data.faqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ Final CTA Section */}
            <section className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.2),transparent_70%)]" />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"
                    />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                            Ready to Transform Your <br />
                            <span className="text-[#2095F1]">
                                {data.name}?
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Schedule a technical briefing with our AI architects to map out your infrastructure transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact">
                                <button className="px-12 py-6 bg-[#2095F1] text-white rounded-full font-bold text-sm tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-4 group">
                                    TALK TO AN EXPERT
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            {/* <button className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all">
                                REQUEST PROPOSAL
                            </button> */}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

const FAQItem = ({ faq, index }: { faq: { question: string, answer: string }, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="w-4 h-4 text-slate-600" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-8 text-slate-500 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ServiceDetailPage;
