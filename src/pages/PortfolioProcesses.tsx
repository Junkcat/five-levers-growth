import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, BarChart3, Target, TrendingUp, Layers, Users, Zap } from "lucide-react";

const problems = [
  "Нет прозрачного портфеля проектов — статусы в Excel, данные устаревают",
  "Цели компании не синхронизированы между департаментами",
  "Инициативы не имеют метрических целей и оценки бизнес-эффекта",
  "Нет процесса мониторинга и принятия решений на основе данных",
  "PMO-функция отсутствует или работает реактивно",
];

const levels = [
  {
    icon: Zap,
    title: "Автоматизация",
    items: [
      "Автоматизация сбора и актуализации статусов по проектам",
      "Дашборды по целям для годового, квартального и еженедельного планирования",
      "Единый источник данных для принятия управленческих решений",
    ],
  },
  {
    icon: Target,
    title: "Трекинг",
    items: [
      "Регулярный сбор актуальной информации по проектам",
      "Синхронизация целей команд с целями бизнес-блоков и компании",
      "Фокусировка команды на стратегических приоритетах",
    ],
  },
  {
    icon: Users,
    title: "Обучение",
    items: [
      "Восполнение пробелов в компетенциях у проектных команд",
      "Внедрение единого процесса работы команд",
      "Повышение прозрачности на уровне всего портфеля",
    ],
  },
];

const workBlocks = [
  {
    num: "01",
    title: "Формирование портфеля и бэклога",
    items: [
      "Пересмотр скоупа проектов по каждому бизнес-блоку",
      "Определение проектов, влияющих на стратегические цели",
      "Декомпозиция бэклогов и выявление ключевых GAPs",
    ],
  },
  {
    num: "02",
    title: "Синхронизация работы команд",
    items: [
      "Связать целевые проекты, команды и ответственных",
      "Обновить скоуп и сроки в сквозном бэклоге",
      "OKR-целеполагание: дерево метрик и связь с бизнес-целями",
    ],
  },
  {
    num: "03",
    title: "Инструменты мониторинга",
    items: [
      "Инструменты управления портфелем проектов",
      "Дашборды достижения целей для C-level и бизнес-блоков",
      "Обучение PMO-методологии и снижение нагрузки на PM",
    ],
  },
];

const monitoringLevels = [
  { level: "C-level / Совет директоров", desc: "Достижение стратегических целей и метрик компании" },
  { level: "Директора бизнес-блоков", desc: "Цели по бизнес-направлениям и метрики портфелей" },
  { level: "CPO / Руководители управлений", desc: "Операционные метрики портфелей и команд" },
  { level: "PM / PO / IT", desc: "Операционные метрики проектов, развитие сотрудников" },
];

const PortfolioProcesses = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Продуктовые портфели — PMO и управление инициативами | FiveLevers</title>
        <meta name="description" content="Выстраивание процессов управления продуктовым портфелем: сквозной бэклог, OKR и дерево метрик, дашборды мониторинга, обучение PMO. Синхронизация целей компании и команд." />
        <meta name="keywords" content="портфельное управление, PMO, OKR, дерево метрик, дашборды, управление инициативами, продуктовый портфель" />
        <link rel="canonical" href="https://5levers.pro/portfolio-processes" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-accent-600 opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Layers className="h-4 w-4" />
              <span className="text-sm font-medium">PMO · Портфельное управление</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Выстраивание процессов работы с продуктовыми портфелями
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Создание прозрачной системы портфельного управления: от формирования бэклогов
              и синхронизации целей до дашбордов мониторинга и обученного PMO.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> Стратегические сессии</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-300" /> OKR и дерево метрик</span>
            </div>
            <Button size="lg" onClick={() => setDialogOpen(true)}
              className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
              Обсудить проект
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Почему портфелем сложно управлять</h2>
              <p className="text-muted-foreground leading-relaxed">
                Без выстроенных процессов топ-менеджмент не видит реального состояния проектов,
                команды дублируют работу, а инвестиции не дают ожидаемого возврата.
              </p>
            </div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <p className="text-sm text-foreground">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 уровня */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Подход</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Три уровня работы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((l, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="p-3 bg-primary-50 rounded-xl w-fit mb-4">
                  <l.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-foreground mb-3">{l.title}</h3>
                <ul className="space-y-2">
                  {l.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary-500 font-bold shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3 блока работ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Что делаем</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">3 блока работ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workBlocks.map((b, i) => (
              <Card key={i} className="p-6 border-2">
                <div className="text-5xl font-black text-primary-100 mb-4">{b.num}</div>
                <h3 className="font-bold text-foreground mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary-500 font-bold shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Мониторинг по уровням */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Архитектура мониторинга</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">4 уровня дашбордов</h2>
          </div>
          <div className="space-y-3">
            {monitoringLevels.map((m, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl border-2 border-border hover:border-primary-300 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                <div>
                  <p className="font-semibold text-foreground">{m.level}</p>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты + Условия */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">Что получает компания</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Результаты взаимодействия</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              "Цифровая платформа ведения целей и проектов по эпикам / продуктам / каналам",
              "Система целеполагания на основе дерева метрик и KPI-performance",
              "Методология оценки ведения проектов и портфеля по фреймворку",
              "Разработка бизнес-требований к дашбордам мониторинга",
              "Обученные PMO и PM методологии портфельного управления",
              "Понимание возвратности инвестиций (ROI/ROE) от реализуемых инициатив",
            ].map((r, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border-2 border-border">
                <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Выстроим процессы вместе</h2>
          <p className="text-xl text-white/85 mb-8 max-w-xl mx-auto">
            Получите план работ за 48 часов на основе вашей проблематики
          </p>
          <Button size="lg" onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold">
            Обсудить проект
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Портфельные процессы" />
    </div>
  );
};

export default PortfolioProcesses;
