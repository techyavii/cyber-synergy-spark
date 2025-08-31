import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Submit Your Research Paper
          </h2>
          <div className="w-32 h-1 bg-white/80 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
            Join leading researchers in advancing Cyber-Physical Systems. 
            Submit your original research and be part of this inaugural conference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 font-bold shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/call-for-papers">
              <FileText className="mr-3 h-6 w-6" />
              Call for Papers
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:contact@sngc-conf.co.uk">
              <ExternalLink className="mr-3 h-6 w-6" />
              Contact Organizers
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}