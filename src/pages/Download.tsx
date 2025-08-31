
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Downloads = () => {
  const downloadItems = [
    {
      name: 'IEEE CIS Word Template',
      link: 'https://docs.google.com/document/d/1WbzsqGDlpR_ZgbFcQGl1KBhL8eQyVMln/edit?usp=sharing&ouid=117688776952714683539&rtpof=true&sd=true',
      icon: <FileText className="mr-2" size={18} />
    },
    {
      name: 'ManuScript Guidelines',
      link: 'https://docs.google.com/document/d/1rV8asKn9k0Y9xQ5TUo-qXfuzoDLkLT3j/edit?usp=sharing&ouid=117688776952714683539&rtpof=true&sd=true',
      icon: <FileText className="mr-2" size={18} />
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Downloads</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 border-b">Resource</th>
                  <th className="text-right py-3 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {downloadItems.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 flex items-center">
                      {item.icon}
                      {item.name}
                    </td>
                    <td className="py-4 text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center"
                        asChild
                      >
                        <a href={item.link} download rel="noopener noreferrer" target="_blank">
                          <Download className="mr-1" size={16} />
                          Download
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
