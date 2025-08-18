import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Globe, ArrowRight } from "lucide-react";

const Organizers = () => {
  const organizers = [
    {
      logo: "IEEE",
      name: "IEEE Trustworthy IoT Working Group",
      role: "Primary Organizer",
      description: "Leading the development of trustworthy IoT systems and standards"
    },
    {
      logo: "IEEE",
      name: "IEEE TAR-AI Special Interest Group",
      role: "Co-Organizer", 
      description: "Advancing transparent, accountable, and responsible AI practices"
    },
    {
      logo: "CU",
      name: "Cardiff Metropolitan University",
      role: "Host Institution",
      description: "Providing venue and local organization support in Cardiff, UK"
    }
  ];

  const sponsors = [
    {
      logo: "IEEE",
      name: "IEEE Computational Intelligence Society",
      role: "Technical Co-Sponsor",
      description: "Providing technical expertise and publication support"
    }
  ];

  const keyLeaders = [
    {
      name: "Prof. Houbing Song",
      title: "General Chair",
      affiliation: "University of Maryland, Baltimore, USA",
      credentials: "IEEE Fellow, Co-Editor-in-Chief IEEE TII, WoS Highly Cited Researcher"
    },
    {
      name: "Dr. Ginu Rajan", 
      title: "General Chair",
      affiliation: "Cardiff Metropolitan University, UK",
      credentials: "Director of CeRISS, Reader in Sensor Technologies"
    },
    {
      name: "Prof. Huihui Wang",
      title: "General Chair", 
      affiliation: "Northeastern University, USA",
      credentials: "Professor, Khoury College of Computer Sciences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Conference Organization
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Organized by Leading Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SNGC 2026 is organized by prestigious IEEE working groups and hosted by Cardiff Metropolitan University
          </p>
        </div>

        {/* Main Organizers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Organizing Bodies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {organizers.map((org, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{org.logo}</span>
                  </div>
                  <CardTitle className="text-lg">{org.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto w-fit">
                    {org.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{org.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Co-Sponsors</h3>
          <div className="grid justify-center">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="border-0 shadow-soft max-w-md text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold text-xl">{sponsor.logo}</span>
                  </div>
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    {sponsor.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Leaders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Conference Leadership</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyLeaders.map((leader, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{leader.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {leader.title}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{leader.affiliation}</p>
                  <p className="text-xs text-muted-foreground">{leader.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publication Info */}
        <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Publications</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Accepted papers will be published in SNGC 2026 Proceedings in IEEE Xplore®
          </p>
          <p className="text-muted-foreground mb-8">
            Authors will also have the option to submit extended versions for special issues in selected IEEE journals
          </p>
          <Button asChild className="gradient-hero">
            <Link to="/committee">
              View Full Committee <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Organizers;