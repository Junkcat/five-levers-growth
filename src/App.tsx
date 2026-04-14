import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scaling from "./pages/Scaling";
import ValidateIdea from "./pages/ValidateIdea";
import Assessment from "./pages/Assessment";
import ProductFactory from "./pages/ProductFactory";
import Training from "./pages/Training";
import PortfolioProcesses from "./pages/PortfolioProcesses";
import ComingSoon from "./pages/ComingSoon";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cases from "./pages/Cases";
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
          <Route path="/scaling" element={<Scaling />} />
          <Route path="/validate-idea" element={<ValidateIdea />} />
          <Route path="/product-factory" element={<ProductFactory />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/role-profile" element={<PortfolioProcesses />} />
          <Route path="/portfolio-processes" element={<PortfolioProcesses />} />
          <Route path="/training" element={<Training />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
