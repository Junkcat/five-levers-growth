import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MousePointerClick, TrendingUp, BarChart3, Search, Lightbulb, Users } from "lucide-react";

const problems = [
  "Много шагов в воронке — клиенты уходят на каждом этапе, но непонятно почему",
  "Конверсия низкая, а решения о доработках принимаются без данных о реальном поведении",
  "UX-проблемы не видны изнутри: команда привыкла к интерфейсу и не замечает узкие места",
  "Улучшения внедряются наугад — нет уверенности, что они действительно дадут эффект",
];

const funnelStages = [
  {
    icon: Search,
    title: "Привлечение",
    desc: "Конверсии в рекламе и канальные воронки — от первого контакта до оформления продукта",
  },
  {
    icon: MousePointerClick,
    title: "Активация",
    desc: "Рост конверсии в первую транзакцию: онбординг, первый платёж, первое использование",
  },
  {
    icon: BarChart3,
    title: "Активность",
    desc: "Рост количества продуктов на клиента и частотности операций",
  },
  {
    icon: Users,
    title: "Возвращаемость",
    desc: "Поиск CX-причин оттока и рост возвращаемости в повторное использование",
  },
];

const steps = [
  {
    num: "01",
    title: "Сбор данных",
    items: [
      "Аналитика поведения клиентов на всех этапах пути",
      "Опросы, отзывы, записи взаимодействий с клиентами",
      "Диаграммы воронки и анализ конверсии по этапам",
    ],
  },
  {
    num: "02",
    title: "Анализ и выявление проблем",
    items: [
      "Выявление закономерностей, узких мест и точек оттока",
      "Определение конкретных причин низкой конверсии",
      "Ранжирование проблем по влиянию на конверсию",
    ],
  },
  {
    num: "03",
    title: "Рекомендации с верификацией",
    items: [
      "Разработка приоритизированного бэклога доработок",
      "Верификация эффектов на платформе ValidateIdea с реальными пользователями",
      "Точность прогнозов — ~90–95%",
    ],
  },
];

const results = [
  {
    icon: TrendingUp,
    value: "до 4×",
    label: "Рост привлечения пользователей",
    desc: "Повышение эффективности привлечения новых пользователей за счёт оптимизации клиентских путей и конверсионных воронок без разработки новых продуктов",
  },
  {
    icon: BarChart3,
    value: "+30%",
    label: "Рост выручки за счёт LTV и ARPU",
    desc: "Снижение оттока в ключевых сегментах и рост ARPU за счёт увеличения использования продуктов и транзакционной активности",
  },
  {
    icon: Lightbulb,
    value: "×3 быстрее",
    label: "Прозрачный бэклог с проверенными эффектами",
    desc: "Все точки роста в клиентских путях проверяются на платформе ValidateIdea с реальными пользователями и получением реальных конверсий от внедрений",
  },
];

const CxDiscovery = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>CX-UX Диагностика — оптимизация конверсии клиентских путей | FiveLevers</title>
        <meta name="description" content="Диагностика клиентских путей и CX-опыта: находим узкие места в воронке, верифицируем эффекты через ИИ-платформу. +2–8% к конверсии, рост ARPU, снижение оттока." />
        <meta name="keywords" content="CX диагностика, UX исследование, оптимизация конверсии, клиентский путь, customer journey, воронка продаж, банк, финтех" />
        <link rel="canonical" href="https://5levers.pro/cx-discovery" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-accent-500 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MousePointerClick className="h-4 w-4" />
              <span className="text-sm font-medium">Клиентские пути и CX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              CX-UX Диагностика
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Находим узкие места в клиентских путях и воронках. Верифицируем эффекты
              улучшений на реальных пользователях — точность прогнозов ~90–95%.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> 4–6 недель</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> +2–8% к конверсии</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> Верификация через ИИ</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Запросить диагностику
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Проблемы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Типичная ситуация</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">Конверсия теряется, а где именно — неизвестно</h2>
              <p className="text-muted-foreground leading-relaxed">
                Большинство компаний видят итоговые цифры, но не понимают, на каком именно шаге
                клиент уходит и почему. Диагностика CX-пути даёт ответ на оба вопроса.
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✗</span>
                  <p className="text-sm text-foreground">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 этапа воронки */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Охват работы</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">4 ключевых этапа воронки</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем со всем путём клиента — от первого контакта до повторного использования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funnelStages.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all text-center">
                  <div className="p-3 bg-primary-50 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Как работаем</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">3 этапа диагностики</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От сбора данных до бэклога с верифицированными эффектами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="text-5xl font-black text-primary-100 mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary-500 font-bold shrink-0 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Эффект</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Измеримые результаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Консервативные ориентиры — финальный эффект уточняется на данных компании
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <Card key={i} className="p-6 border-2 text-center hover:border-primary-300 hover:shadow-lg transition-all">
                  <div className="p-2 bg-primary-50 rounded-lg w-fit mx-auto mb-3">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-3xl font-bold text-primary-600 mb-1">{r.value}</p>
                  <p className="text-sm font-semibold text-foreground mb-2">{r.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Готовы разобраться в воронке?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Расскажите о задаче — обсудим, с каких этапов пути лучше начать
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Запросить диагностику
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="CX-UX Диагностика" />
    </div>
  );
};

export default CxDiscovery;
