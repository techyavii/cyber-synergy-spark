import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  MapPin, 
  Globe, 
  CheckCircle,
  Clock,
  AlertCircle,
  GraduationCap,
  Utensils
} from "lucide-react";

const Registration = () => {
  const registrationTypes = [
    {
      type: "Physical Attendance",
      icon: MapPin,
      price: "£500",
      earlyBird: "£500",
      afterDeadline: "£580", 
      description: "Join us in Cardiff for the full conference experience",
      benefits: [
        "Access to all conference sessions",
        "Networking opportunities",
        "Conference materials and proceedings",
        "Welcome reception and coffee breaks",
        "Certificate of attendance",
        "Access to exhibition area"
      ]
    },
    {
      type: "Online Attendance",
      icon: Globe,
      price: "£300",
      earlyBird: "£300",
      afterDeadline: "£350",
      description: "Participate virtually from anywhere in the world",
      benefits: [
        "Live streaming of all sessions",
        "Access to recorded sessions",
        "Digital conference materials",
        "Virtual networking platform",
        "Certificate of attendance",
        "Q&A participation"
      ]
    },
    {
      type: "Student Registration",
      icon: GraduationCap,
      price: "TBC",
      earlyBird: "TBC",
      afterDeadline: "TBC",
      description: "Special rates for full-time students (proof required)",
      benefits: [
        "Reduced registration fee",
        "Access to student networking events",
        "Career development sessions",
        "All standard conference benefits",
        "Student poster session access",
        "Mentorship opportunities"
      ]
    }
  ];

  const importantDates = [
    { event: "Registration Opens", date: "February 1, 2026", status: "upcoming" },
    { event: "Early Bird Deadline", date: "June 30, 2026", status: "critical" },
    { event: "Conference Dates", date: "September 16-18, 2026", status: "info" }
  ];

  const additionalServices = [
    {
      service: "Conference Gala Dinner",
      price: "TBC",
      description: "Elegant dinner with guest speakers and entertainment",
      icon: Utensils
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
                Conference Registration
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Register for SNGC 2026
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Join us in Cardiff or online for three days of cutting-edge research, 
                networking, and innovation in cyber-physical systems.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Status Alert */}
        <section className="py-8 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Alert className="border-primary bg-primary-light">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Registration opens February 1, 2026.</strong> Early bird rates available until June 30, 2026. 
                Register early to secure your spot and save on conference fees.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Registration Types */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Registration Options</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the registration type that best fits your needs and budget
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {registrationTypes.map((reg, index) => (
                <Card key={index} className={`border-0 shadow-soft hover:shadow-medium transition-smooth ${index === 0 ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <reg.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{reg.type}</CardTitle>
                    {index === 0 && (
                      <Badge className="mx-auto w-fit bg-primary text-primary-foreground">Recommended</Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">{reg.earlyBird}</div>
                      <div className="text-sm text-muted-foreground">Early Bird (until June 30)</div>
                      <div className="text-lg text-muted-foreground mt-1">Regular: {reg.afterDeadline}</div>
                    </div>
                    <p className="text-muted-foreground mb-6">{reg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {reg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full gradient-hero">
                      {reg.price === "TBC" ? "Coming Soon" : "Register Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-gradient-subtle">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Important Registration Dates</h2>
              <p className="text-lg text-muted-foreground">
                Key dates to remember for conference registration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <Card key={index} className="border-0 shadow-soft text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.event}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{item.date}</p>
                    <Badge variant={item.status === 'critical' ? 'default' : 'secondary'}>
                      {item.status === 'critical' ? 'Critical Deadline' : 'Important Date'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground">
                Optional services to enhance your conference experience
              </p>
            </div>
            
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft mb-6">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.service}</h3>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline">
                    Add to Registration
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Process */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Register?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Registration will open on February 1, 2026. Be among the first to secure your spot!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Users className="w-5 h-5 mr-2" />
                  Get Notified When Registration Opens
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Information
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;