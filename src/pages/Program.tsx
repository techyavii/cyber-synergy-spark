import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
              Conference Program
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              SNGC 2026 Program Schedule
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three days of cutting-edge research presentations, keynotes, and networking opportunities
            </p>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                <strong>Note:</strong> Schedule is preliminary and subject to change
              </p>
              <Button className="gradient-hero">
                Download Program PDF
              </Button>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <Card key={dayIndex} className="border-0 shadow-soft">
                <CardHeader className="gradient-hero text-white">
                  <CardTitle className="text-2xl text-center">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {day.sessions.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className={`p-6 border-l-4 border-b last:border-b-0 transition-smooth hover:bg-muted/10 ${getSessionColor(session.type)}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            {getSessionIcon(session.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs">
                                {session.time}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {session.location}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {session.title}
                            </h3>
                            {session.speaker && (
                              <p className="text-sm text-muted-foreground mb-1">
                                <strong>Speaker:</strong> {session.speaker}
                                {session.affiliation && `, ${session.affiliation}`}
                              </p>
                            )}
                            {session.topic && (
                              <p className="text-sm text-muted-foreground mb-2">
                                <strong>Topic:</strong> {session.topic}
                              </p>
                            )}
                            {session.papers && (
                              <p className="text-sm text-muted-foreground">
                                <strong>Papers:</strong> {session.papers} presentations
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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