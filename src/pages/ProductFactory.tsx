import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Layers, Target, TrendingUp, Users, BarChart3 } from "lucide-react";

const problems = [
  { block: "Целеполагание", items: ["Нет сквозных целей между подразделениями", "Цели компании не связаны с целями команд", "Каскад задач непрозрачен для сотрудников"] },
  { block: "Портфель инициатив", items: ["Бэклоги фрагментированы по командам", "Инициативы не связаны с бизнес-целями", "Нет метрических целей в инициативах"] },
  { block: "Продуктовые команды", items: ["Нет компетенций для создания команд", "Нет взаимодействия между функциями", "Нет культуры продуктовых практик"] },
  { block: "Данные и аналитика", items: ["Мониторинг метрик — ручной и трудоёмкий", "Данные не влияют на управленческие решения", "Нет связи инициатив с бизнес-показателями"] },
];

const stages = [
  {
    num: "01",
    title: "Ассесмент",
    subtitle: "Оценка кандидатов",
    items: [
      "Интервью с кандидатами на роль владельца продукта",
      "Матрица компетенций и ролевая модель",
      "Индивидуальные планы развития",
      "Рекомендации по назначениям",
    ],
    gradient: "from-primary-700 to-primary-600",
  },
  {
    num: "02",
    title: "Запуск команд",
    subtitle: "Продуктовые команды",
    items: [
      "Запуск кросс-функциональных команд из бизнеса и IT",
      "Гибкие процессы и артефакты в работе команд",
      "Регулярные ретроспективы и снятие блокеров",
      "Визуализация потока работ для отслеживания динамики",
    ],
    gradient: "from-primary-600 to-accent-500",
  },
  {
    num: "03",
    title: "Портфель",
    subtitle: "Управление инициативами",
    items: [
      "Сквозной бэклог инициатив на единой платформе",
      "Связь инициатив с бизнес-целями",
      "Дерево метрик и целеполагание через цели и ключевые результаты",
      "Дашборды мониторинга эффектов",
    ],
    gradient: "from-accent-500 to-primary-700",
  },
  {
    num: "04",
    title: "Школа",
    subtitle: "Масштабирование",
    items: [
      "Обучение владельцев продукта на реальных инициативах",
      "Фреймворк от генерации идей до масштабирования",
      "Передача методологии команде",
    ],
    gradient: "from-primary-700 to-primary-900",
  },
];

const results = [
  { icon: Users, value: "100+", label: "владельцев продукта обучено" },
  { icon: BarChart3, value: "−67%", label: "сокращение времени до рынка" },
  { icon: Target, value: "100+", label: "инициатив в прозрачном портфеле" },
  { icon: TrendingUp, value: "$XXМ+", label: "измеримый финансовый эффект" },
];

const ProductFactory = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Продуктовая фабрика — запуск продуктовой функции с нуля | FiveLevers</title>
        <meta name="description" content="Создание продуктовой функции с нуля: ассесмент кандидатов, запуск кросс-функциональных команд, портфель инициатив, обучение владельцев продукта. От 6 месяцев." />
        <meta name="keywords" content="продуктовая фабрика, запуск продуктовой функции, владелец продукта, продуктовые команды, портфель инициатив, OKR" />
        <link rel="canonical" href="https://5levers.pro/product-factory" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-600 to-accent-500 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Layers className="h-4 w-4" />
              <span className="text-sm font-medium">4 этапа трансформации</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Продуктовая фабрика
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Создание продуктовой функции с нуля: от оценки кандидатов до работающего портфеля
              инициатив с прозрачными метриками и обученными командами.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> 4 взаимосвязанных этапа</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> от 6 месяцев</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Обсудить запуск
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Проблемы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Почему это важно</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Типичные проблемы до запуска фабрики</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <Card key={i} className="p-5 border-2">
                <h3 className="font-bold text-foreground mb-3 text-sm">{p.block}</h3>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-red-400 font-bold shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 этапа */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Дорожная карта</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">4 этапа запуска</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Каждый этап решает конкретную задачу и строится на результатах предыдущего</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {stages.map((s, i) => (
              <Card key={i} className="overflow-hidden border-2 hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-br ${s.gradient} p-5 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-black text-white/20">{s.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="text-white/70 text-sm">{s.subtitle}</p>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary-500 font-bold shrink-0 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Эффект для бизнеса</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Результаты работающей фабрики</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {results.map((r, i) => (
              <Card key={i} className="p-6 text-center border-2">
                <r.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary-600 mb-1">{r.value}</p>
                <p className="text-sm text-muted-foreground">{r.label}</p>
              </Card>
            ))}
          </div>
          <Card className="p-6 border-2 bg-muted/30">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Кейс: Северсталь</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              С нуля до полноценной продуктовой лаборатории, которая работает самостоятельно.
              Разработан 7-этапный фреймворк, создана лаборатория с трекерами и тьюторами,
              спроектирована система мотивации. 100+ специалистов обучено, 100+ инициатив запущено, $XXМ+ прибыли.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-600 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы запустить продуктовую фабрику?</h2>
          <p className="text-xl text-white/85 mb-8 max-w-xl mx-auto">
            Получите план работ за 48 часов на основе вашей проблематики
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Обсудить запуск
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Продуктовая фабрика" />
    </div>
  );
};

export default ProductFactory;
