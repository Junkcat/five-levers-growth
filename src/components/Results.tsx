import { Card } from "@/components/ui/card";

const results = [
  {
    metric: "Активации",
    before: "12%",
    after: "28%",
    change: "+133%",
    color: "text-success"
  },
  {
    metric: "CAC",
    before: "$450",
    after: "$320",
    change: "−29%",
    color: "text-success"
  },
  {
    metric: "Retention D30",
    before: "35%",
    after: "48%",
    change: "+13 п.п.",
    color: "text-success"
  },
  {
    metric: "Contribution Margin",
    before: "18%",
    after: "26%",
    change: "+8 п.п.",
    color: "text-success"
  }
];

const Results = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Результаты, которые измеряем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные метрики из проектов — фокус на измеримом росте P&L
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-white">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-semibold mb-4">
                Кейс: Финтех-сервис МСБ
              </div>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Контекст:</strong> Сервис онлайн-кредитования для малого бизнеса в РФ, СНГ, MENA. 
                Проблемы: низкая активация после регистрации, высокий CAC через контекст, 
                слабая retention когорт.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{result.metric}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-neutral-600 line-through">{result.before}</span>
                    <span className="text-2xl font-bold text-primary-800">→</span>
                    <span className="text-2xl font-bold text-foreground">{result.after}</span>
                  </div>
                  <div className={`text-xl font-bold ${result.color}`}>
                    {result.change}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Что именно делали:</p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">●</span>
                  <span><strong>Product:</strong> Упростили онбординг, добавили прогресс-бар и микроцели</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">●</span>
                  <span><strong>Channels:</strong> Перенесли бюджет в таргет + content-маркетинг</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">●</span>
                  <span><strong>Data:</strong> Настроили event-схему и воронки в Amplitude</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">●</span>
                  <span><strong>Economics:</strong> Ввели прайс-тесты и скорректировали прайсинг</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <p className="text-sm text-foreground italic">
                <strong>Отзыв CPO:</strong> "За 12 недель мы сделали то, что планировали на полгода. 
                Главное — команда научилась работать с данными и экспериментами. 
                Плейбуки используем до сих пор."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
