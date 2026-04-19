import React, { Suspense, lazy, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Loader2, Brain, Cpu, Layers } from 'lucide-react';

// three.js + drei + fiber together weigh ~700 KB. Lazy-split them into
// their own chunk that downloads only when the About visual enters view.
const ThreeCanvas = lazy(() =>
    import('./AICore3DScene').then((m) => ({ default: m.default }))
);

/* ── Floating keyframes injected once ── */
const floatingStyles = `
@keyframes aiTagFloat0 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}
@keyframes aiTagFloat1 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
}
@keyframes aiTagFloat2 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2.5px); }
}
@keyframes aiIconFloat0 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-2px) translateX(1px); }
  66% { transform: translateY(1px) translateX(-1px); }
}
@keyframes aiIconFloat1 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  40% { transform: translateY(-3px) translateX(-1px); }
  70% { transform: translateY(1px) translateX(1px); }
}
@keyframes aiIconFloat2 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-2px) translateX(1.5px); }
}
@keyframes aiGlowPulse {
  0%, 100% { filter: drop-shadow(0 0 2px rgba(56,189,248,0.3)); }
  50% { filter: drop-shadow(0 0 6px rgba(56,189,248,0.55)); }
}
`;

const tagIcons = [Brain, Cpu, Layers] as const;

const hologramPanels = [
    { label: "Strategic Intelligence", top: "15%", left: "-5%", animIdx: 0 },
    { label: "AI Architecture", top: "50%", right: "-10%", animIdx: 1 },
    { label: "System Design", bottom: "15%", left: "5%", animIdx: 2 },
];

export const AICoreVisual: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { amount: 0.1 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] max-w-[600px] mx-auto flex justify-center items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Inject floating keyframes */}
            <style>{floatingStyles}</style>

            {/* Background Radial Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full transition-opacity duration-1000" style={{ opacity: isHovered ? 0.8 : 0.4 }} />
            </div>

            {/* 3D Canvas wrapper — lazy-loaded and mounted only when in view */}
            <div className="absolute inset-0 z-10">
                {isInView && (
                    <Suspense fallback={<FallbackLoader />}>
                        <ThreeCanvas isHovered={isHovered} />
                    </Suspense>
                )}
            </div>

            {/* Always-visible Hologram Tag Panels */}
            {hologramPanels.map((panel, idx) => {
                const IconComp = tagIcons[idx];
                return (
                    <div
                        key={idx}
                        className="absolute z-20 pointer-events-none"
                        style={{
                            top: panel.top,
                            left: (panel as any).left,
                            right: (panel as any).right,
                            bottom: (panel as any).bottom,
                            animation: `aiTagFloat${panel.animIdx} ${4 + idx * 0.8}s ease-in-out infinite`,
                        }}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-slate-900/60 backdrop-blur-md rounded-md"
                            style={{ animation: `aiGlowPulse ${5 + idx * 0.5}s ease-in-out infinite` }}
                        >
                            {/* Floating icon */}
                            <IconComp
                                size={16}
                                strokeWidth={1.5}
                                className="text-sky-400/80 shrink-0"
                                style={{
                                    animation: `aiIconFloat${idx} ${5 + idx * 0.7}s ease-in-out infinite`,
                                }}
                            />
                            <span className="text-primary text-[10px] uppercase font-bold tracking-widest">{panel.label}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const FallbackLoader = () => (
    <div className="absolute inset-0 flex items-center justify-center z-10 text-primary">
        <Loader2 className="w-8 h-8 animate-spin" />
    </div>
);

export default AICoreVisual;
