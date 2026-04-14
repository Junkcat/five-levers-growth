import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Brain, Factory, UserCheck, Users, GraduationCap, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-growth.jpg";

const products = [
  {
    icon: Rocket,
    title: "Масштабирование продуктов",
    subtitle: "FiveLevers Method",
    description: "Запускаем и масштабируем продукты за 12 недель — от диагностики до первых денег. Методологию и компетенции передаём вашей команде.",
    tags: ["12 недель", "5 рычагов", "+25% рост метрик"],
    link: "/scaling",
    available: true,
    gradient: "from-primary-600 to-primary-800",
  },
  {
    icon: Brain,
    title: "Validate Idea",
    subtitle: "AI-проверка гипотез",
    description: "Акселерация продуктовых команд: формирование и проверка продуктовых идей с использованием ИИ-платформы. До 12 гипотез в месяц на команду.",
    tags: ["ИИ-платформа", "30 гипотез", "12 недель"],
    link: "/validate-idea",
    available: true,
    gradient: "from-accent-500 to-primary-600",
  },
  {
    icon: Factory,
    title: "Продуктовая фабрика",
    subtitle: "Фреймворк работы",
    description: "Создание фреймворка работы продуктовой фабрики: процессы, ритуалы, метрики и инструменты для системного запуска продуктов.",
    tags: ["Процессы", "Фреймворк", "Масштаб"],
    link: "#",
    available: false,
    gradient: "from-primary-700 to-primary-900",
  },
  {
    icon: UserCheck,
    title: "Ассесмент продактов",
    subtitle: "Оценка компетенций",
    description: "Комплексная оценка компетенций продуктовых менеджеров: hard и soft skills, зоны роста, индивидуальные планы развития.",
    tags: ["Компетенции", "Оценка", "Развитие"],
    link: "#",
    available: false,
    gradient: "from-primary-800 to-accent-500",
  },
  {
    icon: Users,
    title: "Профиль роли продакта",
    subtitle: "Формирование профиля",
    description: "Формирование профиля роли продакт-менеджера под специфику вашей компании: грейды, навыки, KPI, карьерные треки.",
    tags: ["Грейды", "KPI", "Карьерные треки"],
    link: "#",
    available: false,
    gradient: "from-accent-500 to-accent-600",
  },
  {
    icon: GraduationCap,
    title: "Обучение команд",
    subtitle: "Продуктовое обучение",
    description: "Практическое обучение продуктовых команд: воркшопы, менторинг, кейс-стади на реальных продуктах вашей компании.",
    tags: ["Воркшопы", "Менторинг", "Практика"],
    link: "#",
    available: false,
    gradient: "from-primary-600 to-accent-400",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
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
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Продуктовый консалтинг<br />нового поколения
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Масштабируем продукты, проверяем гипотезы с ИИ, строим продуктовые фабрики 
              и развиваем команды. Методологию передаём вам.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
            >
              Наши продукты
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-white" id="products" style={{ scrollMarginTop: '80px' }}>
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
                  className={`p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-300 bg-white group relative ${
                    !product.available ? 'opacity-80' : ''
                  }`}
                >
                  {!product.available && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-muted text-muted-foreground rounded-full">
                        <Lock className="h-3 w-3" />
                        Скоро
                      </span>
                    </div>
                  )}

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
                    onClick={() => product.available && navigate(product.link)}
                    disabled={!product.available}
                    className={`w-full ${product.available ? 'gradient-cta text-white' : ''}`}
                    variant={product.available ? 'default' : 'secondary'}
                  >
                    {product.available ? (
                      <>
                        Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      'Скоро'
                    )}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
