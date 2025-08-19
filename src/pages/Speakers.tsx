import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Award, University, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Speakers = () => {
  const keynoteSpeakers = [
    {
      name: "Prof. Niki Trigoni",
      affiliation: "University of Oxford",
      country: "United Kingdom",
      title: "Professor of Computer Science",
      keynoteTitle: "Future of Sensing in Cyber-Physical Systems",
      bio: "Prof. Niki Trigoni is a Professor in the Department of Computer Science at the University of Oxford. Her research focuses on sensor networks, mobile computing, and cyber-physical systems. She has published over 150 papers and received numerous awards for her contributions to the field.",
      credentials: [
        "IEEE Fellow",
        "ACM Distinguished Scientist",
        "Royal Society Industry Fellow"
      ],
      researchAreas: [
        "Wireless Sensor Networks",
        "Mobile Computing",
        "Cyber-Physical Systems",
        "IoT Applications"
      ]
    },
    {
      name: "Prof. Bill Buchanan AO",
      affiliation: "Edinburgh Napier University",
      country: "United Kingdom",
      title: "Professor of Cryptography",
      keynoteTitle: "Responsible AI in Healthcare Cyber-Physical Systems",
      bio: "Prof. Bill Buchanan is a world-renowned expert in cybersecurity and cryptography. He is an Officer of the Order of Australia (AO) and has made significant contributions to security in cyber-physical systems, particularly in healthcare applications.",
      credentials: [
        "Officer of the Order of Australia (AO)",
        "IEEE Senior Member",
        "Chartered Engineer (CEng)"
      ],
      researchAreas: [
        "Cybersecurity",
        "Cryptography",
        "Healthcare Security",
        "Blockchain Technologies"
      ]
    },
    {
      name: "Prof. Julie McCann",
      affiliation: "Imperial College London",
      country: "United Kingdom",
      title: "Professor of Computer Systems",
      keynoteTitle: "Artificial Intelligence in Next-Generation CPS",
      bio: "Prof. Julie McCann is a Professor in the Department of Computing at Imperial College London. She leads research in adaptive systems, sensor networks, and AI-driven cyber-physical systems. Her work has been widely recognized with numerous awards and grants.",
      credentials: [
        "IEEE Fellow",
        "Royal Academy of Engineering Fellow",
        "Distinguished Scientist"
      ],
      researchAreas: [
        "Adaptive Systems",
        "Machine Learning",
        "Sensor Networks",
        "Smart Environments"
      ]
    },
    {
      name: "Prof. Dhavel Thakker",
      affiliation: "University of Hull",
      country: "United Kingdom",
      title: "Professor of Computer Science",
      keynoteTitle: "Semantic Technologies in Industrial CPS",
      bio: "Prof. Dhavel Thakker specializes in semantic web technologies, knowledge graphs, and their applications in industrial cyber-physical systems. His research bridges the gap between theoretical computer science and practical industrial applications.",
      credentials: [
        "IEEE Senior Member",
        "ACM Professional Member",
        "Industry Collaboration Fellow"
      ],
      researchAreas: [
        "Semantic Web",
        "Knowledge Graphs",
        "Industrial IoT",
        "Data Integration"
      ]
    }
  ];

  const invitedSpeakers = [
    {
      name: "Prof. Geoffrey Hinton",
      affiliation: "University of Toronto",
      country: "Canada",
      title: "Professor Emeritus",
      topic: "Deep Learning Foundations for CPS"
    },
    {
      name: "Prof. Rolf Ernst",
      affiliation: "TU Braunschweig",
      country: "Germany",
      title: "Professor of Computer Systems",
      topic: "Real-Time Systems in Automotive CPS"
    },
    {
      name: "Prof. Anima Anandkumar",
      affiliation: "California Institute of Technology",
      country: "United States",
      title: "Professor of Computing",
      topic: "Tensor Methods for Large-Scale CPS"
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Distinguished Speakers
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Keynote & Invited Speakers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-leading experts sharing cutting-edge research and industry insights in cyber-physical systems
            </p>
          </div>

          {/* Keynote Speakers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Keynote Speakers
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {keynoteSpeakers.map((speaker, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={`/speakers/${speaker.name.replace(/\s+/g, '-').toLowerCase()}.jpg`} />
                        <AvatarFallback className="gradient-hero text-white text-lg font-bold">
                          {getInitials(speaker.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{speaker.name}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center space-x-1">
                            <University className="w-4 h-4" />
                            <span>{speaker.affiliation}</span>
                          </p>
                          <p className="flex items-center space-x-1">
                            <Globe className="w-4 h-4" />
                            <span>{speaker.country}</span>
                          </p>
                          <Badge variant="outline" className="w-fit">
                            {speaker.title}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Keynote Title:</h4>
                        <p className="text-sm font-medium">{speaker.keynoteTitle}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Biography:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {speaker.bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>Credentials:</span>
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {speaker.credentials.map((credential, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Research Areas:</h4>
                        <div className="flex flex-wrap gap-1">
                          {speaker.researchAreas.map((area, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Invited Speakers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Invited Speakers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {invitedSpeakers.map((speaker, index) => (
                <Card key={index} className="border-0 shadow-soft text-center hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={`/speakers/${speaker.name.replace(/\s+/g, '-').toLowerCase()}.jpg`} />
                      <AvatarFallback className="gradient-hero text-white text-xl font-bold">
                        {getInitials(speaker.name)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{speaker.name}</CardTitle>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
                      <p className="text-sm text-muted-foreground">{speaker.country}</p>
                      <Badge variant="outline" className="mx-auto w-fit">
                        {speaker.title}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Talk Topic:</h4>
                        <p className="text-sm text-muted-foreground">
                          {speaker.topic}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call for Speakers */}
          <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Speaking?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We welcome proposals for talks from industry leaders and researchers. 
              Contact us if you'd like to contribute to SNGC 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                Speaker Guidelines
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button className="gradient-hero">
                Submit Speaker Proposal
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;