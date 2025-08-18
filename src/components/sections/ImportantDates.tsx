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
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Important Dates
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Key Conference Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar with these important deadlines and dates for SNGC 2026
          </p>
        </div>

        {/* Dates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dates.map((item, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status === "critical" ? "Critical" : "Upcoming"}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary">{item.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
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