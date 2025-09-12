import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CallForPapers from "./pages/CallForPapers";
import Tracks from "./pages/Tracks";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConferenceBanner from "./components/common components/ConferenceBanner";
import Publications from "./pages/Publication";
import PrivacyPolicy from "./pages/Policy";
import Downloads from "./pages/Download";

const queryClient = new QueryClient();

// Website Down Page
const DownPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
    <div className="text-center max-w-lg">
      <h1 className="text-5xl font-bold mb-6">⚠️ Website is Down</h1>
      <p className="text-lg mb-6 text-gray-300">
        Our website is currently unavailable.  
        We’re working hard to restore it as soon as possible.
      </p>
      <div className="animate-bounce text-3xl mb-8">🔧</div>
      <p className="text-sm text-gray-400 mb-6">
        Please check back later or contact us if urgent.
      </p>
      <a
        href="mailto:support@example.com"
        className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition text-white font-medium"
      >
        Contact Support
      </a>
    </div>
  </div>
);

const App = () => {
  // ✅ check env variable (Vite convention uses import.meta.env)
  if (import.meta.env.VITE_WEBSITE_DOWN === "true") {
    return <DownPage />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <ConferenceBanner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/program" element={<Program />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publication" element={<Publications />} />
              <Route path="/policy" element={<PrivacyPolicy />} />
              <Route path="/downloads" element={<Downloads />} />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
