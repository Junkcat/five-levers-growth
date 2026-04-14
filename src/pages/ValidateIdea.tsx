import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle, Users, BarChart3, Lightbulb, Search, FileText, TestTube, Rocket } from "lucide-react";

const goals = [
  "Настроить операционный ритм по проверке продуктовых гипотез: по 1 гипотезе в неделю на команду",
  "Сформировать и проверить 30 продуктовых гипотез (по 10 на команду)",
  "Для каждой гипотезы определить целевую аудиторию",
  "Сформулировать ценностное предложение для каждой гипотезы",
  "Составить список драйверов финансовой модели",
  "Провести оценку рынка и потенциала идеи",
  "Предоставить рекомендации по запуску каждой гипотезы",
  "Сформировать бэклог проверенных инициатив для реализации",
];

const problems = [
  "Средний срок запуска продуктовой идеи 3–6 месяцев, а результаты часто ниже ожиданий",
  "Продуктовые решения основаны на интуиции, а не на данных",
  "Нет системного подхода к проверке гипотез",
  "Отсутствует поведенческая аналитика и понимание ценности релизов",
];

const benefits = [
  {
    icon: Target,
    title: "Эффективность +30–50%",
    description: "Отсеивание неэффективных инициатив на этапе discovery",
  },
  {
    icon: Zap,
    title: "Ускорение в 2–4 раза",
    description: "Ускорение проверки продуктовых идей с помощью ИИ",
  },
  {
    icon: BarChart3,
    title: "4–12 идей в месяц",
    description: "Проработка и запуск продуктовых идей в каждой команде",
  },
];

const steps = [
  { icon: Lightbulb, title: "Целевая аудитория", description: "Кто наша целевая аудитория?" },
  { icon: Search, title: "Проблемы аудитории", description: "Какие 3 основные проблемы?" },
  { icon: Target, title: "Конкурентные отличия", description: "Чем продукт отличается?" },
  { icon: BarChart3, title: "Потенциал рынка", description: "Оценка рынка и конкурентов" },
  { icon: FileText, title: "Ценностное предложение", description: "Формулировка ценности" },
  { icon: TrendingUp, title: "Финансовая модель", description: "Драйверы фин. модели" },
  { icon: TestTube, title: "A/B тесты", description: "Количественные тесты за 24 часа" },
  { icon: BarChart3, title: "Конверсии", description: "Замеры на реальных пользователях" },
  { icon: Rocket, title: "Решение", description: "Разрабатывать или нет" },
];

const phases = [
  {
    phase: "Этап 1",
    title: "Знакомство и презентация инструмента",
    items: ["Оффлайн kick-off встреча", "Демонстрация ИИ-платформы", "Определение фокус-областей"],
  },
  {
    phase: "Этап 2",
    title: "Формулировка гипотез",
    items: ["Генерация продуктовых идей с ИИ-ментором", "Определение целевых аудиторий", "Формулировка ценностных предложений"],
  },
  {
    phase: "Этап 3",
    title: "Проверка гипотез",
    items: ["Составление концепций продукта", "Запуск продуктовых лендингов", "Подведение результатов и рекомендации"],
  },
];

const ValidateIdea = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-600 to-accent-500 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Brain className="h-5 w-5" />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Validate <span className="text-accent-400">Idea</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Акселерация продуктовых команд: формирование и проверка продуктовых идей 
              с использованием ИИ-платформы
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => { setDialogOpen(true); }}
                className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Обсудить проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30</div>
                <div className="text-sm text-white/80">проверенных гипотез</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-sm text-white/80">недель проекта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2-4×</div>
                <div className="text-sm text-white/80">ускорение проверки</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+50%</div>
                <div className="text-sm text-white/80">эффективность</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Типичные зоны роста
              </h2>
              <ul className="space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                    <span className="text-error mt-1">●</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Почему выбирают нас
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary-600 to-accent-500 p-3 rounded-lg shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ИИ-ментор помогает системно проработать каждую продуктовую гипотезу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-3">
              <Card className="p-8 bg-gradient-to-br from-primary-600 to-accent-500 text-white text-center mb-8">
                <Brain className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">ИИ-ментор задаёт уточняющие вопросы</h3>
                <p className="text-white/90">Для более глубокой проработки продуктовой идеи</p>
              </Card>
            </div>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className="p-6 bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-accent-600">Шаг {i + 1}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Цели проекта</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">План проекта</h2>
            <p className="text-xl text-muted-foreground">Реализация проекта: 12 недель</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {phases.map((phase, i) => (
              <Card key={i} className="p-8 bg-white hover:shadow-xl transition-all border-2 hover:border-primary-300">
                <div className="text-sm font-semibold text-accent-600 mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-success">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Команда</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Илья Азаров", role: "Основатель и CEO", exp: "16+ лет в цифровых продуктах", companies: "Сбер, Альфа Банк, МТС-Банк" },
              { name: "Viet Nguen", role: "Со-основатель и CTO", exp: "14 лет в ИТ-системах", companies: "Альфа Банк, Сбер, Мегафон" },
              { name: "Анна Вошкарина", role: "Эксперт по UX/CX", exp: "14 лет в продуктовом дизайне", companies: "Альфа Банк, Студия Лебедева" },
              { name: "Александр Ефимов", role: "Эксперт по управлению", exp: "12 лет с производственными компаниями", companies: "Severstal, DuPont, SUEK" },
            ].map((member, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-1">{member.exp}</p>
                <p className="text-xs text-muted-foreground">{member.companies}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы проверить гипотезы?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Запустите системную проверку продуктовых идей с помощью ИИ. 
                30 проверенных гипотез за 12 недель.
              </p>
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Обсудить проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        requestType="Обсудить Validate Idea"
      />
    </div>
  );
};

export default ValidateIdea;
