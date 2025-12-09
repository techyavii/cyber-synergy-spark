import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, University, Globe, Users, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Committee = () => {
  const generalChairs = [
    {
      name: "Prof. Houbing Song",
      affiliation: "University of Maryland, Baltimore, USA",
      email: "houbing.song@umbc.edu",
      credentials: "IEEE Fellow, Co-Editor-in-Chief IEEE TII, WoS Highly Cited Researcher, IEEE Distinguished Visitor & Lecturer, ACM Distinguished Scientist & Speaker",
      role: "General Chair"
    },
    {
      name: "Dr. Ginu Rajan",
      affiliation: "Cardiff Metropolitan University, UK",
      email: "grajan@cardiffmet.ac.uk",
      credentials: "Director of CeRISS, Reader in Sensor Technologies Cardiff Met, Adj. Associate Professor UNSW Australia",
      role: "General Chair"
    },
    {
      name: "Prof. Huihui Wang",
      affiliation: "Northeastern University, USA",
      email: "hu.wang@northeastern.edu",
      credentials: "Professor, Khoury College of Computer Sciences",
      role: "General Chair"
    }
  ];

  const organizingChairs = [
    {
      name: "Dr. Rajkumar Rathore",
      affiliation: "Cardiff Metropolitan University, UK",
      role: "Organizing Chair"
    },
    {
      name: "Prof. Cristian Rodriguez Rivero",
      affiliation: "Universitat Politecnica de Catalunya, Spain",
      role: "Organizing Chair"
    }
  ];

  const technicalChairs = [
    {
      name: "Prof. Keeley Crockett",
      affiliation: "Manchester Metropolitan University, UK",
      role: "Technical Programme Chair"
    },
    {
      name: "Dr. Issam Damaj",
      affiliation: "Cardiff Metropolitan University, UK",
      role: "Technical Programme Chair"
    },
    {
      name: "Prof. Chien-Ming Chen",
      affiliation: "Nanjing University of Information Science and Technology, China",
      role: "Technical Programme Chair"
    },
    {
      name: "Prof. Wenjia Li",
      affiliation: "New York Institute of Technology, USA",
      role: "Technical Programme Chair"
    }
  ];

  const specialSessionChairs = [
    {
      name: "Prof. Raad Raad",
      affiliation: "University of Wollongong, Australia",
      role: "Special Session/Tutorial Chair"
    },
    {
      name: "Dr. Deepak Sahoo",
      affiliation: "Swansea University, UK",
      role: "Special Session/Tutorial Chair"
    }
  ];

  const publicationChairs = [
    {
      name: "Dr. Praveen Kumar Dontta",
      affiliation: "Stockholm University, Sweden",
      role: "Publication Chair"
    },
    {
      name: "Mehmet Aydin",
      affiliation: "University of West England, UK",
      role: "Publication Chair"
    },
    {
      name: "Dr. Weiwei Jiang",
      affiliation: "Beijing University of Posts and Telecommunications, China",
      role: "Publication Chair"
    }
  ];

  const publicityChairs = [
    {
      name: "Vishal Krishna Singh",
      affiliation: "University of Essex, UK",
      role: "Publicity Chair"
    },
    {
      name: "Prof. Loubna Mekouar",
      affiliation: "University Mohammed VI Polytechnic, Morocco",
      role: "Publicity Chair"
    }
  ];

  const awardsChairs = [
    {
      name: "Prof. Shiyan Yu",
      affiliation: "University of Hong Kong, Hong Kong",
      role: "Awards Chair"
    }
  ];

  const technicalCommittee = [
    { name: "Prof. Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
    { name: "Prof. Marius Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
    { name: "Prof. Mohamed Salim Bouhlel", affiliation: "Sfax University, Tunisia" },
    { name: "Prof. Aboul Ella Hassanien", affiliation: "Cairo University, Egypt" },
    { name: "Prof. Vincenzo Piuri", affiliation: "University of Milan, Italy" },
    { name: "Prof. Salah-ddine Krit", affiliation: "University Ibn Zohr – Agadir, Morocco" },
    { name: "Prof. David Camacho", affiliation: "Universidad Autonoma de Madrid, Spain" },
    { name: "Dr. Mohamed Mostafa Fouad", affiliation: "Arab Academy for Science and Technology, Egypt" },
    { name: "Dr. Sanjay Kumar Biswash", affiliation: "Research Scientist INFOCOMM Lab, ICNRTPU, Russia" },
    { name: "Dr. Paolo Bellavist", affiliation: "Alma Mater Studiorum – Università di Bologna, Italy" },
    { name: "Dr. Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
    { name: "Prof. Huseyin Irmak", affiliation: "Cankiri Karatekin University, Turkey" },
    { name: "Prof. Zoltan Horvath", affiliation: "Kasetsart University, Thailand" },
    { name: "Dr. AKM Matiul Alam", affiliation: "Vancouver, British Columbia, Canada" },
    { name: "Dr. Daniela Lopez De Luise", affiliation: "Computational Intelligence and Information System Lab" },
    { name: "Dr. Dac-Nhuong Le", affiliation: "Haiphong University, Vietnam" },
    { name: "Dr. Dusanka Boskovic", affiliation: "University of Sarajevo, Bosnia and Herzegovina" },
    { name: "Prof. Giorgos Karagiannidis", affiliation: "Aristotle University of Thessaloniki, Greece" },
    { name: "Dr. Kirti Tyagi", affiliation: "Inha University, Tashkent" },
    { name: "Dr. Andri Pranolo", affiliation: "Universitas Ahmed Dahlan, Indonesia" },
    { name: "Prof. Akshaye Dhawan", affiliation: "Ursinus College, Pennsylvania, USA" },
    { name: "Dr. Nguyen Ha Huy Cuong", affiliation: "Quang Nam University, Vietnam" },
    { name: "Dr. Brett Edward Trusko", affiliation: "Texas A&M University, Texas, USA" },
    { name: "Dr. Aleksandar Mastilovic", affiliation: "University of Novi Sad, Serbia" },
    { name: "Dr. D.K. Samadhiya", affiliation: "University of Taiwan, Taiwan" },
    { name: "Dr. Gaurav Sharma", affiliation: "Universite Libre de Bruxelles, Belgium" },
    { name: "Katarzyna Wasielewska-Michniewska", affiliation: "Polish Academy of Sciences, Warsaw, Poland" },
    { name: "Prof. Manuel Cardona", affiliation: "Universidad Don Bosco, El Salvador" },
    { name: "Dr. Ahmed A. Elngar", affiliation: "Beni-Suef University, Egypt" },
    { name: "Dr. Hamid Reza Boveiri", affiliation: "Sama College, IAU, Iran" }
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const CommitteeSection = ({ title, members, showCredentials = false, icon: Icon = Users }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center space-x-2">
        <Icon className="w-6 h-6 text-primary" />
        <span>{title}</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="text-center">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src={`/committee/${member.name.replace(/\s+/g, '-').toLowerCase()}.jpg`} />
                <AvatarFallback className="gradient-hero text-white font-bold">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <Badge variant="outline" className="mx-auto w-fit">
                {member.role}
              </Badge>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                <University className="w-4 h-4" />
                <span>{member.affiliation}</span>
              </div>
              {member.email && (
                <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="break-all">{member.email}</span>
                </div>
              )}
              {showCredentials && member.credentials && (
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Credentials:</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.credentials}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Conference Committee
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              SNGC 2026 Organizing Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Distinguished researchers and academics leading the organization of SNGC 2026
            </p>
          </div>

          {/* Committee Sections */}
          <CommitteeSection 
            title="General Chairs" 
            members={generalChairs} 
            showCredentials={true}
            icon={Award}
          />
          
          <CommitteeSection 
            title="Organizing Chairs" 
            members={organizingChairs}
          />
          
          <CommitteeSection 
            title="Technical Programme Chairs" 
            members={technicalChairs}
          />
          
          <CommitteeSection 
            title="Special Session/Tutorial Chairs" 
            members={specialSessionChairs}
          />
          
          <CommitteeSection 
            title="Publication Chairs" 
            members={publicationChairs}
          />
          
          <CommitteeSection 
            title="Publicity Chairs" 
            members={publicityChairs}
          />

          <CommitteeSection 
            title="Awards Chair" 
            members={awardsChairs}
            icon={Award}
          />

          {/* Technical Programme Committee */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-primary" />
              <span>Technical Programme Committee</span>
            </h2>
            <div className="text-center">
              <Card className="border-0 shadow-soft max-w-2xl mx-auto">
                <CardContent className="p-12">
                  <div className="space-y-6">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">To Be Confirmed</h3>
                    <p className="text-muted-foreground">
                      We are currently inviting distinguished researchers and industry experts to join our Technical Programme Committee. The complete list will be published once confirmations are received.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
            <h3 className="text-2xl font-bold mb-4">Contact the Committee</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For inquiries about the conference organization, technical programme, or committee membership, 
              please contact the respective chairs directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>General Inquiries: chair.sngc2026@cardiffmet.ac.uk</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;