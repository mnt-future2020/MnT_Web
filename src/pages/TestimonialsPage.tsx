import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import p1 from "@/assets/p1.webp";
import p2 from "@/assets/p2.webp";
import p3 from "@/assets/p3.webp";
import p4 from "@/assets/p4.webp";
import p5 from "@/assets/p5.webp";
import p6 from "@/assets/p6.webp";
import p7 from "@/assets/p7.webp";
import p8 from "@/assets/p8.webp";
import p9 from "@/assets/p9.webp";
import clutch from "@/assets/clutch.webp";


// --- Review Data ---
const reviewsRow1 = [
    {
        id: 1,
        name: "Priya Venkatesh",
        role: "Chennai",
        company: "HealthTech Solutions",
        rating: 5,
        text: "MnT didn't just build our app; they architected our future. The AI core they developed reduced our manual effort by 60%.",
        image: p1
    },
    {
        id: 2,
        name: "Chakkaravarthi Balasubramaniyan",
        role: "Australia",
        company: "Precision Systems",
        rating: 5,
        text: "We are happy that we utilised Magizh NexGen Technologies to create our company website in Australia. All the best for the team and happy to recommend them to others.",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Anitha Raj",
        role: "Chennai",
        company: "Smart Manufacturing",
        rating: 4,
        text: "We've seen a 300% increase in operational efficiency since implementing the new AI-driven workflow engine.",
        image: p4
    },
    {
        id: 4,
        name: "Sanjay Kumar",
        role: "Coimbatore",
        company: "EduTech Innovations",
        rating: 4,
        text: "Their team's ability to translate complex business needs into seamless digital experiences is simply outstanding.",
        image: p2
    },
    {
        id: 5,
        name: "Vinoth",
        role: "Vellore",
        company: "Retail Analytics",
        rating: 5,
        text: "Our business functions improved with a user-friendly design and positive customer feedback. MnT's approach to automation is simply unparalleled.",
        image: p3
    }
];

