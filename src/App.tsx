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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
