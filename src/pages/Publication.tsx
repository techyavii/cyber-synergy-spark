import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Publications</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              Accepted papers will feature in SNGC 2026 Proceedings published IEEE Xplore®.
                Authors will also have the option to submit the extended versions of conference
                papers in special issues of selected IEEE journals (TBC).
            </p>
            {/* <div className="flex justify-center gap-10">
               <img 
              src="/ieee-logo.png" 
              alt="IEEE Logo" 
              className="h-20 md:h-24 w-auto"
            />
            <img 
              src="/ieee-cis-logo.png" 
              alt="IEEE CIS Logo" 
              className="h-20 md:h-24 w-auto"
            />
            </div> */}
            {/* commented paper */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;