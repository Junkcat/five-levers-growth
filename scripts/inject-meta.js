#!/usr/bin/env node
/**
 * Post-build: создаёт dist/<route>/index.html с уникальными title и description
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");
const baseHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const pages = [
  {
    route: "scaling",
    title: "Масштабирование продуктов — Метод пяти рычагов | FiveLevers",
    description: "Запускаем и масштабируем продукты за 12 недель: диагностика, проектирование, запуск MVP. Методология пяти рычагов роста — продукт, каналы, данные, экономика, команда.",
  },
  {
    route: "validate-idea",
    title: "Проверка гипотез с ИИ — акселерация продуктовых команд | FiveLevers",
    description: "Формирование и проверка продуктовых гипотез с помощью ИИ-платформы. До 12 гипотез в месяц за 12 недель. Акселерация продуктовых команд в крупных компаниях.",
  },
  {
    route: "product-factory",
    title: "Продуктовая фабрика — запуск продуктовой функции с нуля | FiveLevers",
    description: "Создание продуктовой функции с нуля: ассесмент кандидатов, запуск кросс-функциональных команд, портфель инициатив, обучение владельцев продукта. От 6 месяцев.",
  },
  {
    route: "assessment",
    title: "Ассесмент продактов — оценка компетенций владельцев продукта | FiveLevers",
    description: "Комплексная оценка Hard и Soft навыков продуктовых специалистов по грейдам Junior/Middle/Senior. Матрица компетенций, гайды для найма, индивидуальные планы развития.",
  },
  {
    route: "portfolio-processes",
    title: "Продуктовые портфели — PMO и управление инициативами | FiveLevers",
    description: "Выстраивание процессов управления продуктовым портфелем: сквозной бэклог, OKR и дерево метрик, дашборды мониторинга, обучение PMO.",
  },
  {
    route: "training",
    title: "Обучение продуктовых команд — Школа владельцев продукта | FiveLevers",
    description: "Корпоративная школа владельцев продукта на реальных инициативах компании. 4-этапный фреймворк: от генерации идей до масштабирования. От 20 участников, 4 месяца.",
  },
  {
    route: "cx-discovery",
    title: "CX-UX Диагностика — оптимизация конверсии клиентских путей | FiveLevers",
    description: "Диагностика клиентских путей и CX-опыта: находим узкие места в воронке, верифицируем эффекты через ИИ-платформу. +2–8% к конверсии, рост ARPU, снижение оттока.",
  },
  {
    route: "strategy-sessions",
    title: "Стратегические сессии — бэклог гипотез и OKR для продуктовых команд | FiveLevers",
    description: "Выездное мероприятие на 5 дней: синхронизация команды, CJM, моменты истины, бэклог гипотез с unit-экономикой и план на квартал.",
  },
  {
    route: "cases",
    title: "Кейсы и результаты — FiveLevers",
    description: "Реальные проекты FiveLevers: Северсталь, СИБУР, Промсвязьбанк, Мосбиржа, Hamkorbank. 50+ компаний в СНГ, $60М+ измеримый эффект, 3 000+ специалистов обучено.",
  },
];

for (const page of pages) {
  let html = baseHtml;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${page.description}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${page.title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${page.description}"`);

  const dir = path.join(distDir, page.route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`✓ ${page.route}`);
}

console.log("Meta injection complete.");
