import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border-border shadow-large">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About SNGC-2026
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SNGC 2026 is the inaugural event of a new international conference series 
                dedicated to advancing research at the intersection of sensing, control, and 
                computation in Cyber-Physical Systems (CPS).
              </p>
              <p>
                This hybrid event will provide an interdisciplinary platform for researchers, 
                industry professionals, and practitioners to foster innovation in smart environments, 
                autonomous systems, healthcare, advanced manufacturing, and next-generation 
                communication networks.
              </p>
              <p className="font-semibold text-foreground">
                All accepted papers will be published in IEEE Xplore® Digital Library, 
                with options for extended versions in special issues of selected IEEE journals.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="inline-flex items-center gap-2"
                asChild
              >
                <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Xplore Digital Library
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}