import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── DOODLE 1: Business struggling ───
const BusinessProblemDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Desk */}
        <motion.path d="M20 95 L120 95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25 }} />
        <motion.path d="M30 95 L30 115 M110 95 L110 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.1 }} />
        {/* Laptop on desk */}
        <motion.path d="M50 95 L50 78 L90 78 L90 95" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.2 }} />
        <motion.rect x="52" y="80" width="36" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.3 }} />
        {/* Red declining chart on screen */}
        <motion.path d="M56 90 L62 88 L68 91 L74 89 L80 92 L84 91" stroke="hsl(var(--destructive))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.35, delay: 0.4 }} />
        <motion.path d="M80 92 L84 91 L82 88" stroke="hsl(var(--destructive))" strokeWidth="1.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.7 }} />
        {/* Person sitting — head */}
        <motion.circle cx="70" cy="55" r="10" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.15 }} />
        {/* Worried eyebrows */}
        <motion.path d="M64 51 L67 53 M73 53 L76 51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.35 }} />
        {/* Eyes */}
        <motion.circle cx="66" cy="54" r="1.2" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.3 }} />
        <motion.circle cx="74" cy="54" r="1.2" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.3 }} />
        {/* Frown */}
        <motion.path d="M65 59 Q70 63 75 59" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.4 }} />
        {/* Body hunched over */}
        <motion.path d="M70 65 L70 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.25 }} />
        {/* Hands on head in stress */}
        <motion.path d="M70 70 L58 60 M70 70 L82 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.3 }} />
        {/* Stress lines around head */}
        <motion.path d="M52 48 L48 44 M88 48 L92 44 M70 40 L70 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.6 }} />
        {/* Scattered papers on desk */}
        <motion.rect x="28" y="85" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(-8 34 89)" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.7 }} />
        <motion.rect x="95" y="84" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(5 102 88)" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.75 }} />
        {/* Floating question marks */}
        <motion.text x="38" y="42" fontSize="14" fontFamily="serif" fill="currentColor" opacity="0" initial={{ opacity: 0, y: 5 }} animate={isActive ? { opacity: [0, 0.6, 0.6], y: [5, 0, 0] } : {}} transition={{ delay: 0.8, duration: 0.2 }} >?</motion.text>
        <motion.text x="95" y="38" fontSize="11" fontFamily="serif" fill="currentColor" opacity="0" initial={{ opacity: 0, y: 5 }} animate={isActive ? { opacity: [0, 0.4, 0.4], y: [5, 0, 0] } : {}} transition={{ delay: 0.9, duration: 0.2 }} >?</motion.text>
        {/* Coffee cup */}
        <motion.path d="M100 88 L100 95 L108 95 L108 88 M108 90 L112 90 L112 93 L108 93" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.8 }} />
        {/* Steam from coffee */}
        <motion.path d="M102 86 Q103 83 104 86 M106 86 Q107 82 108 86" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 1.0 }} />
    </svg>
);

// ─── DOODLE 2: Team brainstorming ───
const TeamThinkingDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Round meeting table */}
        <motion.ellipse cx="70" cy="90" rx="45" ry="12" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.35 }} />
        <motion.path d="M70 102 L70 120" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.15 }} />
        <motion.path d="M55 120 L85 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.2 }} />
        {/* Person 1 — left */}
        <motion.circle cx="28" cy="62" r="8" stroke="currentColor" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.15 }} />
        <motion.path d="M28 70 L28 85 M28 75 L20 82 M28 75 L36 82" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.25 }} />
        {/* Eyes & smile */}
        <motion.circle cx="25" cy="61" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.3 }} />
        <motion.circle cx="31" cy="61" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.3 }} />
        {/* Person 2 — center */}
        <motion.circle cx="70" cy="55" r="9" stroke="currentColor" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.25 }} />
        <motion.path d="M70 64 L70 82 M70 70 L60 78 M70 70 L80 78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.35 }} />
        <motion.circle cx="67" cy="54" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.4 }} />
        <motion.circle cx="73" cy="54" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.4 }} />
        {/* Person 3 — right */}
        <motion.circle cx="112" cy="62" r="8" stroke="currentColor" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.35 }} />
        <motion.path d="M112 70 L112 85 M112 75 L104 82 M112 75 L120 82" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.45 }} />
        <motion.circle cx="109" cy="61" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
        <motion.circle cx="115" cy="61" r="1" fill="currentColor" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.5 }} />
        {/* Speech bubbles */}
        <motion.circle cx="40" cy="50" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.6 }} />
        <motion.circle cx="48" cy="42" r="2" stroke="currentColor" strokeWidth="1" opacity="0.4" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.65 }} />
        <motion.circle cx="100" cy="50" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.7 }} />
        <motion.circle cx="92" cy="42" r="2" stroke="currentColor" strokeWidth="1" opacity="0.4" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.75 }} />
        {/* Central lightbulb */}
        <motion.path d="M63 22 Q63 8 70 8 Q77 8 77 22 L74 28 L66 28 Z" stroke="hsl(var(--primary))" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4, delay: 0.65 }} />
        <motion.path d="M66 30 L74 30 M67 33 L73 33" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.9 }} />
        {/* Light rays */}
        <motion.path d="M70 2 L70 -2 M56 10 L52 6 M84 10 L88 6 M54 22 L49 22 M86 22 L91 22" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={isActive ? { pathLength: 1, opacity: 0.7 } : {}} transition={{ duration: 0.3, delay: 0.9 }} />
        {/* Glow */}
        <motion.circle cx="70" cy="18" r="18" fill="hsl(var(--primary))" opacity="0" initial={{ opacity: 0 }} animate={isActive ? { opacity: [0, 0.08, 0.04] } : {}} transition={{ delay: 1.0, duration: 0.5 }} />
        {/* Whiteboard */}
        <motion.rect x="48" y="78" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.8 }} />
        <motion.rect x="82" y="78" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.85 }} />
    </svg>
);

