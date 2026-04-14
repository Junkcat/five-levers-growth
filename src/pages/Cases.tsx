import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const stats = [
  { value: "50+", label: "клиентов в СНГ" },
  { value: "$60M+", label: "измеримый эффект" },
  { value: "3 000+", label: "человек обучено" },
  { value: "5", label: "стран: RU · KZ · AZ · UZ · KG" },
];

const cases = [
  {
    company: "Северсталь",
    industry: "Металлургия · Промышленность",
    period: "2020 – наст. вр.",
    gradient: "from-primary-600 to-primary-800",
    metrics: [
      { value: "$XXМ+", label: "прибыль от продуктовых инициатив за 6 лет" },
      { value: "100+", label: "продактов обучено на реальных инициативах" },
      { value: "100+", label: "инициатив запущено в продуктовом портфеле" },
    ],
    challenge: "Продуктовой функции не существовало. Несколько сотрудников реализовывали разрозненные инициативы без фреймворка, без роли продакта и без системы мотивации.",
    actions: [
      "Разработан авторский 7-stage фреймворк: Ideation → Discovery → Design → Dev → Deploy → Scale → Management",
      "Создана продуктово-предпринимательская лаборатория: руководитель, 6 chief-трекеров, 4 тьютора",
      "Организована команда внешних трекеров для сопровождения инициатив",
      "Спроектирована система мотивации продактов совместно с CnB-подразделением",
    ],
    result: "За 6 лет — с нуля до самовоспроизводящейся продуктовой лаборатории. $XXМ+ прибыли, 100+ обученных продактов, 100+ запущенных инициатив.",
  },
  {
    company: "СИБУР",
    industry: "Нефтехимия · Цифровая трансформация",
    period: "2020 – 2023",
    gradient: "from-accent-500 to-primary-600",
    metrics: [
      { value: "350", label: "человек обучено работе в Stage Gates" },
      { value: "500+", label: "человек обучено в 40 цифровых ролях" },
      { value: "40+", label: "ролей в центре экспертиз" },
    ],
    challenge: "100 продуктовых сотрудников работали без единых стандартов: у каждой команды — свои процессы, нет единого фреймворка, хаос в артефактах и подходах.",
    actions: [
      "Разработан Stage-Gate фреймворк совместно с внутренними экспертами компании",
      "Серия воркшопов по этапам фреймворка и ключевым продуктовым артефактам",
      "Сформирован центр экспертиз: обучены внутренние эксперты — продолжили развивать методологию",
      "Создана собственная цифровая образовательная платформа (40+ ролей, СИБУР Диджитал)",
    ],
    result: "350 сотрудников обучено работе в Stage Gates, 500+ — по 40 цифровым ролям. Методология оцифрована. Платформа и центр экспертиз продолжили работу после завершения проекта.",
  },
  {
    company: "Промсвязьбанк",
    industry: "Банкинг · Корпоративное образование",
    period: "2021 – наст. вр.",
    gradient: "from-primary-700 to-primary-900",
    metrics: [
      { value: "1 000+", label: "специалистов обучено цифровым профессиям" },
      { value: "60+", label: "школ проведено (от 1 до 6 месяцев)" },
      { value: "80%+", label: "выпускников трудоустроены, NPS школ 80–90%" },
    ],
    challenge: "Банку требовался системный поток цифровых специалистов: продакты, аналитики, тестировщики, разработчики, кибербезопасность. Внешний найм — дорого и медленно.",
    actions: [
      "Создана модель школ на базе центра экспертиз — 5 цифровых ролей",
      "Обучающие курсы разработаны совместно с внутренними экспертами-преподавателями",
      "Запущены школы двух форматов: 1-месячные (повышение квалификации) и 5-6-месячные (новая профессия)",
      "Выстроен полный цикл: отбор кандидатов → обучение → трудоустройство в банк",
    ],
    result: "1 000+ специалистов обучено. NPS школ 80–90%. Более 80% выпускников трудоустроены в банк. Проект продолжается.",
  },
  {
    company: "Ингосстрах",
    industry: "Страхование · Нестраховые сервисы",
    period: "2021 – 2023",
    gradient: "from-primary-800 to-accent-500",
    metrics: [
      { value: "XXXМ+", label: "руб. прибыли от нестраховых инициатив" },
      { value: "100+", label: "продактов обучено (внутренние + студенты)" },
      { value: "200+", label: "инициатив в портфеле, 30+ запущено в работу" },
    ],
    challenge: "Нестраховое направление не существовало как продуктовая функция. Требовалось создать подразделение, разработать стратегию и сформировать портфель доходных инициатив.",
    actions: [
      "Создана продуктовая функция из 40 человек: директор, 4 руководителя, студенческий трек",
      "Разработана стратегия развития нестраховых услуг для розничного бизнеса",
      "Собран и приоритизирован портфель 200+ инициатив, 30+ запущены в работу",
      "Выстроены портфельное управление, фреймворк работы и система мотивации",
    ],
    result: "С нуля — до работающего подразделения с XXXМ+ руб. прибыли от нестраховых инициатив и защищённой стратегией развития.",
  },
  {
    company: "Hamkorbank",
    industry: "Банкинг · Узбекистан · Розничный бизнес",
    period: "2022 – 2023",
    gradient: "from-accent-500 to-accent-600",
    metrics: [
      { value: "$XXМ", label: "выручка от новых продуктов за год" },
      { value: "12", label: "человек в новом продуктовом подразделении" },
      { value: "15", label: "топ-менеджеров прошли обучение стратегии" },
    ],
    challenge: "Цифровой офис делал только мобильное приложение. Не было портфеля доходных инициатив, продуктового подразделения в рознице и компетенций для работы с сегментами.",
    actions: [
      "Помощь в написании продуктовой стратегии с 15 топ-менеджерами на базе цепочек ценности",
      "Создано продуктовое подразделение розницы: 12 чел. из воронки 100+ кандидатов",
      "Запущены новые продукты: телемаркетинг, агентские продажи автокредитов, интернет-эквайринг",
      "Банк научился считать бизнес-эффект и работать с клиентской сегментацией",
    ],
    result: "$XXМ выручки от новых продуктов. Сформировано полноценное продуктовое подразделение с нуля.",
  },
  {
    company: "Мосбиржа",
    industry: "Финансовая инфраструктура",
    period: "2022 – 2023",
    gradient: "from-primary-600 to-accent-400",
    metrics: [
      { value: "75+", label: "специалистов обучено в 2 волнах" },
      { value: "9", label: "грейдов в ролевой модели продакта" },
      { value: "15", label: "инициатив защищено и переданы в разработку" },
    ],
    challenge: "В подразделении финансовых услуг — разные уровни компетенций, нет единого фреймворка. Для масштабирования нужны стандарты, ролевая модель и система оценки.",
    actions: [
      "Разработан и внедрён продуктовый фреймворк для Финуслуг (40 чел., 10 внутренних экспертов)",
      "Запущена Школа владельцев продуктов для других подразделений биржи (35 чел., роль Junior PM)",
      "Разработана ролевая модель продакта с 9 грейдами и компетенциями для ассесмента",
      "Спроектированы система мотивации и ассесмент на основе продуктовых артефактов",
    ],
    result: "Единый фреймворк, ролевая модель с 9 грейдами и система ассесмента охватывают все продуктовые подразделения. 15 инициатив переданы в разработку.",
  },
];

