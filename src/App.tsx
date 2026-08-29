import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BranchContactProvider } from "@/context/BranchContactContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Eyewear from "./pages/Eyewear";
import EyeHealthFacts from "./pages/EyeHealthFacts";
import Gallery from "./pages/Gallery";
import Frames from "./pages/Frames";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BranchContactProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/eyewear" element={<Eyewear />} />
              <Route path="/eye-health-facts" element={<EyeHealthFacts />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/frames" element={<Frames />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </BranchContactProvider>
      </BrowserRouter>
    </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
