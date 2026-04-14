import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Rocket,
  Brain,
  Factory,
  UserCheck,
  Layers,
  GraduationCap,
  LayoutGrid,
  BookOpen,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import logoImage from "@/assets/logo-full.png";
import ContactDialog from "./ContactDialog";

const productLinks = [
  { title: "Масштабирование продуктов", href: "/scaling", icon: Rocket, desc: "Метод пяти рычагов" },
  { title: "Проверка гипотез с ИИ", href: "/validate-idea", icon: Brain, desc: "Акселерация с ИИ-платформой" },
  { title: "Продуктовая фабрика", href: "/product-factory", icon: Factory, desc: "Запуск с нуля" },
  { title: "Ассесмент продактов", href: "/assessment", icon: UserCheck, desc: "Оценка компетенций" },
  { title: "Продуктовые портфели", href: "/portfolio-processes", icon: Layers, desc: "PMO и управление" },
  { title: "Обучение команд", href: "/training", icon: GraduationCap, desc: "Школа владельцев продукта" },
];

const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<string>("Запрос диагностики");
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    setRequestType("Запрос диагностики");
    setDialogOpen(true);
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavigate = (href: string) => {
    navigate(href);
    setProductsOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="FiveLevers - Пять рычагов роста"
                className="h-14 w-auto drop-shadow-sm cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center gap-2">
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary-50 transition-all">
                  <LayoutGrid className="h-4 w-4" />
                  Продукты
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                    <div className="bg-white rounded-2xl border border-border shadow-2xl py-3 overflow-hidden">
                      <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Наши продукты</p>
                      <div className="divide-y divide-border/50">
                        {productLinks.map((p) => {
                          const Icon = p.icon;
                          return (
                            <button
                              key={p.href}
                              onClick={() => handleNavigate(p.href)}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors group"
                            >
                              <div className="p-2 rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors shrink-0">
                                <Icon className="h-4 w-4 text-primary-600" />
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</p>
                                <p className="text-xs text-muted-foreground">{p.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/cases"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary-50 transition-all"
              >
                <BookOpen className="h-4 w-4" />
                Кейсы
              </a>

              <Button
                onClick={handleContactClick}
                className="ml-2 flex items-center gap-2 text-base px-5 py-2 h-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Связаться
              </Button>
            </nav>

            {/* Кнопка бургера (мобильная) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
            {/* Продукты */}
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-foreground hover:bg-muted transition-colors"
            >
              <span className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4 text-primary-600" />
                Продукты
              </span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileProductsOpen && (
              <div className="ml-2 space-y-1 pb-1">
                {productLinks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.href}
                      onClick={() => handleNavigate(p.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <div className="p-1.5 rounded-lg bg-primary-100 shrink-0">
                        <Icon className="h-3.5 w-3.5 text-primary-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground">{p.title}</p>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Кейсы */}
            <a
              href="/cases"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-3 rounded-xl text-base font-medium text-foreground hover:bg-muted transition-colors"
            >
              <BookOpen className="h-4 w-4 text-primary-600" />
              Кейсы
            </a>

            {/* Связаться */}
            <div className="pt-2">
              <Button onClick={handleContactClick} className="w-full flex items-center gap-2 text-base py-3 h-auto">
                <MessageCircle className="h-4 w-4" />
                Связаться
              </Button>
            </div>
          </div>
        )}
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
