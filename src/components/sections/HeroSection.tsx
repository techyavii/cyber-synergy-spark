import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          {/* Conference Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Globe className="w-4 h-4 mr-2" />
            Inaugural Conference - Hybrid Event
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            1st International Conference on{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Synergies in Next-Generation
            </span>{" "}
            Cyber-Physical Systems
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto text-balance">
            Collaboration Between Sensing, Control, and Computation
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>September 16-18, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Cardiff, UK</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Hybrid Event</span>
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

          {/* Website URL */}
          <div className="mt-8 text-white/80">
            <p className="text-sm">Visit us at: <span className="font-mono">www.sngc-conf.co.uk</span></p>
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