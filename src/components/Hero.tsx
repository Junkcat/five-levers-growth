import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-growth.jpg";
import ContactDialog from "./ContactDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<string>("Запрос диагностики");

  const handleDiagnosticClick = () => {
    setRequestType("Запрос диагностики");
    setDialogOpen(true);
  };

  const handleMethodologyClick = () => {
    setRequestType("Скачать план на 12 недель");
    setDialogOpen(true);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Business growth analytics dashboard"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Пять рычагов<br />измеримого роста
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Запускаем и масштабируем продукты за 12 недель — от диагностики до первых денег. 
            Методологию и компетенции передаём вашей команде.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleDiagnosticClick}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
            >
              Запросить диагностику
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleMethodologyClick}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto backdrop-blur-sm"
            >
              Получить план на 12 недель
            </Button>
          </div>
          
          <ContactDialog 
            open={dialogOpen} 
            onOpenChange={setDialogOpen}
            requestType={requestType}
          />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-sm text-white/80">недель до результата</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm text-white/80">ключевых рычагов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+25%</div>
              <div className="text-sm text-white/80">средний рост метрик</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/80">передача знаний</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
