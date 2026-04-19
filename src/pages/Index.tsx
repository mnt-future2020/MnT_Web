import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import EnterpriseBackground from "@/components/animations/EnterpriseBackground";
import ServicesSection from "@/components/ServicesSection";
import LazyMount from "@/components/LazyMount";

// Below-the-fold sections are code-split AND only mounted when near the viewport.
const ProductsSection = lazy(() => import("@/components/home/ProductsSection"));
const AuthoritySection = lazy(() => import("@/components/home/AuthoritySection"));
const VideoSection = lazy(() => import("@/components/home/VideoSection"));
const PortfolioSection = lazy(() => import("@/components/home/PortfolioSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const FinalCTASection = lazy(() => import("@/components/home/FinalCTASection"));

const Index = () => {
  return (
    <main className="relative">
      <EnterpriseBackground />
      <ScrollProgress
        showDots={true}
        sections={["hero", "services", "products", "authority", "video", "portfolio"]}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />

      <Suspense fallback={null}>
        <LazyMount minHeight={600}><ProductsSection /></LazyMount>
        <LazyMount minHeight={600}><AuthoritySection /></LazyMount>
        <LazyMount minHeight={500}><VideoSection /></LazyMount>
        <LazyMount minHeight={600}><PortfolioSection /></LazyMount>
        {/* <LazyMount minHeight={500}><TestimonialsSection /></LazyMount> */}
        <LazyMount minHeight={400}><FinalCTASection /></LazyMount>
      </Suspense>

      <Footer />
    </main>
  );
};

export default Index;
