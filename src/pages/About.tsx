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
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About</h1>
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
                About SNGC Conference
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4">
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  The SNGC conference series is a new IEEE-supported initiative aimed at advancing and disseminating cutting-edge research and innovations in this rapidly evolving field. The inaugural edition will focus on bridging and advancing research at the intersection of sensing, control, and computation in cyber-physical systems to enable next-generation intelligent, secure, and resilient infrastructures. The inaugural event, SNGC-2026, will be hosted by Cardiff Metropolitan University, Cardiff, UK with hybrid participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IEEE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/ieee-logo.png" 
                alt="IEEE Logo" 
                className="h-32 w-auto object-contain"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className=" text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About IEEE
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  The IEEE (Institute of Electrical and Electronics Engineers, Inc.) is the world's largest technical professional society. Through its more than 400,000 members in 150 countries, the organization is a leading authority on a wide variety of areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power, and consumer electronics. Dedicated to the advancement of technology, the IEEE publishes 30 percent of the world's literature in the electrical and electronics engineering and computer science fields, and has developed nearly 900 active industry standards. The organization annually sponsors more than 850 conferences worldwide. Learn more at www.ieee.org.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IEEE CIS Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-2/3 order-2 md:order-1">
              <h2 className=" text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About IEEE CIS
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  The IEEE Computational Intelligence Society (CIS) is a leading global community advancing the science and application of computational intelligence, including neural networks, fuzzy systems, and evolutionary computation. Through its conferences, journals, and technical committees, IEEE CIS promotes innovation and collaboration across disciplines. Its mission is to develop intelligent technologies that solve complex real-world problems in domains such as autonomous systems, robotics, healthcare, energy, and cyber-physical systems.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0 order-1 md:order-2">
              <img 
                src="/ieee-cis-logo.png" 
                alt="IEEE CIS Logo" 
                className="h-32 w-auto object-contain"
              />
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