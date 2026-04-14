import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, GraduationCap, Users, TrendingUp, Zap, DollarSign, BarChart3, BookOpen } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Финансовая экономия", desc: "Средняя стоимость найма готового PO — около 500 тыс. руб. без учёта адаптации. Внутренняя школа дешевле и быстрее." },
  { icon: Zap, title: "Практическая ориентация", desc: "Обучение идёт на реальных инициативах компании. Обязательное условие входа — существующий продукт или готовые гипотезы." },
  { icon: Users, title: "Адаптация программы", desc: "По итогам ассесмента формируется трек обучения с учётом специфики рынка и внутренних процессов." },
  { icon: TrendingUp, title: "Лояльность сотрудников", desc: "Инвестиции в развитие внутренних специалистов повышают их удержание и вовлечённость." },
  { icon: BookOpen, title: "Масштабирование стандарта", desc: "Единый стандарт роли PO тиражируется через следующие потоки и развивается через Центр экспертизы." },
];

const framework = [
  { stage: "Research", ru: "Поиск идей", weeks: "4 нед." },
  { stage: "Ideation", ru: "Генерация идей", weeks: "2 нед.", milestone: "УК №1" },
  { stage: "Discovery", ru: "Валидация гипотез", weeks: "3 нед.", milestone: "УК №2" },
  { stage: "Design", ru: "Проектирование", weeks: "3 нед.", milestone: "УК (ключевой)" },
  { stage: "Development", ru: "Разработка", weeks: "6 нед." },
  { stage: "Deploy", ru: "Внедрение", weeks: "2 нед." },
  { stage: "Scale", ru: "Масштабирование", weeks: "TBD" },
];

const knowledgeBlocks = [
  { num: "01", title: "Продуктовый подход", items: ["Продуктовое мышление в корпорации", "Культура Agile и роль PO", "Внедрение подхода в функции"] },
  { num: "02", title: "Профиль роли PO", items: ["Артефакты и практики", "Предпринимательский подход", "Ownership и профкомпетенции"] },
  { num: "03", title: "Фреймворк", items: ["Артефактная модель и стадии", "Сокращение TTM", "Трекинг и решение блокеров"] },
  { num: "04", title: "Навыки продакта", items: ["Discovery и работа с гипотезами", "MVP и пилоты", "Стейкхолдеры и метрики"] },
  { num: "05", title: "Современные методы", items: ["Гибкое планирование", "Peer-to-peer сообщество", "PO как лидер команды"] },
];

const cases = [
  { company: "Unibank", metrics: ["87 сотрудников обучено", "20 новых продуктов выведено", "TTM: с 12 до 2 месяцев"] },
  { company: "Hamkorbank", metrics: ["25 PO + 40 топ-менеджеров", "16 новых продуктов с эффектом на P&L", "Первые продажи через 2 месяца после старта"] },
  { company: "Северсталь", metrics: ["125 PO + 14 трекеров + 8 тьюторов", "50+ инициатив с эффектом на PnL", "TTM: с 9 до 6 месяцев"] },
  { company: "СИБУР", metrics: ["7 новых скрам-команд", "Сроки реализации сократились в 3 раза", "Цель — оптимизация производства на XXX млн руб."] },
];

const Training = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-accent-600 to-primary-600 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-medium">Школа Product Owners</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Обучение продуктовых команд
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Школа PO на реальных инициативах вашей компании. От идеи до защиты на управляющем
              комитете — за 4 месяца с измеримым финансовым результатом.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> от 20 участников</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> от 4 месяцев</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> 7-stage фреймворк</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Запустить школу
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5 причин */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Почему это работает</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">5 причин выбрать внутреннюю школу</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Вместо дорогого внешнего найма — системный рост своих людей</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="p-3 bg-primary-50 rounded-xl w-fit mb-4">
                  <r.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Фреймворк */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Программа обучения</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">7-stage фреймворк</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Обучение синхронизировано со стадиями разработки продукта. По итогам ключевых стадий — защита на Управляющем комитете.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {framework.map((f, i) => (
              <div key={i} className="text-center">
                <div className={`rounded-xl p-3 mb-2 ${i < 4 ? 'bg-primary-600 text-white' : 'bg-muted border-2 border-border'}`}>
                  <p className="font-bold text-xs">{f.stage}</p>
                  <p className={`text-[10px] mt-0.5 ${i < 4 ? 'text-white/70' : 'text-muted-foreground'}`}>{f.weeks}</p>
                </div>
                <p className="text-xs text-muted-foreground">{f.ru}</p>
                {f.milestone && (
                  <p className="text-[10px] text-accent-500 font-semibold mt-1">{f.milestone}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Управляющие комитеты (УК) проводятся по итогам стадий Ideation, Discovery и Design. Ключевой УК — на Design.
          </p>
        </div>
      </section>

      {/* Блоки знаний */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Содержание</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">5 блоков знаний</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {knowledgeBlocks.map((b, i) => (
              <Card key={i} className="p-5 border-2">
                <div className="text-4xl font-black text-primary-100 mb-3">{b.num}</div>
                <h3 className="font-bold text-foreground mb-3 text-sm">{b.title}</h3>
                <ul className="space-y-1.5">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-1.5 text-xs text-muted-foreground">
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

      {/* Кейсы */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Результаты клиентов</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Что получают компании</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <Card key={i} className="p-6 border-2">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">{c.company}</p>
                <ul className="space-y-2">
                  {c.metrics.map((m, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Условия */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-10">Условия проведения</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { label: "Участники", value: "от 20 чел." },
              { label: "Длительность", value: "от 4 мес." },
              { label: "Стоимость", value: "от 7,2 млн руб." },
            ].map((c, i) => (
              <Card key={i} className="p-6 text-center border-2">
                <p className="text-3xl font-bold text-primary-600 mb-2">{c.value}</p>
                <p className="text-sm text-muted-foreground">{c.label}</p>
              </Card>
            ))}
          </div>
          <Card className="p-5 border-2 bg-muted/30 text-sm text-muted-foreground">
            <p><strong>Формат:</strong> вводный оффлайн-интенсив (1–2 дня) + от 10 онлайн-мероприятий по 4 ч. + P2P-сессии + индивидуальные сессии с экспертами + Управляющий комитет. Онлайн-платформа — бесплатно на весь период обучения и 2 месяца после.</p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-accent-600 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы запустить Школу PO?</h2>
          <p className="text-xl text-white/85 mb-8 max-w-xl mx-auto">
            Получите план работ за 48 часов на основе вашей проблематики
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Запустить школу
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Обучение продуктовых команд" />
    </div>
  );
};

export default Training;
