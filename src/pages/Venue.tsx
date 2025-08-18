import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Building, 
  Plane, 
  Train, 
  Car, 
  Coffee,
  Wifi,
  Utensils,
  Camera,
  Star,
  ExternalLink
} from "lucide-react";

const Venue = () => {
  const venueFeatures = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the venue"
    },
    {
      icon: Coffee,
      title: "Catering Services",
      description: "Professional catering with refreshments and meals"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art conference rooms and presentation equipment"
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Convenient parking facilities for conference attendees"
    }
  ];

  const attractions = [
    {
      name: "Cardiff Castle",
      description: "Historic castle dating back to AD 55, showcasing 2,000 years of history",
      distance: "City Centre",
      icon: Camera
    },
    {
      name: "Cardiff Bay",
      description: "Bustling waterfront area with restaurants, shops, and cultural attractions",
      distance: "15 minutes",
      icon: Star
    },
    {
      name: "Principality Stadium",
      description: "Iconic rugby stadium and home of Welsh rugby",
      distance: "City Centre", 
      icon: Building
    },
    {
      name: "Bute Park",
      description: "Beautiful green space perfect for walks and relaxation",
      distance: "City Centre",
      icon: Camera
    }
  ];

  const transportation = [
    {
      icon: Plane,
      method: "By Air",
      details: "Cardiff Airport (12 miles) - Direct flights from major European cities",
      options: ["Airport shuttle service", "Taxi/ride-sharing", "Car rental"]
    },
    {
      icon: Train,
      method: "By Train", 
      details: "Cardiff Central Station (city centre) - Direct connections from London and major UK cities",
      options: ["2 hours from London", "Direct from Birmingham, Manchester", "Local transport to venue"]
    },
    {
      icon: Car,
      method: "By Car",
      details: "Easy access via M4 motorway - Well connected to UK road network",
      options: ["M4 Junction 33 or 34", "City centre parking", "Hotel parking available"]
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
                Conference Venue
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Welcome to Cardiff
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A historic and vibrant conference destination in the heart of South Wales, 
                where innovation meets tradition in an inspiring setting.
              </p>
            </div>
          </div>
        </section>

        {/* Venue Information */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Conference Venue</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-soft">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Building className="w-6 h-6 text-primary" />
                        <CardTitle>Leonardo Hotel Cardiff or Hilton Cardiff</CardTitle>
                        <Badge variant="secondary">TBC</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-2 mb-4">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Cardiff City Centre</p>
                          <p className="text-muted-foreground">Heart of Cardiff, Wales, UK</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Our conference will be hosted at a premium hotel in Cardiff city centre, 
                        offering easy access to Cardiff's top attractions, restaurants, and cultural landmarks.
                      </p>
                      <div className="bg-accent-light p-4 rounded-lg">
                        <p className="text-sm font-medium text-accent-foreground">
                          🎉 Special Conference Rates Available! Contact the conference team for discount codes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Venue Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {venueFeatures.map((feature, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* About Cardiff */}
            <div className="bg-gradient-subtle p-12 rounded-2xl mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Discover Cardiff</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Cardiff is a lively and dynamic city, rich in history, culture, and legendary tales. 
                  Nestled in the heart of South Wales, the city seamlessly blends its Roman origins, 
                  medieval heritage, and modern innovation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Historic Heritage</h3>
                  <p className="text-muted-foreground mb-4">
                    At Cardiff's centre stands the iconic Cardiff Castle, dating back to AD 55, 
                    offering a glimpse into nearly 2,000 years of history. The city is also 
                    celebrated as the birthplace of Roald Dahl.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Modern Attractions</h3>
                  <p className="text-muted-foreground mb-4">
                    Cardiff boasts stunning green spaces like Bute Park, charming Victorian 
                    and Edwardian arcades filled with boutique shops and independent cafés, 
                    plus a bustling waterfront at Cardiff Bay.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Attractions */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Explore Cardiff</h2>
                <p className="text-lg text-muted-foreground">
                  Discover what Cardiff has to offer during your conference visit
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                        <attraction.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{attraction.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>
                      <Badge variant="outline" className="text-xs">{attraction.distance}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="py-16 bg-gradient-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Getting to Cardiff</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cardiff is easily accessible by air, rail, and road from across the UK and Europe
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {transportation.map((transport, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                        <transport.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle>{transport.method}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{transport.details}</p>
                    <ul className="space-y-2">
                      {transport.options.map((option, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Plan Your Stay</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We encourage physical attendance to make the most of networking opportunities. 
              Discounted accommodation rates are available for conference participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact for Discount Code
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore Cardiff Tourism
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Venue;