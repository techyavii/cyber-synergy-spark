import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  FileText, 
  Calendar, 
  Award, 
  Users, 
  CheckCircle, 
  AlertCircle,
  Download,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";

const CallForPapers = () => {
  const tracks = [
    "Integrated Sensing Technologies for Smart Environments",
    "Real-Time Control Strategies in CPS", 
    "Data Processing and Computational Methods in CPS",
    "Interoperability and Standardization in CPS Components",
    "Emerging Security and Privacy Concerns in Collaborative CPS",
    "Intelligent Applications of CPS in Smart Cities",
    "Healthcare Applications of CPS",
    "Autonomous Systems and Robotics in CPS",
    "Modelling and Simulation of CPS",
    "Impact of 5G/6G and IoT on CPS",
    "Transparent, Accountable and Responsible AI Use Cases in CPS"
  ];

  const paperTypes = [
    {
      type: "Original Research Papers",
      description: "Novel research contributions with experimental validation",
      length: "6 pages"
    },
    {
      type: "Case Studies", 
      description: "Real-world applications and implementation experiences",
      length: "6 pages"
    },
    {
      type: "Survey Papers",
      description: "Comprehensive reviews of specific CPS domains", 
      length: "6 pages"
    }
  ];

  const guidelines = [
    "Papers must be original and not published elsewhere",
    "Manuscripts should follow IEEE conference format",
    "Maximum 4 pages including references",
    "Submit through IEEE manuscript submission system",
    "All papers will undergo peer review process",
    "Authors must register for the conference upon acceptance"
  ];

  const importantDates = [
    { event: "Paper Submission Deadline", date: "March 27, 2026", critical: true },
    { event: "Notification of Acceptance", date: "June 12, 2026", critical: false },
    { event: "Camera-Ready Submission", date: "August 15, 2026", critical: false },
    { event: "Conference Dates", date: "September 16-18, 2026", critical: true }
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
                Call for Papers
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Submit Your Research to SNGC 2026
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                We invite original research papers and case studies across all areas of 
                cyber-physical systems, sensing technologies, and intelligent computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  <Download className="w-5 h-5 mr-2" />
                  Download Call for Papers (PDF)
                </Button>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Paper
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call for Papers PDF Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Call for Papers Document</h2>
                </div>
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                  <p className="text-lg mb-4">Download the detailed Call for Papers document containing complete information about the conference, submission guidelines, and important dates.</p>
                  <Button size="lg" variant="default" className="gap-2">
                    <Download className="w-5 h-5" />
                    Download CFP PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Submission Guidelines Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Paper Submission Guidelines</h2>
                
                <div className="space-y-8">
                  {/* Templates */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Paper Templates</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        IEEE Template (Word)
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        IEEE Template (LaTeX)
                      </Button>
                    </div>
                  </div>

                  {/* Submission Process */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Submission Process</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Papers must be formatted according to the IEEE conference template (10-12 pages, A4 size)</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Submit your paper through the Microsoft CMT Portal (link will be provided soon)</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>All submissions will undergo a thorough peer review process</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Only original papers with novel research results will be considered</span>
                      </li>
                    </ul>
                  </div>

                  {/* Plagiarism Policy */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Plagiarism Policy</h3>
                    <Alert className="bg-muted">
                      <AlertDescription>
                        Papers must be checked for plagiarism using licensed software (e.g., Turnitin, iAuthenticate). 
                        Similarity content must not exceed 15%.
                      </AlertDescription>
                    </Alert>
                    <ul className="mt-4 space-y-4">
                      <li className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>No form of self-plagiarism or plagiarism from others' work is permitted</span>
                      </li>
                      <li className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Proper citations must be provided for any referenced work</span>
                      </li>
                      <li className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Permission must be obtained for any copyrighted material</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>    {/* Special Sessions/Tutorials Section */}
    <section id="special-sessions" className="py-16 bg-gradient-subtle">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Call for Special Sessions/Tutorials</h2>
          <p className="text-lg text-muted-foreground mb-6">Details about special sessions and tutorials will be announced shortly</p>
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="w-12 h-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">Check back soon for information about organizing and participating in special sessions and tutorials.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Industry Sessions Section */}
    <section id="industry-sessions" className="py-16 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Call for Industry Sessions</h2>
          <p className="text-lg text-muted-foreground mb-6">Information about industry sessions will be announced soon</p>
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-4">
                <Users className="w-12 h-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">Details about industry participation and session organization will be provided shortly.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Panel Discussions Section */}
    <section id="panel-discussions" className="py-16 bg-gradient-subtle">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Call for Panel Discussions</h2>
          <p className="text-lg text-muted-foreground mb-6">Panel discussion details will be announced soon</p>
          <Card className="border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-4">
                <Users className="w-12 h-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">Information about panel topics and participation will be available soon.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

        {/* Conference Tracks */}
        <section id="conference-tracks" className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Conference Tracks</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Submit your research to one of our 11 specialized tracks covering all aspects of cyber-physical systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracks.map((track, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Badge variant="secondary" className="mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-sm leading-tight">{track}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Paper Types & Guidelines */}
        <section id="guidelines" className="py-16 bg-gradient-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Paper Types */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Paper Types</h2>
                <div className="space-y-6">
                  {paperTypes.map((type, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <span>{type.type}</span>
                          <Badge variant="outline">{type.length}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Submission Guidelines */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Submission Guidelines</h2>
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section id="important-dates" className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
              <p className="text-lg text-muted-foreground">
                Mark these critical deadlines in your calendar
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {importantDates.map((item, index) => (
                <Card key={index} className={`border-0 shadow-soft ${item.critical ? 'ring-2 ring-accent' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{item.event}</span>
                      </div>
                      {item.critical && (
                        <Badge className="bg-accent text-accent-foreground">Critical</Badge>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-primary">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publication Info */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Publication Opportunities</h2>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Accepted papers will be published in SNGC 2026 Proceedings in IEEE Xplore®
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Authors will also have the opportunity to submit extended versions of their 
              conference papers to special issues of selected IEEE journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Submit Your Paper
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Program Chairs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CallForPapers;