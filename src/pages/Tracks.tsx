import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Brain, 
  Shield, 
  Building2, 
  Heart, 
  Car,
  BarChart3,
  Network,
  Wifi,
  Microscope,
  Globe
} from "lucide-react";

const Tracks = () => {
  const tracks = [
    {
      id: 1,
      icon: Microscope,
      title: "Integrated Sensing Technologies for Smart Environments",
      description: "Advanced sensor networks, multi-modal sensing, sensor fusion techniques, and smart sensing infrastructure for intelligent environments.",
      topics: [
        "Multi-sensor data fusion",
        "Wireless sensor networks",
        "Environmental monitoring systems",
        "Smart sensing infrastructure"
      ]
    },
    {
      id: 2,
      icon: Cpu,
      title: "Real-Time Control Strategies in CPS",
      description: "Real-time control algorithms, distributed control systems, adaptive control methods, and optimization techniques for CPS.",
      topics: [
        "Distributed control systems",
        "Adaptive control algorithms",
        "Real-time optimization",
        "Control system reliability"
      ]
    },
    {
      id: 3,
      icon: Brain,
      title: "Data Processing and Computational Methods in CPS",
      description: "Big data analytics, machine learning, edge computing, and computational intelligence for cyber-physical systems.",
      topics: [
        "Edge and fog computing",
        "Machine learning for CPS",
        "Big data analytics",
        "Distributed computing"
      ]
    },
    {
      id: 4,
      icon: Network,
      title: "Interoperability and Standardization in CPS Components",
      description: "Standards development, protocol design, system integration, and interoperability frameworks for CPS components.",
      topics: [
        "Communication protocols",
        "System integration frameworks",
        "Standardization efforts",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 5,
      icon: Shield,
      title: "Emerging Security and Privacy Concerns in Collaborative CPS",
      description: "Cybersecurity frameworks, privacy-preserving techniques, threat detection, and secure communication in CPS.",
      topics: [
        "Cyber-physical security",
        "Privacy-preserving methods",
        "Threat detection systems",
        "Secure communication protocols"
      ]
    },
    {
      id: 6,
      icon: Building2,
      title: "Intelligent Applications of CPS in Smart Cities",
      description: "Smart city infrastructure, urban sensing networks, traffic management, and intelligent transportation systems.",
      topics: [
        "Smart infrastructure",
        "Urban sensing networks",
        "Traffic management systems",
        "Energy-efficient city systems"
      ]
    },
    {
      id: 7,
      icon: Heart,
      title: "Healthcare Applications of CPS",
      description: "Medical CPS, telemedicine, wearable health monitors, and intelligent healthcare delivery systems.",
      topics: [
        "Wearable health devices",
        "Telemedicine platforms",
        "Medical diagnostic systems",
        "Healthcare data analytics"
      ]
    },
    {
      id: 8,
      icon: Car,
      title: "Autonomous Systems and Robotics in CPS",
      description: "Autonomous vehicles, robotic systems, human-robot interaction, and intelligent navigation systems.",
      topics: [
        "Autonomous navigation",
        "Human-robot interaction",
        "Robotic control systems",
        "Multi-agent systems"
      ]
    },
    {
      id: 9,
      icon: BarChart3,
      title: "Modelling and Simulation of CPS",
      description: "System modeling techniques, simulation frameworks, digital twins, and verification methods for CPS.",
      topics: [
        "Digital twin technologies",
        "System modeling frameworks",
        "Simulation platforms",
        "Model verification methods"
      ]
    },
    {
      id: 10,
      icon: Wifi,
      title: "Impact of 5G/6G and IoT on CPS",
      description: "Next-generation wireless networks, IoT integration, network performance, and communication optimization.",
      topics: [
        "5G/6G network integration",
        "IoT device management",
        "Network performance optimization",
        "Wireless communication protocols"
      ]
    },
    {
      id: 11,
      icon: Globe,
      title: "Transparent, Accountable and Responsible AI Use Cases in CPS",
      description: "Explainable AI, ethical AI frameworks, responsible AI deployment, and trustworthy AI systems in CPS.",
      topics: [
        "Explainable AI methods",
        "Ethical AI frameworks",
        "AI transparency tools",
        "Responsible AI deployment"
      ]
    }
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
                Conference Tracks
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                11 Specialized Research Tracks
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Explore cutting-edge research across all domains of cyber-physical systems, 
                from sensing technologies to AI-driven applications.
              </p>
            </div>
          </div>
        </section>

        {/* Tracks Grid */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {tracks.map((track, index) => (
                <Card key={track.id} className="border-0 shadow-soft hover:shadow-medium transition-smooth overflow-hidden">
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-8">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                            <track.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline">Track {track.id}</Badge>
                            </div>
                            <CardTitle className="text-xl leading-tight">{track.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">{track.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-foreground">Key Topics Include:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {track.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <div className="md:col-span-4 bg-gradient-subtle p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 opacity-20">
                          <track.icon className="w-10 h-10 text-white" />
                        </div>
                        <Button asChild className="gradient-hero">
                          <Link to="/call-for-papers">
                            Submit to Track {track.id}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Submit Your Research?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Choose the track that best fits your research and join the global CPS community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/call-for-papers">Submit Your Paper</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/registration">Register for Conference</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tracks;