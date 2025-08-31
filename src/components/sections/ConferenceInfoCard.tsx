import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function ConferenceInfoCard() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/95 backdrop-blur-sm border-border shadow-elegant hover:shadow-glow transition-all duration-500">
          <CardContent className="p-10 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6 group">
              <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Globe className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary text-black">
                SNGC-2026 will be organised in Hybrid Mode
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold text-foreground">
                Hosted by Cardiff Metropolitan University, UK
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-base font-medium text-foreground">
                    Technical Co-Sponsored by IEEE Computational Intelligence Society
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-base font-medium text-foreground">
                    Organized by IEEE Trustworthy IoT Working Group & IEEE TAR-AI Special Interest Group
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}