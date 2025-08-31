import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, FileText, Users, Award } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    {
      icon: FileText,
      title: "Call for Special Sessions",
      date: "November 30, 2025",
      status: "upcoming",
      description: "Submit proposals for special sessions and workshops"
    },
    {
      icon: FileText,
      title: "Paper Submission Deadline",
      date: "March 27, 2026",
      status: "critical",
      description: "Submit your 4-page research papers"
    },
    {
      icon: Clock,
      title: "Notification of Acceptance",
      date: "June 12, 2026",
      status: "upcoming",
      description: "Authors will be notified of paper acceptance"
    },
    {
      icon: Award,
      title: "Camera-Ready Papers",
      date: "August 15, 2026",
      status: "upcoming",
      description: "Submit final versions of accepted papers"
    },
    {
      icon: Users,
      title: "Registration Opens",
      date: "February 1, 2026",
      status: "upcoming",
      description: "Conference registration portal opens"
    },
    {
      icon: Users,
      title: "Early Bird Registration",
      date: "June 30, 2026",
      status: "critical",
      description: "Register before deadline for discounted rates"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-accent text-accent-foreground";
      case "upcoming":
        return "bg-primary/10 text-primary";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-base font-semibold">
            Important Dates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text">
            Key Conference Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mark your calendar with these important deadlines and dates for SNGC 2026
          </p>
        </div>

        {/* Dates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dates.map((item, index) => (
            <Card key={index} className="border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 group hover:scale-105 bg-card/90 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <Badge className={`${getStatusColor(item.status)} px-3 py-1 font-semibold`}>
                    {item.status === "critical" ? "Critical" : "Upcoming"}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary text-lg">{item.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conference Dates Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center shadow-large">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-8 h-8" />
            <h3 className="text-3xl font-bold">Conference Dates</h3>
            </div>
          <p className="text-2xl mb-2">September 16-18, 2026</p>
          <p className="text-white/80 text-lg">
            Cardiff Metropolitan University, Cardiff, UK (Hybrid Event)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;