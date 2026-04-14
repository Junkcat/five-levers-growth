import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo-full.png";
import ContactDialog from "./ContactDialog";

const productLinks = [
  { title: "Масштабирование продуктов", href: "/scaling" },
  { title: "Проверка гипотез с ИИ", href: "/validate-idea" },
  { title: "Продуктовая фабрика", href: "/product-factory" },
  { title: "Ассесмент продактов", href: "/assessment" },
  { title: "Продуктовые портфели", href: "/portfolio-processes" },
  { title: "Обучение команд", href: "/training" },
];

const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<string>("Запрос диагностики");
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    setRequestType("Запрос диагностики");
    setDialogOpen(true);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

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
              {/* Выпадающий список продуктов */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                  Продукты
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl border border-border shadow-xl py-2 z-50">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-border rotate-45" />
                    {productLinks.map((p) => (
                      <button
                        key={p.href}
                        onClick={() => { navigate(p.href); setProductsOpen(false); }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors"
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
