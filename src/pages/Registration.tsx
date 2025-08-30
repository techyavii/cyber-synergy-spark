import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Registration: React.FC = () => {
  return (
    <>
    <Header></Header>
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className=" text-3xl md:text-4xl text-[#001324] mb-8">Registrations</h1>
          
          <section className="mb-10">
            <h2 className=" text-2xl text-[#001324] mb-4">CONFERENCE ACCEPTED PAPER REGISTRATION</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f9f5e9]">
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">EARLY REGISTRATION (Before 30th June 2026)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">LATE REGISTRATION (After 30th June 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Research Student Author (Physical Mode)</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £300</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £330</td>
                  </tr>
                  <tr className="bg-[#f9f5e9]/50">
                    <td className="border border-gray-300 px-4 py-2">Research Student Author (Online Mode)</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £200</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £230</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Standard Authors (Physical Mode)</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £350</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £380</td>
                  </tr>
                  <tr className="bg-[#f9f5e9]/50">
                    <td className="border border-gray-300 px-4 py-2">Standard Authors (Online Mode)</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £220</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £270</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p className="text-justify">*Standard Paper size – 8 pages. Over length of paper charges £30 per extra page.</p>
              <p className="text-justify">**Research Student Author - Those authors who are currently pursuing PHD, Masters degree in a research organisation/University comes under this category.</p>
              <p className="text-justify">If you have any concerns regarding the registration policy or fees please feel free to write us at <a href="mailto:info@sngc-conf.co.uk" className="text-blue-600 hover:underline">info@sngc-conf.co.uk</a>.</p>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className=" text-2xl text-[#001324] mb-4">CONFERENCE PARTICIPANT REGISTRATION</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f9f5e9]">
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">EARLY REGISTRATION (Before 30th June 2026)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">LATE REGISTRATION (After 30th June 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Research Student Participants</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £200</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £250</td>
                  </tr>
                  <tr className="bg-[#f9f5e9]/50">
                    <td className="border border-gray-300 px-4 py-2">Standard Participants</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £250</td>
                    <td className="border border-gray-300 px-4 py-2">GBP £300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="font-bold text-green-600">Early Bird Registration Open Now !!</p>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className=" text-2xl text-[#001324] mb-4">Registration Options</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CreditCard className="h-10 w-10 mb-4 text-[#001324]" />
                  <h3 className="font-bold text-lg mb-2">Registration via Stripe</h3>
                  {/* checkout */}
                  <Link to="/"><Button className="mt-2 bg-[#001324] hover:bg-[#333333]">Pay with Stripe</Button></Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CreditCard className="h-10 w-10 mb-4 text-[#001324]" />
                  <h3 className="font-bold text-lg mb-2">Registration via Razorpay</h3>
                  <p className="text-sm text-center text-gray-500 mb-2">(only for SAARC Nations)</p>
                  {/* https://rzp.io/rzp/UTwHWlmV */}
                  <a href=''><Button className="mt-2 bg-[#001324] hover:bg-[#333333]">Pay with Razorpay</Button></a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CreditCard className="h-10 w-10 mb-4 text-[#001324]" />
                  <h3 className="font-bold text-lg mb-2">Registration via PayPal</h3>
                  {/* https://paypal.me/adroidconference?country.x=IN&locale.x=en_GB */}
                  <a href=''><Button className="mt-2 bg-[#001324] hover:bg-[#333333]">Pay with PayPal</Button></a>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className=" text-2xl text-[#001324] mb-4">REGISTRATION INCLUDES</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-justify">Access to Keynote talks</li>
              <li className="text-justify">Access to paper presentation sessions</li>
              <li className="text-justify">Networking sessions</li>
              <li className="text-justify">Conference lunch and refreshment*</li>
              <li className="text-justify">Tea and Coffee Breaks*</li>
              <li className="text-justify">Conference kit*</li>
              <li className="text-justify">Participation Certificate</li>
            </ul>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-bold">Note:</p>
              <p className="text-justify">The conference is non-residential and delegates are kindly requested to make their own arrangement for accommodation. If you have any query, please drop a mail to <a href="mailto:info@sngc-conf.co.uk" className="text-blue-600 hover:underline">info@sngc-conf.co.uk</a>. All participants and authors abide by the organization's guidelines.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Registration;
