import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "./ContactDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<"diagnostic" | "methodology">("diagnostic");

  const handleDiagnosticClick = () => {
    setRequestType("diagnostic");
    setDialogOpen(true);
  };

  const handleMethodologyClick = () => {
    setRequestType("methodology");
    setDialogOpen(true);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-hero rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE0em0wLTR2Mkgy0HYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы к диагностике?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Получите draft-план на 12 недель за 48 часов на основе ваших метрик. 
                Покажем, какие рычаги дадут максимальный эффект.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
                  Скачать методологию PDF
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Бесплатная диагностика</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>План за 48 часов</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Без обязательств</span>
                </div>
              </div>
            </div>
          </div>
          
          <ContactDialog 
            open={dialogOpen} 
            onOpenChange={setDialogOpen}
            requestType={requestType}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
