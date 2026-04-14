import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, GraduationCap, Users, TrendingUp, Zap, DollarSign, BookOpen } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Финансовая эффективность", desc: "Обучение на реальных инициативах компании обходится значительно дешевле внешнего найма готовых специалистов." },
  { icon: Zap, title: "Практическая ориентация", desc: "Обучение ведётся на реальных продуктах и инициативах компании — участники сразу работают с живым материалом." },
  { icon: Users, title: "Адаптация под компанию", desc: "Программа формируется с учётом специфики рынка, отраслевой логики и внутренних процессов организации." },
  { icon: TrendingUp, title: "Удержание сотрудников", desc: "Инвестиции в развитие внутренних специалистов повышают вовлечённость и снижают текучесть ключевых кадров." },
  { icon: BookOpen, title: "Тиражирование стандарта", desc: "Единый стандарт роли владельца продукта воспроизводится через следующие потоки внутри компании." },
];

const framework = [
  {
    stage: "Генерация идей",
    en: "Product Ideation",
    desc: "Сбор и упаковка инициатив. Определение целевых аудиторий, ценностного предложения, первичная оценка потенциала.",
    deliverables: ["Карта инициатив", "Целевые сегменты", "Первичный портфель"],
  },
  {
    stage: "Исследование и валидация",
    en: "Product Discovery",
    desc: "Проверка гипотез на реальных пользователях. Анализ рынка, конкурентов, бизнес-обоснование инициативы.",
    deliverables: ["Результаты исследований", "Проверенные гипотезы", "Бизнес-обоснование"],
  },
  {
    stage: "Разработка и запуск",
    en: "Product Delivery",
    desc: "Проектирование минимального продукта, разработка, запуск пилота и первые бизнес-результаты.",
    deliverables: ["Минимальный продукт", "Результаты пилота", "Первый эффект"],
  },
  {
    stage: "Масштабирование",
    en: "Product Scale",
    desc: "Тиражирование успешных решений, оптимизация воронки, управление метриками роста.",
    deliverables: ["Масштабированный продукт", "Зафиксированные метрики", "Дорожная карта роста"],
  },
];

const trainingCases = [
  { company: "Unibank", metrics: ["87 сотрудников обучено", "20 новых продуктов выведено на рынок", "Время до рынка: с 12 до 2 месяцев"] },
  { company: "Hamkorbank", metrics: ["25 владельцев продукта + 40 топ-менеджеров", "16 новых продуктов с эффектом на прибыль", "Первые продажи через 2 месяца после старта"] },
  { company: "Северсталь", metrics: ["125 владельцев продукта + 14 трекеров", "50+ инициатив с эффектом на финансовый результат", "Время до рынка сократилось на 33%"] },
  { company: "СИБУР", metrics: ["7 новых команд", "Сроки реализации сократились в 3 раза", "Финансовая цель — оптимизация производства на XXX млн руб."] },
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
              <span className="text-sm font-medium">Школа владельцев продукта</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Обучение продуктовых команд
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Программа подготовки владельцев продукта на реальных инициативах вашей компании.
              От генерации идей до первого бизнес-результата — за 4 месяца.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> от 20 участников</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> от 4 месяцев</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> 4-этапный фреймворк</span>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">5 причин запустить Школу владельцев продукта</h2>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">4 этапа фреймворка</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Обучение синхронизировано со стадиями реального продуктового цикла
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {framework.map((f, i) => (
              <Card key={i} className="p-6 border-2 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{f.stage}</h3>
                    <p className="text-xs text-primary-500">{f.en}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {f.deliverables.map((d, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-md font-medium">{d}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Результаты клиентов</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Что получают компании</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingCases.map((c, i) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-accent-600 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы запустить Школу?</h2>
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
