import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/90 backdrop-blur-lg border-border/50 shadow-elegant hover:shadow-glow transition-all duration-700 group">
          <CardContent className="p-10 md:p-16 text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text group-hover:scale-105 transition-transform duration-500">
                About SNGC-2026
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <div className="p-6 bg-gradient-subtle rounded-2xl border border-border/30">
                <p className="text-foreground">
                  Cyber-Physical Systems (CPS) are driving global digital transformation across sectors such as healthcare, manufacturing, transportation, and smart cities. With the rapid convergence of AI, 5G/6G, IoT, and intelligent sensing technologies, CPS are becoming increasingly interconnected, autonomous, and adaptive.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl border border-border/30">
                <p className="text-foreground">
                  The SNGC conference series is a new IEEE-supported initiative aimed at advancing and disseminating cutting-edge research and innovations in this rapidly evolving field. The inaugural edition will focus on bridging and advancing research at the intersection of sensing, control, and computation in cyber-physical systems to enable next-generation intelligent, secure, and resilient infrastructures.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border/30">
                <p className="text-foreground">
                  This hybrid event will provide an interdisciplinary platform for researchers, industry professionals, and practitioners to foster innovation in smart environments, autonomous systems, healthcare, advanced manufacturing, and next-generation communication networks.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-primary/10 rounded-2xl border border-primary/20">
                <p className="font-bold text-foreground text-xl">
                  Accepted papers will feature in SNGC 2026 Proceedings and will be submitted for possible inclusion in IEEE Xplore. Authors will also have the opportunity to submit extended versions of their papers to special issues of leading IEEE journals (to be announced soon).
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                variant="outline" 
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold hover:shadow-medium transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Xplore Digital Library
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}