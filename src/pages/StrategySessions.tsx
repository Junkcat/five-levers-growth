import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, CalendarCheck, Target, Map, BarChart3, Layers, FileText } from "lucide-react";

const problems = [
  "Нет единого видения продуктового подхода — каждая команда работает по-своему",
  "Цели есть, но нет понятной связки «цели → инициативы → гипотезы → метрики»",
  "Продуктовые идеи генерируются от «что можно сделать», а не от клиентской проблематики",
  "После стратегических встреч не остаётся чёткого плана действий на квартал",
];

const days = [
  {
    num: "День 1",
    title: "Продуктовый подход и генерация гипотез",
    items: [
      "Синхронизация по продуктовому фреймворку: продукт / инициатива / эпик / гипотеза",
      "Выбор 1–2 целевых клиентских сегментов на команду",
      "Карта клиентских проблем: топ-5 болей и барьеров по сегменту",
      "Генерация 15–20 гипотез от проблематики, привязка к OKR/КВЦ",
    ],
  },
  {
    num: "День 2",
    title: "CJM, моменты истины и воронки",
    items: [
      "As-Is CJM по выбранному «событию»: шаги, эмоции, ожидания, каналы",
      "Определение моментов истины — точек, где клиент принимает решение",
      "Матрица дифференциаторов: что должно быть «лучше рынка»",
      "Проектирование 3 воронок: привлечение, развитие, удержание",
    ],
  },
  {
    num: "Дни 3–4",
    title: "Бэклог гипотез и план экспериментов",
    items: [
      "Приоритизация бэклога единым методом по всем командам",
      "Оформление карточек экспериментов с владельцами и критериями решений",
      "Стандарт качества гипотезы: измеримо / проверяемо / понятен эффект",
      "Сборка промышленного конвейера гипотез на 6–8 недель",
    ],
  },
  {
    num: "День 5",
    title: "Unit-экономика и операционная модель",
    items: [
      "Расчёт unit-экономики по топ-гипотезам",
      "Черновик операционной модели: ритуалы (weekly / monthly / QBR), RACI",
      "Утверждение плана работы на ближайший квартал",
      "Презентация итогов и согласование следующих шагов",
    ],
  },
];

const deliverables = [
  { icon: Target, title: "Единое видение", desc: "Зафиксированное понимание продуктового подхода и приоритетных клиентских сегментов" },
  { icon: Map, title: "CJM и моменты истины", desc: "Карты клиентских путей с выделенными точками, где решается «выберет / останется / уйдёт»" },
  { icon: Layers, title: "Приоритизированный бэклог", desc: "Гипотезы от клиентской проблематики с единым стандартом качества и привязкой к OKR/КВЦ" },
  { icon: BarChart3, title: "Unit-экономика гипотез", desc: "Расчёт по приоритетным инициативам — понятен ожидаемый эффект до запуска" },
  { icon: FileText, title: "Операционная модель", desc: "RACI, ритуалы и план на квартал — команда знает, кто что делает и когда" },
];

const StrategySessions = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Стратегические сессии — бэклог гипотез и OKR для продуктовых команд | FiveLevers</title>
        <meta name="description" content="Выездное мероприятие на 5 дней: синхронизация команды по продуктовому подходу, CJM, моменты истины, бэклог гипотез с unit-экономикой и план на квартал." />
        <meta name="keywords" content="стратегическая сессия, продуктовый подход, OKR, бэклог гипотез, CJM, моменты истины, unit-экономика, выездное мероприятие" />
        <link rel="canonical" href="https://5levers.pro/strategy-sessions" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-400 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CalendarCheck className="h-4 w-4" />
              <span className="text-sm font-medium">Выездное мероприятие</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Стратегические сессии
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              5 дней интенсивной работы с командой: от выбора сегментов до приоритизированного
              бэклога с unit-экономикой и готовым планом на квартал.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> 5 дней</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> до 50 человек</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-400" /> очно / выезд</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Обсудить формат
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Цели есть — связки с действиями нет</h2>
              <p className="text-muted-foreground leading-relaxed">
                Стратегические сессии часто заканчиваются красивой презентацией и общими словами.
                Мы строим работу иначе: каждый день — конкретный результат, который команда
                забирает с собой и сразу использует.
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

      {/* Программа */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Программа</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">5 дней — 5 результатов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый день завершается конкретным артефактом, который команда использует в работе
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {days.map((d, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">{d.num}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{d.title}</h3>
                <ul className="space-y-2">
                  {d.items.map((item, j) => (
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

      {/* Итоговые артефакты */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Что остаётся</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Ключевые результаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё зафиксировано и готово к использованию сразу после мероприятия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => {
              const Icon = d.icon;
              return (
                <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                  <div className="p-2 bg-primary-50 rounded-lg w-fit mb-4">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Планируете сессию для команды?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Расскажите о задаче — подберём формат и программу под вашу ситуацию
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Обсудить формат
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Стратегическая сессия" />
    </div>
  );
};

export default StrategySessions;
