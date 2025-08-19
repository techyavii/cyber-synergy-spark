import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Users, 
  FileText, 
  CreditCard,
  HelpCircle,
  Send
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const contactInfo = [
    {
      category: "General Inquiries",
      icon: <Mail className="w-5 h-5" />,
      details: [
        { label: "Email", value: "info@sngc-conf.co.uk" },
        { label: "Response Time", value: "Within 48 hours" }
      ]
    },
    {
      category: "Technical Programme",
      icon: <FileText className="w-5 h-5" />,
      details: [
        { label: "Email", value: "technical@sngc-conf.co.uk" },
        { label: "Chair", value: "Prof. Keeley Crockett" }
      ]
    },
    {
      category: "Registration & Payment",
      icon: <CreditCard className="w-5 h-5" />,
      details: [
        { label: "Email", value: "registration@sngc-conf.co.uk" },
        { label: "Phone", value: "+44 (0) 29 2041 6070" }
      ]
    },
    {
      category: "Venue & Accommodation",
      icon: <MapPin className="w-5 h-5" />,
      details: [
        { label: "Email", value: "venue@sngc-conf.co.uk" },
        { label: "Location", value: "Cardiff, UK" }
      ]
    }
  ];

  const organizers = [
    {
      name: "Prof. Houbing Song",
      role: "General Chair",
      affiliation: "University of Maryland, Baltimore, USA",
      email: "houbing.song@umbc.edu"
    },
    {
      name: "Dr. Ginu Rajan",
      role: "General Chair",
      affiliation: "Cardiff Metropolitan University, UK", 
      email: "grajan@cardiffmet.ac.uk"
    },
    {
      name: "Prof. Huihui Wang",
      role: "General Chair",
      affiliation: "Northeastern University, USA",
      email: "hu.wang@northeastern.edu"
    },
    {
      name: "Dr. Rajkumar Rathore",
      role: "Organizing Chair",
      affiliation: "Cardiff Metropolitan University, UK",
      email: "rrathore@cardiffmet.ac.uk"
    }
  ];

  const socialMedia = [
    { platform: "Website", url: "https://www.sngc-conf.co.uk", icon: <Globe className="w-5 h-5" /> },
    { platform: "LinkedIn", url: "#", icon: <Users className="w-5 h-5" /> },
    { platform: "Twitter", url: "#", icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Contact SNGC 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about the conference? We're here to help. Reach out to us using the information below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="w-5 h-5 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your university or company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="submission">Paper Submission</SelectItem>
                        <SelectItem value="registration">Registration</SelectItem>
                        <SelectItem value="venue">Venue & Travel</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full gradient-hero">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media & Links */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Follow SNGC 2026</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-smooth">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-medium">{social.platform}</p>
                          <p className="text-sm text-muted-foreground">{social.url}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="grid gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-white">
                          {contact.icon}
                        </div>
                        <span>{contact.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {contact.details.map((detail, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-sm font-medium">{detail.label}:</span>
                            <span className="text-sm text-muted-foreground">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Key Organizers */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Key Organizers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {organizers.map((organizer, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{organizer.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {organizer.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {organizer.affiliation}
                        </p>
                        <div className="flex items-center space-x-1 text-sm text-primary">
                          <Mail className="w-3 h-3" />
                          <span>{organizer.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Conference Office */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Conference Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Cardiff Metropolitan University</h4>
                      <p className="text-sm text-muted-foreground">
                        Centre for Research in Internet Security Systems (CeRISS)<br />
                        Llandaff Campus, Western Avenue<br />
                        Cardiff CF5 2YB, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>+44 (0) 29 2041 6070</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>info@sngc-conf.co.uk</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="border-0 shadow-soft bg-gradient-subtle">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find answers to common questions about submissions, registration, and venue.
                  </p>
                  <Button variant="outline">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;