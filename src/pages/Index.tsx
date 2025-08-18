import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ConferenceOverview from "@/components/sections/ConferenceOverview";
import ImportantDates from "@/components/sections/ImportantDates";
import Organizers from "@/components/sections/Organizers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ConferenceOverview />
        <ImportantDates />
        <Organizers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
