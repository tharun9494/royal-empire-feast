import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import WhySection from "@/components/WhySection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <div className="gold-divider" />
    <AboutSection />
    <div className="gold-divider" />
    <MenuSection />
    <div className="gold-divider" />
    <WhySection />
    <div className="gold-divider" />
    <GallerySection />
    <div className="gold-divider" />
    <ReviewsSection />
    <div className="gold-divider" />
    <LocationSection />
    <CTASection />
    <Footer />
    <MobileFloatingCTA />
  </>
);

export default Index;
