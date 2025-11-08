import React from 'react';
import { Map, MapPin, Building, Phone, Mail } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/VenueImages/1.jpg",
      alt: "Leonardo Hotel Cardiff exterior"
    },
    {
      src: "/VenueImages/2.jpg",
      alt: "Leonardo Hotel Cardiff lobby"
    },
    {
      src: "/VenueImages/3.jpeg",
      alt: "Cardiff city centre skyline"
    },
    {
      src: "/VenueImages/4.jpg",
      alt: "Cardiff city centre street view"
    }
  ];

  const visaExemptCountries = [
    'Austria', 'Croatia', 'Denmark', 'France', 'Iceland', 'Lithuania', 'Netherlands', 'Portugal', 'Slovenia', 'Belgium',
    'Estonia', 'Germany', 'Latvia', 'Luxembourg', 'Norway', 'Romania', 'Spain', 'Bulgaria', 'Czech Republic', 'Finland',
    'Hungary', 'Liechtenstein', 'Malta', 'Poland', 'Slovakia', 'Sweden'
  ];

  const cardiffImages = [
    { src: "/VenueImages/castle.webp", alt: "Cardiff Castle" },
    { src: "/VenueImages/bay.jpg", alt: "Cardiff Bay" },
    { src: "/VenueImages/whale.jpg", alt: "Millennium Stadium Cardiff" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">VENUE AND TRAVEL</h1>
          
          {/* Main venue section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">CONFERENCE VENUE</h2>
              <h3 className="text-2xl font-semibold mb-4">Cardiff Metropolitan University</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>Llandaff Campus, Western Avenue, Cardiff, CF5 2YB</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p className="text-justify">The conference will be held at the Llandaff Campus of Cardiff Metropolitan University, located just minutes from Cardiff city centre. The venue offers a vibrant academic setting with modern facilities, excellent transport links, and easy access to the city's rich cultural and historical attractions.</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Cardiff+Metropolitan+University+Llandaff+Campus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Cardiff Welcome Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">WELCOME TO CARDIFF - A HISTORIC AND VIBRANT CONFERENCE DESTINATION</h2>
            
            <p className="mb-6 text-justify">
              Cardiff is the capital and largest city of Wales known for its rich history, culture, and legendary tales. Nestled in the heart of South Wales, the city seamlessly blends its Roman origins, medieval heritage, and modern innovation. At its centre stands the iconic Cardiff Castle, dating back to AD 55, offering a glimpse into nearly 2,000 years of history. Cardiff is also celebrated as the birthplace of Roald Dahl, boasts stunning green spaces like Bute Park, and is home to charming Victorian and Edwardian arcades, filled with boutique shops and independent cafés.
            </p>

            <p className="mb-6 text-justify">
              We are delighted to welcome the research community to our vibrant and welcoming capital. Whether you're here for the conference or plan to extend your stay, Cardiff offers plenty to explore—from its bustling waterfront at Cardiff Bay to the rugged coastlines and golden beaches of South and West Wales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cardiffImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Location and Map section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify mb-4">
                Leonardo Hotel Cardiff, Cardiff City Centre, Wales, United Kingdom
              </p>
              <p className="text-justify text-sm text-gray-600">
                We encourage our participants to physically attend the conference in Cardiff. We look forward to welcoming you to this vibrant Welsh capital city.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.644580784491!2d-3.1769887230365033!3d51.483037912482274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb9e1c647eb%3A0xd8df37dd2b720130!2sLeonardo%20Hotel%20Cardiff!5e0!3m2!1sen!2sin!4v1756622898880!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Travel and Visa section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">TRAVEL AND VISA</h2>
            
            <p className="mb-6 text-justify">
              If you are a citizen of one of the below 27 countries, then you do not require a visa or any other documentation apart from a passport:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {visaExemptCountries.map((country, index) => (
                <div key={index} className="text-blue-600">
                  • {country}
                </div>
              ))}
            </div>

            <p className="text-justify mb-4 text-sm text-gray-600">
              There are 55 additional countries that do not require a visa, please visit Visitor Supporting Documents for more information. Attendees from countries that require a UK visa for entry are reminded that the process of obtaining a visa may take approximately 3 weeks time under normal circumstances. Please email{' '}
              <a href="mailto:dasgri.congress@gmail.com" className="text-blue-600 hover:underline">
                dasgri.congress@gmail.com
              </a>{' '}
              to request a visa invitation letter so that you can print and use in obtaining a visa. Obtaining a Visa Support Letter from AISGRI-2026 Conference will not guarantee that your U.K. visa application will be approved. The letter is merely supplementary information that explains a visa applicant's intended purpose of travel to United Kingdom
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">For security purposes, the conference has policy for issuing official Visa Support Letters as follows:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visa Support Letters will be issued only after you have successfully registered and paid for your conference.</li>
                <li>Visa Support Letters can only be issued for the person registered to attend the conference in form of participant, author, chair and speaker. Unfortunately we cannot issue visa Support Letters for guests of participants.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;