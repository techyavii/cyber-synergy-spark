import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {

  return (
    <div className="min-h-screen">
      <Header />
        <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-blue-900 relative"
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/CrousalImages/1.avif" 
                alt="Cardiff Main Building" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className=" text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Welcome to Cardiff – A Historic and Vibrant Conference Destination
                </p>
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Cardiff is a lively and dynamic city, rich in history, culture, and legendary tales.
Nestled in the heart of South Wales, the city seamlessly blends its Roman origins,medieval heritage, and modern innovation. At its centre stands the iconic Cardiff Castle, dating back to AD 55, offering a glimpse into nearly 2,000 years of history.Cardiff is also celebrated as the birthplace of Roald Dahl, boasts stunning green spaces like Bute Park, and is home to charming Victorian and Edwardian arcades,filled with boutique shops and independent cafés.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  We are delighted to welcome the adenovirus research community to our vibrant and welcoming capital. Whether you&#39;re here for the conference or plan to extend your stay, Cardiff offers plenty to explore—from its bustling waterfront at Cardiff Bay to the rugged coastlines and golden beaches of South and West Wales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About the Computing Department
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-2/3 order-2 md:order-1">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About School of Computing at Goldsmiths
              </h2>
              
              <div className="bg-goldsmiths-beige shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Computing at Goldsmiths is a dynamic and innovative hub of research and education at the intersection of technology, creativity, and social impact. The department is renowned for its cross-disciplinary ethos, offering innovative programmes that merge computing with creative and human-centred domains, particularly in data science & artificial intelligence, computational arts, music technology, user experience design, computational linguistics, and interactive games, preparing students to shape the future of digital culture and socially responsible technology.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  It fosters a collaborative research environment with strong links to industry, public sector, and community partners. The department is also home to pioneering work in areas such as explainable AI, creative computing, and ethical technology design.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0 order-1 md:order-2">
              <img 
                src="/lovable-uploads/fe9f3022-dca0-44b3-b211-d61102ffc425.png" 
                alt="Department of Computing at Goldsmiths" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section> */}
      
      {/* <Footer /> */}
    </div>
      <Footer />
    </div>
  );
};

export default About;