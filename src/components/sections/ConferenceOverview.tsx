import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cpu, 
  Shield, 
  Network, 
  Building2, 
  Heart,
  Car,
  BarChart3,
  Wifi,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ConferenceOverview = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Driven Systems",
      description: "Transparent, accountable, and responsible AI use cases in CPS"
    },
    {
      icon: Cpu,
      title: "Real-Time Control",
      description: "Advanced control strategies for next-generation cyber-physical systems"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Emerging security concerns in collaborative CPS environments"
    },
    {
      icon: Network,
      title: "5G/6G Integration",
      description: "Impact of next-generation networks on CPS performance"
    }
  ];

  const applications = [
    { icon: Building2, name: "Smart Cities" },
    { icon: Heart, name: "Healthcare" },
    { icon: Car, name: "Autonomous Systems" },
    { icon: BarChart3, name: "Manufacturing" },
    { icon: Wifi, name: "IoT Networks" },
    { icon: Users, name: "Human-CPS Interaction" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Conference Overview
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Advancing the Future of Cyber-Physical Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            SNGC 2026 brings together leading researchers and industry professionals to explore 
            the synergies between sensing, control, and computation in next-generation CPS.
          </p>
        </div>

        {/* Conference Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why SNGC 2026?</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Inaugural Event</h4>
                  <p className="text-muted-foreground">First in a new international conference series dedicated to CPS synergies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">IEEE Sponsored</h4>
                  <p className="text-muted-foreground">Organized by IEEE working groups with technical co-sponsorship</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Hybrid Format</h4>
                  <p className="text-muted-foreground">Attend in-person in Cardiff or join virtually from anywhere</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">IEEE Xplore Publication</h4>
                  <p className="text-muted-foreground">Accepted papers published in IEEE Xplore with journal opportunities</p>
                </div>
              </div>
            </div>
            <Button asChild className="gradient-hero">
              <Link to="/about">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Application Domains</h3>
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <app.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card p-12 rounded-2xl shadow-soft">
          <h3 className="text-3xl font-bold mb-4">Join the CPS Community</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of shaping the future of intelligent, responsive cyber-physical systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gradient-hero">
              <Link to="/call-for-papers">Submit Your Research</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/tracks">Explore Tracks</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceOverview;