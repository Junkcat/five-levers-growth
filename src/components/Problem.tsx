import { AlertCircle, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-error mb-4">
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">Проблема</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Рост буксует из‑за узких мест
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">●</span>
                <span>Не тот продуктовый фокус — фичи не используются</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">●</span>
                <span>Ограниченные каналы привлечения, высокий CAC</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">●</span>
                <span>Слабая аналитика — решения принимаются вслепую</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">●</span>
                <span>«Дырявая» юнит-экономика, непонятный payback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">●</span>
                <span>Нехватка навыков и систематизации процессов</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 text-success mb-4">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Решение</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Мы строим систему роста P&L
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Системно работаем с пятью ключевыми рычагами роста: проводим диагностику, 
              проектируем решения, запускаем эксперименты, масштабируем то, что даёт эффект, 
              и обучаем команду работать по плейбукам.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl border border-primary-200">
              <p className="font-semibold text-primary-800 mb-2">Результат</p>
              <p className="text-foreground">
                Измеримый прирост в выручке, марже, активациях и NPS. 
                Прозрачность метрик и компетенции остаются в команде.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
