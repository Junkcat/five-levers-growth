import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что если у нас нет данных или слабая аналитика?",
    answer: "Начинаем с базовой event-схемы и proxy-метрик. В первые 2 недели настраиваем минимально необходимую аналитику, чтобы начать принимать решения на основе данных. Полноценную аналитику строим параллельно с экспериментами."
  },
  {
    question: "Что если нет ресурса на разработку?",
    answer: "Фокусируемся на ограниченных MVP, конфигурационных решениях и no-code инструментах для быстрой проверки гипотез. После доказательства эффекта приоритизируем масштабирование с привлечением dev-ресурсов."
  },
  {
    question: "Как измеряется успех проекта?",
    answer: "Определяем 3-5 ключевых метрик до старта (например: активации, CAC, retention, margin). Трекаем динамику еженедельно. В конце 12 недель оцениваем достижение целей и ROI от внедрённых решений."
  },
  {
    question: "Остаются ли компетенции в команде?",
    answer: "Да, это ключевой принцип. Мы работаем вместе с вашей командой, передаём плейбуки по всем 5 рычагам, проводим воркшопы и оставляем всю методологию. Цель — сделать команду самостоятельной."
  },
  {
    question: "Можно ли работать только с частью рычагов?",
    answer: "Да, но эффективность будет ниже. Рычаги взаимосвязаны: например, улучшение продукта без канальной стратегии не даст роста. Мы можем сфокусироваться на 2-3 приоритетных рычагах, но рекомендуем системный подход."
  },
  {
    question: "Какой формат работы с командой?",
    answer: "Гибридный: еженедельные синхронизации (онлайн/офлайн), воркшопы по спринтам, async-коммуникация в Slack/Telegram. Наш консультант работает embedded в вашу команду на время проекта."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Отвечаем на главные вопросы о методологии и формате работы
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-neutral-200 rounded-lg px-6 bg-neutral-50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
