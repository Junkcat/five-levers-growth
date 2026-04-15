import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Index = lazy(() => import("./pages/Index"));
const Scaling = lazy(() => import("./pages/Scaling"));
const ValidateIdea = lazy(() => import("./pages/ValidateIdea"));
const Assessment = lazy(() => import("./pages/Assessment"));
const ProductFactory = lazy(() => import("./pages/ProductFactory"));
const Training = lazy(() => import("./pages/Training"));
const PortfolioProcesses = lazy(() => import("./pages/PortfolioProcesses"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cases = lazy(() => import("./pages/Cases"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
