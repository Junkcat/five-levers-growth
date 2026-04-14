import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scaling from "./pages/Scaling";
import ValidateIdea from "./pages/ValidateIdea";
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
          <Route path="/product-factory" element={<ComingSoon title="Продуктовая фабрика" description="Создание фреймворка работы продуктовой фабрики: процессы, ритуалы, метрики и инструменты для системного запуска продуктов." />} />
          <Route path="/assessment" element={<ComingSoon title="Ассесмент продактов" description="Комплексная оценка компетенций продуктовых менеджеров: hard и soft skills, зоны роста, индивидуальные планы развития." />} />
          <Route path="/role-profile" element={<ComingSoon title="Профиль роли продакта" description="Формирование профиля роли продакт-менеджера под специфику вашей компании: грейды, навыки, KPI, карьерные треки." />} />
          <Route path="/training" element={<ComingSoon title="Обучение продуктовых команд" description="Практическое обучение продуктовых команд: воркшопы, менторинг, кейс-стади на реальных продуктах вашей компании." />} />
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
