
import HeroSection from "@/components/HeroSection";
import WhyDailyGrind from "@/components/WhyDailyGrind";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyDailyGrind />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
