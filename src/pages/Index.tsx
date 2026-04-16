import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Brain, Factory, UserCheck, Users, GraduationCap, Lock, Target, Layers, TrendingUp, Zap, MousePointerClick, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: Rocket,
    title: "Масштабирование продуктов",
    subtitle: "Метод пяти рычагов",
    description: "Берём продукт, который уже работает, и разбираемся почему он растёт медленно. За 12 недель находим узкие места и запускаем первые изменения с измеримым эффектом.",
    tags: ["12 недель", "5 рычагов", "+25% рост показателей"],
    link: "/scaling",
    available: true,
    gradient: "from-primary-600 to-primary-800",
  },
  {
    icon: Brain,
    title: "Проверка гипотез с ИИ",
    subtitle: "Быстрые эксперименты",
    description: "Помогаем командам быстро проверять продуктовые идеи — до 12 гипотез в месяц. Используем ИИ-платформу, чтобы не тратить месяцы на то, что можно проверить за неделю.",
    tags: ["ИИ-платформа", "до 12 гипотез/мес", "12 недель"],
    link: "/validate-idea",
    available: true,
    gradient: "from-accent-500 to-primary-600",
  },
  {
    icon: Factory,
    title: "Продуктовая фабрика",
    subtitle: "Запуск с нуля",
    description: "Если в компании нет продуктовой функции — создаём её с нуля. Подбираем людей, запускаем команды, настраиваем портфель инициатив и обучаем владельцев продукта.",
    tags: ["4 этапа", "от 6 месяцев"],
    link: "/product-factory",
    available: true,
    gradient: "from-primary-700 to-primary-900",
  },
  {
    icon: UserCheck,
    title: "Ассесмент продактов",
    subtitle: "Оценка компетенций",
    description: "Честная оценка того, кто из команды готов быть владельцем продукта, а кто нет. Интервью, матрица навыков по грейдам и конкретный план — кого развивать, кого нанимать.",
    tags: ["от 30 человек", "от 4 недель"],
    link: "/assessment",
    available: true,
    gradient: "from-primary-800 to-accent-500",
  },
  {
    icon: Users,
    title: "Продуктовые портфели",
    subtitle: "Порядок в инициативах",
    description: "Когда проектов много, а понять что важно — сложно. Наводим порядок: единый бэклог, цели связаны с метриками, руководство видит реальную картину происходящего.",
    tags: ["Портфель", "Дерево метрик", "Дашборды"],
    link: "/portfolio-processes",
    available: true,
    gradient: "from-accent-500 to-accent-600",
  },
  {
    icon: GraduationCap,
    title: "Обучение команд",
    subtitle: "Школа владельцев продукта",
    description: "Обучаем сотрудников прямо на задачах компании — не в учебном классе. За 4 месяца команда проходит путь от идеи до первого результата и учится делать это самостоятельно.",
    tags: ["от 20 человек", "4 месяца"],
    link: "/training",
    available: true,
    gradient: "from-primary-600 to-accent-400",
  },
  {
    icon: MousePointerClick,
    title: "CX-UX Диагностика",
    subtitle: "Оптимизация конверсии",
    description: "Находим узкие места в клиентских путях и воронках. Проверяем эффекты улучшений на реальных пользователях через ИИ-платформу — точность прогнозов ~90–95%.",
    tags: ["4–6 недель", "+2–8% к конверсии", "Верификация через ИИ"],
    link: "/cx-discovery",
    available: true,
    gradient: "from-accent-500 to-primary-700",
  },
  {
    icon: CalendarCheck,
    title: "Стратегические сессии",
    subtitle: "Бэклог гипотез и OKR",
    description: "Выездное мероприятие на 5 дней для синхронизации команды: целевые сегменты, CJM, моменты истины, бэклог гипотез с unit-экономикой и операционная модель на квартал.",
    tags: ["5 дней", "до 50 человек", "очно / выезд"],
    link: "/strategy-sessions",
    available: true,
    gradient: "from-primary-700 to-accent-400",
  },
  {
    icon: Lock,
    title: "Оргизменения при внедрении",
    subtitle: "Скоро",
    description: "Консультирование по организационным изменениям при внедрении продуктового подхода: структура команд, роли, процессы управления и преодоление сопротивления изменениям.",
    tags: ["В разработке"],
    link: "",
    available: false,
    gradient: "from-neutral-400 to-neutral-500",
  },
];

