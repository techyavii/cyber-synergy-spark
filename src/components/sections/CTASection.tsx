import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Submit Your Research Paper
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join leading researchers in advancing Cyber-Physical Systems. 
          Submit your original research and be part of this inaugural conference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 text-lg px-8 py-3"
            asChild
          >
            <Link to="/call-for-papers">
              <FileText className="mr-2 h-5 w-5" />
              Call for Papers
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8 py-3"
            asChild
          >
            <a href="mailto:contact@sngc-conf.co.uk">
              <ExternalLink className="mr-2 h-5 w-5" />
              Contact Organizers
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}