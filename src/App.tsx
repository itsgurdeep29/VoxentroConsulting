import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Partners from "@/pages/Partners";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import CRMDialer from "@/pages/services/CRMDialer";
import IVRSystems from "@/pages/services/IVRSystems";
import AISupport from "@/pages/services/AISupport";
import CloudTelephony from "@/pages/services/CloudTelephony";
import CallCenter from "@/pages/services/CallCenter";
import Automation from "@/pages/services/Automation";
import NotFound from "@/pages/NotFound";
import ThankYou from "@/pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/crm-dialer" element={<CRMDialer />} />
            <Route path="/services/ivr-systems" element={<IVRSystems />} />
            <Route path="/services/ai-support" element={<AISupport />} />
            <Route path="/services/cloud-telephony" element={<CloudTelephony />} />
            <Route path="/services/call-center" element={<CallCenter />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