const stats = [
  { value: "50+", label: "компаний в СНГ" },
  { value: "3 000+", label: "специалистов обучено" },
  { value: "500+", label: "продуктовых инициатив запущено" },
  { value: "$60М+", label: "измеримый эффект" },
  { value: "5", label: "стран: Россия, Казахстан, Азербайджан, Узбекистан, Кыргызстан" },
];

const pillars = [
  {
    icon: Target,
    title: "Считаем в деньгах",
    desc: "Каждый проект заканчивается не отчётом, а цифрой: выручка, прибыль, сокращение времени до рынка.",
  },
  {
    icon: Layers,
    title: "Не уходим после тренинга",
    desc: "Обучить людей недостаточно. Мы остаёмся, пока не заработает: роли заняты, процессы запущены, первые результаты есть.",
  },
  {
    icon: TrendingUp,
    title: "От стратегии к действиям",
    desc: "Берём большую цель и разбиваем на конкретные шаги: кто делает, что меряем, когда ждать результат.",
  },
  {
    icon: Zap,
    title: "Без лишней сложности",
    desc: "Не усложняем там, где можно просто. Даже в большой компании изменения можно запустить быстро, если знать где надавить.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>FiveLevers — Запускаем рост продуктов в крупных компаниях</title>
        <meta name="description" content="Продуктовый консалтинг для крупного бизнеса: масштабирование продуктов, обучение команд, продуктовые фабрики. 50+ компаний в СНГ, $60М+ измеримый эффект." />
        <meta name="keywords" content="продуктовый консалтинг, масштабирование продуктов, обучение продуктовых команд, владелец продукта, продуктовая фабрика, OKR, метрики роста, СНГ" />
        <link rel="canonical" href="https://5levers.pro/" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <img
            src="/hero-growth.webp"
            alt="Business growth analytics"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Строим продуктовые команды. Считаем результат в деньгах.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Работаем вместе с вашей командой — от первой гипотезы до измеримого результата.
              Всё что нужно для роста, остаётся внутри компании.
            </p>
            <Button
              size="lg"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
            >
              Наши продукты
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-7 px-4 text-center">
                <p className="text-3xl font-bold text-primary-600 mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кто мы */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">О нас</p>
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Приходим и делаем вместе с командой
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Большинство консультантов приносят презентацию и уходят.
                Мы работаем иначе: встраиваемся в команду, запускаем изменения вместе
                и не уходим, пока не появится результат.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                В команде — стратеги, продакты, фасилитаторы и методологи. Поэтому мы
                закрываем весь путь: от постановки целей до работающих команд и первых денег.
              </p>
              <p className="text-sm font-semibold text-foreground">
                Банки · Промышленность · Цифровая трансформация · Финансовые рынки · Телеком · Ретейл
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <Card key={i} className="p-5 border-2 hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="p-2 bg-primary-50 rounded-lg w-fit mb-3">
                    <p.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-20 bg-white" id="products" style={{ scrollMarginTop: "80px" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Чем мы занимаемся</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Восемь направлений — выбирайте то, что нужно прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-300 bg-white group relative flex flex-col items-start"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${product.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">{product.title}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">{product.subtitle}</p>
                  <p className="text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {product.available ? (
                    <Button
                      onClick={() => navigate(product.link)}
                      className="w-full gradient-cta text-white mt-auto self-stretch"
                    >
                      Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setDialogOpen(true)}
                      className="w-full mt-auto self-stretch"
                      variant="outline"
                    >
                      Получить консультацию
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Формат работы */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Как мы работаем</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Не даём советы — работаем рядом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Работаем внутри команды", desc: "Не присылаем отчёты снаружи. Садимся рядом, разбираемся в задачах и делаем вместе." },
              { title: "Онлайн и офлайн", desc: "Еженедельные встречи, рабочие сессии на месте, поддержка между встречами — как удобно команде." },
              { title: "Компания продолжает без нас", desc: "Методология, инструменты и навыки переходят к команде. После проекта компания продолжает расти самостоятельно." },
            ].map((f, i) => (
              <Card key={i} className="p-6 border-2 text-center">
                <h3 className="font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Консультация по оргизменениям" />
    </div>
  );
};

export default Index;
