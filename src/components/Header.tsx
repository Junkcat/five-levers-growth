import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-full.png";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<string>("Запрос диагностики");
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    setRequestType("Запрос диагностики");
    setDialogOpen(true);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  const isScalingPage = location.pathname === "/scaling";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="FiveLevers - Пять рычагов роста" 
                className="h-14 w-auto drop-shadow-sm cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a onClick={() => navigate("/")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Продукты
              </a>
              {isScalingPage && (
                <>
                  <a href="#methodology" className="text-sm font-medium hover:text-primary transition-colors">
                    Методология
                  </a>
                  <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
                    Процесс
                  </a>
                  <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">
                    Результаты
                  </a>
                  <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                    Цены
                  </a>
                </>
              )}
              <a href="/cases" className="text-sm font-medium hover:text-primary transition-colors">
                Кейсы
              </a>
              <Button onClick={handleContactClick} size="sm">
                Связаться
              </Button>
            </nav>
          </div>
        </div>
      </header>
      
      <ContactDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        requestType={requestType}
      />
    </>
  );
};

export default Header;