interface ClientEntry { name: string; logo?: string; flag?: string; }
interface ClientGroup { country: string; clients: ClientEntry[]; more?: string; }

const clientGroups: ClientGroup[] = [
  {
    country: "Россия",
    more: "и 20+ других",
    clients: [
      { name: "СИБУР", logo: "/clients/sibur.png" },
      { name: "Северсталь", logo: "/clients/severstal.png" },
      { name: "Промсвязьбанк", logo: "/clients/psb.png" },
      { name: "Ингосстрах", logo: "/clients/ingosstrakh.png" },
      { name: "Мосбиржа", logo: "/clients/moex.png" },
      { name: "Золотое яблоко", logo: "/clients/goldapple.png" },
      { name: "DPD", logo: "/clients/dpd.png" },
      { name: "Совкомбанк", logo: "/clients/sovkombank.png" },
      { name: "Газпром нефть", logo: "/clients/gazpromneft.png" },
      { name: "Газпромбанк", logo: "/clients/gazprombank.png" },
      { name: "Росатом", logo: "/clients/rosatom.png" },
      { name: "МегаФон", logo: "/clients/megafon.png" },
      { name: "Ростелеком", logo: "/clients/rostelecom.png" },
      { name: "Тинькофф", logo: "/clients/tinkoff.png" },
      { name: "Сбербанк", logo: "/clients/sber.png" },
      { name: "Альфа-Банк", logo: "/clients/alfabank.png" },
    ],
  },
  {
    country: "СНГ",
    clients: [
      { name: "Bereke Bank", logo: "/clients/bereke.png", flag: "🇰🇿" },
      { name: "Freedom Finance", logo: "/clients/freedom.png", flag: "🇰🇿" },
      { name: "Unibank", logo: "/clients/unibank.webp", flag: "🇦🇿" },
      { name: "Hamkorbank", logo: "/clients/hamkorbank.png", flag: "🇺🇿" },
      { name: "SQB Bank", logo: "/clients/sqb.webp", flag: "🇺🇿" },
      { name: "Eldik Bank", logo: "/clients/eldik.png", flag: "🇰🇬" },
    ],
  },
];

