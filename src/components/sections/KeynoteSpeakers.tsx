import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Carlos A Coello",
      affiliation: "Center for Research and Advanced Studies of the National Polytechnic Institute, Mexico",
      initials: "CC",
      image: "/Speakers/Carlos.jpg"
    },
    {
      name: "Prof. Houbing Herbert Song",
      affiliation: "University of Maryland, Baltimore County, USA",
      initials: "HS",
      image: "/Speakers/Houbing.jpg"
    },
    {
      name: "Prof. Julie McCann",
      affiliation: "Imperial College London, UK",
      initials: "JM",
      image: "/Speakers/Julie.jpg"
    },
    {
      name: "Prof. Paul C. P Chao",
      affiliation: "National Yang Ming Chiao Tung University, Taiwan",
      initials: "PC",
      image: "/Speakers/Paul.jpg"
    },
    {
      name: "Prof. Haiping Du",
      affiliation: "University of Wollongong, Australia",
      initials: "HD",
      image: "/Speakers/Haiping.jpg"
    },
    {
      name: "Prof. Keely Crocket",
      affiliation: "Manchester Metropolitan University, UK",
      initials: "KC",
      image: "/Speakers/Keely.jpg"
    },
    {
      name: "Prof. Flavia Delicato",
      affiliation: "Fluminense Federal University, Brazil",
      initials: "FD",
      image: "/Speakers/Flavia.jpg"
    },
    {
      name: "Prof. Swades De",
      affiliation: "Indian Institute of Technology, Delhi, India",
      initials: "SD",
      image: "/Speakers/Swades.jpg"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-base font-semibold">
            Keynote Speakers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Distinguished Keynote Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from world-renowned experts in Cyber-Physical Systems and related fields
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-500 group hover:scale-105 bg-card/90 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <AvatarImage src={speaker.image} alt={speaker.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                    {speaker.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {speaker.affiliation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
