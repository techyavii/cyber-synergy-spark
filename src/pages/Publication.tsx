import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Publication</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              All accepted papers will feature in SNGC 2026 Proceedings and will be submitted for possible inclusion in IEEE Xplore.
            </p>
            <p className="mb-6">
              Authors will also have the opportunity to submit extended versions of their papers to special issues of leading IEEE journals (to be announced soon).
            </p>
            <div className="flex justify-center gap-10">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;