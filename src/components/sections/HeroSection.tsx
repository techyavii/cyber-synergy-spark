import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Globe } from "lucide-react";

const sponsors = [
  {
    name: "Cardiff Metropolitan University",
    src: "/cardiff.png",
    alt: "Cardiff Metropolitan University Logo",
  },
  {
    name: "Manchester Metropolitan University",
    src: "/manchester.png",
    alt: "Manchester Metropolitan University Logo",
  },
  {
    name: "Northeastern University",
    src: "/northeatern.png",
    alt: "Northeastern University Logo",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          {/* IEEE Logos */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <img 
              src="/ieee-logo.png" 
              alt="IEEE Logo" 
              className="h-20 md:h-24 w-auto"
            />
            <img 
              src="/ieee-cis-logo.png" 
              alt="IEEE CIS Logo" 
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Conference Badge */}
          <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg px-6 py-3">
            <Globe className="w-5 h-5 mr-2" />
            Inaugural Conference - Hybrid Event
          </Badge>

          {/* Conference Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
            SNGC 2026
          </h1>

          {/* Main Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-6 text-white max-w-5xl mx-auto leading-tight">
            1st International Conference on Synergies in Next-Generation Cyber-Physical Systems
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto leading-relaxed font-medium">
            Collaboration Between Sensing, Control, and Computation
          </p>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <Calendar className="w-6 h-6" />
              <span className="text-base font-semibold">Sept 16-18, 2026</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <MapPin className="w-6 h-6" />
              <span className="text-base font-semibold">Cardiff, UK</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <Globe className="w-6 h-6" />
              <span className="text-base font-semibold">Hybrid Event</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <Users className="w-6 h-6" />
              <span className="text-base font-semibold">IEEE Sponsored</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 shadow-large transition-bounce"
              asChild
            >
              <Link to="/call-for-papers">Submit Your Paper</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3 backdrop-blur-sm"
              asChild
            >
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>

          
        </div>

        {/* Sponsors Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-white">Our Sponsors and Supporters</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