// ─── DOODLE 3: Planning ───
const PlanningDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Large whiteboard */}
        <motion.rect x="10" y="8" width="100" height="70" rx="3" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4 }} />
        <motion.path d="M25 78 L15 120 M95 78 L105 120" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.15 }} />
        {/* Wireframe on board */}
        <motion.rect x="16" y="14" width="88" height="10" rx="1.5" stroke="hsl(var(--primary))" strokeWidth="1.3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.25 }} />
        <motion.path d="M20 19 L35 19 M80 19 L85 19 M88 19 L93 19 M95 19 L100 19" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.35 }} />
        <motion.rect x="16" y="28" width="55" height="22" rx="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.45 }} />
        <motion.path d="M20 34 L50 34 M20 38 L45 38 M20 42 L35 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.55 }} />
        <motion.rect x="75" y="28" width="29" height="42" rx="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.5 }} />
        <motion.path d="M79 34 L95 34 M79 40 L100 40 M79 46 L92 46 M79 52 L98 52 M79 58 L90 58 M79 64 L96 64" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.6 }} />
        <motion.rect x="16" y="54" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.65 }} />
        <motion.rect x="36" y="54" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.7 }} />
        <motion.rect x="56" y="54" width="15" height="14" rx="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.75 }} />
        {/* Person with pointer */}
        <motion.circle cx="125" cy="50" r="8" stroke="currentColor" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.35 }} />
        <motion.path d="M125 58 L125 90 M125 65 L112 55 M125 65 L132 80 M125 90 L118 110 M125 90 L132 110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.3, delay: 0.45 }} />
        <motion.path d="M112 55 L80 35" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.8 }} />
        {/* Annotations */}
        <motion.rect x="5" y="90" width="18" height="15" rx="1" fill="hsl(var(--primary))" opacity="0" initial={{ opacity: 0, scale: 0 }} animate={isActive ? { opacity: 0.15, scale: 1 } : {}} transition={{ delay: 0.9 }} />
        <motion.rect x="28" y="92" width="18" height="15" rx="1" fill="hsl(var(--secondary))" opacity="0" initial={{ opacity: 0, scale: 0 }} animate={isActive ? { opacity: 0.15, scale: 1 } : {}} transition={{ delay: 0.95 }} />
        <motion.path d="M10 100 L13 103 L19 96" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 1.05 }} />
        <motion.path d="M33 100 L36 103 L42 96" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 1.1 }} />
    </svg>
);

