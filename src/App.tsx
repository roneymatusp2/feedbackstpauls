import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import Observations from "./pages/Observations";
import SelfAssessment from "./pages/SelfAssessment";
import BestPractices from "./pages/BestPractices";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/gallery" element={<Gallery />} />
          <Route path="/dashboard/observations" element={<Observations />} />
          <Route path="/dashboard/self-assessment" element={<SelfAssessment />} />
          <Route path="/dashboard/best-practices" element={<BestPractices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