const LogoItem = ({ client }: { client: ClientEntry }) => {
  const [err, setErr] = useState(false);
  if (client.logo && !err) {
    return (
      <div className="relative flex items-center justify-center h-10 px-3" title={client.name}>
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-8 max-w-[110px] object-contain"
          onError={() => setErr(true)}
        />
        {client.flag && (
          <span className="absolute -bottom-1 -right-1 text-[11px] leading-none">{client.flag}</span>
        )}
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center h-10 px-3 rounded-md border border-border bg-muted/40">
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{client.name}</span>
      {client.flag && (
        <span className="absolute -bottom-1 -right-1 text-[11px] leading-none">{client.flag}</span>
      )}
    </div>
  );
};

const CaseCard = ({ c }: { c: typeof cases[0]; index: number }) => {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary-300 hover:shadow-xl transition-all duration-300 bg-white group">
      {/* Цветная шапка с метриками */}
      <div className={`bg-gradient-to-br ${c.gradient} p-6 text-white`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Кейс</p>
            <h3 className="text-2xl font-bold">{c.company}</h3>
            <p className="text-white/80 text-sm mt-1">{c.industry}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {c.metrics.map((m, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
              <p className="text-xl font-bold leading-tight">{m.value}</p>
              <p className="text-white/70 text-xs mt-1 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Тело карточки */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Задача</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{c.challenge}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Что сделали</p>
          <ul className="space-y-1.5">
            {c.actions.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4 mt-4">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Результат</p>
          <p className="text-sm font-medium text-foreground leading-relaxed">{c.result}</p>
        </div>
      </div>
    </Card>
  );
};

const Cases = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white py-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Кейсы и результаты
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              50+ компаний в СНГ. Промышленность, банки, страхование, финансовые рынки.
              Измеримый эффект — $60M+ и 3 000+ обученных специалистов.
            </p>
          </div>
        </div>
      </section>

      {/* Общие метрики */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-4">Избранные кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты с измеримыми результатами — от создания продуктовых функций с нуля до масштабирования на тысячи специалистов
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cases.map((c, i) => (
              <CaseCard key={i} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Клиенты */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Клиенты и география</h2>
            <p className="text-lg text-muted-foreground">50+ компаний в 5 странах СНГ</p>
          </div>
          <div className="space-y-10">
            {clientGroups.map((group, gi) => (
              <div key={gi}>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-4">{group.country}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  {group.clients.map((cl, ci) => (
                    <LogoItem key={ci} client={cl} />
                  ))}
                  {group.more && (
                    <span className="text-xs text-muted-foreground px-3">{group.more}</span>
                  )}
                </div>
                {gi < clientGroups.length - 1 && <div className="mt-8 border-b border-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы к диагностике?</h2>
          <p className="text-xl text-white/85 mb-8 max-w-xl mx-auto">
            Получите план работ за 48 часов на основе вашей проблематики
          </p>
          <Button
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="bg-white text-primary-800 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold w-full sm:w-auto"
          >
            Запросить диагностику
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType="Диагностическая сессия" />
    </div>
  );
};

export default Cases;