// ─── DOODLE 4: Coding ───
const DeveloperCodingDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Desk */}
        <motion.path d="M10 100 L130 100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25 }} />
        <motion.path d="M20 100 L20 125 M120 100 L120 125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.1 }} />
        {/* Monitor */}
        <motion.rect x="30" y="30" width="65" height="45" rx="3" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4, delay: 0.1 }} />
        <motion.path d="M55 75 L55 90 L45 95 L80 95 L70 90 L70 75" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.25 }} />
        {/* Code editor */}
        <motion.path d="M36 38 L39 38 M36 42 L39 42 M36 46 L39 46 M36 50 L39 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.35 }} />
        <motion.path d="M41 34 L41 72" stroke="currentColor" strokeWidth="0.5" opacity="0.2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.4 }} />
        <motion.path d="M44 38 L56 38" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.1, delay: 0.45 }} />
        <motion.path d="M58 38 L70 38" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.1, delay: 0.5 }} />
        <motion.rect x="54" y="60" width="1.5" height="5" fill="hsl(var(--primary))" initial={{ opacity: 0 }} animate={isActive ? { opacity: [0, 1, 0] } : {}} transition={{ delay: 1.0, duration: 0.5, repeat: Infinity }} />
        {/* Second monitor */}
        <motion.rect x="100" y="40" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.25 }} />
        <motion.path d="M112 62 L112 68 L107 70 L120 70 L115 68 L115 62" stroke="currentColor" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.35 }} />
        <motion.path d="M104 46 L108 50 L104 54" stroke="hsl(var(--secondary))" strokeWidth="1.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.7 }} />
        <motion.path d="M111 54 L122 54" stroke="hsl(var(--secondary))" strokeWidth="1" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.8 }} />
        {/* Keyboard */}
        <motion.rect x="38" y="96" width="50" height="3" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.4" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 0.4 }} />
        {/* Git branch */}
        <motion.circle cx="15" cy="45" r="3" stroke="hsl(var(--primary))" strokeWidth="1.2" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 1.0 }} />
        <motion.path d="M15 48 L15 55" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 1.1 }} />
    </svg>
);

// ─── DOODLE 5: AI Integration ───
const AIProductDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Robot head */}
        <motion.path d="M45 35 L45 20 Q45 10 55 10 L85 10 Q95 10 95 20 L95 35" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4 }} />
        <motion.rect x="40" y="35" width="60" height="50" rx="8" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 }} />
        {/* Eyes */}
        <motion.rect x="52" y="48" width="12" height="8" rx="2" stroke="hsl(var(--primary))" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.4 }} />
        <motion.rect x="76" y="48" width="12" height="8" rx="2" stroke="hsl(var(--primary))" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.45 }} />
        {/* Mouth */}
        <motion.path d="M58 68 L62 72 L66 68 L70 72 L74 68 L78 72 L82 68" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.55 }} />
        {/* Neural network */}
        <motion.path d="M55 85 L55 100 M70 85 L70 105 M85 85 L85 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.65 }} />
        {/* Nodes */}
        <motion.circle cx="55" cy="105" r="4" stroke="hsl(var(--primary))" strokeWidth="1.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.8 }} />
        <motion.circle cx="85" cy="105" r="4" stroke="hsl(var(--primary))" strokeWidth="1.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 0.95 }} />
        {/* Sparkle */}
        <motion.path d="M18 8 L20 3 L22 8 L20 13 Z" fill="hsl(var(--primary))" opacity="0" initial={{ opacity: 0, scale: 0 }} animate={isActive ? { opacity: 0.5, scale: [0, 1.3, 1] } : {}} transition={{ delay: 1.0, duration: 0.3 }} />
    </svg>
);

// ─── DOODLE 6: Problem Solved ───
const ProblemSolvedDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Shield */}
        <motion.path d="M70 10 L105 28 L105 68 Q105 100 70 118 Q35 100 35 68 L35 28 Z" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.6 }} />
        {/* Checkmark */}
        <motion.path d="M50 62 L63 76 L90 46" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.4, delay: 0.6 }} />
        {/* Gears */}
        <motion.circle cx="18" cy="22" r="10" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.75 }} />
        <motion.circle cx="122" cy="28" r="7" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 0.85 }} />
        {/* Nodes */}
        <motion.circle cx="15" cy="100" r="5" stroke="hsl(var(--primary))" strokeWidth="1.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 1.0 }} />
        <motion.path d="M20 100 L28 100" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 1.1 }} />
        <motion.circle cx="33" cy="100" r="5" stroke="hsl(var(--secondary))" strokeWidth="1.5" initial={{ scale: 0 }} animate={isActive ? { scale: 1 } : {}} transition={{ delay: 1.15 }} />
    </svg>
);

// ─── DOODLE 7: Thrives ───
const BusinessGrowthDoodle = ({ isActive }: { isActive: boolean }) => (
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
        {/* Chart */}
        <motion.path d="M20 115 L20 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25 }} />
        <motion.path d="M20 115 L125 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.1 }} />
        <motion.path d="M25 105 L37 100 L51 102 L65 88 L79 72 L93 55 L107 30" stroke="hsl(var(--secondary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 0.65 }} />
        <motion.path d="M103 38 L107 30 L113 36" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.15, delay: 1.2 }} />
        {/* Person */}
        <motion.circle cx="118" cy="18" r="7" stroke="currentColor" strokeWidth="1.8" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.25, delay: 0.9 }} />
        <motion.path d="M118 30 L108 20 M118 30 L128 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : {}} transition={{ duration: 0.2, delay: 1.15 }} />
    </svg>
);

