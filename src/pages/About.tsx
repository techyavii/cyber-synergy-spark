import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Globe, 
  Award, 
  Lightbulb, 
  ArrowRight,
  CheckCircle,
  Brain,
  Cpu,
  Shield
} from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Advance CPS Research",
      description: "Foster innovation at the intersection of sensing, control, and computation"
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Create interdisciplinary platform for researchers and industry professionals"
    },
    {
      icon: Lightbulb,
      title: "Showcase Innovation",
      description: "Present cutting-edge research and technical developments"
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Enable worldwide participation through hybrid format"
    }
  ];

  const focusAreas = [
    {
      icon: Brain,
      title: "Intelligent Systems",
      areas: ["AI-driven data processing", "Machine learning in CPS", "Cognitive computing", "Autonomous decision making"]
    },
    {
      icon: Cpu,
      title: "Control Systems", 
      areas: ["Real-time control strategies", "Distributed control", "Adaptive systems", "Edge computing"]
    },
    {
      icon: Shield,
      title: "Security & Trust",
      areas: ["Privacy-preserving methods", "Secure communication", "Trustworthy AI", "Cyber-physical security"]
    }
  ];

  const benefits = [
    "Network with leading researchers and industry experts",
    "Learn about latest advances in CPS technologies", 
    "Present your research to international audience",
    "Publish in IEEE Xplore proceedings",
    "Access to special journal issue opportunities",
    "Hybrid participation options (in-person or virtual)",
    "Professional development and career opportunities",
    "Collaborative research and partnership possibilities"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 gradient-hero">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                About SNGC 2026
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Leading the Future of Cyber-Physical Systems
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                The inaugural international conference dedicated to advancing synergies between 
                sensing, control, and computation in next-generation cyber-physical systems.
              </p>
            </div>
          </div>
        </section>

        {/* Conference Mission */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SNGC 2026 serves as the premier platform for researchers, industry professionals, 
                  and practitioners to explore transformative technologies and novel approaches in 
                  next-generation cyber-physical systems.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Organized by the IEEE Trustworthy IoT Working Group and IEEE TAR-AI Special Interest Group, 
                  with technical co-sponsorship from IEEE Computational Intelligence Society, this conference 
                  represents a collaborative effort to advance the field of CPS.
                </p>
                <Button asChild className="gradient-hero">
                  <Link to="/call-for-papers">
                    Submit Your Research <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {objectives.map((obj, index) => (
                  <Card key={index} className="border-0 shadow-soft">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                        <obj.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{obj.title}</h3>
                      <p className="text-sm text-muted-foreground">{obj.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Research Focus Areas</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore cutting-edge research across multiple domains of cyber-physical systems
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {focusAreas.map((area, index) => (
                  <Card key={index} className="border-0 shadow-soft">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <area.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {area.areas.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Attend */}
            <div className="bg-gradient-subtle p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Why Attend SNGC 2026?</h2>
                <p className="text-lg text-muted-foreground">
                  Join the global CPS community and advance your research and career
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" asChild className="gradient-hero">
                  <Link to="/registration">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Statistics */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">11</div>
                <div className="text-primary-foreground/80">Conference Tracks</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">Technical Committee Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-primary-foreground/80">Keynote Speakers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-primary-foreground/80">Days of Innovation</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;