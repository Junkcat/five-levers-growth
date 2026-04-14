import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Brain, Factory, UserCheck, Users, GraduationCap, Lock, Target, Layers, TrendingUp, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-growth.jpg";

const products = [
  {
    icon: Rocket,
    title: "Масштабирование продуктов",
    subtitle: "Метод пяти рычагов",
    description: "Запускаем и масштабируем продукты за 12 недель — от диагностики до первых денег. Методологию и компетенции передаём вашей команде.",
    tags: ["12 недель", "5 рычагов", "+25% рост показателей"],
    link: "/scaling",
    available: true,
    gradient: "from-primary-600 to-primary-800",
  },
  {
    icon: Brain,
    title: "Проверка гипотез с ИИ",
    subtitle: "Акселерация продуктовых команд",
    description: "Формирование и проверка продуктовых идей с использованием платформы на базе искусственного интеллекта. До 12 гипотез в месяц на команду.",
    tags: ["ИИ-платформа", "30 гипотез", "12 недель"],
    link: "/validate-idea",
    available: true,
    gradient: "from-accent-500 to-primary-600",
  },
  {
    icon: Factory,
    title: "Продуктовая фабрика",
    subtitle: "Запуск с нуля",
    description: "Создание продуктовой функции с нуля: ассесмент, запуск продуктовых команд, портфельное управление и Школа владельцев продукта.",
    tags: ["4 этапа", "от 6 месяцев"],
    link: "/product-factory",
    available: true,
    gradient: "from-primary-700 to-primary-900",
  },
  {
    icon: UserCheck,
    title: "Ассесмент продактов",
    subtitle: "Оценка компетенций",
    description: "Оценка профессиональных и гибких навыков по грейдам. Матрица компетенций, руководства по найму, индивидуальные планы развития.",
    tags: ["от 30 человек", "от 4 недель"],
    link: "/assessment",
    available: true,
    gradient: "from-primary-800 to-accent-500",
  },
  {
    icon: Users,
    title: "Продуктовые портфели",
    subtitle: "Процессы · Управление",
    description: "Выстраивание процессов работы с продуктовыми портфелями: бэклоги, дерево метрик, дашборды мониторинга и проектный офис.",
    tags: ["Портфель", "Дерево метрик", "Дашборды"],
    link: "/portfolio-processes",
    available: true,
    gradient: "from-accent-500 to-accent-600",
  },
  {
    icon: GraduationCap,
    title: "Обучение команд",
    subtitle: "Школа владельцев продукта",
    description: "Школа на реальных инициативах компании. Фреймворк от генерации идей до масштабирования, измеримый финансовый результат за 4 месяца.",
    tags: ["от 20 человек", "4 месяца"],
    link: "/training",
    available: true,
    gradient: "from-primary-600 to-accent-400",
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
    title: "Измеримый результат",
    desc: "Для нас продукт — это механизм роста: выручка, прибыль, время до рынка, воронки, целевые сегменты. Не теория ради теории.",
  },
  {
    icon: Layers,
    title: "Система, а не обучение",
    desc: "Недостаточно обучить людей продукту. Нужны роли, процессы, ритмы, артефакты и решения на уровне управления.",
  },
  {
    icon: TrendingUp,
    title: "Стратегия → операционная модель",
    desc: "Мы переводим абстрактный продуктовый подход в конкретные управленческие практики: деревья метрик, дашборды, кварт. ревью.",
  },
  {
    icon: Zap,
    title: "Сложное можно сделать понятным",
    desc: "Даже крупную организацию можно разложить на логичные элементы и запустить изменения без лишней сложности.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>FiveLevers — Архитектор продуктовых систем роста</title>
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
            src={heroImage}
            alt="Business growth analytics"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Архитектор продуктовых систем роста
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Помогаем компаниям выстраивать продуктовые системы, которые одновременно
              улучшают клиентский опыт, ускоряют изменения и дают измеримый бизнес-эффект.
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
                Мы стоим на стыке четырёх миров
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Стратегия. Продукт. Обучение управленцев. Организационное внедрение.
                Такая комбинация встречается редко — обычно человек силён в одном из них.
                Наша главная уникальность в том, что мы сшиваем их в единый управленческий контур.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Мы работаем там, где недостаточно просто «обучить людей продукту» — нужно
                пересобрать способ принятия решений и доведения инициатив до бизнес-эффекта.
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
            <h2 className="text-5xl font-bold text-foreground mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр продуктового консалтинга — от проверки идей до масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-300 bg-white group relative"
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

                  <Button
                    onClick={() => navigate(product.link)}
                    className="w-full gradient-cta text-white"
                  >
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Формат сотрудничества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наш консультант работает как часть вашей команды на время проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Встроенная работа", desc: "Консультант погружается в ваши процессы и работает вместе с командой, а не «снаружи»." },
              { title: "Гибридный формат", desc: "Еженедельные синхронизации онлайн и офлайн, рабочие сессии по итогам каждого цикла, асинхронное сопровождение." },
              { title: "Передача методологии", desc: "Знания и инструменты остаются в компании. По итогам проекта команда работает самостоятельно." },
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
    </div>
  );
};

export default Index;
