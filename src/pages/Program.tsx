import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { keynoteSpeakers } from "@/data/keynoteSpeakers";

const Program = () => {
  const scheduleData = [
    {
      day: "Day 1 - September 16, 2026",
      sessions: [
        {
          time: "09:00 - 09:30",
          title: "Registration & Welcome Coffee",
          type: "break",
          location: "Main Foyer"
        },
        {
          time: "09:30 - 10:30",
          title: "Opening Ceremony & Keynote",
          speaker: "Prof. Niki Trigoni",
          affiliation: "University of Oxford",
          topic: "Future of Sensing in Cyber-Physical Systems",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "11:00 - 12:30",
          title: "Session 1: Integrated Sensing Technologies",
          type: "session",
          location: "Conference Room A",
          papers: 4
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch Break",
          type: "break",
          location: "Restaurant"
        },
        {
          time: "13:30 - 15:00",
          title: "Session 2: Real-Time Control Strategies",
          type: "session",
          location: "Conference Room B",
          papers: 4
        },
        {
          time: "15:00 - 15:30",
          title: "Afternoon Tea",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "15:30 - 17:00",
          title: "Panel Discussion: Industry Perspectives on CPS",
          type: "panel",
          location: "Main Auditorium"
        }
      ]
    },
    {
      day: "Day 2 - September 17, 2026",
      sessions: [
        {
          time: "09:00 - 10:00",
          title: "Keynote: AI in Cyber-Physical Systems",
          speaker: "Prof. Julie McCann",
          affiliation: "Imperial College London",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "10:30 - 12:00",
          title: "Session 3: Data Processing & Computational Methods",
          type: "session",
          location: "Conference Room A",
          papers: 4
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break",
          type: "break",
          location: "Restaurant"
        },
        {
          time: "13:00 - 14:30",
          title: "Session 4: Security & Privacy in CPS",
          type: "session",
          location: "Conference Room B",
          papers: 4
        },
        {
          time: "14:30 - 15:00",
          title: "Afternoon Tea",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "15:00 - 16:30",
          title: "Tutorial: 5G/6G Technologies in CPS",
          type: "tutorial",
          location: "Conference Room C"
        },
        {
          time: "19:00 - 22:00",
          title: "Conference Gala Dinner",
          type: "social",
          location: "Cardiff Castle (TBC)"
        }
      ]
    },
    {
      day: "Day 3 - September 18, 2026",
      sessions: [
        {
          time: "09:00 - 10:00",
          title: "Keynote: Responsible AI in Healthcare CPS",
          speaker: "Prof. Bill Buchanan AO",
          affiliation: "Edinburgh Napier University",
          type: "keynote",
          location: "Main Auditorium"
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "10:30 - 12:00",
          title: "Session 5: Healthcare & Autonomous Systems",
          type: "session",
          location: "Conference Room A",
          papers: 4
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break",
          type: "break",
          location: "Restaurant"
        },
        {
          time: "13:00 - 14:30",
          title: "Session 6: Smart Cities Applications",
          type: "session",
          location: "Conference Room B",
          papers: 4
        },
        {
          time: "14:30 - 15:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area"
        },
        {
          time: "15:00 - 16:00",
          title: "Closing Ceremony & Awards",
          type: "ceremony",
          location: "Main Auditorium"
        }
      ]
    }
  ];

  const getSessionIcon = (type: string) => {
    switch (type) {
      case "keynote":
        return <Users className="w-5 h-5 text-primary" />;
      case "session":
        return <Calendar className="w-5 h-5 text-accent" />;
      case "tutorial":
        return <Clock className="w-5 h-5 text-secondary" />;
      case "panel":
        return <Users className="w-5 h-5 text-destructive" />;
      default:
        return <MapPin className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getSessionColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "border-l-primary bg-primary/5";
      case "session":
        return "border-l-accent bg-accent/5";
      case "tutorial":
        return "border-l-secondary bg-secondary/5";
      case "panel":
        return "border-l-destructive bg-destructive/5";
      case "social":
        return "border-l-purple-500 bg-purple-50";
      case "ceremony":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-muted bg-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Conference Programme
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              SNGC 2026 Programme
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our distinguished keynote speakers and conference schedule
            </p>
          </div>

          {/* Keynote Speakers Section */}
          <section id="keynote-speakers" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Keynote Speakers</h2>
              <p className="text-lg text-muted-foreground">
                Learn from world-renowned experts in Cyber-Physical Systems
              </p>
            </div>

            <div className="space-y-8">
              {keynoteSpeakers.map((speaker, index) => (
                <Card key={speaker.id} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="w-32 h-32 border-4 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold text-3xl">
                            {speaker.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-primary">
                          {speaker.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4 font-semibold">
                          {speaker.affiliation}
                        </p>
                        <p className="text-foreground leading-relaxed text-justify">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conference Programme Section */}
          <section id="conference-programme" className="mb-16">
            <div className="text-center mb-16">
              <Card className="border-0 shadow-soft max-w-3xl mx-auto">
                <CardContent className="p-16">
                  <div className="space-y-8">
                    <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Programme Coming Soon</h3>
                      <p className="text-xl text-muted-foreground mb-6">
                        We are currently finalizing the conference programme with exciting keynotes, technical sessions, and networking opportunities.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        The detailed schedule will be published once all speakers and sessions are confirmed. Check back regularly for updates!
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-base px-6 py-2">
                      Expected Publication: Early 2026
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Information */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Special Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Industry-Academia Collaboration Panel</li>
                  <li>• PhD Student Consortium</li>
                  <li>• Women in CPS Networking Session</li>
                  <li>• Startup Showcase & Demo Session</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Important Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• All times are in GMT (UK local time)</li>
                  <li>• Hybrid sessions available online</li>
                  <li>• Presentation slots: 15 min + 5 min Q&A</li>
                  <li>• Conference proceedings will be available post-event</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;