const storySteps = [
    { id: 1, label: "Business Struggles", desc: "Your business faces challenges — declining metrics, inefficient processes, and growing competition.", Doodle: BusinessProblemDoodle },
    { id: 2, label: "We Brainstorm", desc: "Our expert team analyzes your problems and brainstorms innovative solutions together.", Doodle: TeamThinkingDoodle },
    { id: 3, label: "Plan & Design", desc: "We architect the perfect solution with detailed wireframes, user flows, and technical blueprints.", Doodle: PlanningDoodle },
    { id: 4, label: "Build & Code", desc: "Our developers bring the vision to life with clean, scalable, production-ready code.", Doodle: DeveloperCodingDoodle },
    { id: 5, label: "AI Integration", desc: "We supercharge your product with cutting-edge AI — automation, intelligence, and smart insights.", Doodle: AIProductDoodle },
    { id: 6, label: "Problems Solved", desc: "Automated workflows, smart systems, and robust solutions eliminate your business pain points.", Doodle: ProblemSolvedDoodle },
    { id: 7, label: "Business Thrives", desc: "Watch your business grow — higher revenue, happier customers, and unstoppable momentum.", Doodle: BusinessGrowthDoodle },
];

export default function HeroStoryTimeline() {
    const [activeStep, setActiveStep] = useState(0);
    const storyRef = useRef(null);
    const isInView = useInView(storyRef, { amount: 0.2 }); // re-triggers so interval pauses off-screen

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % storySteps.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section ref={storyRef} className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-14 mt-12">
            {/* Active step description */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                        Step {storySteps[activeStep].id} of {storySteps.length}
                    </span>
                    <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto">
                        {storySteps[activeStep].desc}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Desktop timeline */}
            <div className="hidden md:block">
                {/* Progress line */}
                <div className="relative h-[2px] mb-8 w-full max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-slate-200 rounded-full" />
                    <motion.div
                        className="absolute top-0 left-0 h-full rounded-full bg-[#2095F1]"
                        animate={{ width: `${((activeStep) / (storySteps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    {/* Dots on line */}
                    {storySteps.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer z-10 bg-white ${index <= activeStep ? "border-primary scale-125 bg-white" : "border-slate-200"
                                }`}
                            style={{ left: `${(index / (storySteps.length - 1)) * 100}%` }}
                            onClick={() => setActiveStep(index)}
                        >
                            {index <= activeStep && <div className="absolute inset-0 m-[2px] rounded-full bg-primary" />}
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-4 items-start">
                    {storySteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="flex flex-col items-center cursor-pointer group px-2"
                            onClick={() => setActiveStep(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.03 }}
                        >
                            <div className={`relative w-20 h-20 xl:w-24 xl:h-24 rounded-2xl p-2 transition-all duration-500 flex items-center justify-center ${index === activeStep
                                ? "text-primary bg-primary/5 ring-2 ring-primary/20 shadow-lg scale-110 opacity-100"
                                : index < activeStep
                                    ? "text-secondary/70 scale-95 opacity-50"
                                    : "text-slate-400/50 scale-90 opacity-40 grayscale"
                                }`}>
                                <step.Doodle isActive={index <= activeStep && isInView} />
                            </div>

                            <span className={`text-[10px] xl:text-xs font-bold uppercase tracking-wider mt-4 text-center leading-tight transition-colors duration-300 ${index === activeStep ? "text-primary" : "text-slate-400"
                                }`}>
                                {step.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile: Vertical Stack (Modified from horizontal scroll per request) */}
            <div className="md:hidden flex flex-col gap-3 px-4 mt-6">
                {storySteps.map((step, index) => {
                    return (
                        <motion.div
                            key={step.id}
                            className={`flex items-start gap-4 transition-all duration-100 opacity-100`}
                            onClick={() => setActiveStep(index)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {/* Node Line */}
                            <div className="flex flex-col items-center self-stretch">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors duration-300 shrink-0 z-10 bg-white border-primary text-primary`}>
                                    {index + 1}
                                </div>
                                {index !== storySteps.length - 1 && (
                                    <div className={`w-[2px] flex-1 my-1 rounded-full transition-colors duration-500 bg-primary/20`} />
                                )}
                            </div>

                            {/* Content */}
                            <div className={`flex items-start gap-4 flex-1 pb-6 scale-100 transform origin-left`}>
                                <div className={`w-14 h-14 rounded-xl p-2 shrink-0 transition-all duration-300 bg-white border border-primary/20 shadow-sm text-primary`}>
                                    <step.Doodle isActive={true} />
                                </div>
                                <div className="flex flex-col mt-1">
                                    <span className={`text-[13px] font-bold uppercase tracking-wide mb-1 text-slate-900`}>
                                        {step.label}
                                    </span>
                                    <p className="text-[12px] text-slate-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-slate-400"
                >
                    <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
};
