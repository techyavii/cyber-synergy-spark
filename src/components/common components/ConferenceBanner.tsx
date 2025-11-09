import React from 'react';
import { Calendar } from 'lucide-react';

const sponsors = [
  {
    name: "Cardiff Metropolitan University",
    src: "/cardiff.png",
    alt: "Cardiff Metropolitan University Logo",
  },
  {
    name: "Manchester Metropolitan University",
    src: "/manchester.png",
    alt: "Manchester Metropolitan University Logo",
  },
  {
    name: "Northeastern University",
    src: "/northeatern.png",
    alt: "Northeastern University Logo",
  },
];
const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-white bg-center py-8 relative" 
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 text-black"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Logos (stacked on mobile) */}
        <div className="flex items-center gap-2 lg:flex-row flex-col flex-wrap justify-center">
          {sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.src}
                alt={sponsor.alt}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            ))}
        </div>

        {/* Center - Conference Details */}
        <div className="text-center flex-grow">
          <h1 className="text-lg md:text-2xl font-medium tracking-tight mb-2">
            1st International Conference on Synergies in Next-Generation Cyber-Physical Systems
          </h1>
          <h2 className="text-base md:text-xl font-medium mb-2">(SNGC 2026)</h2>
          <p className="text-sm md:text-base font-medium mb-2">
            ORGANISED BY : IEEE Trustworthy IoT Working Group & IEEE TAR-AI Special Interest Group
          </p>
          <div className="flex items-center justify-center text-sm md:text-base mb-2">
            <Calendar className="mr-2" size={16} />
            <p>10th - 11th April, 2026</p>
          </div>
          {/* <p className="text-sm md:text-base font-medium text-yellow-300">
            Springer LNNS Approved Conference
          </p> */}
        </div>

        {/* Right Logo (moves below on mobile) */}
        <div>
          {/* <img 
            src="/lovable-uploads/05de4a41-6b64-4c4f-8847-7ee35c378b27.png" 
            alt="Goldsmiths University of London" 
            className="h-16 md:h-20 w-auto"
          /> */}
          <img 
              src="/ieee-logo.png" 
              alt="IEEE Logo" 
              className="h-10 md:h-14 w-auto"
            />
            <img 
              src="/ieee-cis-logo.png" 
              alt="IEEE CIS Logo" 
              className="h-10 md:h-14 w-auto"
            />
            <img 
              src="/umbcLogo.png" 
              alt="UMBC Logo" 
              className="h-10 md:h-8 w-auto mt-6"
            />
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
