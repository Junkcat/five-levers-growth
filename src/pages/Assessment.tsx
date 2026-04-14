import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, BarChart3, Target, Layers, FileText, Star } from "lucide-react";

const problems = [
  "Нет понимания уровня кандидатов на роль Владельца продукта",
  "Нет инструментов для собеседования и найма продуктовых специалистов",
  "Нет модели развития продактов и индивидуальных планов роста",
  "Компетенции внутри команды непрозрачны — неясно, кого развивать, кого нанимать",
];

const blocks = [
  {
    num: "01",
    title: "Самооценка и интервью",
    items: [
      "Самооценка кандидатов на роль Product Owner",
      "Глубинные интервью с экспертами 5Levers",
      "Оценка уровня Hard и Soft навыков по грейдам Junior / Middle / Senior",
    ],
  },
  {
    num: "02",
    title: "Ролевая модель и материалы",
    items: [
      "Матрица компетенций продакта под специфику компании",
      "Профиль роли с разбивкой по грейдам",
      "Гайды для проведения интервью при найме",
    ],
  },
  {
    num: "03",
    title: "Траектории развития",
    items: [
      "Индивидуальные планы развития (ИПР) на платформе 5Levers",
      "Процесс квартальной обратной связи по результатам работы",
      "Система постановки целей и мониторинга роста специалиста",
    ],
  },
];

const skills = [
  { area: "Управление продуктом", items: ["Работа с гипотезами и бэклогом", "Проведение CustDev", "MVP и пилоты", "Управление метриками", "Экономическое обоснование"] },
  { area: "Управленческие навыки", items: ["Трансляция целей команде", "Контроль за выполнением", "Мотивация сотрудников"] },
  { area: "Коммуникации", items: ["Управление стейкхолдерами", "Презентация идей", "Письменные и устные коммуникации"] },
  { area: "Мягкие навыки", items: ["Аналитическое мышление", "Клиентоцентричность", "Самоорганизация"] },
];

const deliverables = [
  { icon: BarChart3, title: "Диаграмма «паутинка»", desc: "Уровень владения навыками по каждому участнику с экспертными комментариями" },
  { icon: FileText, title: "Матрица компетенций", desc: "Профиль роли и гайды для найма, адаптированные под процессы компании" },
  { icon: Target, title: "Индивидуальные ИПР", desc: "Планы развития на платформе 5Levers с рекомендациями по прокачке навыков" },
  { icon: Star, title: "Итоговый рейтинг", desc: "Таблица с результатами и средними оценками для кадровых решений" },
];

const Assessment = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ассесмент продактов — оценка компетенций владельцев продукта | FiveLevers</title>
        <meta name="description" content="Комплексная оценка Hard и Soft навыков продуктовых специалистов по грейдам Junior/Middle/Senior. Матрица компетенций, гайды для найма, индивидуальные планы развития." />
        <meta name="keywords" content="ассесмент продактов, оценка компетенций, product owner, матрица компетенций, найм продактов, грейды продакт менеджер" />
        <link rel="canonical" href="https://5levers.pro/assessment" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Оценка компетенций</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ассесмент продактов
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Комплексная оценка Hard и Soft навыков продуктовых специалистов. Ролевая модель,
              матрица компетенций и индивидуальные планы развития под специфику вашей компании.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> от 30 человек</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> от 4 недель</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> Junior / Middle / Senior грейды</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Запросить ассесмент
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
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Типичные проблемы</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">Почему компании теряют деньги на найме продактов</h2>
              <p className="text-muted-foreground leading-relaxed">
                Без системной оценки компетенций компании нанимают не тех людей, развивают не те навыки
                и не понимают, кто из сотрудников готов взять на себя роль Владельца продукта.
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

      {/* Три блока */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Структура ассесмента</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">3 блока работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">От интервью с кандидатами до запущенной системы развития продуктовых специалистов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blocks.map((b, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="text-5xl font-black text-primary-100 mb-4">{b.num}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map((item, j) => (
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

      {/* Зоны оценки */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Ролевая модель</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Что оцениваем</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <Card key={i} className="p-5 border-2">
                <h3 className="font-bold text-foreground mb-3 text-sm">{s.area}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-primary-500 shrink-0 mt-0.5" />
                      {item}
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Что получает компания</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Результаты ассесмента</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((d, i) => (
              <Card key={i} className="p-6 border-2 flex gap-4 items-start">
                <div className="p-3 bg-primary-50 rounded-xl shrink-0">
                  <d.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Хотите оценить свою команду?</h2>
          <p className="text-xl text-white/85 mb-8 max-w-xl mx-auto">
            Получите план работ за 48 часов на основе вашей проблематики
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Запросить ассесмент
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Ассесмент продактов" />
    </div>
  );
};

export default Assessment;