const reviewsRow2 = [
    {
        id: 6,
        name: "Arjun Kannan",
        role: "Delhi",
        company: "Kovai Precision",
        rating: 4,
        text: "MnT didn't just automate our manufacturing floor; they synchronized our entire production ecosystem with intelligence that thinks ahead of the curve.",
        image: p5
    },
    {
        id: 7,
        name: "Meena Lakshmi",
        role: "Puducherry",
        company: "Chennai HealthTech",
        rating: 4,
        text: "The healthcare diagnostics platform they built has scaled our operations significantly. Their team understands the nuances of enterprise healthcare in India.",
        image: p7
    },
    {
        id: 8,
        name: "Praveen Rajendran",
        role: "Banglore",
        company: "Madurai Smart Mfg",
        rating: 5,
        text: "Implementing edge intelligence across our factory floors was a complex task. MnT delivered on time and exceeded our performance benchmarks.",
        image: p6
    },
    {
        id: 9,
        name: "Divya Subramaniam",
        role: "Trichy",
        company: "Trichy EduTech",
        rating: 5,
        text: "Bespoke intelligence at its best. MnT helped us modernize our digital infrastructure, making us the leaders in the regional EduTech space.",
        image: p8
    },
    {
        id: 10,
        name: "Santhosh Kumar",
        role: "Salem",
        company: "Salem Retail Analytics",
        rating: 4,
        text: "Their retail analytics engine transformed how we view customer data. The efficiency gains in our Salem operations have been remarkable.",
        image: p9
    }
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const ClutchLogo = () => (
    <img src={clutch} alt="Clutch" className="w-16 md:w-20 h-auto object-contain" />
);

const ScrollStyles = () => (
    <style>
        {`
            @keyframes scroll-left {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
            }
            .animate-scroll-left {
                animation: scroll-left var(--duration, 40s) linear infinite;
            }
            .animate-scroll-right {
                animation: scroll-right var(--duration, 40s) linear infinite;
            }
            .hover-pause:hover .animate-scroll-left,
            .hover-pause:hover .animate-scroll-right {
                animation-play-state: paused;
            }
        `}
    </style>
);

const RatingCard = ({ platform, rating, count, supportText, avatars }: { platform: 'google' | 'clutch', rating: string, count: string, supportText: string, avatars: string[] }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        className="flex-1 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 group overflow-hidden relative"
    >
        <div className="relative z-10 space-y-6">
            {/* Platform Logo */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 shadow-sm group-hover:scale-105 transition-transform duration-500">
                {platform === 'google' ? <GoogleLogo /> : <ClutchLogo />}
            </div>

            <div className="space-y-3">
                {/* Star Rating */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex gap-1 md:gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="text-lg md:text-xl font-bold text-slate-800">{rating}</span>
                </div>

                {/* Reviews Count */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#111111] tracking-tight">
                    {count}
                </div>

                {/* Supporting Text */}
                <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-sm">
                    {supportText}
                </p>
            </div>

            {/* Bottom Section: Avatars & Verification */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="flex justify-center -space-x-3 mb-3">
                    {avatars.map((img, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                            <img
                                src={img}
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="text-[10px] md:text-[11px] font-black text-primary/80 uppercase tracking-[0.2em] pt-0.5">
                    VERIFIED PARTNERS
                </div>
            </div>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 opacity-0 group-hover:opacity-40 transition-opacity rounded-full blur-3xl -mr-20 -mt-20" />
    </motion.div>
);

const googleAvatars = [p1, p2, p3, p4];
const clutchAvatars = [p5, p6, p7, p8];

const TestimonialCard = ({ review }: { review: typeof reviewsRow1[0] }) => (
    <div className="flex-shrink-0 w-[65vw] sm:w-[320px] md:w-[420px] p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white border border-slate-100/60 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-2 md:gap-6 items-start h-full">
        <div className="flex gap-1 mb-px md:mb-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 md:w-5 md:h-5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
            ))}
        </div>
        <p className="text-[13px] md:text-[18px] text-slate-700 leading-snug md:leading-relaxed font-medium">
            {review.text}
        </p>
        <div className="flex items-center gap-2.5 md:gap-4 mt-auto pt-3 md:pt-6">
            <img src={review.image} loading="lazy" decoding="async" className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover shadow-sm border border-slate-50" alt={review.name} />
            <div>
                <div className="text-[13px] md:text-[17px] font-bold text-slate-900 leading-tight">{review.name}</div>
                <div className="text-[11px] md:text-[14px] font-medium text-slate-500 mt-0.5 md:mt-1">{review.role}</div>
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof reviewsRow1, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full group py-3 md:py-4 items-stretch hover-pause">
            <div
                className={`flex gap-6 md:gap-8 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} items-stretch`}
                style={{ '--duration': `${speed}s` } as React.CSSProperties}
            >
                <div className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-stretch">
                    {items.map((review, i) => (
                        <TestimonialCard key={`orig-${review.id}-${i}`} review={review} />
                    ))}
                </div>
                <div className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-stretch">
                    {items.map((review, i) => (
                        <TestimonialCard key={`dup-${review.id}-${i}`} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TestimonialsPage = () => {
    return (
        <main className="bg-[#fafafa] selection:bg-primary/10 min-h-screen font-sans">
            <Navigation />
            <ScrollStyles />

            {/* Header Section */}
            <section className="pt-40 md:pt-48 pb-16 md:pb-12 overflow-hidden text-center flex flex-col items-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                >
                    Testimonials
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-display font-bold text-[#111111] mb-6 tracking-tight leading-[1.1]"
                >
                    What our <span className="text-[#2095F1]">users say</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-[21px] text-slate-500 max-w-2xl mx-auto font-medium"
                >
                    See what our customers have to say about us
                </motion.p>
            </section>

            {/* Rating Summary Section */}
            <section className="pb-24 px-4 container-custom flex justify-center">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full">
                    <RatingCard
                        platform="google"
                        rating="4.9 / 5"
                        count="512+ Reviews"
                        supportText="Trusted by leading enterprise partners across the Tamil Nadu manufacturing, tech, and healthcare corridors."
                        avatars={googleAvatars}
                    />
                    <RatingCard
                        platform="clutch"
                        rating="4.8 / 5"
                        count="150+ Reviews"
                        supportText="Recognized for excellence in AI implementation and digital transformation for high-growth industrial sectors."
                        avatars={clutchAvatars}
                    />
                </div>
            </section>

            {/* Carousel Section */}
            <section className="pb-32 md:pb-40 relative overflow-hidden">
                <div className="relative w-full overflow-hidden flex flex-col gap-2 md:gap-4 px-0">
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

                    {/* <div className="absolute inset-y-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 flex items-center justify-between z-20 pointer-events-none px-2 md:px-8 opacity-0 md:opacity-100">
                        <button className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#111111] text-white rounded-2xl flex items-center justify-center pointer-events-auto hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        <button className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#111111] text-white rounded-2xl flex items-center justify-center pointer-events-auto hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div> */}

                    <MarqueeRow items={reviewsRow1} direction="left" speed={70} />
                    <MarqueeRow items={reviewsRow2} direction="right" speed={80} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-14 md:py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-[1.1] tracking-tight">
                            Let Your Success <br />
                            Story <span className="text-[#2095F1]">Begin Here</span>
                        </h2>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Join the ranks of the most innovative regional leaders scaling with bespoke intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 px-4 md:px-0">
                            <Link to="/contact" className="px-6 py-4 md:px-12 md:py-6 bg-[#2095F1] text-white rounded-full font-bold text-xs md:text-sm tracking-widest shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto text-center">
                                SCHEDULE CONSULTATION
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TestimonialsPage;
