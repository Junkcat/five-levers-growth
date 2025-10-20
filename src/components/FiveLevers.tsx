import { Card } from "@/components/ui/card";
import { Package, Radio, Database, DollarSign, Users } from "lucide-react";

const levers = [
  {
    icon: Package,
    title: "Product",
    subtitle: "Продукт",
    description: "Ценностное предложение, сегменты, JTBD, roadmap, UX",
    metrics: ["Activation", "Retention D30/D90", "NPS"],
    impact: "+10–30% к активациям",
    color: "from-primary-600 to-primary-700"
  },
  {
    icon: Radio,
    title: "Channels",
    subtitle: "Каналы",
    description: "Цифровые и партнёрские каналы, CVM, омниканальность",
    metrics: ["CAC", "LTV", "ROMI по каналам"],
    impact: "−10–25% CAC",
    color: "from-primary-700 to-primary-800"
  },
  {
    icon: Database,
    title: "Data",
    subtitle: "Данные",
    description: "Сбор данных, аналитика, эксперименты, сегментация",
    metrics: ["A/B velocity", "Data coverage", "TTI"],
    impact: "2× скорость решений",
    color: "from-primary-800 to-primary-900"
  },
  {
    icon: DollarSign,
    title: "Economics",
    subtitle: "Экономика",
    description: "Прайсинг, юнит-экономика, contribution margin",
    metrics: ["CM1/CM2", "Payback", "Price elasticity"],
    impact: "+3–8 п.п. к марже",
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: Users,
    title: "People",
    subtitle: "Команда",
    description: "Роли, ритуалы, навыки, плейбуки, KPI",
    metrics: ["Release velocity", "Skill coverage", "Engagement"],
    impact: "+20–40% скорость",
    color: "from-accent-400 to-accent-500"
  }
];

const FiveLevers = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Метод <span className="text-gradient">FiveLevers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Пять ключевых рычагов, которые системно двигают рост вашего бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {levers.map((lever, index) => {
            const Icon = lever.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-300 bg-white group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${lever.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {lever.title}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-3">
                  {lever.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-4">
                  {lever.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-foreground">Ключевые метрики:</p>
                  <div className="flex flex-wrap gap-2">
                    {lever.metrics.map((metric, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-md font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm font-semibold text-success">
                    💡 {lever.impact}
                  </p>
                </div>
              </Card>
            );
          })}
          
          <Card className="p-6 bg-gradient-to-br from-primary-600 to-accent-500 text-white flex flex-col justify-center items-center text-center">
            <div className="text-6xl font-bold mb-2">V</div>
            <h3 className="text-2xl font-bold mb-2">FiveLevers</h3>
            <p className="text-white/90">
              Системный подход к масштабированию бизнеса через пять взаимосвязанных рычагов
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FiveLevers;
