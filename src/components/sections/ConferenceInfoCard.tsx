import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function ConferenceInfoCard() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-sand border-sand text-sand-foreground">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">
                SNGC-2026 will be organised in Hybrid Mode
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                Hosted by Cardiff Metropolitan University, UK
              </p>
              <p className="text-base text-sand-foreground/80">
                Technical Co-Sponsored by IEEE Computational Intelligence Society
              </p>
              <p className="text-base text-sand-foreground/80">
                Organized by IEEE Trustworthy IoT Working Group & IEEE TAR-AI Special Interest Group
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}