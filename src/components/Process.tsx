import { Card } from "@/components/ui/card";
import { Search, Pencil, Rocket, TrendingUp } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "Недели 1–2",
    title: "Discovery",
    subtitle: "Диагностика",
    description: "Экспресс-аудит 5 рычагов, базовые метрики, карта узких мест, гипотезы",
    deliverables: ["Аудит текущего состояния", "Карта узких мест", "Приоритетные гипотезы"]
  },
  {
    icon: Pencil,
    phase: "Недели 3–5",
    title: "Design",
    subtitle: "Проектирование",
    description: "Дизайн-спринты, канальный микс, data-схема, прайс-варианты, роли и ритуалы",
    deliverables: ["Канальный микс", "Data-архитектура", "Roadmap решений"]
  },
  {
    icon: Rocket,
    phase: "Недели 6–9",
    title: "Development",
    subtitle: "Запуск MVP",
    description: "Запускаем 5–10 экспериментов по приоритетным рычагам — новый оффер, онбординг, прайс-тесты",
    deliverables: ["5-10 A/B тестов", "MVP решений", "Первые результаты"]
  },
  {
    icon: TrendingUp,
    phase: "Недели 10–12",
    title: "Deploy & Scale",
    subtitle: "Масштабирование",
    description: "Масштабируем сработавшее, фиксируем плейбуки, обучаем команду, план на квартал",
    deliverables: ["Плейбуки v1.0", "Обучение команды", "План на 2 квартала"]
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Четыре фазы за 12 недель — от диагностики до масштабирования
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 border-2 hover:border-primary-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-accent-600 mb-1">
                        {phase.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Результаты:</p>
                    <ul className="space-y-1">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-success">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Что вы получите к концу 12 недель</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">📊</div>
                <p className="font-semibold mb-2">Дашборд метрик</p>
                <p className="text-sm text-white/90">North Star + input-метрики для операционного управления</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">📚</div>
                <p className="font-semibold mb-2">Плейбуки v1.0</p>
                <p className="text-sm text-white/90">По всем 5 рычагам для самостоятельной работы</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">🚀</div>
                <p className="font-semibold mb-2">План масштабирования</p>
                <p className="text-sm text-white/90">ROMI, ресурсы, roadmap на 2 квартала</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
