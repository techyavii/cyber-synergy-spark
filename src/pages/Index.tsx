import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ImageCarousel from "@/components/sections/ImageCarousel";
import ScrollingMarquee from "@/components/sections/ScrollingMarquee";
import ConferenceInfoCard from "@/components/sections/ConferenceInfoCard";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import ImportantDates from "@/components/sections/ImportantDates";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollingMarquee />
      <main>
        <HeroSection />
        <div className="py-12">
          <ImageCarousel />
        </div>
        <ConferenceInfoCard />
        <AboutSection />
        <CTASection />
        <ImportantDates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
