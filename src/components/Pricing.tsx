import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ContactDialog from "./ContactDialog";

const packages = [
  {
    name: "Core",
    subtitle: "12 недель",
    price: "Под запрос",
    description: "Базовый пакет для запуска методологии",
    features: [
      "Аудит всех 5 рычагов",
      "Дизайн решений",
      "5–7 экспериментов",
      "Базовые плейбуки v1.0",
      "Dashboard North Star",
      "Еженедельные sync-ups"
    ],
    popular: false
  },
  {
    name: "Plus",
    subtitle: "12 недель + roll-out",
    price: "Под запрос",
    description: "Расширенный пакет с внедрением",
    features: [
      "Всё из пакета Core",
      "Roll-out победивших решений",
      "Кастомные дашборды и витрины",
      "Ассист внедрения 6–8 недель",
      "Расширенная академия (5 воркшопов)",
      "Quarterly Impact Pack"
    ],
    popular: true
  },
  {
    name: "Scale",
    subtitle: "1–2 квартала",
    price: "Под запрос",
    description: "Масштабирование и долгосрочная поддержка",
    features: [
      "Всё из пакета Plus",
      "Портфельная модель приоритизации",
      "QBR-плейбуки для C-level",
      "Расширенная академия (10+ сессий)",
      "Поддержка и коучинг 1–2 квартала",
      "Dedicated консультант"
    ],
    popular: false
  }
];

const Pricing = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<string>("Запрос диагностики");

  const handlePackageClick = (packageName: string) => {
    setRequestType(`Обсудить пакет: ${packageName}`);
    setDialogOpen(true);
  };

  const handleDiagnosticClick = () => {
    setRequestType("Запрос диагностики");
    setDialogOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white" id="pricing" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Пакеты работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите формат, который подходит вашей ситуации и амбициям
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${
                pkg.popular 
                  ? 'border-primary-600 border-2 shadow-xl scale-105' 
                  : 'border-neutral-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-4">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-foreground mb-2">{pkg.price}</div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="h-5 w-5 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePackageClick(pkg.name)}
                className={`w-full ${
                  pkg.popular 
                    ? 'gradient-cta text-white' 
                    : 'bg-neutral-100 text-foreground hover:bg-neutral-200'
                }`}
                size="lg"
              >
                Обсудить пакет
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не уверены, какой пакет подходит? Начните с бесплатной диагностической сессии
          </p>
          <Button 
            onClick={handleDiagnosticClick}
            variant="outline" 
            size="lg" 
            className="border-primary-600 text-primary-600 hover:bg-primary-50"
          >
            Запросить диагностику
          </Button>
        </div>
      </div>
    </section>
    
    <ContactDialog 
      open={dialogOpen} 
      onOpenChange={setDialogOpen}
      requestType={requestType}
    />
    </>
  );
};

export default Pricing;
